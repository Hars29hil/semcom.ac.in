require('dotenv').config({path: './server/.env'});
const db = require('./server/db');

async function fix() {
  try {
    const [result] = await db.execute("UPDATE users SET staff_type = 'Teaching' WHERE staff_type IS NULL OR staff_type = ''");
    console.log(`Updated ${result.affectedRows} users with missing staff_type`);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
fix();
