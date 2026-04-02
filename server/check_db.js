const db = require('./db');
(async () => {
  try {
    const [rows] = await db.execute('SHOW COLUMNS FROM events');
    console.log(JSON.stringify(rows));
  } catch (e) {
    console.error(e.message);
  } finally {
    process.exit();
  }
})();
