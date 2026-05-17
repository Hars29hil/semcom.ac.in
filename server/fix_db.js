const db = require('./db');

(async () => {
  try {
    console.log('Fixing programs table...');
    // Add program_id if not exists
    try {
      await db.execute('ALTER TABLE programs ADD COLUMN IF NOT EXISTS program_id INT UNIQUE AFTER id');
      console.log('Added program_id column.');
    } catch (e) {
      console.log('program_id column might already exist or error:', e.message);
    }

    // Populate program_id with id
    await db.execute('UPDATE programs SET program_id = id + 100 WHERE program_id IS NULL');
    console.log('Populated program_id.');

    // Seed student_classes if empty
    const [classRows] = await db.execute('SELECT COUNT(*) as count FROM student_classes');
    if (classRows[0].count === 0) {
        const [progs] = await db.execute('SELECT program_id FROM programs LIMIT 2');
        if (progs.length > 0) {
            await db.execute('INSERT INTO student_classes (sem, stream, name) VALUES (1, ?, "FYBBA-A")', [progs[0].program_id]);
            if (progs.length > 1) {
                await db.execute('INSERT INTO student_classes (sem, stream, name) VALUES (1, ?, "FYBCA-A")', [progs[1].program_id]);
            }
            console.log('Seeded student classes.');
        }
    }

    // Seed students if empty
    const [studentRows] = await db.execute('SELECT COUNT(*) as count FROM students');
    if (studentRows[0].count === 0) {
        const [classes] = await db.execute('SELECT id FROM student_classes LIMIT 1');
        if (classes.length > 0) {
            await db.execute('INSERT INTO students (name, enrollment_number, email, class_id) VALUES (?, ?, ?, ?)', ['Student Alpha', 'EN001', 'alpha@student.com', classes[0].id]);
            await db.execute('INSERT INTO students (name, enrollment_number, email, class_id) VALUES (?, ?, ?, ?)', ['Student Beta', 'EN002', 'beta@student.com', classes[0].id]);
            console.log('Seeded students.');
        }
    }

    console.log('Database fix completed.');
  } catch (error) {
    console.error('Error fixing database:', error.message);
  } finally {
    process.exit();
  }
})();
