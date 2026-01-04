const nodemailer = require("nodemailer");

// Google Sheets webhook URL
const GOOGLE_SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK || "https://script.google.com/macros/s/AKfycbzGtlzuaujwdax4AHlCC85cQGZrnhziXXkw78X5qyz3sE6n_dkvkG1VDzoaFmmJc1B2/exec";

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

// Allowed origins for CORS
const allowedOrigins = [
  "https://meribagiya.com",
  "https://www.meribagiya.com",
  "https://meri-bagiya-project.vercel.app",
  "http://localhost:3000"
];

// CORS headers helper
function setCorsHeaders(res, origin) {
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
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

  try {
      const { name, email, phone, message, recaptchaToken, source, company, quantity, budget, occasion } = req.body;
      const formSource = source || "contact";
      console.log("Request body received, source:", formSource);

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
        return res.status(400).json({
          success: false,
          error: "Verification failed. Please try again.",
        });
      }

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Name, email, and message are required",
        });
      }

      // Build corporate gifting extra fields HTML
      const isCorporate = formSource === "corporate-gifting";
      const corporateFieldsHtml = isCorporate ? `
              <tr>
                <td style="padding: 10px; font-weight: bold;">Company:</td>
                <td style="padding: 10px;">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Quantity:</td>
                <td style="padding: 10px; background-color: #f5f5f5;">${quantity || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Budget:</td>
                <td style="padding: 10px;">${budget || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Occasion:</td>
                <td style="padding: 10px; background-color: #f5f5f5;">${occasion || "Not provided"}</td>
              </tr>` : "";

      const corporateFieldsText = isCorporate ? `
Company: ${company || "Not provided"}
Quantity: ${quantity || "Not provided"}
Budget: ${budget || "Not provided"}
Occasion: ${occasion || "Not provided"}` : "";

      const emailSubject = isCorporate
        ? `Corporate Gifting Inquiry from ${company || name}`
        : `New Contact Form Submission from ${name}`;

      const emailTitle = isCorporate
        ? "Corporate Gifting Inquiry"
        : "New Contact Form Submission";

      const mailOptions = {
        from: `"Meri Bagiya Website" <contact@meribagiya.com>`,
        to: "contact@meribagiya.com",
        replyTo: email,
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
                <td style="padding: 10px; background-color: #f5f5f5;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Email:</td>
                <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f5f5f5; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background-color: #f5f5f5;"><a href="tel:${phone}">${phone || "Not provided"}</a></td>
              </tr>${corporateFieldsHtml}
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #2e7d32;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2e7d32; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from the Meri Bagiya website ${isCorporate ? 'corporate gifting' : 'contact'} form.
            </p>
          </div>
        `,
        text: `
${emailTitle}
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}${corporateFieldsText}
Message:
${message}
---
This email was sent from the Meri Bagiya website ${isCorporate ? 'corporate gifting' : 'contact'} form.
        `,
      };

      console.log("Sending main email...");
      await transporter.sendMail(mailOptions);
      console.log("Main email sent successfully.");

      const autoReplyOptions = {
        from: `"Meri Bagiya" <contact@meribagiya.com>`,
        to: email,
        subject: "Thank you for contacting Meri Bagiya!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2e7d32;">Thank You for Reaching Out!</h2>
            <p>Dear ${name},</p>
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
