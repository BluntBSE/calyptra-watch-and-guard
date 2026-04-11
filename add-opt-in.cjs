const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./applicants.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('📂 Connected to applicants.db');
});

// Add opt_in_communication column with default 'yes'
db.run(`ALTER TABLE applicants ADD COLUMN opt_in_communication TEXT DEFAULT 'yes'`, (err) => {
  if (err) {
    console.error('Error adding column:', err);
  } else {
    console.log('✅ Added opt_in_communication column');
  }
  
  // Update existing records to have opt_in_communication = 'yes'
  db.run(`UPDATE applicants SET opt_in_communication = 'yes' WHERE opt_in_communication IS NULL`, (err) => {
    if (err) {
      console.error('Error updating existing records:', err);
    } else {
      console.log('✅ Updated existing records to opt_in_communication = "yes"');
    }
    
    // Show updated table structure
    db.all("PRAGMA table_info(applicants)", [], (err, columns) => {
      if (err) {
        console.error('Error getting table info:', err);
        return;
      }
      
      console.log('\n📋 Updated table structure:');
      console.log('============================');
      columns.forEach(col => {
        console.log(`${col.name} (${col.type}) ${col.notnull ? 'NOT NULL' : ''} ${col.pk ? 'PRIMARY KEY' : ''} ${col.dflt_value ? `DEFAULT ${col.dflt_value}` : ''}`);
      });
      
      // Show all data with new column
      db.all('SELECT * FROM applicants', [], (err, rows) => {
        if (err) {
          console.error('Query error:', err);
          return;
        }
        
        console.log('\n📊 Updated data:');
        console.log('================');
        rows.forEach(row => {
          console.log(`ID: ${row.id}, Email: ${row.email}, Opt-in: ${row.opt_in_communication}`);
        });
        
        // Close database
        db.close((err) => {
          if (err) {
            console.error('Error closing database:', err);
          } else {
            console.log('\n🔒 Database connection closed');
          }
        });
      });
    });
  });
});
