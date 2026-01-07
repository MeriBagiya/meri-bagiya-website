const fs = require('fs');

const generateSitemap = async () => {
  const baseUrl = 'https://meribagiya.com';
  const today = new Date().toISOString().split('T')[0];

  // Routes with their SEO configuration
  const routeConfig = [
    // Homepage - highest priority
    { path: '/', priority: '1.0', changefreq: 'weekly' },

    // Main pages - high priority
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/shop-all', priority: '0.8', changefreq: 'weekly' },
    { path: '/catalog', priority: '0.8', changefreq: 'weekly' },
    { path: '/corporate-gifting', priority: '0.8', changefreq: 'monthly' },

    // Service pages - medium-high priority
    { path: '/services/garden-design', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/garden-maintenance', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/planting-services', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/tree-care', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/irrigation-services', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/specialty-services', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/landscape-design', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/vertical-garden', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/balcony-garden', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/terrace-garden', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/indoor-plants', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/artificial-grass', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/water-fountain', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/plant-rental', priority: '0.7', changefreq: 'monthly' },
    { path: '/services/plant-rental-home', priority: '0.7', changefreq: 'monthly' },
    { path: '/plant-rent-in-office', priority: '0.7', changefreq: 'monthly' },

    // Lower priority pages
    { path: '/shop-cart', priority: '0.3', changefreq: 'monthly' },
  ];

  // Load product data
  let plants = [];
  try {
    plants = JSON.parse(fs.readFileSync('public/Plantslist.json'));
  } catch (e) {
    console.warn('Could not load Plantslist.json:', e.message);
  }

  // Generate XML
  const staticUrls = routeConfig.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  const productUrls = plants.map(plant => `
  <url>
    <loc>${baseUrl}/single-product/${plant.Plantid}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${productUrls}
</urlset>
`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log(`Sitemap generated with ${routeConfig.length + plants.length} URLs`);
};

generateSitemap();
