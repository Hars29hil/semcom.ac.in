const db = require('./db');
(async () => {
  try {
    await db.execute(`
      ALTER TABLE events 
      CHANGE name title VARCHAR(255),
      ADD COLUMN IF NOT EXISTS location VARCHAR(255) AFTER date,
      ADD COLUMN IF NOT EXISTS description TEXT AFTER location,
      ADD COLUMN IF NOT EXISTS image_url TEXT AFTER description
    `);
    console.log('Events table upgraded.');
  } catch (e) {
    console.error('Upgrade Error:', e.message);
  } finally {
    process.exit();
  }
})();
