/**
 * Regenerates public/og.png — the 1200×630 card that shows up when the site
 * is pasted into iMessage, WhatsApp, Instagram DMs or Slack.
 * Run `npm run og` after changing the practice name or tagline.
 */
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';
import { site } from '../src/content/site.ts';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

// Break the tagline onto at most three lines of ~30 characters.
const wrap = (text, max = 30) => {
  const lines = [];
  let line = '';
  for (const word of String(text).split(/\s+/)) {
    if ((line + ' ' + word).trim().length > max) { lines.push(line.trim()); line = word; }
    else line += ' ' + word;
  }
  if (line.trim()) lines.push(line.trim());
  return lines.slice(0, 3);
};

const tagLines = wrap(site.tagline);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="22%" cy="28%" r="62%">
      <stop offset="0%" stop-color="#a8674a" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#241e2b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#241e2b"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g fill="none" stroke="#d9a183" stroke-width="1.5" opacity="0.28">
    <circle cx="1010" cy="500" r="190"/>
    <circle cx="1010" cy="500" r="130"/>
    <circle cx="1010" cy="500" r="70"/>
  </g>
  <text x="90" y="150" fill="#d9a183" font-family="sans-serif" font-size="24"
        letter-spacing="6" font-weight="600">RESTORATIVE HYPNOTHERAPY</text>
  <text x="90" y="270" fill="#f2ebe2" font-family="serif" font-size="82">${esc(site.name)}</text>
  ${tagLines
    .map((l, i) => `<text x="90" y="${360 + i * 56}" fill="#f2ebe2" fill-opacity="0.72"
        font-family="sans-serif" font-size="36">${esc(l)}</text>`)
    .join('\n  ')}
  <rect x="90" y="${372 + tagLines.length * 56}" width="72" height="3" fill="#d9a183"/>
</svg>`;

const out = new URL('../public/og.png', import.meta.url);
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(out, png);
console.log(`og.png written — ${(png.length / 1024).toFixed(1)} kB`);
