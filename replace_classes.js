const fs = require('fs');
const path = require('path');

const directory = '/home/daniel/documents/projetos-prog/deploywise-portfolio/src';

const replacements = {
  'bg-bg-base': 'bg-background',
  'bg-bg-surface': 'bg-card',
  'bg-bg-elevated': 'bg-muted',
  'text-text-main': 'text-foreground',
  'text-text-muted': 'text-muted-foreground',
  'text-accent': 'text-primary',
  'bg-accent': 'bg-primary',
  'border-accent': 'border-primary',
  'ring-accent': 'ring-primary',
  'fill-accent': 'fill-primary'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(directory);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [oldClass, newClass] of Object.entries(replacements)) {
    if (content.includes(oldClass)) {
      content = content.split(oldClass).join(newClass);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
