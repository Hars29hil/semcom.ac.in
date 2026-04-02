const db = require('./db');

async function checkSchema() {
  try {
    const [rows] = await db.execute('DESCRIBE press_notes');
    console.log('Schema for press_notes:');
    console.table(rows);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkSchema();
