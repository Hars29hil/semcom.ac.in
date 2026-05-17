const db = require('./db');

async function upgradeEventsTableV3() {
  try {
    console.log('Upgrading events table for committee details...');
    
    // Add committee column if not exists
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM events LIKE "committee"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE events ADD COLUMN committee JSON');
        console.log('Added committee column (JSON) to events table.');
      }
    } catch (e) {
      console.error('Error adding committee column:', e);
      // Fallback if JSON type is not supported in the current MySQL version
      await db.execute('ALTER TABLE events ADD COLUMN committee TEXT');
      console.log('Added committee column (TEXT) as fallback.');
    }

    console.log('Events table upgrade complete.');
  } catch (error) {
    console.error('Error upgrading events table:', error);
  } finally {
    process.exit();
  }
}

upgradeEventsTableV3();
