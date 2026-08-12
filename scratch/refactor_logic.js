const fs = require('fs');
const path = require('path');

const file = path.join('c:', 'Users', 'ProjectPC', 'Desktop', 'oyengridlanding', 'app', 'pricing', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

const anchor = `useEffect(() => {`;
const insertPos = content.indexOf(anchor);

if (insertPos === -1) {
  console.log("Could not find useEffect");
  process.exit(1);
}

// We need to replace the logic after useEffect
const replacementScript = `
  const dynamicSolutions = React.useMemo(() => {
    if (!dbPlans.length) return [];
    
    // Get unique categories
    const categories = Array.from(new Set(dbPlans.map(p => p.category)));
    
    return categories.map((cat, idx) => {
      const catPlans = dbPlans.filter(p => p.category === cat);
      const catAudiences = catPlans.flatMap(p => {
        const aud = dbTargetAudiences.find(t => t.plan_id === p.id);
        return aud?.recommended_for || [];
      });
      const uniqueAudiences = Array.from(new Set(catAudiences));
      
      const isBootcamps = cat.toLowerCase().includes('bootcamp');
      const isEvents = cat.toLowerCase().includes('event');
      const isEducation = cat.toLowerCase().includes('education');
      const isEnterprise = cat.toLowerCase().includes('enterprise');
      
      const id = isBootcamps ? 'bootcamps' : isEvents ? 'events' : isEducation ? 'education' : isEnterprise ? 'enterprise' : cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const color = isBootcamps ? '#E8B84A' : isEvents ? '#34d399' : isEducation ? '#60a5fa' : isEnterprise ? '#a78bfa' : '#E8B84A';
      const bgGlow = isBootcamps ? 'rgba(232,184,74,0.06)' : isEvents ? 'rgba(52,211,153,0.06)' : isEducation ? 'rgba(96,165,250,0.06)' : isEnterprise ? 'rgba(167,139,250,0.06)' : 'rgba(232,184,74,0.06)';
      const icon = isBootcamps ? BookOpen : isEvents ? PlayCircle : isEducation ? GraduationCapIcon : isEnterprise ? NetworkIcon : BookOpen;
      
      return {
        id,
        originalCategory: cat,
        title: cat,
        icon,
        color,
        bgGlow,
        audience: uniqueAudiences,
        tagline: catPlans.length > 0 ? (dbMarketingCopy.find(m => m.plan_id === catPlans[0].id)?.subheadline || "") : ""
      };
    });
  }, [dbPlans, dbTargetAudiences, dbMarketingCopy]);

  const activeSolution = dynamicSolutions.find(s => s.id === selectedSolution) || dynamicSolutions[0];
  const currentPlans = activeSolution ? dbPlans.filter(p => p.category === activeSolution.originalCategory) : [];
  
  // Update state + push URL param
  const handleSelectSolution = useCallback(
    (id: string) => {
      setSelectedSolution(id);
      setActiveFaq(null);
      const params = new URLSearchParams(searchParams.toString());
      params.set("solution", id);
      router.push(\`\${pathname}?\${params.toString()}\`, { scroll: false });
    },
    [router, pathname, searchParams],
  );
`;

// Replace `const currentPlans = dbPlans.filter(p => p.category === activeSolution.title);` and handleSelectSolution
content = content.replace(/const currentPlans = dbPlans\.filter\([\s\S]*?\[router, pathname, searchParams\],\s*\);/m, replacementScript);

content = content.replace(/import \{ useState, useRef, useCallback, Suspense, useEffect \} from "react";/, `import React, { useState, useRef, useCallback, Suspense, useEffect } from "react";`);
content = content.replace(/const handleSelectSolution = useCallback\([\s\S]*?\(id: SolutionType\)/, `const handleSelectSolution = useCallback(\n    (id: string)`);

// Also fix `activeSolution` in handleSelectSolution if it was used there.
fs.writeFileSync(file, content, 'utf8');
console.log("Updated state logic.");
