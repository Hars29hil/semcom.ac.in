const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') {
        if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
          filelist.push(dirFile);
        }
      } else {
        throw err;
      }
    }
  });
  return filelist;
};

const adminSrcDir = path.join(__dirname, 'admin/src');
const files = walkSync(adminSrcDir);

let updatedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace custom styles with home-like flat styles
  content = content.replace(/bg-brand-secondary/g, 'bg-accent');
  content = content.replace(/text-brand-secondary/g, 'text-accent');
  content = content.replace(/border-brand-secondary/g, 'border-accent');
  content = content.replace(/shadow-brand-secondary/g, 'shadow-accent');

  // Replace hex colors with semantic tokens
  content = content.replace(/text-\[\#1c2e5a\]/g, 'text-primary');
  content = content.replace(/bg-\[\#1c2e5a\]/g, 'bg-primary');
  content = content.replace(/text-\[\#0b807b\]/g, 'text-accent'); // Accent color
  content = content.replace(/bg-\[\#0a1a3b\]/g, 'bg-primary');

  // Replace clay/skeuomorphic classes with flat card styles
  content = content.replace(/clay border-none/g, 'bg-white border border-border shadow-sm');
  content = content.replace(/clay/g, 'bg-white border border-border shadow-sm');
  content = content.replace(/skeu-surface/g, 'bg-white border border-border shadow-sm');
  content = content.replace(/neu-inset/g, 'border border-border bg-slate-50 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-primary/20');
  content = content.replace(/neu/g, 'border border-border bg-white shadow-sm');

  // Remove some extreme border radius
  content = content.replace(/rounded-\[3rem\]/g, 'rounded-3xl');
  content = content.replace(/rounded-\[2\.5rem\]/g, 'rounded-2xl');
  content = content.replace(/rounded-\[2rem\]/g, 'rounded-2xl');

  // Clean up some other shadows
  content = content.replace(/shadow-\[0_32px_64px_-16px_rgba\(0,0,0,0\.06\)\]/g, 'shadow-[0_10px_30px_rgba(0,0,0,0.06)]');
  content = content.replace(/bg-teal-50/g, 'bg-accent/10');
  content = content.replace(/text-teal-600/g, 'text-accent');
  content = content.replace(/decoration-teal-500\/20/g, 'decoration-accent/20');

  // Replace font-serif
  content = content.replace(/font-serif/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFiles++;
  }
});

console.log(`Successfully updated ${updatedFiles} files in admin/src`);
