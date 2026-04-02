const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/summary', async (req, res, next) => {
  try {
    const [[{ totalStudents }]] = await db.execute('SELECT COUNT(*) as totalStudents FROM students');
    const [[{ totalPrograms }]] = await db.execute('SELECT COUNT(*) as totalPrograms FROM programs');
    const [[{ totalFaculty }]] = await db.execute("SELECT COUNT(*) as totalFaculty FROM users WHERE role IN ('admin', 'counselor')");
    const [[{ totalEvents }]] = await db.execute('SELECT COUNT(*) as totalEvents FROM events');

    res.json({
      success: true,
      data: {
        totalStudents,
        totalPrograms,
        totalFaculty,
        totalEvents
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
