const express = require('express');
const router = express.Router();
const db = require('../db');

// Get recent highlights (top 5 photos)
router.get('/highlights', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM gallery_photos ORDER BY id DESC LIMIT 5');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Get all albums with photo counts
router.get('/albums', async (req, res, next) => {
  try {
    const [rows] = await db.execute(`
      SELECT a.*, COUNT(p.id) as count 
      FROM gallery_albums a 
      LEFT JOIN gallery_photos p ON a.id = p.album_id 
      GROUP BY a.id
      ORDER BY a.created_at DESC
    `);
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Create new album
router.post('/albums', async (req, res, next) => {
  try {
    const { name, cover_emoji, album_date } = req.body;
    const [result] = await db.execute(
      'INSERT INTO gallery_albums (name, cover_emoji, album_date) VALUES (?, ?, ?)',
      [name, cover_emoji || '📸', album_date || new Date().toISOString().split('T')[0]]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Delete album
router.delete('/albums/:id', async (req, res, next) => {
  try {
    await db.execute('DELETE FROM gallery_albums WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Get photos for an album
router.get('/albums/:id/photos', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM gallery_photos WHERE album_id = ?', [req.params.id]);
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Add photo to album
router.post('/photos', async (req, res, next) => {
  try {
    const { album_id, url } = req.body;
    const [result] = await db.execute(
      'INSERT INTO gallery_photos (album_id, url) VALUES (?, ?)',
      [album_id, url]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
