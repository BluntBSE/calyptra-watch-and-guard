import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Database path (going up two levels from src/lib/)
const dbPath = join(__dirname, '..', '..', 'applicants.db');

export function saveApplicant(email, message) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `INSERT INTO applicants (email, message, applied_at) VALUES (?, ?, datetime('now'))`;
    
    db.run(query, [email, message], function(err) {
      if (err) {
        console.error('Database error:', err);
        db.close();
        reject(err);
        return;
      }
      
      console.log(`✅ Saved applicant: ${email} (ID: ${this.lastID})`);
      
      db.close((closeErr) => {
        if (closeErr) {
          console.error('Error closing database:', closeErr);
          reject(closeErr);
        } else {
          resolve({ id: this.lastID, email, message });
        }
      });
    });
  });
}

export function getApplicants() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `SELECT * FROM applicants ORDER BY applied_at DESC`;
    
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Database error:', err);
        db.close();
        reject(err);
        return;
      }
      
      db.close((closeErr) => {
        if (closeErr) {
          console.error('Error closing database:', closeErr);
          reject(closeErr);
        } else {
          resolve(rows);
        }
      });
    });
  });
}
