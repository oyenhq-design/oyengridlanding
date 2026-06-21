const { Jimp } = require('c:/Users/ProjectPC/Desktop/oyengridlanding/node_modules/jimp');

async function main() {
  try {
    const inputPath = 'c:/Users/ProjectPC/Desktop/oyengridlanding/public/hero-mockup.png';
    const image = await Jimp.read(inputPath);
    const w = image.bitmap.width;
    const h = image.bitmap.height;

    const corners = [
      { name: 'Top-Left', x: 0, y: 0 },
      { name: 'Top-Right', x: w - 1, y: 0 },
      { name: 'Bottom-Left', x: 0, y: h - 1 },
      { name: 'Bottom-Right', x: w - 1, y: h - 1 }
    ];

    for (const c of corners) {
      const idx = (w * c.y + c.x) * 4;
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      console.log(`${c.name} (${c.x}, ${c.y}): R=${r}, G=${g}, B=${b}`);
    }
  } catch (err) {
    console.error(err);
  }
}
main();
