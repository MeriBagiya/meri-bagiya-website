import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { whatsappUrl } from '../constants/contact';
import { trackEvent } from '../utils/analytics';
import { BUSINESS_ADDRESS, BUSINESS_GEO, BUSINESS_PHONE, BUSINESS_EMAIL } from '../constants/business';

function ShophomepageImproved() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://meribagiya.com/#business",
    "name": "Meri Bagiya",
    "alternateName": "Meri Bagiya Plant Nursery",
    "description": "Meri Bagiya is a trusted plant nursery and garden services provider in Greater Noida, Delhi NCR. We offer indoor plants, outdoor plants, garden design, landscaping, and plant rental services.",
    "image": [
      "https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png",
      "https://meribagiya.com/assets/images/gallery/1.webp",
      "https://meribagiya.com/assets/images/gallery/2.webp"
    ],
    "logo": "https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png",
    "address": BUSINESS_ADDRESS,
    "geo": BUSINESS_GEO,
    "hasMap": "https://www.google.com/maps/place/Meri+Bagiya/@28.589999,77.4255937,17z",
    "url": "https://meribagiya.com",
    "telephone": BUSINESS_PHONE,
    "email": BUSINESS_EMAIL,
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/meribagiya",
      "https://www.instagram.com/meribagiya_",
      "https://www.google.com/maps/place/Meri+Bagiya/@28.589999,77.4255937,17z"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Greater Noida"
      },
      {
        "@type": "City",
        "name": "Noida"
      },
      {
        "@type": "State",
        "name": "Delhi NCR"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Garden Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plant Rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Maintenance"
          }
        }
      ]
    }
  };

  const jobSections = [
    {
      title: "Transform My Balcony/Terrace",
      description: "Create a beautiful green oasis, even in small spaces. We handle design, setup, and ongoing care.",
      icon: "icofont-home",
      link: "/services/balcony-garden"
    },
    {
      title: "Keep My Office Green & Professional",
      description: "Hassle-free plant rental and maintenance for a vibrant, productive workspace.",
      icon: "icofont-building-alt",
      link: "/services/plant-rental"
    },
    {
      title: "Design a Dream Garden from Scratch",
      description: "Expert landscape architects for custom garden design and full installation.",
      icon: "icofont-plant",
      link: "/services/garden-design"
    },
    {
      title: "Find Unique Corporate Gifts",
      description: "Eco-friendly plant gifts to impress clients and employees for any occasion.",
      icon: "icofont-gift",
      link: "/corporate-gifting"
    },
    {
      title: "Maintain My Society's Green Areas",
      description: "Comprehensive Annual Maintenance Contracts (AMC) for residential society gardens.",
      icon: "icofont-unity-hand",
      link: "/tools/society-garden-cost-estimator" // Linking to estimator as it's a key entry point
    },
    {
      title: "Get Quality Plants for My Business",
      description: "Wholesale supply of healthy plants for nurseries, landscapers, and developers.",
      icon: "icofont-tree",
      link: "/contact" // Direct to contact for wholesale inquiries
    }
  ];


  return (
    <>
      <SEO
        title="Your Green Paradise: Garden Design, Plant Rental & Nursery in Greater Noida | Meri Bagiya"
        description="Transform your space with Meri Bagiya. We offer expert garden design, hassle-free plant rentals, corporate gifting, and a wholesale nursery with quality indoor & outdoor plants in Greater Noida."
        keywords="plant nursery near me, indoor plants, outdoor plants, garden services Greater Noida, buy plants online, nursery near me, plant shop Noida, Delhi NCR plants, landscaping services, garden design near me, terrace garden, balcony garden, corporate gifting, plant rental, office plants rental, society garden maintenance, hassle-free gardening, balcony makeover, eco-friendly corporate gifts"
        canonicalUrl="/"
        jsonLd={jsonLd}
      />

        {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="section-intro" className="hp-hero">
                <div className="container">
                    <div className="hp-hero-grid">
                        <div>
                            <div className="hp-eyebrow">Office plant rental in Noida</div>
                            <h1 className="hp-title">Green offices, <em>zero upkeep.</em></h1>
                            <p className="hp-lead">We place, water and swap healthy plants at your Noida office every month. You get a fresh workplace. We do the work.</p>
                            <div className="hp-cta">
                                <a
                                    className="btn-wa"
                                    href={whatsappUrl('Hi! I want to rent plants for my office in Noida. Please send a quote.')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('generate_lead', { method: 'whatsapp', location: 'home_hero' })}
                                >
                                    Get a quote on WhatsApp
                                </a>
                                <Link className="btn-ghost" to="/plant-rent-in-office">See how it works</Link>
                            </div>
                        </div>
                        <div className="hp-photo" style={{ backgroundImage: "url(/assets/images/home/office-plant.jpg)" }} role="img" aria-label="A potted fern in a bright office"></div>
                    </div>

                    <div className="hp-proof">
                        <div><b>850+</b>happy customers</div>
                        <div><b>Monthly</b>watering and care</div>
                        <div><b>Free swap</b>of plants that do not thrive</div>
                        <div><b>Noida</b>and Greater Noida</div>
                    </div>

                    <div className="hp-cols">
                        <div>
                            <h3>Office plant rental</h3>
                            <p>Pay monthly. We care for every plant.</p>
                            <Link to="/plant-rent-in-office">Learn more &rarr;</Link>
                        </div>
                        <div>
                            <h3>Corporate gifting</h3>
                            <p>Plant gifts with your logo for staff and clients.</p>
                            <Link to="/corporate-gifting">Learn more &rarr;</Link>
                        </div>
                        <div>
                            <h3>Terrace and balcony gardens</h3>
                            <p>Design and build for homes and societies.</p>
                            <Link to="/services">Learn more &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

        {/* New "Jobs to Be Done" Section */}
        <section id="section-jobs-to-be-done" className="bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Your Green Solution</div>
                        <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">What Can We Help You <span className="id-color-2">Achieve?</span></h2>
                        <p className="lead wow fadeInUp" data-wow-delay=".3s">Tell us your goal, and we'll provide the expert care, plants, and design to make it happen.</p>
                    </div>
                </div>
                <div className="row g-4 mt-4">
                    {jobSections.map((job, index) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={job.title}>
                            <Link to={job.link} className="card-link" style={{ textDecoration: 'none' }}>
                                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'; }}>
                                    <div className="card-body p-4 text-center">
                                        <i className={`${job.icon} mb-3`} style={{ fontSize: '48px', color: '#4a7c59' }}></i>
                                        <h5 className="card-title mb-2" style={{ color: '#333' }}>{job.title}</h5>
                                        <p className="card-text text-muted" style={{ fontSize: '14px' }}>{job.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row g-4 mb-3 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Wholesale Plant Nursery</div>
                        <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Wholesale Plant Nursery in <span className="id-color-2">Greater Noida</span>, Uttar Pradesh</h2>
                        <p className="wow fadeInUp" data-wow-delay=".3s">Discover a world of vibrant, high-quality plants at our wholesale nursery. We specialize in supplying retail nurseries, landscapers, and garden centers with a diverse range of trees, shrubs, perennials, and more. Our state-of-the-art facilities ensure optimal growing conditions, and our sustainable practices promote environmental stewardship.</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                        <div className="relative h-100 bg-color text-light padding30 rounded-1">
                            <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Wide variety"/>
                            <div>
                                <h4>Wide Variety</h4>
                                <p className="mb-0">From native species to exotic blooms, we offer an extensive selection to meet all your landscaping needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                        <div className="relative h-100 bg-color text-light padding30 rounded-1">
                            <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Quality assurance"/>
                            <div>
                                <h4>Quality Assurance</h4>
                                <p className="mb-0">Our meticulous cultivation practices ensure that every plant is healthy and robust.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                        <div className="relative h-100 bg-color text-light padding30 rounded-1">
                            <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Sustainable practices"/>
                            <div>
                                <h4>Sustainable Practices</h4>
                                <p className="mb-0">We prioritize water conservation, organic methods, and energy efficiency in all our operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay=".6s">
                        <Link to="/contact" className="btn-main">Contact for Wholesale</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Removed redundant "Discover Amazing variety of plants" section */}
        {/* <section className="jarallax"> ... </section> */}

        {/* Trusted By Section - Enhanced Social Proof */}
        <section style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="subtitle wow fadeInUp">Our Impact</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Trusted by <span className="id-color-2">850+ Happy Customers</span> & Leading Properties</h2>
                        <p className="lead wow fadeInUp" data-wow-delay=".3s">With **25+ years of experience** and over **550+ gardens designed**, we've partnered with residential societies, commercial venues, and premium developments across Greater Noida and Noida.</p>
                    </div>
                </div>
                <div className="spacer-20"></div>
                <div className="row g-4">
                    {[
                        { name: 'VSK Garden', type: 'Banquet & Event Venue', location: 'Knowledge Park 3, Greater Noida', image: '/assets/images/projects-square/1.jpg' },
                        { name: 'Telecom City', type: 'Residential Society', location: 'Sector 62, Noida', image: '/assets/images/projects-square/2.jpg' },
                        { name: 'Arihant Ambar', type: 'Luxury Residential', location: 'Sector 1, Greater Noida West', image: '/assets/images/projects-square/3.jpg' },
                        { name: 'Ace Divino', type: 'Premium Residential', location: 'Sector 1, Greater Noida West', image: '/assets/images/projects-square/4.jpg' }
                    ].map((client, index) => (
                        <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={client.name}>
                            <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    background: '#fff',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'; }}
                                >
                                    <img src={client.image} alt={`${client.name} - Landscaping by Meri Bagiya`} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
                                    <div style={{ padding: '15px' }}>
                                        <h5 style={{ marginBottom: '4px', fontSize: '16px' }}>{client.name}</h5>
                                        <p style={{ fontSize: '13px', color: '#4a7c59', marginBottom: '2px', fontWeight: '500' }}>{client.type}</p>
                                        <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>
                                            <i className="icofont-location-pin" style={{ marginRight: '3px' }}></i>
                                            {client.location}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="spacer-20"></div>
                <div className="text-center wow fadeInUp" data-wow-delay=".6s">
                    <Link to="/portfolio" className="btn-main">View All Projects</Link>
                </div>
            </div>
        </section>

    </div>
    {/* <!-- content end --> */}



    </>
  )
};

export default ShophomepageImproved;