const { Jimp } = require('c:/Users/ProjectPC/Desktop/oyengridlanding/node_modules/jimp');
const fs = require('fs');

async function main() {
  const src = 'C:/Users/ProjectPC/.gemini/antigravity-ide/brain/37cfd101-b7f7-4556-adb1-05eb4e08ab58/media__1782197421001.jpg';
  const destFull = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/human-coordination-full.jpg';
  const destCrop = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/human-coordination-mockup.png';

  console.log('Copying file to public folder...');
  fs.copyFileSync(src, destFull);
  console.log('Copied full image to:', destFull);

  const img = await Jimp.read(src);
  console.log(`Dimensions: width=${img.bitmap.width}, height=${img.bitmap.height}`);

  // In a standard 4:3 or 16:9 layout of Image 1:
  // The tablet graphic starts around 30%-40% of the width and occupies the rest.
  // Let's crop from 33% width to 100% width, and full height.
  const cropX = Math.floor(img.bitmap.width * 0.30);
  const cropWidth = img.bitmap.width - cropX;
  const cropHeight = img.bitmap.height;

  console.log(`Cropping from X=${cropX}, Y=0, Width=${cropWidth}, Height=${cropHeight}`);
  img.crop({ x: cropX, y: 0, w: cropWidth, h: cropHeight });
  
  await img.write(destCrop);
  console.log('Saved cropped mockup to:', destCrop);
}

main().catch(console.error);
