import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png',
  ogType = 'website',
  jsonLd
}) {
  const siteName = 'Meri Bagiya';
  const baseUrl = 'https://meribagiya.com';
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} - Plant Nursery & Garden Services in Greater Noida`;

  const defaultDescription = 'Meri Bagiya - Your trusted plant nursery and professional garden services in Greater Noida. Buy indoor plants, outdoor plants, flowering plants and get expert garden design, maintenance, and landscaping services.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
