const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'pricing', 'page.tsx');
const code = fs.readFileSync(filePath, 'utf8');

let stack = [];
for (let i = 0; i < code.length; i++) {
  if (code[i] === '(') {
    const lineNum = code.substring(0, i).split('\n').length;
    const context = code.substring(Math.max(0, i - 40), i).trim().replace(/\n/g, ' ');
    stack.push({ lineNum, context });
  } else if (code[i] === ')') {
    if (stack.length === 0) {
      console.log(`Extra close paren at line ${code.substring(0, i).split('\n').length}`);
    } else {
      stack.pop();
    }
  }
}
if (stack.length > 0) {
  console.log("Unmatched open parens remaining:");
  stack.forEach(s => console.log(`Line ${s.lineNum}: "${s.context}"`));
} else {
  console.log("All parens matched!");
}
