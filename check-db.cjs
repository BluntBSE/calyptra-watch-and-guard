const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./applicants.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('📂 Connected to applicants.db');
});

// Query all applicants
db.all('SELECT * FROM applicants ORDER BY submitted_at DESC', [], (err, rows) => {
  if (err) {
    console.error('Query error:', err);
    return;
  }
  
  console.log('\n📋 Current applicants in database:');
  console.log('=====================================');
  
  if (rows.length === 0) {
    console.log('No applicants found.');
  } else {
    rows.forEach((row, index) => {
      console.log(`\n${index + 1}. ID: ${row.id}`);
      console.log(`   Email: ${row.email}`);
      console.log(`   Applied: ${row.submitted_at}`);
      console.log(`   Opt-in: ${row.opt_in_communication || 'unknown'}`);
      console.log(`   Status: ${row.status || 'new'}`);
      console.log(`   Message: ${row.reason.substring(0, 100)}${row.reason.length > 100 ? '...' : ''}`);
    });
  }
  
  console.log(`\n📊 Total applicants: ${rows.length}`);
  
  // Show opt-in statistics
  const optedIn = rows.filter(row => row.opt_in_communication === 'yes').length;
  const optedOut = rows.filter(row => row.opt_in_communication === 'no').length;
  const unknown = rows.length - optedIn - optedOut;
  
  console.log(`📧 Opted in for communication: ${optedIn}`);
  console.log(`🚫 Opted out of communication: ${optedOut}`);
  if (unknown > 0) console.log(`❓ Unknown opt-in status: ${unknown}`);
});

// Close database
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err);
  } else {
    console.log('\n🔒 Database connection closed');
  }
});
