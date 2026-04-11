const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./applicants.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('📂 Connected to applicants.db');
});

// Check table structure
db.all("PRAGMA table_info(applicants)", [], (err, columns) => {
  if (err) {
    console.error('Error getting table info:', err);
    return;
  }
  
  console.log('\n📋 Table structure:');
  console.log('===================');
  columns.forEach(col => {
    console.log(`${col.name} (${col.type}) ${col.notnull ? 'NOT NULL' : ''} ${col.pk ? 'PRIMARY KEY' : ''}`);
  });
});

// Try to get all data using correct column names
db.all('SELECT * FROM applicants', [], (err, rows) => {
  if (err) {
    console.error('Query error:', err);
    return;
  }
  
  console.log('\n📊 Current data:');
  console.log('================');
  if (rows.length === 0) {
    console.log('No data found.');
  } else {
    console.log(rows);
  }
});

// Close database
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err);
  } else {
    console.log('\n🔒 Database connection closed');
  }
});
