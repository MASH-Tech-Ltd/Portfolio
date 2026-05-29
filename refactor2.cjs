const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replacements = [
    { from: /color:\s*['"]#64748b['"]/g, to: "color: 'var(--text-secondary)'" },
    { from: /color:\s*['"]#94a3b8['"]/g, to: "color: 'var(--text-secondary)'" },
    { from: /color:\s*['"]#fff['"]/g, to: "color: 'var(--text-primary)'" },
    { from: /color:\s*['"]#ffffff['"]/g, to: "color: 'var(--text-primary)'" },
    { from: /background:\s*['"]#060818['"]/g, to: "background: 'var(--bg-color)'" },
    { from: /backgroundColor:\s*['"]#060818['"]/g, to: "backgroundColor: 'var(--bg-color)'" },
    { from: /color:\s*['"]#060818['"]/g, to: "color: 'var(--bg-color)'" }
  ];

  replacements.forEach(r => {
    if (content.match(r.from)) {
      content = content.replace(r.from, r.to);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content);
  }
});

console.log("Refactoring complete");
