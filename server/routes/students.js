const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all students
router.get('/', async (req, res, next) => {
  try {
    const query = `
      SELECT 
        s.student_id as id,
        s.name,
        s.enrollment_number,
        s.email,
        sc.sem,
        p.name as dept
      FROM students s
      LEFT JOIN student_classes sc ON s.class_id = sc.id
      LEFT JOIN programs p ON sc.stream = p.program_id
      LIMIT 100
    `;
    
    const [rows] = await db.execute(query);
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
