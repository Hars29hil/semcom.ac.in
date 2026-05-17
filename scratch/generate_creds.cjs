const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../server/.env')});
const db = require(path.join(__dirname, '../server/db'));
const fs = require('fs');

async function generate() {
  const [rows] = await db.execute('SELECT email, name, role, staff_type FROM users');
  
  let content = `🔐 Admin Access\nEmail: admin@semcom.in\nPassword: Semcom@3690\n\n`;
  
  const sections = {
    'Teaching': '🎓 TEACHING FACULTY',
    'Technical': '🛠️ TECHNICAL STAFF',
    'Support': '🧹 SUPPORTIVE STAFF',
    'Admin': '📂 ADMINISTRATIVE STAFF',
    'Other': '🏆 SPORTS & OTHER'
  };

  const grouped = {};
  rows.forEach(u => {
    let type = u.staff_type || 'Teaching';
    if (u.role === 'ADMINISTRATIVE STAFF') type = 'Admin';
    if (u.role === 'TECHNICAL STAFF') type = 'Technical';
    if (u.role === 'SUPPORTIVE STAFF') type = 'Support';
    if (u.role === 'SPORTS IN-CHARGE') type = 'Other';

    if (!grouped[type]) grouped[type] = [];
    
    // Extract first name for password
    const cleanName = u.name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, '');
    const firstName = cleanName.split(' ')[0];
    const password = `${firstName}@semcom`;
    
    grouped[type].push({ email: u.email, name: u.name, password });
  });

  for (const [key, title] of Object.entries(sections)) {
    if (grouped[key]) {
      content += `\n${title}\n====================\n`;
      grouped[key].forEach(u => {
        const displayEmail = u.email.replace('mr..', '').replace('ms..', '').replace('dr..', '');
        content += `Email: ${displayEmail}\nPassword: ${u.password}\n\n`;
      });
    }
  }

  fs.writeFileSync(path.join(__dirname, '../myuse.txt'), content);
  console.log('Generated myuse.txt');
  process.exit(0);
}
generate();
