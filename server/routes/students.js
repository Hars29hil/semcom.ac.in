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
        'N/A' as sem,
        'General' as dept
      FROM students s
      LIMIT 100
    `;
    
    const [rows] = await db.execute(query);
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
