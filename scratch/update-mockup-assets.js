const fs = require('fs');

const bgSrc = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/zoom_scenic_backdrop_1782236094588.png';
const bgDest = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/zoom-scenic-bg.png';

const slideSrc = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/slide_note_mockup_1782236340245.png';
const slideDest = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/slide-deliver-training.jpg';

fs.copyFileSync(bgSrc, bgDest);
console.log('Updated zoom-scenic-bg.png');

fs.copyFileSync(slideSrc, slideDest);
console.log('Updated slide-deliver-training.jpg (replacing it with the workspace slide)');
