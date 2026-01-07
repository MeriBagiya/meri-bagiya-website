/**
 * WhatsApp Business API - Automated Lead Messages
 *
 * This cron job reads leads from Google Sheets and sends WhatsApp messages
 * using Meta's Cloud API on Day 1, 3, and 7 after submission.
 *
 * Prerequisites:
 * 1. Meta Developer App with WhatsApp product enabled
 * 2. WhatsApp Business Account linked
 * 3. Approved message templates
 * 4. Google Service Account with Sheet access
 *
 * Environment Variables Required:
 * - WHATSAPP_ACCESS_TOKEN: Meta API access token
 * - WHATSAPP_PHONE_ID: WhatsApp Business phone number ID
 * - GOOGLE_SERVICE_ACCOUNT: Google service account JSON
 * - GOOGLE_SHEET_ID: Google Sheet ID containing leads
 * - CRON_SECRET: Secret for authenticating cron requests
 *
 * Google Sheet Column Structure (must match email cron + WhatsApp columns):
 * A: Timestamp, B: Name, C: Email, D: Phone, E: Message, F: Source,
 * G: Company, H: Quantity, I: Budget, J: Occasion,
 * K: Status (email), L: Day1SentAt (email), M: Day3SentAt (email), N: Day7SentAt (email),
 * O: WhatsAppOptIn, P: WA_Day1SentAt, Q: WA_Day3SentAt, R: WA_Day7SentAt, S: WA_Status
 */

const { getLeads, updateCell } = require('../lib/sheets');

// WhatsApp Cloud API Configuration
const WHATSAPP_API_VERSION = 'v18.0';
const WHATSAPP_API_BASE = `https://graph.facebook.com/${WHATSAPP_API_VERSION}`;

// ===========================================
// Column indices (0-based) - Aligned with email cron
// ===========================================
const COLUMNS = {
  // Existing columns (same as email cron)
  timestamp: 0,      // A
  name: 1,           // B
  email: 2,          // C
  phone: 3,          // D
  message: 4,        // E
  source: 5,         // F
  company: 6,        // G
  quantity: 7,       // H
  budget: 8,         // I
  occasion: 9,       // J
  status: 10,        // K - Email status
  day1_sent_at: 11,  // L - Email Day 1
  day3_sent_at: 12,  // M - Email Day 3
  day7_sent_at: 13,  // N - Email Day 7
  // WhatsApp columns (new)
  whatsapp_optin: 14,    // O - WhatsAppOptIn
  wa_day1_sent_at: 15,   // P - WA_Day1SentAt
  wa_day3_sent_at: 16,   // Q - WA_Day3SentAt
  wa_day7_sent_at: 17,   // R - WA_Day7SentAt
  wa_status: 18,         // S - WA_Status
};

/**
 * Message Templates - Must be pre-approved by Meta
 * Template names should match exactly what's configured in Meta Business Manager
 */
const TEMPLATES = {
  day1: {
    name: 'welcome_message',
    // Parameters: {{1}} = customer name, {{2}} = inquiry topic
  },
  day3: {
    name: 'followup_consultation',
    // Parameters: {{1}} = customer name
  },
  day7: {
    name: 'discount_offer',
    // Parameters: {{1}} = customer name
  }
};

/**
 * Format phone number for WhatsApp API
 * WhatsApp requires format: country code + number (no + or spaces)
 * Example: 919220404309
 */
function formatPhoneNumber(phone) {
  if (!phone) return null;

  // Remove all non-digit characters
  let digits = phone.replace(/\D/g, '');

  // If starts with 0, remove it and add India code
  if (digits.startsWith('0')) {
    digits = '91' + digits.substring(1);
  }

  // If 10 digits (Indian number without code), add 91
  if (digits.length === 10) {
    digits = '91' + digits;
  }

  // Validate: should be 12-13 digits for Indian numbers
  if (digits.length < 10 || digits.length > 15) {
    return null;
  }

  return digits;
}

/**
 * Send WhatsApp message using Meta Cloud API
 */
async function sendWhatsAppMessage(to, templateName, templateParams = []) {
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!phoneId || !accessToken) {
    throw new Error('WhatsApp API credentials not configured');
  }

  const url = `${WHATSAPP_API_BASE}/${phoneId}/messages`;

  const body = {
    messaging_product: 'whatsapp',
    to: to,
    type: 'template',
    template: {
      name: templateName,
      language: { code: 'en' },
    }
  };

  // Add template parameters if provided
  if (templateParams.length > 0) {
    body.template.components = [{
      type: 'body',
      parameters: templateParams.map(text => ({ type: 'text', text }))
    }];
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(`WhatsApp API error: ${JSON.stringify(result)}`);
  }

  return result;
}

/**
 * Calculate days since lead submission
 */
