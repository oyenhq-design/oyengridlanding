const { Jimp } = require('c:/Users/ProjectPC/Desktop/oyengridlanding/node_modules/jimp');

async function main() {
  try {
    const inputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/oyen-grid-icon.png';
    const outputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/oyen-grid-icon-clean.png';

    console.log('Loading image from:', inputPath);
    const image = await Jimp.read(inputPath);

    console.log('Processing pixels...');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      // If the pixel is close to black, make it fully transparent
      if (red < 30 && green < 30 && blue < 30) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });

    console.log('Saving processed image to:', outputPath);
    await image.write(outputPath);
    console.log('Logo clean complete!');
  } catch (error) {
    console.error('Error cleaning logo:', error);
  }
}

main();
