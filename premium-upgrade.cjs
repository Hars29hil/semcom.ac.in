const fs = require('fs');
const path = require('path');

const adminDir = path.join(__dirname, 'src/pages/admin');

const replacements = [
  // Premium Buttons
  { regex: /\bbg-blue-100 text-blue-700\b/g, replacement: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all' },
  
  // Color Scheme for selects
  { regex: /\[color-scheme:dark\]/g, replacement: '[color-scheme:light]' },
  
  // Make borders pop like glass
  { regex: /\bborder-slate-200\/60\b/g, replacement: 'border-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]' },
  { regex: /\bborder-slate-200\b/g, replacement: 'border-white' },

  // Background Frosting increase
  { regex: /\bbg-white\/60\b/g, replacement: 'bg-white/80 backdrop-blur-md' },

  // Text Contrast
  { regex: /\btext-slate-800\b/g, replacement: 'text-slate-900' },
  
  // Remove dark backgrounds in select dropdowns
  { regex: /\bbg-primary\b/g, replacement: 'bg-white' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let original = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated premium styling: ${file}`);
      }
    }
  }
}

processDirectory(adminDir);
console.log('Premium upgrade complete.');
