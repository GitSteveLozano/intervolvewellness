/**
 * Renders a background texture from a photograph.
 *
 *   npm run texture -- public/images/some-photo.jpg
 *
 * The output is not meant to read as a picture. It is blurred past the point
 * of recognition and mostly desaturated, so what survives is tone and a slow
 * variation in light — enough to keep large flat areas from looking sterile,
 * not enough to compete with type or pull the palette off monochrome.
 *
 * It renders small on purpose. At this blur there is no detail left to lose,
 * and the browser scales it up for free.
 */
import { readFile, writeFile, stat } from 'node:fs/promises';
import sharp from 'sharp';

const [input, out = 'public/images/texture.jpg'] = process.argv.slice(2);
if (!input) {
  console.error('usage: npm run texture -- <path-to-source> [output]');
  process.exit(1);
}

const buffer = await sharp(await readFile(input))
  .rotate()
  .resize({ width: 600, height: 600, fit: 'cover' })
  .modulate({ saturation: 0.5 })
  .blur(28)
  // Compress the whole tonal range into the top fifth, so even the darkest
  // part of the texture is lighter than the page behind it. That way it can
  // only ever warm an area, never darken one — no blend mode or opacity
  // mistake can cost text its contrast.
  .linear(0.2, 202)
  .jpeg({ quality: 78, mozjpeg: true })
  .toBuffer();

await writeFile(out, buffer);
console.log(`${out}  ${((await stat(out)).size / 1024).toFixed(0)} kB`);
