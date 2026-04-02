const express = require('express');
const router = express.Router();
const db = require('../db');

// PRESS NOTES ROUTES
router.get('/press-notes', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM press_notes ORDER BY created_at DESC');
    console.log(`[ROUTE] Returning ${rows?.length || 0} press notes.`);
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
});

router.post('/press-notes', async (req, res, next) => {
  console.log('[POST /press-notes] Request Body:', req.body);
  let { day, month, title, image_url, date } = req.body;
  
  // If a full date is provided, extract day and month
  if (date && (!day || !month)) {
    try {
      const d = new Date(date);
      day = d.getDate().toString().padStart(2, '0');
      month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      console.log(`[POST /press-notes] Extracted date: day=${day}, month=${month}`);
    } catch (e) {
      console.error('[POST /press-notes] Date parsing error:', e);
    }
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO press_notes (day, month, title, image_url) VALUES (?, ?, ?, ?)',
      [day || '01', month || 'JAN', title || 'Untitled', image_url || '']
    );
    console.log('[POST /press-notes] Successfully inserted press note, ID:', result.insertId);
    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('[POST /press-notes] Database Error:', error.message);
    next(error);
  }
});

// Update Press Note
router.put('/press-notes/:id', async (req, res, next) => {
  const { id } = req.params;
  let { day, month, title, image_url, date } = req.body;

  if (date && (!day || !month)) {
    const d = new Date(date);
    day = d.getDate().toString().padStart(2, '0');
    month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  }

  try {
    await db.execute(
      'UPDATE press_notes SET day = ?, month = ?, title = ?, image_url = ? WHERE id = ?',
      [day, month, title, image_url, id]
    );
    res.json({ success: true, message: 'Press note updated successfully' });
  } catch (error) {
    next(error);
  }
});

// Delete Press Note
router.delete('/press-notes/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM press_notes WHERE id = ?', [id]);
    res.json({ success: true, message: 'Press note deleted successfully' });
  } catch (error) {
    next(error);
  }
});



// ANNOUNCEMENTS ROUTES
router.get('/announcements', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM announcements ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
});

router.post('/announcements', async (req, res, next) => {
  const { title, date, type } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO announcements (title, date, type) VALUES (?, ?, ?)',
      [title, date, type || 'bell']
    );
    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Update Announcement
router.put('/announcements/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, date, type } = req.body;
  try {
    await db.execute(
      'UPDATE announcements SET title = ?, date = ?, type = ? WHERE id = ?',
      [title, date, type, id]
    );
    res.json({ success: true, message: 'Announcement updated successfully' });
  } catch (error) {
    next(error);
  }
});

// Delete Announcement
router.delete('/announcements/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM announcements WHERE id = ?', [id]);
    res.json({ success: true, message: 'Announcement deleted successfully' });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
