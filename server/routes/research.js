const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all research projects
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM research ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Create new project
router.post('/', async (req, res, next) => {
  try {
    const { title, faculty, type, status } = req.body;
    const [result] = await db.execute(
      'INSERT INTO research (title, faculty, type, status) VALUES (?, ?, ?, ?)',
      [title, faculty, type, status || 'ongoing']
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Update project
router.put('/:id', async (req, res, next) => {
  try {
    const { title, faculty, type, status } = req.body;
    await db.execute(
      'UPDATE research SET title = ?, faculty = ?, type = ?, status = ? WHERE id = ?',
      [title, faculty, type, status, req.params.id]
    );
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Delete project
router.delete('/:id', async (req, res, next) => {
  try {
    await db.execute('DELETE FROM research WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
