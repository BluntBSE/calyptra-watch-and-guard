const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database in project root
const dbPath = path.join(__dirname, 'applicants.db');

// Create/open database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
    }
});

// Create applicants table
db.run(`
    CREATE TABLE IF NOT EXISTS applicants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        reason TEXT NOT NULL,
        application_timestamp TEXT,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'new',
        follow_up_count INTEGER DEFAULT 0,
        last_contacted DATETIME,
        notes TEXT,
        ip_address TEXT,
        user_agent TEXT
    )
`, (err) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('✅ Applicants table created successfully');
    }
});

// Add some test queries to verify setup
db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
    if (err) {
        console.error('Error querying tables:', err);
    } else {
        console.log('📋 Tables in database:', rows.map(row => row.name));
    }
});

// Close database
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err);
    } else {
        console.log('🔒 Database connection closed');
    }
});
