const fs = require('fs');

const bgSrc = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/media__1782241586000.jpg';
const bgDest = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/zoom-scenic-bg.png';

const slideSrc = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/slide_dark_dashboard_1782241948048.png';
const slideDest = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/slide-dark-dashboard.png';

fs.copyFileSync(bgSrc, bgDest);
console.log('Updated zoom-scenic-bg.png (with office space image)');

fs.copyFileSync(slideSrc, slideDest);
console.log('Saved slide-dark-dashboard.png');
