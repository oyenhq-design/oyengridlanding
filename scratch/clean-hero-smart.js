const { Jimp } = require('c:/Users/ProjectPC/Desktop/oyengridlanding/node_modules/jimp');

async function main() {
  try {
    const inputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup.png';
    const outputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup-clean.png';

    console.log('Loading image from:', inputPath);
    const image = await Jimp.read(inputPath);

    // Target background color (cream/beige)
    const targetR = 239;
    const targetG = 227;
    const targetB = 217;

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

      // Using a very tight threshold (e.g. 15) to only transparentize the actual solid cream background,
      // and feathering over a small range (15 to 30) to smooth the outer borders.
      // This protects any lighter color components inside the dashboard mockup from getting keyed out.
      if (dist < 15) {
        this.bitmap.data[idx + 3] = 0;
        transparentCount++;
      } else if (dist < 30) {
        const factor = (dist - 15) / 15; // 0 to 1
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
