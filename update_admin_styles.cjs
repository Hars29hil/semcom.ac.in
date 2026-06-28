const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages', 'admin');

// Map of strings to replace
const replacements = [
  { search: /text-slate-900/g, replace: 'text-primary' },
  { search: /text-slate-500/g, replace: 'text-muted' },
  { search: /text-slate-400/g, replace: 'text-muted-foreground' },
  { search: /text-slate-800/g, replace: 'text-primary' },
  { search: /text-slate-700/g, replace: 'text-primary-light' },
  { search: /text-slate-600/g, replace: 'text-muted' },
  { search: /bg-slate-100/g, replace: 'bg-background' },
  { search: /bg-slate-50/g, replace: 'bg-background' },
  { search: /border-slate-200/g, replace: 'border-border' },
  { search: /border-slate-300/g, replace: 'border-border' },
  // specific glass UI to standard surface
  { search: /bg-white\/80 backdrop-blur-md/g, replace: 'bg-surface' },
  { search: /bg-white\/60 backdrop-blur-xl/g, replace: 'bg-surface' },
  { search: /bg-white\/60/g, replace: 'bg-surface' },
  { search: /bg-white\/80/g, replace: 'bg-surface' },
  { search: /border-white shadow-\[inset_0_1px_0_rgba\(255,255,255,0\.5\)\]/g, replace: 'border-border shadow-sm' },
  { search: /border-white/g, replace: 'border-border' },
  { search: /shadow-\[inset_0_1px_0_rgba\(255,255,255,0\.5\)\]/g, replace: 'shadow-sm' },
];

function processDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
         processDirectory(filePath);
      } else if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        replacements.forEach(({ search, replace }) => {
          if (content.match(search)) {
            content = content.replace(search, replace);
            modified = true;
          }
        });

        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated ${file}`);
        }
      }
    });
  });
}

processDirectory(directoryPath);
