const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const indexCssPath = path.join(srcDir, 'index.css');

// 1. Update index.css
let indexCss = fs.readFileSync(indexCssPath, 'utf8');

const themeVars = `
:root {
  --bg-color: #f8fafc;
  --bg-color-alt: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --glass-bg: rgba(255,255,255,0.8);
  --glass-border: rgba(0,0,0,0.08);
  --glass-hover-bg: rgba(255,255,255,0.9);
  --glass-hover-border: rgba(59,130,246,0.3);
  --nav-bg: rgba(248, 250, 252, 0.85);
  --nav-border: rgba(0,0,0,0.07);
  --btn-outline-text: #0f172a;
  --btn-outline-border: rgba(0,0,0,0.25);
  --input-bg: rgba(0,0,0,0.03);
  --input-border: rgba(0,0,0,0.1);
  --card-bg: rgba(255,255,255,0.8);
  --card-border: rgba(0,0,0,0.08);
  --scrollbar-track: #f8fafc;
  --benefit-bg: rgba(255,255,255,0.8);
  --benefit-border: rgba(0,0,0,0.08);
  --testimonial-bg: rgba(255,255,255,0.8);
  --project-card-bg: rgba(255,255,255,0.8);
  --project-card-shadow: rgba(0,0,0,0.1);
  --filter-btn-text: #64748b;
  --filter-btn-border: rgba(0,0,0,0.15);
}

:root.dark {
  --bg-color: #060818;
  --bg-color-alt: #0d1035;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --glass-bg: rgba(255,255,255,0.04);
  --glass-border: rgba(255,255,255,0.08);
  --glass-hover-bg: rgba(255,255,255,0.06);
  --glass-hover-border: rgba(59,130,246,0.4);
  --nav-bg: rgba(6, 8, 24, 0.85);
  --nav-border: rgba(255,255,255,0.07);
  --btn-outline-text: #ffffff;
  --btn-outline-border: rgba(255,255,255,0.25);
  --input-bg: rgba(255,255,255,0.05);
  --input-border: rgba(255,255,255,0.1);
  --card-bg: rgba(255,255,255,0.03);
  --card-border: rgba(255,255,255,0.08);
  --scrollbar-track: #060818;
  --benefit-bg: rgba(255,255,255,0.04);
  --benefit-border: rgba(255,255,255,0.08);
  --testimonial-bg: rgba(255,255,255,0.04);
  --project-card-bg: rgba(255,255,255,0.03);
  --project-card-shadow: rgba(0,0,0,0.4);
  --filter-btn-text: #94a3b8;
  --filter-btn-border: rgba(255,255,255,0.15);
}
`;

if (!indexCss.includes(':root {')) {
  indexCss = indexCss.replace(/(\* \{.*?\}\n)/, '$1\n' + themeVars + '\n');
}

indexCss = indexCss.replace(/background-color:\s*#060818;/g, 'background-color: var(--bg-color);');
indexCss = indexCss.replace(/color:\s*#ffffff;/g, 'color: var(--text-primary);');
indexCss = indexCss.replace(/background:\s*#060818;/g, 'background: var(--bg-color);');
indexCss = indexCss.replace(/background:\s*rgba\(255,255,255,0\.04\);/g, 'background: var(--glass-bg);');
indexCss = indexCss.replace(/border:\s*1px solid rgba\(255,255,255,0\.08\);/g, 'border: 1px solid var(--glass-border);');
indexCss = indexCss.replace(/background:\s*linear-gradient\(180deg,#060818 0%,#0d1035 50%,#060818 100%\);/g, 'background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-color-alt) 50%, var(--bg-color) 100%);');
indexCss = indexCss.replace(/color:\s*#fff;/g, 'color: var(--text-primary);');
indexCss = indexCss.replace(/color:#fff;/g, 'color:var(--text-primary);');
indexCss = indexCss.replace(/border:1px solid rgba\(255,255,255,\.25\);/g, 'border:1px solid var(--btn-outline-border);');
indexCss = indexCss.replace(/background:\s*rgba\(255,255,255,0\.03\);/g, 'background: var(--card-bg);');
indexCss = indexCss.replace(/background:rgba\(255,255,255,\.03\);/g, 'background:var(--project-card-bg);');
indexCss = indexCss.replace(/background:rgba\(255,255,255,\.04\);/g, 'background:var(--testimonial-bg);');
indexCss = indexCss.replace(/box-shadow:0 20px 40px rgba\(0,0,0,\.4\);/g, 'box-shadow:0 20px 40px var(--project-card-shadow);');
indexCss = indexCss.replace(/background:rgba\(255,255,255,\.05\);/g, 'background:var(--input-bg);');
indexCss = indexCss.replace(/border:1px solid rgba\(255,255,255,\.1\);/g, 'border:1px solid var(--input-border);');
indexCss = indexCss.replace(/border:1px solid rgba\(255,255,255,\.15\);/g, 'border:1px solid var(--filter-btn-border);');
indexCss = indexCss.replace(/color:#94a3b8;/g, 'color:var(--filter-btn-text);');
indexCss = indexCss.replace(/background:rgba\(255,255,255,\.04\);/g, 'background:var(--benefit-bg);');
indexCss = indexCss.replace(/border:1px solid rgba\(255,255,255,\.08\);/g, 'border:1px solid var(--benefit-border);');
indexCss = indexCss.replace(/color:#94a3b8;/g, 'color:var(--text-secondary);');
indexCss = indexCss.replace(/color:#fff;/g, 'color:var(--text-primary);');
fs.writeFileSync(indexCssPath, indexCss);

// 2. Process all JSX files in components and pages
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

  // Replace hardcoded inline colors with variables
  const replacements = [
    { from: /'rgba\(6,8,24,\.85\)'/g, to: "'var(--nav-bg)'" },
    { from: /'1px solid rgba\(255,255,255,\.07\)'/g, to: "'1px solid var(--nav-border)'" },
    { from: /'#94a3b8'/g, to: "'var(--text-secondary)'" },
    { from: /'#fff'/g, to: "'var(--text-primary)'" },
    { from: /'#ffffff'/g, to: "'var(--text-primary)'" },
    { from: /'#060818'/g, to: "'var(--bg-color)'" },
    { from: /rgba\(255,255,255,0\.05\)/g, to: "var(--input-bg)" },
    { from: /rgba\(255,255,255,0\.08\)/g, to: "var(--card-border)" },
    { from: /rgba\(255,255,255,0\.04\)/g, to: "var(--glass-bg)" },
    { from: /rgba\(255,255,255,0\.1\)/g, to: "var(--input-border)" },
    { from: /rgba\(255,255,255,\.05\)/g, to: "var(--input-bg)" },
    { from: /rgba\(255,255,255,\.08\)/g, to: "var(--card-border)" },
    { from: /rgba\(255,255,255,\.04\)/g, to: "var(--glass-bg)" },
    { from: /rgba\(255,255,255,\.1\)/g, to: "var(--input-border)" }
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
