const db = require('./db');

async function initializeTables() {
  try {
    // Press Notes Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS press_notes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        day VARCHAR(2) NOT NULL,
        month VARCHAR(3) NOT NULL,
        title TEXT NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Announcements Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS announcements (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title TEXT NOT NULL,
        date VARCHAR(20) NOT NULL,
        type ENUM('bell', 'file') DEFAULT 'bell',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Press Notes
    const [pressRows] = await db.execute('SELECT COUNT(*) as count FROM press_notes');
    console.log(`Found ${pressRows[0].count} press notes.`);
    if (pressRows[0].count === 0) {
      const pressSeeds = [
        ['14', 'MAR', '304 teams participated in Hackathon 4.0 in Vidhanagar', 'https://images.unsplash.com/photo-1531297480707-1f020171a391?q=80&w=1000'],
        ['14', 'MAR', 'Hackathon held in CVM University', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000'],
        ['14', 'MAR', 'A project to store hydrogen at low cost using plastic and cold temperatures', 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1000'],
        ['23', 'JAN', 'CVM University Cadets Selected for Republic Day Camp (RDC) 2', 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000']
      ];
      for (const seed of pressSeeds) {
        await db.execute('INSERT INTO press_notes (day, month, title, image_url) VALUES (?, ?, ?, ?)', seed);
      }
      console.log('Seeded press notes.');
    }

    // SEED DATA: Announcements
    const [announceRows] = await db.execute('SELECT COUNT(*) as count FROM announcements');
    if (announceRows[0].count === 0) {
      const announceSeeds = [
        ['List of Holidays - 2026', '02 Feb 2026', 'bell'],
        ['Academic Calender', '02 Feb 2026', 'file'],
        ['Academic Calendar 2025-26', '12 Dec 2025', 'bell'],
        ['Circular: Mandatory Internship Submission for Final Year Students', '02 Feb 2026', 'file']
      ];
      for (const seed of announceSeeds) {
        await db.execute('INSERT INTO announcements (title, date, type) VALUES (?, ?, ?)', seed);
      }
      console.log('Seeded announcements.');
    }

    // Gallery Albums Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS gallery_albums (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        cover_emoji VARCHAR(10) DEFAULT '📸',
        album_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Gallery Photos Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS gallery_photos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        album_id INT,
        url TEXT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES gallery_albums(id) ON DELETE CASCADE
      )
    `);

    // SEED DATA: Gallery Albums
    const [albumRows] = await db.execute('SELECT COUNT(*) as count FROM gallery_albums');
    if (albumRows[0].count === 0) {
      const albumSeeds = [
        ['Annual Day 2026', '🎭', '2026-03-20'],
        ['Convocation 2025', '🎓', '2025-12-15'],
        ['Sports Week', '🏆', '2026-02-10'],
        ['Campus Life', '🏫', '2026-01-05'],
        ['Guest Lectures', '🎤', '2026-03-01'],
        ['Cultural Festival', '🎨', '2025-11-20']
      ];
      for (const seed of albumSeeds) {
        await db.execute('INSERT INTO gallery_albums (name, cover_emoji, album_date) VALUES (?, ?, ?)', seed);
      }
      console.log('Seeded gallery albums.');
    }

    // SEED DATA: Gallery Photos
    const [photoRows] = await db.execute('SELECT COUNT(*) as count FROM gallery_photos');
    if (photoRows[0].count === 0) {
       const [albums] = await db.execute('SELECT id FROM gallery_albums LIMIT 3');
       if (albums.length > 0) {
         const photoSeeds = [
           [albums[0].id, 'https://images.unsplash.com/photo-1540575861501-7bc06a177dc2?q=80&w=2070'],
           [albums[0].id, 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070'],
           [albums[1].id, 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070'],
           [albums[2].id, 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070']
         ];
         for (const seed of photoSeeds) {
           await db.execute('INSERT INTO gallery_photos (album_id, url) VALUES (?, ?)', seed);
         }
         console.log('Seeded gallery photos.');
       }
    }

    // Programs Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS programs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        students INT DEFAULT 0,
        status ENUM('active', 'new', 'archived') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Programs
    const [progRows] = await db.execute('SELECT COUNT(*) as count FROM programs');
    if (progRows[0].count === 0) {
      const progSeeds = [
        ['BBA (Hons.)', 'UG', 520, 'active'],
        ['BCA', 'UG', 480, 'active'],
        ['BCom (Hons.)', 'UG', 620, 'active'],
        ['BBA (ITM) (Hons.)', 'UG', 310, 'active'],
        ['BBA - Business Analytics', 'UG', 90, 'new'],
        ['BBA - Digital Marketing', 'UG', 85, 'new'],
        ['MCom', 'PG', 180, 'active'],
        ['MBA (Dual Specialization)', 'PG', 150, 'new'],
        ['Ph.D.', 'Doctoral', 45, 'active']
      ];
      for (const seed of progSeeds) {
        await db.execute('INSERT INTO programs (name, type, students, status) VALUES (?, ?, ?, ?)', seed);
      }
      console.log('Seeded programs.');
    }

    // Research & Consultancy Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS research (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title TEXT NOT NULL,
        faculty VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        status ENUM('ongoing', 'completed', 'proposed') DEFAULT 'ongoing',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Research
    const [researchRows] = await db.execute('SELECT COUNT(*) as count FROM research');
    if (researchRows[0].count === 0) {
      const researchSeeds = [
        ['AI-Driven Financial Analysis Tools', 'Dr. A. Sharma', 'Research', 'ongoing'],
        ['Impact of Digital Marketing on SMEs', 'Prof. B. Patel', 'Research', 'completed'],
        ['Blockchain in Supply Chain Management', 'Dr. C. Mehta', 'Consultancy', 'ongoing'],
        ['Rural Entrepreneurship Development', 'Prof. D. Shah', 'Research', 'ongoing'],
        ['Data Analytics for Healthcare', 'Dr. E. Desai', 'Consultancy', 'proposed']
      ];
      for (const seed of researchSeeds) {
        await db.execute('INSERT INTO research (title, faculty, type, status) VALUES (?, ?, ?, ?)', seed);
      }
      console.log('Seeded research projects.');
    }

    // Faculty Experience Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS faculty_experience (
        id INT AUTO_INCREMENT PRIMARY KEY,
        faculty_email VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        years VARCHAR(50) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Faculty Experience (Dhruv Patel)
    const [expRows] = await db.execute('SELECT COUNT(*) as count FROM faculty_experience');
    if (expRows[0].count === 0) {
      const expSeeds = [
        ['dhruv.patel@cvmu.edu.in', 'SEMCOM', 'Assistant Professor', '2015 - Present', 'Department of IT & Management'],
        ['dhruv.patel@cvmu.edu.in', 'Tech solutions Ltd.', 'Senior Analyst', '2012 - 2015', 'Enterprise System Architecture']
      ];
      for (const seed of expSeeds) {
        await db.execute('INSERT INTO faculty_experience (faculty_email, company, role, years, description) VALUES (?, ?, ?, ?, ?)', seed);
      }
      console.log('Seeded faculty experience data.');
    }

    // Faculty Achievements Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS faculty_achievements (
        id INT AUTO_INCREMENT PRIMARY KEY,
        faculty_email VARCHAR(255) NOT NULL,
        achievement_type ENUM(
          'PhD Supervisors', 
          'Research Papers Published', 
          'Research Papers Presented', 
          'Seminars / FDP', 
          'Awards', 
          'Expert Lectures', 
          'Books', 
          'Book Chapters', 
          'Patents'
        ) NOT NULL,
        title TEXT NOT NULL,
        details TEXT,
        achievement_year VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Faculty Achievements (Dhruv Patel)
    const [achievRows] = await db.execute('SELECT COUNT(*) as count FROM faculty_achievements');
    if (achievRows[0].count === 0) {
      const achievSeeds = [
        ['dhruv.patel@cvmu.edu.in', 'Research Papers Published', 'Impact of IoT on Modern Business', 'International Journal of IT', '2025'],
        ['dhruv.patel@cvmu.edu.in', 'Awards', 'Best Researcher Award', 'CVM University', '2026'],
        ['dhruv.patel@cvmu.edu.in', 'Books', 'E-Commerce Fundamentals', 'McGraw Hill', '2024'],
        ['dhruv.patel@cvmu.edu.in', 'Patents', 'Low-Cost Smart Watering System', 'Indian Patent Office', '2025']
      ];
      for (const seed of achievSeeds) {
        await db.execute('INSERT INTO faculty_achievements (faculty_email, achievement_type, title, details, achievement_year) VALUES (?, ?, ?, ?, ?)', seed);
      }
      console.log('Seeded faculty achievement data.');
    }

    // Placements Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS placements (
        id INT AUTO_INCREMENT PRIMARY KEY,
        company_name VARCHAR(255) NOT NULL,
        student_name VARCHAR(255) NOT NULL,
        package_detail VARCHAR(100),
        placement_year VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Placements
    const [placementRows] = await db.execute('SELECT COUNT(*) as count FROM placements');
    if (placementRows[0].count === 0) {
      const placementSeeds = [
        ['Amazon', 'Janvi Patel', '12 LPA', '2026'],
        ['Infosys', 'Harshil Shah', '8.5 LPA', '2026'],
        ['TCS', 'Meera Desai', '6.0 LPA', '2025'],
        ['Google', 'Dhruv Patel', '24 LPA', '2025'],
        ['Wipro', 'Aarav Mehta', '7.2 LPA', '2026']
      ];
      for (const seed of placementSeeds) {
        await db.execute('INSERT INTO placements (company_name, student_name, package_detail, placement_year) VALUES (?, ?, ?, ?)', seed);
      }
      console.log('Seeded placement data.');
    }

    // Add bio and staff_type to users if missing
    try {
      await db.execute('ALTER TABLE users ADD COLUMN bio TEXT');
    } catch (e) {}
    try {
      await db.execute('ALTER TABLE users ADD COLUMN staff_type VARCHAR(50) DEFAULT "Teaching"');
    } catch (e) {}

    console.log('Database tables initialized or already exist.');
  } catch (error) {
    console.error('Error initializing tables:', error);
  }
}

module.exports = initializeTables;
