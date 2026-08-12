const fs = require('fs');
const path = require('path');

const file = path.join('c:', 'Users', 'ProjectPC', 'Desktop', 'oyengridlanding', 'app', 'pricing', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Remove SolutionType and unused types
content = content.replace(/type SolutionType = "bootcamps" \| "events" \| "education" \| "enterprise";\s*interface PlanFeatures {[\s\S]*?} \/\/ ─── SVG ICONS ───/m, "// ─── SVG ICONS ───");

// 2. Remove all static lists (from solutionsList down to the corner detail)
// Let's find "// ─── SOLUTIONS LIST ───" and replace up to "// ─── CORNER DETAIL ───"
const startStatic = content.indexOf('// ─── SOLUTIONS LIST');
const endStatic = content.indexOf('// ─── CORNER DETAIL');
if (startStatic !== -1 && endStatic !== -1) {
  content = content.slice(0, startStatic) + content.slice(endStatic);
}

// 3. Fix state typing in PricingContent
content = content.replace(/const VALID_SOLUTIONS: SolutionType\[\] = \["bootcamps", "events", "education", "enterprise"\];/g, "");
content = content.replace(/const urlSolution = searchParams\.get\("solution"\) as SolutionType \| null;/g, "const urlSolution = searchParams.get(\"solution\");");
content = content.replace(/const initialSolution: SolutionType =[\s\S]*?;\s*const \[selectedSolution, setSelectedSolution\] = useState<SolutionType>\(initialSolution\);/m, 
`const [selectedSolution, setSelectedSolution] = useState<string>(urlSolution || "bootcamps");`);
content = content.replace(/const activeSolution = solutionsList\.find\(\(s\) => s\.id === selectedSolution\)!;/g, 
`// Will compute dynamically`);

content = content.replace(/Record<SolutionType, \{ text: string; bg: string; border: string; borderActive: string; bgSolid: string \}>/g, 
`Record<string, { text: string; bg: string; border: string; borderActive: string; bgSolid: string }>`);

fs.writeFileSync(file, content, 'utf8');
console.log("Replaced types and static lists.");
