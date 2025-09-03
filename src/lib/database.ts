import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Database path (going up two levels from src/lib/)
const dbPath = join(__dirname, '..', '..', 'applicants.db');

// Initialize correspondence table if it doesn't exist
export function initializeCorrespondenceTable() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `
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
    
    db.run(query, function(err) {
      if (err) {
        console.error('Error creating correspondence table:', err);
        db.close();
        reject(err);
        return;
      }
      
      console.log('✅ Correspondence table initialized');
      
      db.close((closeErr) => {
        if (closeErr) {
          console.error('Error closing database:', closeErr);
          reject(closeErr);
        } else {
          resolve(true);
        }
      });
    });
  });
}

export function saveCorrespondence(name: string, email: string, phone: string, matter: string, message: string, confidentiality: string = 'standard') {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    // Create table if it doesn't exist, then insert
    const createTableQuery = `
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
    
    db.run(createTableQuery, function(createErr) {
      if (createErr) {
        console.error('Error creating correspondence table:', createErr);
        db.close();
        reject(createErr);
        return;
      }
      
      // Now insert the record
      const insertQuery = `INSERT INTO correspondence (name, email, phone, matter, message, confidentiality, submitted_at, opt_in_communication) 
                         VALUES (?, ?, ?, ?, ?, ?, datetime('now'), 'yes')`;
      
      db.run(insertQuery, [name, email, phone, matter, message, confidentiality], function(err) {
        if (err) {
          console.error('Database error:', err);
          db.close();
          reject(err);
          return;
        }
        
        console.log(`✅ Saved correspondence: ${email} (ID: ${this.lastID}) - Matter: ${matter}`);
        
        db.close((closeErr) => {
          if (closeErr) {
            console.error('Error closing database:', closeErr);
            reject(closeErr);
          } else {
            resolve({ id: this.lastID, name, email, phone, matter, message, confidentiality });
          }
        });
      });
    });
  });
}

export function getCorrespondence() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `SELECT * FROM correspondence ORDER BY submitted_at DESC`;
    
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

export function saveApplicant(email: string, message: string) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `INSERT INTO applicants (email, reason, submitted_at, opt_in_communication) VALUES (?, ?, datetime('now'), 'yes')`;
    
    db.run(query, [email, message], function(err) {
      if (err) {
        console.error('Database error:', err);
        db.close();
        reject(err);
        return;
      }
      
      console.log(`✅ Saved applicant: ${email} (ID: ${this.lastID}) - Opted in: yes`);
      
      db.close((closeErr) => {
        if (closeErr) {
          console.error('Error closing database:', closeErr);
          reject(closeErr);
        } else {
          resolve({ id: this.lastID, email, message, optIn: 'yes' });
        }
      });
    });
  });
}

export function getApplicants() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `SELECT * FROM applicants ORDER BY submitted_at DESC`;
    
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

export function updateOptInStatus(email: string, optIn: 'yes' | 'no') {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath);
    
    const query = `UPDATE applicants SET opt_in_communication = ? WHERE email = ?`;
    
    db.run(query, [optIn, email], function(err) {
      if (err) {
        console.error('Database error:', err);
        db.close();
        reject(err);
        return;
      }
      
      console.log(`✅ Updated opt-in status for ${email}: ${optIn} (${this.changes} rows affected)`);
      
      db.close((closeErr) => {
        if (closeErr) {
          console.error('Error closing database:', closeErr);
          reject(closeErr);
        } else {
          resolve({ email, optIn, changes: this.changes });
        }
      });
    });
  });
}
