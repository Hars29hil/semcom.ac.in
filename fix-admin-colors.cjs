const fs = require('fs');
const path = require('path');

const adminDir = path.join(__dirname, 'src/pages/admin');

const replacements = [
  // Text colors
  { regex: /\btext-white\/90\b/g, replacement: 'text-slate-800' },
  { regex: /\btext-white\/80\b/g, replacement: 'text-slate-700' },
  { regex: /\btext-white\/60\b/g, replacement: 'text-slate-500' },
  { regex: /\btext-white\/50\b/g, replacement: 'text-slate-500' },
  { regex: /\btext-white\/40\b/g, replacement: 'text-slate-400' },
  { regex: /\btext-white\b/g, replacement: 'text-slate-800' },
  
  // Background colors
  { regex: /\bbg-white\/5\b/g, replacement: 'bg-white/60' },
  { regex: /\bbg-white\/10\b/g, replacement: 'bg-white/80' },
  { regex: /\bbg-white\/20\b/g, replacement: 'bg-slate-100' },
  { regex: /\bhover:bg-white\/10\b/g, replacement: 'hover:bg-slate-100' },
  { regex: /\bhover:bg-white\/20\b/g, replacement: 'hover:bg-slate-200' },
  { regex: /\bfocus:bg-white\/10\b/g, replacement: 'focus:bg-slate-100' },
  { regex: /\bfocus-visible:bg-white\/10\b/g, replacement: 'focus-visible:bg-slate-100' },
  
  // Border colors
  { regex: /\bborder-white\/10\b/g, replacement: 'border-slate-200/60' },
  { regex: /\bborder-white\/20\b/g, replacement: 'border-slate-200' },
  { regex: /\bborder-white\/30\b/g, replacement: 'border-slate-300' },

  // Focus rings
  { regex: /\bfocus-visible:ring-white\/30\b/g, replacement: 'focus-visible:ring-slate-300' },
  
  // Placeholders
  { regex: /\bplaceholder:text-white\/40\b/g, replacement: 'placeholder:text-slate-400' },

  // Table row hover
  { regex: /\bhover:bg-white\/5\b/g, replacement: 'hover:bg-slate-50' },

  // Specific accent combos
  { regex: /\bbg-accent text-primary\b/g, replacement: 'bg-blue-100 text-blue-700' },
  
  // Inner card backgrounds that need to stand out
  { regex: /\bbg-primary\b/g, replacement: 'bg-white' }, // e.g. for DialogContent
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
        console.log(`Updated: ${file}`);
      }
    }
  }
}

processDirectory(adminDir);
console.log('Done replacing colors in admin pages.');
