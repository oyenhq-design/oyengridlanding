const { Jimp } = require('c:/Users/ProjectPC/Desktop/oyengridlanding/node_modules/jimp');

async function main() {
  try {
    const inputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup.png';
    const outputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup-clean.png';

    console.log('Loading image from:', inputPath);
    const image = await Jimp.read(inputPath);

    // Target background color (solid dark midnight-blue #050b14)
    const targetR = 5;
    const targetG = 11;
    const targetB = 20;

    console.log('Processing pixels with smart feathering...');
    let transparentCount = 0;
    let featheredCount = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      // Distance to target background color
      const dist = Math.sqrt(
        Math.pow(red - targetR, 2) +
        Math.pow(green - targetG, 2) +
        Math.pow(blue - targetB, 2)
      );

      // Keys out solid midnight-blue (#050b14) background pixels cleanly and feathers borders
      if (dist < 10) {
        this.bitmap.data[idx + 3] = 0;
        transparentCount++;
      } else if (dist < 25) {
        const factor = (dist - 10) / 15; // 0 to 1
        const alpha = Math.round(factor * 255);
        this.bitmap.data[idx + 3] = Math.min(this.bitmap.data[idx + 3], alpha);
        featheredCount++;
      }
    });

    console.log(`Smart Clean: ${transparentCount} transparent, ${featheredCount} feathered.`);
    console.log('Saving processed image to:', outputPath);
    await image.write(outputPath);
    console.log('Hero mockup clean complete!');
  } catch (error) {
    console.error('Error cleaning hero mockup:', error);
  }
}

main();
