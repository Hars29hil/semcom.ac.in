const db = require('./db');
(async () => {
  try {
    await db.execute(`
      ALTER TABLE users 
      ADD COLUMN IF NOT EXISTS image_url TEXT AFTER role,
      ADD COLUMN IF NOT EXISTS qualification VARCHAR(255) AFTER image_url,
      ADD COLUMN IF NOT EXISTS area VARCHAR(255) AFTER qualification,
      ADD COLUMN IF NOT EXISTS staff_type VARCHAR(50) DEFAULT 'Teaching' AFTER area
    `);

    console.log('Users table upgraded with image_url.');
  } catch (e) {
    console.error('Upgrade Error:', e.message);
  } finally {
    process.exit();
  }
})();
