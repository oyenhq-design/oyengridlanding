const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58';
const destDir = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public';

const files = [
  { name: 'media__1782226740896.png', label: 'file1' },
  { name: 'media__1782226887743.png', label: 'file2' },
  { name: 'media__1782226938694.jpg', label: 'file3' },
  { name: 'media__1782226951506.jpg', label: 'file4' },
  { name: 'media__1782226964761.png', label: 'file5' }
];

files.forEach(f => {
  const srcPath = path.join(srcDir, f.name);
  const destPath = path.join(destDir, f.name);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${f.name} to public/`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
