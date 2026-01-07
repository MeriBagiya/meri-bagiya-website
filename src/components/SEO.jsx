import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png',
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = 'website',
  jsonLd,
  breadcrumbs,
  faqItems
}) {
  const siteName = 'Meri Bagiya';
  const baseUrl = 'https://meribagiya.com';
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} - Plant Nursery & Garden Services in Greater Noida`;

  const defaultDescription = 'Meri Bagiya - Your trusted plant nursery and professional garden services in Greater Noida. Buy indoor plants, outdoor plants, flowering plants and get expert garden design, maintenance, and landscaping services.';

  // Generate breadcrumb schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${baseUrl}${item.url}` : undefined
    }))
  } : null;

  // Generate FAQ schema
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

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
      <meta property="og:image:width" content={ogImageWidth.toString()} />
      <meta property="og:image:height" content={ogImageHeight.toString()} />
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

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
