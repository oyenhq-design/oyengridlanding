const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'pricing', 'page.tsx');
const code = fs.readFileSync(filePath, 'utf8');

let stack = [];
for (let i = 0; i < code.length; i++) {
  if (code[i] === '{') {
    const lineNum = code.substring(0, i).split('\n').length;
    const context = code.substring(Math.max(0, i - 40), i).trim().replace(/\n/g, ' ');
    stack.push({ lineNum, context });
  } else if (code[i] === '}') {
    if (stack.length === 0) {
      console.log(`Extra close brace at line ${code.substring(0, i).split('\n').length}`);
    } else {
      const popped = stack.pop();
      // Let's print braces that span a long distance or just check the last one
    }
  }
}
if (stack.length > 0) {
  console.log("Unmatched open braces remaining:");
  stack.forEach(s => console.log(`Line ${s.lineNum}: "${s.context}"`));
} else {
  console.log("All braces matched!");
}
