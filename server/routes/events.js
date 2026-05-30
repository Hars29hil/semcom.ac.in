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

// Get single event
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM events WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: 'Event not found' });
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    next(error);
  }
});
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
  const { title, date, location, description, image_url, highlights, schedule, committee, end_date, departments, level, type, registration_link, status } = req.body;
  try {
    await db.execute(
      'INSERT INTO events (title, date, location, description, image_url, highlights, schedule, committee, end_date, departments, level, type, registration_link, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [title, date, location, description, image_url, highlights, schedule, JSON.stringify(committee || []), end_date || null, departments || null, level || null, type || null, registration_link || null, status || 'Upcoming']
    );
    res.json({ success: true, message: 'Event created' });
  } catch (error) {
    next(error);
  }
});

// Update event
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, date, location, description, image_url, highlights, schedule, committee, end_date, departments, level, type, registration_link, status } = req.body;
  try {
    await db.execute(
      'UPDATE events SET title = ?, date = ?, location = ?, description = ?, image_url = ?, highlights = ?, schedule = ?, committee = ?, end_date = ?, departments = ?, level = ?, type = ?, registration_link = ?, status = ? WHERE id = ?',
      [title, date, location, description, image_url, highlights, schedule, JSON.stringify(committee || []), end_date || null, departments || null, level || null, type || null, registration_link || null, status || 'Upcoming', id]
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
