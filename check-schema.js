// Check database schema
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, 'applicants.db');

console.log('Checking database schema at:', dbPath);

const db = new sqlite3.Database(dbPath);

// Check applicants table schema
db.all("PRAGMA table_info(applicants)", [], (err, rows) => {
  if (err) {
    console.error('Error checking applicants table:', err);
  } else {
    console.log('Applicants table schema:');
    rows.forEach(row => {
      console.log(`- ${row.name}: ${row.type} (${row.notnull ? 'NOT NULL' : 'nullable'})`);
    });
  }
  
  // Check correspondence table schema
  db.all("PRAGMA table_info(correspondence)", [], (err, rows) => {
    if (err) {
      console.error('Error checking correspondence table:', err);
    } else {
      console.log('\nCorrespondence table schema:');
      rows.forEach(row => {
        console.log(`- ${row.name}: ${row.type} (${row.notnull ? 'NOT NULL' : 'nullable'})`);
      });
    }
    db.close();
  });
});
