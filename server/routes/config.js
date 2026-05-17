const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all config items
router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT * FROM site_config');
    const config = {};
    rows.forEach(row => {
      config[row.config_key] = row.config_value;
    });
    res.json(config);
  } catch (error) {
    next(error);
  }
});

// Update or add config item
router.post('/', async (req, res, next) => {
  const { key, value } = req.body;
  if (!key) return res.status(400).json({ success: false, message: 'Key is required' });

  try {
    await db.execute(
      'INSERT INTO site_config (config_key, config_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE config_value = ?',
      [key, value, value]
    );
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
