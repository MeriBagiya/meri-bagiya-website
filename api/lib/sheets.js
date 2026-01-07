const { google } = require('googleapis');

/**
 * Get authenticated Google Auth client from service account credentials
 */
function getServiceAccountAuth() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT environment variable is not set');
  }

  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

/**
 * Get Google Sheets API client
 */
async function getSheetsClient() {
  const auth = await getServiceAccountAuth();
  return google.sheets({ version: 'v4', auth });
}

/**
 * Get all leads from the Google Sheet
 * @param {string} spreadsheetId - The Google Sheet ID
 * @param {string} range - The range to read (default: Sheet1!A:N)
 * @returns {Array} Array of lead objects with rowIndex
 */
async function getLeads(spreadsheetId, range = 'Sheet1!A:N') {
  const sheets = await getSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = response.data.values || [];

  if (rows.length <= 1) return []; // Only header or empty

  const headers = rows[0];
  const leads = rows.slice(1).map((row, index) => {
    const lead = {};
    headers.forEach((header, i) => {
      // Normalize header names to lowercase with underscores
      const key = header.toLowerCase().replace(/\s+/g, '_');
      lead[key] = row[i] || '';
    });
    lead.rowIndex = index + 2; // Sheet rows are 1-indexed, +1 for header
    return lead;
  });

  return leads;
}

/**
 * Update a cell in the Google Sheet
 * @param {string} spreadsheetId - The Google Sheet ID
 * @param {number} rowIndex - The row number (1-indexed)
 * @param {number} columnIndex - The column index (0-indexed, A=0, B=1, etc.)
 * @param {string} value - The value to set
 */
async function updateCell(spreadsheetId, rowIndex, columnIndex, value) {
  const sheets = await getSheetsClient();
  const columnLetter = String.fromCharCode(65 + columnIndex);

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `Sheet1!${columnLetter}${rowIndex}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[value]],
    },
  });
}

/**
 * Update lead status and optionally set a timestamp
 * @param {string} spreadsheetId - The Google Sheet ID
 * @param {number} rowIndex - The row number (1-indexed)
 * @param {number} statusColumnIndex - Column index for status (0-indexed)
 * @param {string} status - New status value
 * @param {number|null} timestampColumnIndex - Column index for timestamp (optional)
 */
async function updateLeadStatus(spreadsheetId, rowIndex, statusColumnIndex, status, timestampColumnIndex = null) {
  // Update status
  await updateCell(spreadsheetId, rowIndex, statusColumnIndex, status);

  // Update timestamp if provided
  if (timestampColumnIndex !== null) {
    await updateCell(spreadsheetId, rowIndex, timestampColumnIndex, new Date().toISOString());
  }
}

module.exports = {
  getLeads,
  updateCell,
  updateLeadStatus,
};
