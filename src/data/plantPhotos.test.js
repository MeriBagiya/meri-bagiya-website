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
