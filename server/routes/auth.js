const express = require('express');
const router = express.Router();
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login Route
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const user = rows[0];
    
    // PHP's $2y$ is bcrypt. Replace $2y$ with $2a$ for bcryptjs if needed, 
    // but usually bcryptjs handles it.
    let storedHash = user.password;
    if (storedHash.startsWith('$2y$')) {
        storedHash = '$2a$' + storedHash.substring(4);
    }

    const isMatch = await bcrypt.compare(password, storedHash);
    
    // Fallback to check plain password if needed (only for legacy transition, NOT RECOMMENDED for production)
    // const isMatchPlain = password === user.plain_password;

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '8h' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        short_name: user.short_name
      }
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
