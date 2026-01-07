const fs = require('fs');
const path = require('path');
const https = require('https');

const srcDir = path.join(__dirname, '..', 'src');
const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'unsplash');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find all Unsplash URLs in the codebase
function findUnsplashUrls(dir) {
  const urls = new Map(); // Map of photo ID -> full URL info

  function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9-]+)\?w=(\d+)&?q?=?(\d+)?/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      const photoId = match[1];
      const width = match[2];
      const quality = match[3] || '80';
      const fullUrl = match[0];

      // Store the largest width version for each photo
      if (!urls.has(photoId) || parseInt(width) > parseInt(urls.get(photoId).width)) {
        urls.set(photoId, { photoId, width, quality, fullUrl });
      }
    }
  }

  function scanDir(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {
        scanDir(itemPath);
      } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
        scanFile(itemPath);
      }
    }
  }

  scanDir(dir);
  return urls;
}

// Download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${filename} (already exists)`);
      resolve(filePath);
      return;
    }

    console.log(`Downloading ${filename}...`);

    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(filePath);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filePath);
        });
      }
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Update file references
function updateFileReferences(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  for (const [oldUrl, newPath] of replacements) {
    if (content.includes(oldUrl)) {
      // Replace all variations of this URL (different widths/qualities)
      const photoId = oldUrl.match(/photo-([a-zA-Z0-9-]+)/)[1];
      const regex = new RegExp(`https://images\\.unsplash\\.com/photo-${photoId}\\?w=\\d+&?q?=?\\d*`, 'g');
      content = content.replace(regex, newPath);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

// Update all files in directory
function updateAllFiles(dir, replacements) {
  function processDir(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {
        processDir(itemPath);
      } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
        updateFileReferences(itemPath, replacements);
      }
    }
  }
  processDir(dir);
}

async function main() {
  console.log('Scanning for Unsplash URLs...');
  const urls = findUnsplashUrls(srcDir);
  console.log(`Found ${urls.size} unique Unsplash images\n`);

  const replacements = [];

  // Download all images
  for (const [photoId, info] of urls) {
    const filename = `${photoId}.jpg`;
    const downloadUrl = `https://images.unsplash.com/photo-${photoId}?w=800&q=80`;

    try {
      await downloadImage(downloadUrl, filename);
      replacements.push([
        `https://images.unsplash.com/photo-${photoId}`,
        `/assets/images/unsplash/${photoId}.jpg`
      ]);
    } catch (err) {
      console.error(`Failed to download ${photoId}: ${err.message}`);
    }

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\nUpdating file references...');
  updateAllFiles(srcDir, replacements);

  console.log('\nDone!');
  console.log(`Downloaded ${replacements.length} images to ${outputDir}`);
}

main().catch(console.error);