function getDaysSinceSubmission(timestamp) {
  const submissionDate = new Date(timestamp);
  const now = new Date();
  const diffTime = now - submissionDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

/**
 * Process a single lead for WhatsApp messaging
 */
async function processLead(row, rowIndex, spreadsheetId) {
  const name = row[COLUMNS.name] || 'Customer';
  const phone = row[COLUMNS.phone];
  const message = row[COLUMNS.message] || 'your inquiry';
  const whatsappOptIn = (row[COLUMNS.whatsapp_optin] || '').toUpperCase() === 'TRUE';
  const timestamp = row[COLUMNS.timestamp];
  const waDay1Sent = row[COLUMNS.wa_day1_sent_at];
  const waDay3Sent = row[COLUMNS.wa_day3_sent_at];
  const waDay7Sent = row[COLUMNS.wa_day7_sent_at];
  const waStatus = (row[COLUMNS.wa_status] || '').toLowerCase();

  // Skip if not opted in or opted out
  if (!whatsappOptIn || waStatus === 'opted_out' || waStatus === 'completed') {
    return { skipped: true, reason: 'Not opted in, opted out, or completed' };
  }

  // Format phone number
  const formattedPhone = formatPhoneNumber(phone);
  if (!formattedPhone) {
    return { skipped: true, reason: 'Invalid phone number' };
  }

  const daysSinceSubmission = getDaysSinceSubmission(timestamp);
  const now = new Date().toISOString();

  let sent = false;
  let templateUsed = null;

  try {
    // Day 1: Welcome message (send on day 0-1)
    if (!waDay1Sent && daysSinceSubmission >= 0 && daysSinceSubmission <= 1) {
      // Extract first words of message as topic
      const topic = message.split(' ').slice(0, 3).join(' ') + '...';
      await sendWhatsAppMessage(formattedPhone, TEMPLATES.day1.name, [name, topic]);
      await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_day1_sent_at + 1, now);
      await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_status + 1, 'day1_sent');
      sent = true;
      templateUsed = 'day1';
    }
    // Day 3: Follow-up consultation
    else if (!waDay3Sent && waDay1Sent && daysSinceSubmission >= 3 && daysSinceSubmission <= 4) {
      await sendWhatsAppMessage(formattedPhone, TEMPLATES.day3.name, [name]);
      await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_day3_sent_at + 1, now);
      await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_status + 1, 'day3_sent');
      sent = true;
      templateUsed = 'day3';
    }
    // Day 7: Discount offer
    else if (!waDay7Sent && waDay3Sent && daysSinceSubmission >= 7 && daysSinceSubmission <= 8) {
      await sendWhatsAppMessage(formattedPhone, TEMPLATES.day7.name, [name]);
      await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_day7_sent_at + 1, now);
      await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_status + 1, 'completed');
      sent = true;
      templateUsed = 'day7';
    }

    if (sent) {
      console.log(`Sent ${templateUsed} WhatsApp to ${formattedPhone} (${name})`);
    }

    return { sent, templateUsed };
  } catch (error) {
    console.error(`Error sending WhatsApp to ${formattedPhone}:`, error.message);
    // Update status to failed
    await updateCell(spreadsheetId, rowIndex + 2, COLUMNS.wa_status + 1, 'failed');
    return { error: error.message };
  }
}

/**
 * Main handler for the cron endpoint
 */
module.exports = async (req, res) => {
  console.log('WhatsApp cron job started');

  // Only allow GET and POST requests
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify cron secret (security)
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.error('CRON_SECRET not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
    console.error('Invalid or missing authorization');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Check WhatsApp credentials
  if (!process.env.WHATSAPP_ACCESS_TOKEN || !process.env.WHATSAPP_PHONE_ID) {
    console.error('WhatsApp API credentials not configured');
    return res.status(500).json({ error: 'WhatsApp not configured' });
  }

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    console.error('GOOGLE_SHEET_ID not configured');
    return res.status(500).json({ error: 'Google Sheet not configured' });
  }

  try {
    // Get all leads from sheet (columns A to S)
    const leads = await getLeads(spreadsheetId, 'Sheet1!A:S');

    if (!leads || leads.length <= 1) {
      console.log('No leads to process');
      return res.status(200).json({ message: 'No leads to process', processed: 0 });
    }

    // Skip header row
    const dataRows = leads.slice(1);

    let processed = 0;
    let sent = 0;
    let errors = 0;

    for (let i = 0; i < dataRows.length; i++) {
      const result = await processLead(dataRows[i], i, spreadsheetId);
      processed++;

      if (result.sent) {
        sent++;
      }
      if (result.error) {
        errors++;
      }

      // Rate limiting: WhatsApp has limits, add small delay between messages
      if (result.sent) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log(`WhatsApp cron completed: ${processed} processed, ${sent} sent, ${errors} errors`);

    return res.status(200).json({
      success: true,
      message: 'WhatsApp messages processed',
      timestamp: new Date().toISOString(),
      stats: { processed, sent, errors }
    });

  } catch (error) {
    console.error('WhatsApp cron error:', error);
    return res.status(500).json({ error: error.message });
  }
};
