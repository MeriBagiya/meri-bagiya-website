const puppeteer = require('puppeteer');
const path = require('path');

// Helper function to wait
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function captureYouTubeBanner() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to accommodate the full banner
    await page.setViewport({
        width: 2600,
        height: 1500,
        deviceScaleFactor: 1
    });

    // Load the HTML file
    const htmlPath = path.join(__dirname, 'public', 'youtube-banner.html');
    console.log('Loading:', htmlPath);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    // Wait for images to load
    await delay(2000);

    // Find the banner element and screenshot it
    const bannerElement = await page.$('#banner');

    if (bannerElement) {
        const outputPath = path.join(__dirname, 'public', 'assets', 'images', 'youtube-banner.png');
        await bannerElement.screenshot({
            path: outputPath,
            type: 'png'
        });
        console.log('Screenshot saved to:', outputPath);
    } else {
        console.error('Banner element not found!');
    }

    await browser.close();
    console.log('Done!');
}

captureYouTubeBanner().catch(console.error);
