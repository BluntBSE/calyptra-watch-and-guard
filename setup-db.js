// Database initialization script
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, 'applicants.db');

console.log('Initializing database at:', dbPath);

const db = new sqlite3.Database(dbPath);

// Create applicants table
const createApplicantsTable = `
  CREATE TABLE IF NOT EXISTS applicants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    opt_in_communication TEXT DEFAULT 'yes'
  )
`;

// Create correspondence table  
const createCorrespondenceTable = `
  CREATE TABLE IF NOT EXISTS correspondence (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    matter TEXT NOT NULL,
    message TEXT NOT NULL,
    confidentiality TEXT DEFAULT 'standard',
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    opt_in_communication TEXT DEFAULT 'yes'
  )
`;

db.serialize(() => {
  db.run(createApplicantsTable, function(err) {
    if (err) {
      console.error('Error creating applicants table:', err);
    } else {
      console.log('✅ Applicants table created successfully');
    }
  });

  db.run(createCorrespondenceTable, function(err) {
    if (err) {
      console.error('Error creating correspondence table:', err);
    } else {
      console.log('✅ Correspondence table created successfully');
    }
  });

  // Test insert to verify tables work
  db.run("INSERT INTO applicants (email, message) VALUES (?, ?)", 
    ['test@example.com', 'Test application'], 
    function(err) {
      if (err) {
        console.error('Error inserting test data:', err);
      } else {
        console.log('✅ Test record inserted successfully (ID:', this.lastID, ')');
        
        // Clean up test record
        db.run("DELETE FROM applicants WHERE id = ?", [this.lastID], function(err) {
          if (err) {
            console.error('Error cleaning up test data:', err);
          } else {
            console.log('✅ Test record cleaned up');
          }
          db.close();
        });
      }
    }
  );
});
