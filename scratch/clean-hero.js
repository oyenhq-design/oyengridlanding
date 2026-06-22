const { Jimp } = require('c:/Users/ProjectPC/Desktop/oyengridlanding/node_modules/jimp');

async function main() {
  try {
    const inputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup.png';
    const outputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup-clean.png';

    console.log('Loading image from:', inputPath);
    const image = await Jimp.read(inputPath);

    // Get background color from pixel (0, 0)
    const idx0 = 0;
    const r0 = image.bitmap.data[idx0 + 0];
    const g0 = image.bitmap.data[idx0 + 1];
    const b0 = image.bitmap.data[idx0 + 2];
    console.log(`Detected background color at (0,0): R=${r0}, G=${g0}, B=${b0}`);

    console.log('Processing pixels to key out background...');
    let count = 0;
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      // Distance threshold from the background color
      const dist = Math.sqrt(
        Math.pow(red - r0, 2) +
        Math.pow(green - g0, 2) +
        Math.pow(blue - b0, 2)
      );

      // If the pixel is close to the background color, make it transparent
      if (dist < 32) {
        this.bitmap.data[idx + 3] = 0; // Transparent
        count++;
      }
    });

    console.log(`Made ${count} pixels transparent.`);
    console.log('Saving processed image to:', outputPath);
    await image.write(outputPath);
    console.log('Hero mockup clean complete!');
  } catch (error) {
    console.error('Error cleaning hero mockup:', error);
  }
}

main();
