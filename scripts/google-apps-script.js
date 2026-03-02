/**
 * Google Apps Script — paste this into script.google.com
 *
 * Setup:
 * 1. Create a Google Sheet with 4 tabs named exactly:
 *    "Food Processing", "Hygiene Station", "Air Knife Drying", "Crate Washing"
 * 2. Add header row in each tab (row 1) — the script auto-adds headers on first run
 * 3. Open Extensions > Apps Script, paste this code
 * 4. Deploy > New deployment > Web app > Anyone can access
 * 5. Copy the deployment URL and put it in src/config/forms/index.ts as APPS_SCRIPT_URL
 */

const TAB_MAP = {
  homepage: "Food Processing",
  hygiene: "Hygiene Station",
  "air-knife": "Air Knife Drying",
  "crate-washing": "Crate Washing",
};

const STEP1_HEADERS = [
  "Lead ID",
  "Date",
  "Time",
  "Full Name",
  "Company Name",
  "Role",
  "Email",
  "Phone",
  "City",
  "Page URL",
];

const BROCHURE_HEADERS = [
  "Date",
  "Time",
  "Brochure Name",
  "Full Name",
  "Email",
  "Phone",
  "City",
  "Page URL",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Handle brochure leads separately
    if (data.step === "brochure") {
      var brochureSheet = ss.getSheetByName("Brochure Downloads");
      if (!brochureSheet) {
        brochureSheet = ss.insertSheet("Brochure Downloads");
      }
      if (brochureSheet.getLastRow() === 0) {
        brochureSheet.appendRow(BROCHURE_HEADERS);
      }
      var now = new Date();
      brochureSheet.appendRow([
        Utilities.formatDate(now, Session.getScriptTimeZone(), "dd/MM/yyyy"),
        Utilities.formatDate(now, Session.getScriptTimeZone(), "hh:mm:ss a"),
        data.brochureName || "",
        data.fullName || "",
        data.email || "",
        data.phone || "",
        data.city || "",
        data.pageUrl || "",
      ]);
      return ContentService.createTextOutput(
        JSON.stringify({ status: "ok", step: "brochure" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var tabName = TAB_MAP[data.formSlug] || "Food Processing";
    var sheet = ss.getSheetByName(tabName);

    if (!sheet) {
      sheet = ss.insertSheet(tabName);
    }

    // Ensure headers exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(STEP1_HEADERS);
    }

    if (data.step === 1) {
      // Step 1: Create new row
      var now = new Date();
      var dateStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "dd/MM/yyyy");
      var timeStr = Utilities.formatDate(now, Session.getScriptTimeZone(), "hh:mm:ss a");
      var row = [
        data.leadId,
        dateStr,
        timeStr,
        data.fullName,
        data.companyName,
        data.role,
        data.email,
        data.phone,
        data.city,
        data.pageUrl || "",
      ];
      sheet.appendRow(row);

      return ContentService.createTextOutput(
        JSON.stringify({ status: "ok", step: 1 })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.step === 2) {
      // Step 2: Find row by Lead ID and append assessment data
      var lastRow = sheet.getLastRow();
      var leadIdCol = 1; // Column A
      var targetRow = -1;

      for (var i = 2; i <= lastRow; i++) {
        if (sheet.getRange(i, leadIdCol).getValue() === data.leadId) {
          targetRow = i;
          break;
        }
      }

      if (targetRow === -1) {
        return ContentService.createTextOutput(
          JSON.stringify({ status: "error", message: "Lead ID not found" })
        ).setMimeType(ContentService.MimeType.JSON);
      }

      // Build assessment columns dynamically from the fields sent
      var assessmentFields = data.fields; // { fieldName: value, ... }
      var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

      for (var fieldName in assessmentFields) {
        var colIndex = headerRow.indexOf(fieldName);

        if (colIndex === -1) {
          // Add new header column
          colIndex = headerRow.length;
          sheet.getRange(1, colIndex + 1).setValue(fieldName);
          headerRow.push(fieldName);
        }

        var value = assessmentFields[fieldName];
        // Arrays (checkbox fields) → join with comma
        if (Array.isArray(value)) {
          value = value.join(", ");
        }
        sheet.getRange(targetRow, colIndex + 1).setValue(value);
      }

      return ContentService.createTextOutput(
        JSON.stringify({ status: "ok", step: 2 })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: "Invalid step" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "NexGen Lead API is running" })
  ).setMimeType(ContentService.MimeType.JSON);
}
