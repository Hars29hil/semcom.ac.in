const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all programs
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM programs ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Create new program
router.post('/', async (req, res, next) => {
  try {
    const { name, type, students, status } = req.body;
    const [result] = await db.execute(
      'INSERT INTO programs (name, type, students, status) VALUES (?, ?, ?, ?)',
      [name, type, students || 0, status || 'active']
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Update program
router.put('/:id', async (req, res, next) => {
  try {
    const { name, type, students, status } = req.body;
    await db.execute(
      'UPDATE programs SET name = ?, type = ?, students = ?, status = ? WHERE id = ?',
      [name, type, students, status, req.params.id]
    );
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Delete program
router.delete('/:id', async (req, res, next) => {
  try {
    await db.execute('DELETE FROM programs WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
