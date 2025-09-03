const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Function to export opted-in users to CSV
function exportOptedInToCSV() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./applicants.db', (err) => {
      if (err) {
        console.error('Database connection error:', err);
        reject(err);
        return;
      }
      console.log('📂 Connected to applicants.db');
    });

    // Query only opted-in users
    const query = `
      SELECT 
        id,
        email,
        reason,
        submitted_at,
        status,
        follow_up_count,
        last_contacted,
        notes
      FROM applicants 
      WHERE opt_in_communication = 'yes'
      ORDER BY submitted_at DESC
    `;

    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Query error:', err);
        db.close();
        reject(err);
        return;
      }

      // Create CSV content
      const headers = ['ID', 'Email', 'Application Reason', 'Applied Date', 'Status', 'Follow-up Count', 'Last Contacted', 'Notes'];
      let csvContent = headers.join(',') + '\n';

      rows.forEach(row => {
        const csvRow = [
          row.id,
          `"${row.email}"`, // Wrap email in quotes
          `"${(row.reason || '').replace(/"/g, '""')}"`, // Escape quotes in reason
          row.submitted_at,
          row.status || 'new',
          row.follow_up_count || 0,
          row.last_contacted || '',
          `"${(row.notes || '').replace(/"/g, '""')}"` // Escape quotes in notes
        ];
        csvContent += csvRow.join(',') + '\n';
      });

      // Generate filename with timestamp
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const filename = `opted-in-applicants-${timestamp}.csv`;
      const filepath = path.join(__dirname, filename);

      // Write CSV file
      fs.writeFile(filepath, csvContent, 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Error writing CSV file:', writeErr);
          db.close();
          reject(writeErr);
          return;
        }

        console.log(`✅ CSV exported successfully!`);
        console.log(`📄 File: ${filename}`);
        console.log(`📊 Records exported: ${rows.length}`);
        console.log(`📍 Full path: ${filepath}`);

        db.close((closeErr) => {
          if (closeErr) {
            console.error('Error closing database:', closeErr);
            reject(closeErr);
          } else {
            resolve({ filename, filepath, recordCount: rows.length });
          }
        });
      });
    });
  });
}

// Run the export
console.log('🚀 Starting CSV export of opted-in applicants...\n');

exportOptedInToCSV()
  .then(result => {
    console.log('\n🎉 Export completed successfully!');
    console.log(`You can now open ${result.filename} in Excel or any spreadsheet application.`);
  })
  .catch(error => {
    console.error('\n❌ Export failed:', error);
  });
