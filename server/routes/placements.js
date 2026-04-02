const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all placements
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM placements ORDER BY placement_year DESC, created_at DESC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Create new placement
router.post('/', async (req, res, next) => {
  try {
    const { company_name, student_name, package_detail, placement_year } = req.body;
    const [result] = await db.execute(
      'INSERT INTO placements (company_name, student_name, package_detail, placement_year) VALUES (?, ?, ?, ?)',
      [company_name, student_name, package_detail, placement_year]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Update placement
router.put('/:id', async (req, res, next) => {
  try {
    const { company_name, student_name, package_detail, placement_year } = req.body;
    await db.execute(
      'UPDATE placements SET company_name = ?, student_name = ?, package_detail = ?, placement_year = ? WHERE id = ?',
      [company_name, student_name, package_detail, placement_year, req.params.id]
    );
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Delete placement
router.delete('/:id', async (req, res, next) => {
  try {
    await db.execute('DELETE FROM placements WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
