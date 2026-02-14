import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';

const projects = [
  {
    id: 'vsk-garden',
    name: 'VSK Garden',
    type: 'Banquet & Event Venue',
    location: 'Knowledge Park 3, Greater Noida',
    description: 'Meri Bagiya transformed VSK Garden\'s 2-acre banquet lawn into a lush, green paradise perfect for hosting 1,500+ guests. Our team designed and installed vibrant flower beds, manicured lawns, decorative hedges, and seasonal plantings that create a stunning backdrop for weddings and corporate events.',
    area: '2 Acres',
    highlight: '1,500+ Guest Capacity',
    services: ['Landscaping', 'Garden Design', 'Plant Supply', 'Lawn Maintenance'],
    cardImage: '/assets/images/projects-square/1.jpg',
    images: ['/assets/images/projects/1.jpg', '/assets/images/projects/2.jpg']
  },
  {
    id: 'telecom-city',
    name: 'Telecom City',
    type: 'Residential Society',
    location: 'Sector 62, Noida',
    description: 'We partnered with Telecom City residential society to design and maintain their community gardens, parks, and common green areas. Our ongoing maintenance program ensures year-round greenery with seasonal flower rotations, healthy lawns, and well-maintained shrubs that residents love.',
    area: 'Society-wide',
    highlight: '2/3 BHK Community',
    services: ['Society Garden Maintenance', 'Park Design', 'Common Area Landscaping'],
    cardImage: '/assets/images/projects-square/2.jpg',
    images: ['/assets/images/projects/3.jpg', '/assets/images/projects/4.jpg']
  },
  {
    id: 'arihant-ambar',
    name: 'Arihant Ambar',
    type: 'Luxury Residential',
    location: 'Sector 1, Greater Noida West',
    description: 'For Arihant Ambar\'s premium residential complex spanning 3.75 acres with 630 units, Meri Bagiya delivered a comprehensive landscape design. We created inviting green spaces, garden pathways, ornamental plant installations, and common area gardens that enhance the living experience for every resident.',
    area: '3.75 Acres',
    highlight: '630 Units',
    services: ['Landscape Design', 'Garden Installation', 'Common Area Green Spaces'],
    cardImage: '/assets/images/projects-square/3.jpg',
    images: ['/assets/images/projects/5.jpg', '/assets/images/project-single/1.webp']
  },
  {
    id: 'ace-divino',
    name: 'Ace Divino',
    type: 'Premium Residential',
    location: 'Sector 1, Greater Noida West',
    description: 'Ace Divino is one of our largest projects — a premium residential township spread across 10.41 acres with 11 towers and 1,572 units. With 75% open space, Meri Bagiya handled the large-scale landscaping, irrigation system setup, garden design, and provides ongoing maintenance to keep this massive green campus thriving.',
    area: '10.41 Acres',
    highlight: '75% Open Space',
    services: ['Large-Scale Landscaping', 'Irrigation Setup', 'Garden Design', 'Ongoing Maintenance'],
    cardImage: '/assets/images/projects-square/4.jpg',
    images: ['/assets/images/project-single/2.webp', '/assets/images/project-single/3.webp']
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Portfolio - Meri Bagiya",
  "description": "Explore Meri Bagiya's landscaping and garden design projects across Greater Noida and Noida. See our work at VSK Garden, Telecom City, Arihant Ambar, and Ace Divino.",
  "url": "https://meribagiya.com/portfolio",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": `Landscaping & Garden Services - ${project.name}`,
        "description": project.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Meri Bagiya"
        },
        "areaServed": {
          "@type": "Place",
          "name": project.location
        }
      }
    }))
  }
};

