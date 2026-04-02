const express = require('express');
const cors = require('cors');
require('dotenv').config();
const initializeTables = require('./db_init');
const simpleAuth = require('./middleware/simpleAuth');

// Initialize DB Tables
initializeTables();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlwares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Main route
app.get('/', (req, res) => {
  res.send('SEMCOM Admin Backend API is running...');
});

// Import Routes
const authRoutes = require('./routes/auth');
const facultyRoutes = require('./routes/faculty');
const studentRoutes = require('./routes/students');
const eventRoutes = require('./routes/events');
const statsRoutes = require('./routes/stats');
const newsRoutes = require('./routes/news');
const galleryRoutes = require('./routes/gallery');
const programRoutes = require('./routes/programs');
const researchRoutes = require('./routes/research');
const placementRoutes = require('./routes/placements');

const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Use Routes
app.use('/uploads', express.static(uploadDir));

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
  res.json({ success: true, imageUrl: `http://localhost:${PORT}/uploads/${req.file.filename}` });
});

app.use('/api/auth', authRoutes);

app.use('/api/faculty', facultyRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/events', simpleAuth, eventRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/news', simpleAuth, newsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/placements', placementRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err.stack);
  
  let message = 'Something went wrong!';
  if (err.code === 'ECONNREFUSED') {
    message = 'Database Connection Failed: Is your MySQL server (XAMPP) running?';
  }

  res.status(500).json({ 
    success: false, 
    message: message,
    error: process.env.NODE_ENV === 'development' ? err.message : (err.code || {})
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
