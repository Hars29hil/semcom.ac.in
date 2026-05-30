const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all council members
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM council ORDER BY id DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Add new council member
router.post('/', async (req, res) => {
  const { name, role, year, image_url } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO council (name, role, year, image_url) VALUES (?, ?, ?, ?)',
      [name, role, year, image_url || '']
    );
    res.json({ success: true, data: { id: result.insertId, name, role, year, image_url } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update council member
router.put('/:id', async (req, res) => {
  const { name, role, year, image_url } = req.body;
  try {
    await db.execute(
      'UPDATE council SET name = ?, role = ?, year = ?, image_url = ? WHERE id = ?',
      [name, role, year, image_url || '', req.params.id]
    );
    res.json({ success: true, message: 'Updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete council member
router.delete('/:id', async (req, res) => {
  try {
    await db.execute('DELETE FROM council WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
