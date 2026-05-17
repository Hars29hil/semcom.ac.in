const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all SMTR submissions
router.get('/submissions', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM smtr_submissions ORDER BY submitted_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Submit a paper
router.post('/submit', async (req, res) => {
  const { title, authors, email, abstract, file_url } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO smtr_submissions (title, authors, email, abstract, file_url) VALUES (?, ?, ?, ?, ?)',
      [title, authors, email, abstract, file_url]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
