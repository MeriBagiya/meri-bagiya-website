const fs = require('fs');

const generateSitemap = async () => {
  const baseUrl = 'https://meribagiya.com';
  const staticRoutes = [
    '/',
    '/about',
    '/blog',
    '/catalog',
    '/contact',
    '/services',
    '/shop-all',
    '/shop-cart',
    '/services/garden-design',
    '/services/garden-maintenance',
    '/services/planting-services',
    '/services/tree-care',
    '/services/irrigation-services',
    '/services/specialty-services',
  ];

  const plants = JSON.parse(fs.readFileSync('public/Plantslist.json'));

  const dynamicRoutes = plants.map(plant => `/single-product/${plant.Plantid}`);

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map(route => {
          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
};

generateSitemap();
