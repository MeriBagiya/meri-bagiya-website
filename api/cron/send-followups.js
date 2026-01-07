const nodemailer = require('nodemailer');
const { getLeads, updateLeadStatus } = require('../lib/sheets');

// ===========================================
// Column indices (0-based) - Adjust based on your sheet structure
// ===========================================
// Expected columns: Timestamp | Name | Email | Phone | Message | Source | Company | Quantity | Budget | Occasion | Status | Day1SentAt | Day3SentAt | Day7SentAt
const COLUMNS = {
  timestamp: 0,
  name: 1,
  email: 2,
  phone: 3,
  message: 4,
  source: 5,
  company: 6,
  quantity: 7,
  budget: 8,
  occasion: 9,
  status: 10,
  day1_sent_at: 11,
  day3_sent_at: 12,
  day7_sent_at: 13,
};

// ===========================================
// Email Templates
// ===========================================
const emailTemplates = {
  day1: {
    subject: "We're here to help with your garden journey!",
    getHtml: (name) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <img src="https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png"
             alt="Meri Bagiya" style="max-width: 150px; margin-bottom: 20px;">
        <h2 style="color: #354e33;">Hello ${name}!</h2>
        <p>Thank you for reaching out to Meri Bagiya! We received your message and wanted to follow up personally.</p>
        <p>We're passionate about helping you create your dream garden. Whether you need:</p>
        <ul style="color: #596a5a;">
          <li>Beautiful indoor or outdoor plants</li>
          <li>Professional garden design services</li>
          <li>Regular garden maintenance</li>
          <li>Corporate plant rental or gifting</li>
        </ul>
        <p>We're here to help!</p>
        <p style="margin-top: 20px;">
          <a href="https://wa.me/919220404309?text=Hi!%20I%20submitted%20a%20contact%20form%20and%20would%20like%20to%20discuss%20my%20requirements."
             style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Chat with us on WhatsApp
          </a>
        </p>
        <p style="margin-top: 20px; color: #666;">
          Best regards,<br>
          <strong>Team Meri Bagiya</strong><br>
          <a href="tel:9220404309" style="color: #354e33;">9220404309</a>
        </p>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #999; font-size: 12px;">
          Amrapali Leisure Valley, Greater Noida, UP-201318<br>
          <a href="https://meribagiya.com" style="color: #354e33;">meribagiya.com</a>
        </p>
      </div>
    `,
  },
  day3: {
    subject: "Did you know? Free garden consultation available!",
    getHtml: (name) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <img src="https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png"
             alt="Meri Bagiya" style="max-width: 150px; margin-bottom: 20px;">
        <h2 style="color: #354e33;">Hi ${name}!</h2>
        <p>We wanted to remind you that we offer a <strong>FREE garden consultation</strong> for all our customers in Greater Noida!</p>
        <div style="background-color: #E1EBE2; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #354e33; margin-top: 0;">What's Included:</h3>
          <ul style="color: #596a5a; margin-bottom: 0;">
            <li>Assessment of your space (balcony, terrace, or garden)</li>
            <li>Personalized plant recommendations</li>
            <li>Garden design suggestions</li>
            <li>Maintenance tips specific to your setup</li>
          </ul>
        </div>
        <p>Many of our customers in Amrapali Leisure Valley, Ace Aspire, and nearby areas have transformed their spaces with our help!</p>
        <p style="margin-top: 20px;">
          <a href="tel:9220404309"
             style="background-color: #354e33; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Schedule Your Free Consultation
          </a>
        </p>
        <p style="margin-top: 20px; color: #666;">
          Looking forward to helping you!<br>
          <strong>Team Meri Bagiya</strong>
        </p>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #999; font-size: 12px;">
          Amrapali Leisure Valley, Greater Noida, UP-201318
        </p>
      </div>
    `,
  },
  day7: {
    subject: "Special offer just for you - 10% off your first order!",
    getHtml: (name) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <img src="https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png"
             alt="Meri Bagiya" style="max-width: 150px; margin-bottom: 20px;">
        <h2 style="color: #354e33;">Hi ${name}!</h2>
        <p>It's been a week since you reached out, and we'd love to help you get started on your garden journey!</p>
        <div style="background: linear-gradient(135deg, #354e33, #798d7a); padding: 30px; border-radius: 12px; margin: 20px 0; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 28px;">10% OFF</h2>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Your First Order</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Use code: <strong>WELCOME10</strong></p>
        </div>
        <p>This exclusive offer is valid for:</p>
        <ul style="color: #596a5a;">
          <li>All plants (indoor, outdoor, flowering)</li>
          <li>Garden design services</li>
          <li>Plant rental packages</li>
          <li>Corporate gifting orders</li>
        </ul>
        <p><strong>Offer valid for 7 days!</strong></p>
        <p style="margin-top: 20px;">
          <a href="https://wa.me/919220404309?text=Hi!%20I%20would%20like%20to%20use%20the%20WELCOME10%20discount%20code."
             style="background-color: #354e33; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Claim Your Discount
          </a>
        </p>
        <p style="margin-top: 20px; color: #666;">
          Don't miss out!<br>
          <strong>Team Meri Bagiya</strong>
        </p>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #999; font-size: 12px;">
          To unsubscribe from these emails, reply with "UNSUBSCRIBE"<br>
          Amrapali Leisure Valley, Greater Noida, UP-201318
        </p>
      </div>
    `,
  },
};

// ===========================================
// Email Transporter (Hostinger SMTP)
// ===========================================
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// ===========================================
// Helper Functions
// ===========================================

/**
 * Calculate days since submission
 */
function getDaysSinceSubmission(timestamp) {
  const submitted = new Date(timestamp);
  const now = new Date();
  const diffTime = Math.abs(now - submitted);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

/**
 * Send drip email
 */
async function sendDripEmail(lead, template) {
  const mailOptions = {
    from: '"Meri Bagiya" <contact@meribagiya.com>',
    to: lead.email,
    subject: template.subject,
    html: template.getHtml(lead.name || 'Friend'),
  };

  await transporter.sendMail(mailOptions);
}

// ===========================================
// Main Handler
// ===========================================
module.exports = async (req, res) => {
  // Only allow GET and POST requests
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify cron secret for security
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    return res.status(500).json({ error: 'GOOGLE_SHEET_ID not configured' });
  }

  if (!process.env.GOOGLE_SERVICE_ACCOUNT) {
    return res.status(500).json({ error: 'GOOGLE_SERVICE_ACCOUNT not configured' });
  }

  try {
    const leads = await getLeads(spreadsheetId);
    const results = {
      processed: 0,
      day1: 0,
      day3: 0,
      day7: 0,
      skipped: 0,
      errors: []
    };

    for (const lead of leads) {
      // Skip leads without email or timestamp
      if (!lead.email || !lead.timestamp) {
        results.skipped++;
        continue;
      }

      const daysSince = getDaysSinceSubmission(lead.timestamp);
      const status = (lead.status || 'new').toLowerCase();

      try {
        // Day 1 email (after 1 day, status is 'new')
        if (daysSince >= 1 && status === 'new') {
          await sendDripEmail(lead, emailTemplates.day1);
          await updateLeadStatus(
            spreadsheetId,
            lead.rowIndex,
            COLUMNS.status,
            'day1_sent',
            COLUMNS.day1_sent_at
          );
          results.day1++;
          results.processed++;
        }
        // Day 3 email (after 3 days, status is 'day1_sent')
        else if (daysSince >= 3 && status === 'day1_sent') {
          await sendDripEmail(lead, emailTemplates.day3);
          await updateLeadStatus(
            spreadsheetId,
            lead.rowIndex,
            COLUMNS.status,
            'day3_sent',
            COLUMNS.day3_sent_at
          );
          results.day3++;
          results.processed++;
        }
        // Day 7 email (after 7 days, status is 'day3_sent')
        else if (daysSince >= 7 && status === 'day3_sent') {
          await sendDripEmail(lead, emailTemplates.day7);
          await updateLeadStatus(
            spreadsheetId,
            lead.rowIndex,
            COLUMNS.status,
            'day7_sent',
            COLUMNS.day7_sent_at
          );
          results.day7++;
          results.processed++;
        } else {
          results.skipped++;
        }
      } catch (error) {
        results.errors.push({
          email: lead.email,
          error: error.message
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Drip emails processed',
      timestamp: new Date().toISOString(),
      results,
    });
  } catch (error) {
    console.error('Cron error:', error);
    return res.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
};