function Portfolio() {
  return (
    <>
      <SEO
        title="Our Portfolio - Landscaping & Garden Projects"
        description="Explore Meri Bagiya's landscaping and garden design projects across Greater Noida and Noida. See our work at VSK Garden, Telecom City, Arihant Ambar, and Ace Divino."
        keywords="landscaping portfolio, garden design projects, Meri Bagiya projects, Greater Noida landscaping, society garden maintenance, commercial landscaping"
        canonicalUrl="/portfolio"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Subheader with Parallax */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/1.webp" className="jarallax-img" alt="Meri Bagiya portfolio background" />
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Portfolio</li>
                </ul>
                <h1 className="text-uppercase">Our Portfolio</h1>
                <p className="col-lg-10">Real projects. Real transformations. See what we've done.</p>
              </div>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt="" />
          <div className="de-overlay"></div>
        </section>

        {/* Intro Section */}
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="subtitle wow fadeInUp">Our Work</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Projects That Speak for <span className="id-color-2">Themselves</span></h2>
                <p className="lead wow fadeInUp" data-wow-delay=".4s">
                  From intimate banquet gardens to sprawling residential townships, Meri Bagiya has transformed green spaces across the NCR region. Here are some of the projects we're proud of.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Sections */}
        {projects.map((project, index) => (
          <section key={project.id} style={{ backgroundColor: index % 2 === 1 ? '#f8f9fa' : '#fff' }}>
            <div className="container">
              <div className={`row g-4 gx-5 align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Images */}
                <div className="col-lg-6 wow fadeInUp">
                  <div className="row g-3">
                    <div className="col-6">
                      <img
                        src={project.images[0]}
                        className="w-100 rounded-10px"
                        alt={`${project.name} landscaping by Meri Bagiya`}
                        style={{ objectFit: 'cover', aspectRatio: '4/3' }}
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src={project.images[1]}
                        className="w-100 rounded-10px"
                        alt={`${project.name} garden design by Meri Bagiya`}
                        style={{ objectFit: 'cover', aspectRatio: '4/3' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="subtitle">{project.type}</div>
                  <h3 className="mb-1">{project.name}</h3>
                  <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>
                    <i className="icofont-location-pin" style={{ marginRight: '5px' }}></i>
                    {project.location}
                  </p>
                  <p>{project.description}</p>

                  {/* Stats */}
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <div style={{
                        background: '#f0f7f2',
                        borderRadius: '10px',
                        padding: '15px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#4a7c59' }}>{project.area}</div>
                        <div style={{ fontSize: '12px', color: '#888' }}>Project Area</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div style={{
                        background: '#f0f7f2',
                        borderRadius: '10px',
                        padding: '15px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#4a7c59' }}>{project.highlight}</div>
                        <div style={{ fontSize: '12px', color: '#888' }}>Key Highlight</div>
                      </div>
                    </div>
                  </div>

                  {/* Service Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.services.map((service) => (
                      <span
                        key={service}
                        style={{
                          background: '#e8f5e9',
                          color: '#2d5016',
                          padding: '5px 14px',
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="jarallax text-light">
          <img src="/assets/images/background/1.webp" className="jarallax-img" alt="" />
          <div className="container relative z-index-1000">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="wow fadeInUp text-uppercase">Want Your Property to Look <span className="id-color-2">This Good?</span></h2>
                <p className="lead wow fadeInUp" data-wow-delay=".2s">
                  Whether you manage a residential society, commercial venue, or private estate — we'll make your green spaces unforgettable.
                </p>
                <div className="spacer-10"></div>
                <Link to="/contact" className="btn-main wow fadeInUp" data-wow-delay=".4s">Get a Free Consultation</Link>
                <a href="https://wa.me/919220404309" target="_blank" rel="noopener noreferrer" className="btn-main btn-white wow fadeInUp" data-wow-delay=".5s" style={{ marginLeft: '15px', background: '#25D366', border: 'none' }} onClick={() => trackEvent('whatsapp_lead', { button_text: 'Chat on WhatsApp', location: 'portfolio-cta' })}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="de-overlay"></div>
        </section>

      </div>
    </>
  );
}

export default Portfolio;
