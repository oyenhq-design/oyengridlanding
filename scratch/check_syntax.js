const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'pricing', 'page.tsx');
const code = fs.readFileSync(filePath, 'utf8');

let openBraces = [];
for (let i = 0; i < code.length; i++) {
  if (code[i] === '{') {
    const lineNum = code.substring(0, i).split('\n').length;
    const context = code.substring(Math.max(0, i - 40), i).trim().replace(/\n/g, ' ');
    openBraces.push({ i, lineNum, context });
  } else if (code[i] === '}') {
    if (openBraces.length === 0) {
      console.log('Extra closing brace at line', code.substring(0, i).split('\n').length);
    } else {
      openBraces.pop();
    }
  }
}
console.log('Unclosed braces count:', openBraces.length);
openBraces.forEach(b => {
  console.log(`Unclosed brace opened at line ${b.lineNum}: "${b.context}"`);
});
