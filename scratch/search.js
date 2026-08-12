const fs = require('fs');
const code = fs.readFileSync('app/pricing/page.tsx', 'utf8');
const lines = code.split('\n');

function find(term) {
  console.log(`=== Matches for: ${term} ===`);
  lines.forEach((line, i) => {
    if (line.toLowerCase().includes(term.toLowerCase())) {
      console.log(`${i + 1}: ${line.trim()}`);
    }
  });
}

find('audience');
find('target');
find('marketing');
find('discount');
find('annual');
find('key={');
