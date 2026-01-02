const nodemailer = require("nodemailer");

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
      const { name, email, phone, message, recaptchaToken } = req.body;
      console.log("Request body received");

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

      const mailOptions = {
        from: `"Meri Bagiya Website" <contact@meribagiya.com>`,
        to: "contact@meribagiya.com",
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2e7d32; border-bottom: 2px solid #2e7d32; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
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
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #2e7d32;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2e7d32; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from the Meri Bagiya website contact form.
            </p>
          </div>
        `,
        text: `
New Contact Form Submission
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Message:
${message}
---
This email was sent from the Meri Bagiya website contact form.
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
