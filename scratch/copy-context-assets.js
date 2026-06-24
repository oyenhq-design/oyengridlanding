const fs = require('fs');

const officeSrc = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/media__1782241586000.jpg';
const officeDest = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/office-context-bg.jpg';

const darkSrc = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/slide_dark_dashboard_1782241948048.png';
const darkDest = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/slide-dark-dashboard.png';

fs.copyFileSync(officeSrc, officeDest);
console.log('Saved office-context-bg.jpg');

fs.copyFileSync(darkSrc, darkDest);
console.log('Saved slide-dark-dashboard.png');
