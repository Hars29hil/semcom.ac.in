const db = require('./db');
const bcrypt = require('bcryptjs');


async function initializeTables() {
  try {
    // Users Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        short_name VARCHAR(50),
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        plain_password VARCHAR(255),
        role VARCHAR(50) DEFAULT 'user',
        image_url TEXT,
        qualification VARCHAR(255),
        area VARCHAR(255),
        staff_type VARCHAR(50) DEFAULT 'Teaching',
        phone_number VARCHAR(20),
        is_vp BOOLEAN DEFAULT FALSE,
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Seed default admin if not exists
    const [userRows] = await db.execute('SELECT COUNT(*) as count FROM users');
    if (userRows[0].count === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await db.execute(
        'INSERT INTO users (name, short_name, email, password, plain_password, role) VALUES (?, ?, ?, ?, ?, ?)',
        ['Admin User', 'Admin', 'admin@semcom.ac.in', hashedPassword, 'admin123', 'admin']
      );
      console.log('Default admin user created.');
    }

    // Events Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date DATE,
        location VARCHAR(255),
        description TEXT,
        image_url TEXT,
        end_date DATE,
        departments TEXT,
        level VARCHAR(50),
        type VARCHAR(50),
        registration_link VARCHAR(255),
        status VARCHAR(50) DEFAULT 'Upcoming',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Activities Table (Used in some older components)
    await db.execute(`
      CREATE TABLE IF NOT EXISTS activities (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        from_date DATE,
        to_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

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
        program_id INT UNIQUE,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        students INT DEFAULT 0,
        status ENUM('active', 'new', 'archived') DEFAULT 'active',
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Student Classes Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS student_classes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sem INT DEFAULT 1,
        stream INT,
        name VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Students Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS students (
        student_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        enrollment_number VARCHAR(50) UNIQUE,
        email VARCHAR(255) UNIQUE,
        class_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (class_id) REFERENCES student_classes(id) ON DELETE SET NULL
      )
    `);

    // Subjects Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS subjects (
        subject_id INT AUTO_INCREMENT PRIMARY KEY,
        class_id INT,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (class_id) REFERENCES student_classes(id) ON DELETE CASCADE
      )
    `);

    // Teaching Staffs Table (Mapping users to subjects)
    await db.execute(`
      CREATE TABLE IF NOT EXISTS teaching_staffs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        staff_id INT,
        subject_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (staff_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (subject_id) REFERENCES subjects(subject_id) ON DELETE CASCADE
      )
    `);

    // SMTR Submissions Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS smtr_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title TEXT NOT NULL,
        authors TEXT NOT NULL,
        email VARCHAR(255) NOT NULL,
        abstract TEXT,
        file_url TEXT,
        status ENUM('pending', 'under_review', 'accepted', 'rejected') DEFAULT 'pending',
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Ensure is_vp column exists in users (for Faculty management)
    // (Already handled in CREATE TABLE but keeping for safety in case table exists)
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM users LIKE "is_vp"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE users ADD COLUMN is_vp BOOLEAN DEFAULT FALSE');
      }
    } catch (e) {}

    // SEED DATA: Programs
    const [progRows] = await db.execute('SELECT COUNT(*) as count FROM programs');
    if (progRows[0].count === 0) {
      const progSeeds = [
        [101, 'BBA (Hons.)', 'UG', 520, 'active', 'Bachelor of Business Administration (Honours) is a 3-year undergraduate course.'],
        [102, 'BCA', 'UG', 480, 'active', 'Bachelor of Computer Applications is a 3-year undergraduate course.'],
        [103, 'BCom (Hons.)', 'UG', 620, 'active', 'Bachelor of Commerce (Honours) is a 3-year undergraduate course.'],
        [104, 'BBA (ITM) (Hons.)', 'UG', 310, 'active', 'BBA in Information Technology Management.'],
        [105, 'BBA - Business Analytics', 'UG', 90, 'new', 'Specialized BBA in Business Analytics and Data Science.'],
        [106, 'BBA - Digital Marketing', 'UG', 85, 'new', 'Specialized BBA in Digital Marketing and E-Commerce.'],
        [107, 'MCom', 'PG', 180, 'active', 'Master of Commerce is a 2-year postgraduate course.'],
        [108, 'MBA (Dual Specialization)', 'PG', 150, 'new', 'Master of Business Administration with dual specialization.'],
        [109, 'Ph.D.', 'Doctoral', 45, 'active', 'Doctoral program in various commerce and management disciplines.']
      ];
      for (const seed of progSeeds) {
        await db.execute('INSERT INTO programs (program_id, name, type, students, status, description) VALUES (?, ?, ?, ?, ?, ?)', seed);
      }
      console.log('Seeded programs.');
    }

    // SEED DATA: Student Classes
    const [classRows] = await db.execute('SELECT COUNT(*) as count FROM student_classes');
    if (classRows[0].count === 0) {
      await db.execute('INSERT INTO student_classes (sem, stream, name) VALUES (1, 101, "FYBBA-A")');
      await db.execute('INSERT INTO student_classes (sem, stream, name) VALUES (1, 102, "FYBCA-A")');
      await db.execute('INSERT INTO student_classes (sem, stream, name) VALUES (3, 101, "SYBBA-A")');
      console.log('Seeded student classes.');
    }

    // SEED DATA: Students
    const [studentRows] = await db.execute('SELECT COUNT(*) as count FROM students');
    if (studentRows[0].count === 0) {
      const [classes] = await db.execute('SELECT id FROM student_classes LIMIT 2');
      if (classes.length > 0) {
        await db.execute('INSERT INTO students (name, enrollment_number, email, class_id) VALUES (?, ?, ?, ?)', ['John Doe', 'EN001', 'john@example.com', classes[0].id]);
        await db.execute('INSERT INTO students (name, enrollment_number, email, class_id) VALUES (?, ?, ?, ?)', ['Jane Smith', 'EN002', 'jane@example.com', classes[1].id]);
      }
      console.log('Seeded students.');
    }

    // SEED DATA: Subjects
    const [subjectRows] = await db.execute('SELECT COUNT(*) as count FROM subjects');
    if (subjectRows[0].count === 0) {
      const [classes] = await db.execute('SELECT id FROM student_classes LIMIT 1');
      if (classes.length > 0) {
        await db.execute('INSERT INTO subjects (class_id, name) VALUES (?, ?)', [classes[0].id, 'Management Principles']);
        await db.execute('INSERT INTO subjects (class_id, name) VALUES (?, ?)', [classes[0].id, 'Financial Accounting']);
      }
      console.log('Seeded subjects.');
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

    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM users LIKE "bio"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE users ADD COLUMN bio TEXT');
      }
    } catch (e) {}
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM users LIKE "staff_type"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE users ADD COLUMN staff_type VARCHAR(50) DEFAULT "Teaching"');
      }
    } catch (e) {}
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM users LIKE "image_url"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE users ADD COLUMN image_url TEXT');
      }
    } catch (e) {}
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM users LIKE "qualification"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE users ADD COLUMN qualification VARCHAR(255)');
      }
    } catch (e) {}
    try {
      const [columns] = await db.execute('SHOW COLUMNS FROM users LIKE "area"');
      if (columns.length === 0) {
        await db.execute('ALTER TABLE users ADD COLUMN area VARCHAR(255)');
      }
    } catch (e) {}

    // Site Config Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS site_config (
        config_key VARCHAR(255) PRIMARY KEY,
        config_value TEXT
      )
    `);

    // SEED DATA: Site Config
    const [configRows] = await db.execute('SELECT COUNT(*) as count FROM site_config WHERE config_key = "chairman_image"');
    if (configRows[0].count === 0) {
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("chairman_image", "/images/chairman.png")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("about_banner_image", "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2070")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("about_building_image", "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1986")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("institutional_excellence_image", "https://images.unsplash.com/photo-1541339906194-e1620a96f5b9?q=80&w=2072&auto=format&fit=crop")');
      
      // Activity Images
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("activity_cultural", "/images/activity_cultural.png")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("activity_nss", "/images/activity_nss.png")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("activity_sports", "/images/activity_sports.png")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("activity_seminars", "https://images.unsplash.com/photo-1475721027187-401460590ed7?q=80&w=2070&auto=format&fit=crop")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("activity_workshops", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop")');
      await db.execute('INSERT INTO site_config (config_key, config_value) VALUES ("activity_honors", "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop")');

      console.log('Seeded site config (chairman, about, institutional, and activity images).');
    }

    // Council Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS council (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL,
        year VARCHAR(50) NOT NULL,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // SEED DATA: Council
    const [councilRows] = await db.execute('SELECT COUNT(*) as count FROM council');
    if (councilRows[0].count === 0) {
      const councilSeeds = [
        ['John Doe', 'President', '2025-2026', ''],
        ['Jane Smith', 'Vice President', '2025-2026', '']
      ];
      for (const seed of councilSeeds) {
        await db.execute('INSERT INTO council (name, role, year, image_url) VALUES (?, ?, ?, ?)', seed);
      }
      console.log('Seeded council members.');
    }

    console.log('Database tables initialized or already exist.');
  } catch (error) {
    console.error('Error initializing tables:', error);
  }
}

module.exports = initializeTables;
