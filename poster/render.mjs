// Renders poster.html to ../entry.png (JPEG bytes, which the gate accepts under that name) and checks the gate.
// Dev tool only: the entry program (main.ts) just copies the committed entry.png.
// Usage: node poster/render.mjs [jpegQuality 2..31, lower is better; default 2]
import { execFileSync } from 'node:child_process';
import { readFileSync, statSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, '..');
const build = join(repo, 'build');
mkdirSync(build, { recursive: true });

const chrome = process.env.CHROME ?? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const shot = join(build, 'shot.png');
execFileSync(chrome, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1024,1024', '--default-background-color=00000000',
  `--screenshot=${shot}`, pathToFileURL(join(here, 'poster.html')).href,
], { stdio: 'ignore' });

const q = String(process.argv[2] ?? '2');
const out = join(repo, 'entry.png');
// -pix_fmt yuvj444p keeps full colour resolution so thin red type stays sharp.
execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', shot, '-pix_fmt', 'yuvj444p', '-q:v', q, '-f', 'mjpeg', out]);
execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', out, '-vf', 'scale=300:-1:flags=area', join(build, 'preview-300.png')]);

// Gate: whole JPEG, <= 1 MiB, <= 1024 x 1024.
const b = readFileSync(out);
if (b[0] !== 0xff || b[1] !== 0xd8 || b[b.length - 2] !== 0xff || b[b.length - 1] !== 0xd9) throw new Error('not a whole JPEG');
let i = 2, w = 0, h = 0;
while (i < b.length) {
  const marker = b[i + 1];
  const len = b.readUInt16BE(i + 2);
  if (marker >= 0xc0 && marker <= 0xc3) { h = b.readUInt16BE(i + 5); w = b.readUInt16BE(i + 7); break; }
  i += 2 + len;
}
const bytes = statSync(out).size;
console.log(`entry.png: JPEG ${w}x${h}, ${bytes} bytes (q=${q})`);
if (bytes > 1048576 || w > 1024 || h > 1024 || !w) throw new Error('gate fail');
