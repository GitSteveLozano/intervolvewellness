/**
 * Resizes a photo for the web and writes it to public/images/.
 *
 *   npm run image -- public/images/DSC_0431.jpg portrait.jpg
 *
 * Camera and phone exports run to several megabytes at 4000px+, which is the
 * single easiest way to make an otherwise fast site feel slow on a phone. The
 * portrait frame renders about 600px wide, so 1200px covers even a 2x display.
 * Aspect ratio is preserved — the 4:5 crop is done in CSS, so it stays
 * adjustable without re-exporting the file.
 */
import { readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const [input, outputName = 'portrait.jpg'] = process.argv.slice(2);
if (!input) {
  console.error('usage: npm run image -- <path-to-source> [output-name.jpg]');
  process.exit(1);
}

const MAX_WIDTH = 1200;
const out = join('public/images', outputName);

const source = await readFile(input);
const before = source.length;
const meta = await sharp(source).metadata();

const buffer = await sharp(source)
  .rotate() // honour EXIF orientation before stripping the metadata
  .resize({ width: Math.min(MAX_WIDTH, meta.width ?? MAX_WIDTH), withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toBuffer();

await writeFile(out, buffer);
const after = (await stat(out)).size;
const final = await sharp(buffer).metadata();

const kb = (n) => `${(n / 1024).toFixed(0)} kB`;
console.log(`${input}  ${meta.width}×${meta.height}  ${kb(before)}`);
console.log(`${out}  ${final.width}×${final.height}  ${kb(after)}  (${(100 - (after / before) * 100).toFixed(1)}% smaller)`);
