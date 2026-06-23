const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public';

const renaming = [
  { from: 'media__1782226740896.png', to: 'zoom-scenic-bg.png' },
  { from: 'media__1782226887743.png', to: 'platform-capabilities-old.png' },
  { from: 'media__1782226938694.jpg', to: 'slide-deliver-training.jpg' },
  { from: 'media__1782226951506.jpg', to: 'slide-dashboard.jpg' },
  { from: 'media__1782226964761.png', to: 'slide-competencies.png' }
];

renaming.forEach(r => {
  const fromPath = path.join(publicDir, r.from);
  const toPath = path.join(publicDir, r.to);
  if (fs.existsSync(fromPath)) {
    fs.copyFileSync(fromPath, toPath);
    console.log(`Renamed/copied ${r.from} -> ${r.to}`);
  } else {
    console.error(`File not found: ${fromPath}`);
  }
});
