const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all faculty members
router.get('/', async (req, res, next) => {
  try {
    const query = `
      SELECT 
        u.id, 
        u.name, 
        u.email, 
        u.role as designation,
        u.image_url,
        u.qualification,
        u.area,
        u.staff_type,
        MAX(p.name) as dept
      FROM users u
      LEFT JOIN teaching_staffs ts ON u.id = ts.staff_id
      LEFT JOIN subjects s ON ts.subject_id = s.subject_id
      LEFT JOIN student_classes sc ON s.class_id = sc.id
      LEFT JOIN programs p ON sc.stream = p.program_id
      WHERE u.role IN ('admin', 'counselor') OR u.staff_type IS NOT NULL
      GROUP BY u.id
    `;

    
    const [rows] = await db.execute(query);
    
    const formatted = rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      designation: r.designation,
      dept: r.dept || 'General',
      image_url: r.image_url,
      qualification: r.qualification,
      area: r.area,
      staff_type: r.staff_type || 'Teaching'
    }));

    res.json({ success: true, data: formatted });
  } catch (error) {
    next(error);
  }
});

// Update faculty member (Admin version)
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, email, designation, qualification, area, staff_type, image_url } = req.body;
  try {
    await db.execute(
      'UPDATE users SET name = ?, email = ?, role = ?, qualification = ?, area = ?, staff_type = ?, image_url = ? WHERE id = ?',
      [name, email, designation, qualification, area, staff_type, image_url, id]
    );
    res.json({ success: true, message: 'Faculty profile updated' });
  } catch (error) {
    next(error);
  }
});

// Update faculty member by email (Counsellor version)
router.put('/profile/:email', async (req, res, next) => {
  const { email } = req.params;
  const { name, qualification, area, bio, image_url } = req.body;
  try {
    await db.execute(
      'UPDATE users SET name = ?, qualification = ?, area = ?, bio = ?, image_url = ? WHERE email = ?',
      [name, qualification, area, bio, image_url, email]
    );
    res.json({ success: true, message: 'Profile synchronized' });
  } catch (error) {
    next(error);
  }
});


// Get professional experience for a faculty member
router.get('/:email/experience', async (req, res, next) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM faculty_experience WHERE faculty_email = ? ORDER BY created_at DESC',
      [req.params.email]
    );
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Add experience for a faculty member
router.post('/:email/experience', async (req, res, next) => {
  try {
    const { company, role, years, description } = req.body;
    const [result] = await db.execute(
      'INSERT INTO faculty_experience (faculty_email, company, role, years, description) VALUES (?, ?, ?, ?, ?)',
      [req.params.email, company, role, years, description]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Delete experience
router.delete('/experience/:id', async (req, res, next) => {
  try {
    await db.execute('DELETE FROM faculty_experience WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Get achievements for a faculty member
router.get('/:email/achievements', async (req, res, next) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM faculty_achievements WHERE faculty_email = ? ORDER BY achievement_year DESC, created_at DESC',
      [req.params.email]
    );
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Add achievement
router.post('/:email/achievements', async (req, res, next) => {
  try {
    const { achievement_type, title, details, achievement_year } = req.body;
    const [result] = await db.execute(
      'INSERT INTO faculty_achievements (faculty_email, achievement_type, title, details, achievement_year) VALUES (?, ?, ?, ?, ?)',
      [req.params.email, achievement_type, title, details, achievement_year]
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    next(error);
  }
});

// Delete achievement
router.delete('/achievements/:id', async (req, res, next) => {
  try {
    await db.execute('DELETE FROM faculty_achievements WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

