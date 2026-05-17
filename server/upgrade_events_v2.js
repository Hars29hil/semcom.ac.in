const db = require('./db');

async function upgradeEventsTable() {
  try {
    console.log('Upgrading events table...');
    
    // Add highlights column if not exists
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM events LIKE "highlights"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE events ADD COLUMN highlights TEXT');
        console.log('Added highlights column to events table.');
      }
    } catch (e) {
      console.error('Error adding highlights column:', e);
    }

    // Add schedule column if not exists (for "at a glance" or "other info")
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM events LIKE "schedule"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE events ADD COLUMN schedule TEXT');
        console.log('Added schedule column to events table.');
      }
    } catch (e) {
      console.error('Error adding schedule column:', e);
    }

    console.log('Events table upgrade complete.');
  } catch (error) {
    console.error('Error upgrading events table:', error);
  } finally {
    process.exit();
  }
}

upgradeEventsTable();
