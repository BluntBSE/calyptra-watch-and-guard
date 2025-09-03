const sqlite3 = require('sqlite3').verbose();

// Function to update opt-in status
function updateOptIn(email, optInStatus) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./applicants.db');
    
    const query = `UPDATE applicants SET opt_in_communication = ? WHERE email = ?`;
    
    db.run(query, [optInStatus, email], function(err) {
      if (err) {
        console.error('Database error:', err);
        db.close();
        reject(err);
        return;
      }
      
      console.log(`✅ Updated opt-in status for ${email}: ${optInStatus} (${this.changes} rows affected)`);
      
      db.close((closeErr) => {
        if (closeErr) {
          console.error('Error closing database:', closeErr);
          reject(closeErr);
        } else {
          resolve({ email, optInStatus, changes: this.changes });
        }
      });
    });
  });
}

// Example usage - you can modify these values:
const EMAIL_TO_UPDATE = 'debug@debug.com';  // Change this to the email you want to update
const NEW_OPT_IN_STATUS = 'no';             // Change this to 'yes' or 'no'

console.log(`🔄 Updating opt-in status for ${EMAIL_TO_UPDATE} to "${NEW_OPT_IN_STATUS}"`);

updateOptIn(EMAIL_TO_UPDATE, NEW_OPT_IN_STATUS)
  .then(result => {
    console.log('✅ Update completed successfully');
    console.log('Run "node check-db.cjs" to see the changes');
  })
  .catch(error => {
    console.error('❌ Update failed:', error);
  });
