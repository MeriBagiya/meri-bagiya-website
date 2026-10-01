const fs = require('fs');
const path = require('path');
const { plantPhotos } = require('./plantPhotos');

const root = path.resolve(__dirname, '..', '..');
const publicDir = path.join(root, 'public');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(jsx?|json)$/.test(e.name) && !/\.test\./.test(e.name)) out.push(p);
  }
  return out;
}

test('every plant in the photo list has a file', () => {
  const missing = plantPhotos.filter((p) => !fs.existsSync(path.join(publicDir, 'assets/images/plants', p.file)));
  expect(missing.map((p) => p.file)).toEqual([]);
});

test('every local image path used in src exists in public', () => {
  const re = /\/assets\/images\/[A-Za-z0-9_\-./]+\.(?:jpe?g|png|webp|svg|gif)/g;
  const missing = new Set();
  for (const f of walk(path.join(root, 'src'))) {
    for (const m of fs.readFileSync(f, 'utf8').match(re) || []) {
      if (!fs.existsSync(path.join(publicDir, m))) missing.add(`${path.relative(root, f)}: ${m}`);
    }
  }
  expect([...missing]).toEqual([]);
});

test('every image file in public/assets/images is a real image', () => {
  const sig = {
    '.jpg': (b) => b[0] === 0xff && b[1] === 0xd8,
    '.jpeg': (b) => b[0] === 0xff && b[1] === 0xd8,
    '.png': (b) => b[0] === 0x89 && b[1] === 0x50,
    '.webp': (b) => b.slice(0, 4).toString() === 'RIFF' && b.slice(8, 12).toString() === 'WEBP',
    '.gif': (b) => b.slice(0, 3).toString() === 'GIF',
  };
  const bad = [];
  (function scan(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) scan(p);
      else if (sig[path.extname(e.name).toLowerCase()] && !sig[path.extname(e.name).toLowerCase()](fs.readFileSync(p))) bad.push(path.relative(publicDir, p));
    }
  })(path.join(publicDir, 'assets/images'));
  expect(bad).toEqual([]);
});
