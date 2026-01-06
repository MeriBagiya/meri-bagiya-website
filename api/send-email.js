const nodemailer = require("nodemailer");

// Google Sheets webhook URL
const GOOGLE_SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK || "https://script.google.com/macros/s/AKfycbzGtlzuaujwdax4AHlCC85cQGZrnhziXXkw78X5qyz3sE6n_dkvkG1VDzoaFmmJc1B2/exec";

// ===========================================
// SECURITY: HTML Sanitization
// ===========================================
// Escapes HTML special characters to prevent XSS and email injection
function escapeHtml(str) {
  if (!str || typeof str !== 'string') return str || '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ===========================================
// SECURITY: Rate Limiting
// ===========================================
// In-memory rate limiter (resets on cold starts, but provides protection)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 requests per minute per IP

function getRateLimitKey(req) {
  // Get client IP from various headers (Vercel, Cloudflare, etc.)
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         'unknown';
}

function isRateLimited(req) {
  const key = getRateLimitKey(req);
  const now = Date.now();

  // Clean up old entries
  for (const [k, v] of rateLimitMap.entries()) {
    if (now - v.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(k);
    }
  }

  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, windowStart: now });
    return false;
  }

  if (now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(key, { count: 1, windowStart: now });
    return false;
  }

  record.count++;

  if (record.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

// ===========================================
// SECURITY: Input Validation
// ===========================================
const validators = {
  name: (value) => {
    if (!value || typeof value !== 'string') return 'Name is required';
    const trimmed = value.trim();
    if (trimmed.length < 2) return 'Name must be at least 2 characters';
    if (trimmed.length > 100) return 'Name must be less than 100 characters';
    if (!/^[a-zA-Z\s'\-\.]+$/.test(trimmed)) return 'Name contains invalid characters';
    return null;
  },
  email: (value) => {
    if (!value || typeof value !== 'string') return 'Email is required';
    const trimmed = value.trim();
    if (trimmed.length > 254) return 'Email is too long';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return 'Invalid email format';
    return null;
  },
  phone: (value) => {
    if (!value) return null; // Phone is optional
    if (typeof value !== 'string') return 'Invalid phone format';
    const digitsOnly = value.replace(/[\s\-()]/g, '');
    if (!/^\+?\d{10,15}$/.test(digitsOnly)) return 'Invalid phone number';
    return null;
  },
  message: (value) => {
    if (!value || typeof value !== 'string') return 'Message is required';
    const trimmed = value.trim();
    if (trimmed.length < 10) return 'Message must be at least 10 characters';
    if (trimmed.length > 5000) return 'Message must be less than 5000 characters';
    return null;
  }
};

// Save form data to Google Sheets
async function saveToGoogleSheet(data) {
  try {
    console.log("Attempting to save to Google Sheets:", JSON.stringify(data));

    // Google Apps Script requires following redirects
    const response = await fetch(GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    const responseText = await response.text();
    console.log("Google Sheets response status:", response.status);
    console.log("Google Sheets response:", responseText);

    // Try to parse as JSON, but handle if it's not
    try {
      const result = JSON.parse(responseText);
      return result;
    } catch {
      // If not JSON, just return success based on status
      return { success: response.ok, response: responseText };
    }
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    // Don't throw - we don't want to fail the email if sheets fails
    return { success: false, error: error.message };
  }
}

// ===========================================
// SECURITY: Environment-aware CORS
// ===========================================
// Only allow localhost in development
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

const productionOrigins = [
  "https://meribagiya.com",
  "https://www.meribagiya.com",
  "https://meri-bagiya-project.vercel.app"
];

const developmentOrigins = [
  ...productionOrigins,
  "http://localhost:3000"
];

const allowedOrigins = isProduction ? productionOrigins : developmentOrigins;

// CORS headers helper
function setCorsHeaders(res, origin) {
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
}

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not configured, skipping verification");
    return { success: true, score: 1.0 };
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false, error: "Verification failed" };
  }
}

module.exports = async (req, res) => {
  console.log("Function invoked");
  console.log("Request method:", req.method);
  console.log("Request origin:", req.headers.origin);

  // Set CORS headers for all requests
  setCorsHeaders(res, req.headers.origin);

  // Handle preflight OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Allow GET for health check
  if (req.method === "GET") {
    return res.status(200).json({ status: "ok", message: "Meri Bagiya Email API is running" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // SECURITY: Rate limiting check
  if (isRateLimited(req)) {
    console.log("Rate limit exceeded for IP:", getRateLimitKey(req));
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please try again in a minute.",
    });
  }

  try {
      const { name, email, phone, message, recaptchaToken, source, company, quantity, budget, occasion } = req.body;
      const formSource = source || "contact";
      console.log("Request body received, source:", formSource);

      // SECURITY: Server-side validation
      const validationErrors = [];
      const nameError = validators.name(name);
      const emailError = validators.email(email);
      const phoneError = validators.phone(phone);
      const messageError = validators.message(message);

      if (nameError) validationErrors.push(nameError);
      if (emailError) validationErrors.push(emailError);
      if (phoneError) validationErrors.push(phoneError);
      if (messageError) validationErrors.push(messageError);

      if (validationErrors.length > 0) {
        return res.status(400).json({
          success: false,
          error: validationErrors[0], // Return first error
        });
      }

      // Verify reCAPTCHA token
      if (!recaptchaToken) {
        return res.status(400).json({
          success: false,
          error: "reCAPTCHA verification required",
        });
      }

      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      console.log("reCAPTCHA result:", recaptchaResult);

      if (!recaptchaResult.success) {
        return res.status(400).json({
          success: false,
          error: "reCAPTCHA verification failed. Please try again.",
        });
      }

      // For reCAPTCHA v3, check score (0.0 - 1.0, higher is more likely human)
      if (recaptchaResult.score !== undefined && recaptchaResult.score < 0.5) {
        console.log("Low reCAPTCHA score:", recaptchaResult.score);
        return res.status(429).json({
          success: false,
          error: "Verification failed. Please try again.",
        });
      }

      // SECURITY: Sanitize all user inputs for HTML email
      const safeName = escapeHtml(name.trim());
      const safeEmail = escapeHtml(email.trim());
      const safePhone = escapeHtml(phone?.trim() || '');
      const safeMessage = escapeHtml(message.trim());
      const safeCompany = escapeHtml(company?.trim() || '');
      const safeQuantity = escapeHtml(quantity?.trim() || '');
      const safeBudget = escapeHtml(budget?.trim() || '');
      const safeOccasion = escapeHtml(occasion?.trim() || '');

      // Build corporate gifting extra fields HTML (using sanitized values)
      const isCorporate = formSource === "corporate-gifting";
      const corporateFieldsHtml = isCorporate ? `
              <tr>
                <td style="padding: 10px; font-weight: bold;">Company:</td>
                <td style="padding: 10px;">${safeCompany || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Quantity:</td>
                <td style="padding: 10px; background-color: #f5f5f5;">${safeQuantity || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Budget:</td>
                <td style="padding: 10px;">${safeBudget || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Occasion:</td>
                <td style="padding: 10px; background-color: #f5f5f5;">${safeOccasion || "Not provided"}</td>
              </tr>` : "";

      // Plain text uses original values (no HTML injection risk in plain text)
      const corporateFieldsText = isCorporate ? `
Company: ${company?.trim() || "Not provided"}
Quantity: ${quantity?.trim() || "Not provided"}
Budget: ${budget?.trim() || "Not provided"}
Occasion: ${occasion?.trim() || "Not provided"}` : "";

      const emailSubject = isCorporate
        ? `Corporate Gifting Inquiry from ${safeName || safeCompany}`
        : `New Contact Form Submission from ${safeName}`;

      const emailTitle = isCorporate
        ? "Corporate Gifting Inquiry"
        : "New Contact Form Submission";

      // Use sanitized values in HTML email template
      const mailOptions = {
        from: `"Meri Bagiya Website" <contact@meribagiya.com>`,
        to: "contact@meribagiya.com",
        replyTo: email.trim(), // Original email for reply-to header
        subject: emailSubject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2e7d32; border-bottom: 2px solid #2e7d32; padding-bottom: 10px;">
              ${emailTitle}
            </h2>
            ${isCorporate ? '<p style="background-color: #fff3cd; padding: 10px; border-radius: 4px; color: #856404;"><strong>Corporate Inquiry</strong> - Priority Response Required</p>' : ''}
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px; background-color: #f5f5f5;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Email:</td>
                <td style="padding: 10px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background-color: #f5f5f5;"><a href="tel:${safePhone}">${safePhone || "Not provided"}</a></td>
              </tr>${corporateFieldsHtml}
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #2e7d32;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2e7d32; white-space: pre-wrap;">${safeMessage}</p>
            </div>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from the Meri Bagiya website ${isCorporate ? 'corporate gifting' : 'contact'} form.
            </p>
          </div>
        `,
        text: `
${emailTitle}
Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || "Not provided"}${corporateFieldsText}
Message:
${message.trim()}
---
This email was sent from the Meri Bagiya website ${isCorporate ? 'corporate gifting' : 'contact'} form.
        `,
      };

      console.log("Sending main email...");
      await transporter.sendMail(mailOptions);
      console.log("Main email sent successfully.");

      const autoReplyOptions = {
        from: `"Meri Bagiya" <contact@meribagiya.com>`,
        to: email.trim(), // Use trimmed email for sending
        subject: "Thank you for contacting Meri Bagiya!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2e7d32;">Thank You for Reaching Out!</h2>
            <p>Dear ${safeName},</p>
            <p>Thank you for contacting Meri Bagiya. We have received your message and will get back to you within 24-48 hours.</p>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Visit our nursery at Amrapali Leisure Valley, Greater Noida</li>
              <li>Call us directly at <a href="tel:9220404309">9220404309</a></li>
              <li>Browse our plant collection at <a href="https://meribagiya.com">meribagiya.com</a></li>
            </ul>
            <p>Best regards,<br>
            <strong>Team Meri Bagiya</strong></p>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              Meri Bagiya - Transform Your Garden into a Personal Paradise!<br>
              Near Ace Aspire, Amrapali Leisure Valley, Greater Noida, UP-201318
            </p>
          </div>
        `,
      };

      console.log("Sending auto-reply email...");
      await transporter.sendMail(autoReplyOptions);
      console.log("Auto-reply email sent successfully.");

      // Save to Google Sheets (non-blocking, don't fail if this fails)
      console.log("Saving to Google Sheets...");
      await saveToGoogleSheet({
        name,
        email,
        phone: phone || "",
        message,
        source: formSource,
        company: company || "",
        quantity: quantity || "",
        budget: budget || "",
        occasion: occasion || "",
      });

      return res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again later.",
    });
  }
};
