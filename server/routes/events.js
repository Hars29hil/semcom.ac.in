const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all events
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM events ORDER BY date DESC LIMIT 50');
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
});

// Get all activities (often used as announcements/events in this system)
router.get('/activities', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT DISTINCT name, from_date, to_date FROM activities ORDER BY from_date DESC LIMIT 50');
    res.json({ success: true, data: rows });
  } catch (error) {
    next(error);
  }
});

// Create event
router.post('/', async (req, res, next) => {
  const { title, date, location, description, image_url } = req.body;
  try {
    await db.execute(
      'INSERT INTO events (title, date, location, description, image_url) VALUES (?, ?, ?, ?, ?)',
      [title, date, location, description, image_url]
    );
    res.json({ success: true, message: 'Event created' });
  } catch (error) {
    next(error);
  }
});

// Update event
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, date, location, description, image_url } = req.body;
  try {
    await db.execute(
      'UPDATE events SET title = ?, date = ?, location = ?, description = ?, image_url = ? WHERE id = ?',
      [title, date, location, description, image_url, id]
    );
    res.json({ success: true, message: 'Event updated' });
  } catch (error) {
    next(error);
  }
});

// Delete event
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM events WHERE id = ?', [id]);
    res.json({ success: true, message: 'Event deleted' });
  } catch (error) {
    next(error);
  }
});



module.exports = router;
