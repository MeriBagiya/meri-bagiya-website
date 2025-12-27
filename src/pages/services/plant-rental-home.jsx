import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HomeRentalCalculator from '../../components/HomeRentalCalculator';

function PlantRentalHome() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plant Rental for Home",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Meri Bagiya",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201318",
        "addressCountry": "IN"
      }
    },
    "description": "Affordable plant rental service for homes in Greater Noida. Rent indoor plants starting from just Rs 150/month with free delivery and maintenance.",
    "areaServed": "Greater Noida",
    "priceRange": "₹150 - ₹300 per plant/month"
  };

  return (
    <>
      <SEO
        title="Plant Rental for Home | Indoor Plants on Rent"
        description="Rent beautiful indoor plants for your home starting at just ₹150/month. Minimum 5 plants, free delivery & weekly maintenance included. Greater Noida."
        keywords="plant rental home, indoor plants rent, home plants Greater Noida, affordable plant rental, rent plants for apartment"
        canonicalUrl="/services/plant-rental-home"
        jsonLd={jsonLd}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="jarallax" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background/8.webp'})`}}>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Plant Rental - Home</li>
                </ul>
                <h1 className="text-uppercase" style={{ color: 'white' }}>Plant Rental for Home</h1>
                <p className="col-lg-10 lead" style={{ color: 'white' }}>Bring Nature Home Without the Hassle</p>
              </div>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt="Meri Bagiya Logo" />
        </section>

        {/* Main Content */}
        <section>
          <div className="container">
            <div className="row g-4">
              {/* Sidebar */}
              <div className="col-lg-3 order-lg-1 order-2">
                <div className="fw-bold text-dark fs-16px lh-2 mb-1">Our Services</div>
                <div className="de-box mb-3">
                  <Link to="/services/plant-rental" className="d-block p-3 bg-light position-relative mb-1px">
                    Plant Rental - Corporate
                  </Link>
                  <Link to="/services/plant-rental-home" className="d-block p-3 bg-color text-light position-relative mb-1px">
                    Plant Rental - Home
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/services/indoor-plants" className="d-block p-3 bg-light position-relative mb-1px">
                    Indoor Plants
                  </Link>
                  <Link to="/services/balcony-garden" className="d-block p-3 bg-light position-relative mb-1px">
                    Balcony Garden
                  </Link>
                  <Link to="/services/terrace-garden" className="d-block p-3 bg-light position-relative mb-1px">
                    Terrace Garden
                  </Link>
                  <Link to="/services/garden-maintenance" className="d-block p-3 bg-light position-relative">
                    Garden Maintenance
                  </Link>
                </div>

                {/* Quick Contact */}
                <div style={{ backgroundColor: '#4a7c59', padding: '1.5rem', borderRadius: '10px' }}>
                  <h5 style={{ color: '#ffffff', marginBottom: '1rem' }}>Quick Enquiry</h5>
                  <p style={{ color: '#ffffff', marginBottom: '1rem' }}>Have questions about home plant rental?</p>
                  <a href="tel:+919220404309" style={{ display: 'block', color: '#ffffff', marginBottom: '0.5rem', textDecoration: 'none' }}>
                    <i className="icofont-phone me-2"></i> +91 9220404309
                  </a>
                  <a
                    href="https://wa.me/919220404309?text=Hi!%20I'm%20interested%20in%20plant%20rental%20for%20my%20home."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-100 mt-2"
                    style={{
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      fontWeight: '600',
                      padding: '0.75rem 1rem',
                      border: 'none'
                    }}
                  >
                    <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-lg-9 order-lg-2 order-1">
                {/* Introduction */}
                <div className="row g-4 mb-5">
                  <div className="col-lg-6">
                    <h2 className="mb-3">Green Your Home, <span className="id-color-2">Stress-Free</span></h2>
                    <p>
                      Transform your living space into a green sanctuary without the worry of plant care.
                      Our home plant rental service is designed specifically for apartments, flats, and
                      houses in Greater Noida.
                    </p>
                    <p>
                      Starting from just <strong>₹150/month per plant</strong>, you get beautiful indoor
                      plants with free delivery, weekly maintenance, and replacement guarantee. No green
                      thumb required!
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <div className="text-center">
                        <div className="fs-1 fw-bold id-color">5+</div>
                        <small className="text-muted">Min Plants</small>
                      </div>
                      <div className="text-center">
                        <div className="fs-1 fw-bold id-color">₹150</div>
                        <small className="text-muted">Starting Price</small>
                      </div>
                      <div className="text-center">
                        <div className="fs-1 fw-bold id-color">Free</div>
                        <small className="text-muted">Maintenance</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-2">
                      <div className="col-6">
                        <img
                          src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?w=400"
                          alt="Indoor plants in living room"
                          className="w-100 rounded-10px"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400"
                          alt="Plants on shelf"
                          className="w-100 rounded-10px"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Rent Plants for Home */}
                <div className="mb-5">
                  <h3 className="mb-4">Why Rent Plants for Your Home?</h3>
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                      <div className="bg-light p-4 rounded-10px h-100 text-center">
                        <i className="icofont-money-bag fs-40 id-color mb-3"></i>
                        <h5>Cost Effective</h5>
                        <p className="mb-0 text-muted">No upfront investment in pots, soil, or plants. Pay only monthly rental.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="bg-light p-4 rounded-10px h-100 text-center">
                        <i className="icofont-hand-power fs-40 id-color mb-3"></i>
                        <h5>Zero Maintenance</h5>
                        <p className="mb-0 text-muted">We handle watering, pruning, and fertilizing. You just enjoy!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="bg-light p-4 rounded-10px h-100 text-center">
                        <i className="icofont-refresh fs-40 id-color mb-3"></i>
                        <h5>Free Replacement</h5>
                        <p className="mb-0 text-muted">Unhealthy plant? We replace it free of charge.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="bg-light p-4 rounded-10px h-100 text-center">
                        <i className="icofont-air fs-40 id-color mb-3"></i>
                        <h5>Better Air Quality</h5>
                        <p className="mb-0 text-muted">Indoor plants purify air and boost oxygen levels naturally.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="bg-light p-4 rounded-10px h-100 text-center">
                        <i className="icofont-heart-beat fs-40 id-color mb-3"></i>
                        <h5>Mental Wellness</h5>
                        <p className="mb-0 text-muted">Plants reduce stress, improve mood, and create calm spaces.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="bg-light p-4 rounded-10px h-100 text-center">
                        <i className="icofont-exchange fs-40 id-color mb-3"></i>
                        <h5>Flexibility</h5>
                        <p className="mb-0 text-muted">Change plants seasonally or cancel anytime. No long-term lock-in.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pot Sizes & Pricing */}
                <div className="mb-5">
                  <h3 className="mb-4">Choose Your Pot Size</h3>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="bg-color text-light p-4 rounded-10px text-center h-100">
                        <span style={{ fontSize: '3rem' }}>🌱</span>
                        <h4 className="text-light mt-3">Small</h4>
                        <p className="mb-1">6 inch pot</p>
                        <div className="fs-2 fw-bold my-3">₹150<small>/month</small></div>
                        <p className="mb-0" style={{ fontSize: '0.85rem' }}>
                          Perfect for desks, shelves, window sills
                        </p>
                        <hr className="my-3 opacity-25" />
                        <small>Money Plant, Jade, Spider Plant, Pothos</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color-2 text-light p-4 rounded-10px text-center h-100" style={{ transform: 'scale(1.05)' }}>
                        <div className="badge bg-light text-dark mb-2">Popular</div>
                        <span style={{ fontSize: '3rem' }}>🪴</span>
                        <h4 className="text-light mt-3">Medium</h4>
                        <p className="mb-1">10 inch pot</p>
                        <div className="fs-2 fw-bold my-3">₹200<small>/month</small></div>
                        <p className="mb-0" style={{ fontSize: '0.85rem' }}>
                          Ideal for floor corners, balconies
                        </p>
                        <hr className="my-3 opacity-25" />
                        <small>Snake Plant, Peace Lily, Rubber Plant, ZZ Plant</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color text-light p-4 rounded-10px text-center h-100">
                        <span style={{ fontSize: '3rem' }}>🌿</span>
                        <h4 className="text-light mt-3">Large</h4>
                        <p className="mb-1">14 inch pot</p>
                        <div className="fs-2 fw-bold my-3">₹300<small>/month</small></div>
                        <p className="mb-0" style={{ fontSize: '0.85rem' }}>
                          Statement plants for living rooms
                        </p>
                        <hr className="my-3 opacity-25" />
                        <small>Areca Palm, Fiddle Leaf, Monstera, Dracaena</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculator */}
                <div className="mb-5">
                  <HomeRentalCalculator />
                </div>

                {/* How It Works */}
                <div className="mb-5">
                  <h3 className="mb-4">How It Works</h3>
                  <div className="row g-4">
                    <div className="col-md-3 col-6 text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                        <span className="fs-4 fw-bold">1</span>
                      </div>
                      <h6>Choose Plants</h6>
                      <p className="text-muted small mb-0">Select pot sizes and quantity using our calculator</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                        <span className="fs-4 fw-bold">2</span>
                      </div>
                      <h6>Get Quote</h6>
                      <p className="text-muted small mb-0">Receive instant quote via WhatsApp or call</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                        <span className="fs-4 fw-bold">3</span>
                      </div>
                      <h6>Free Delivery</h6>
                      <p className="text-muted small mb-0">We deliver and set up plants at your home</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                        <span className="fs-4 fw-bold">4</span>
                      </div>
                      <h6>We Maintain</h6>
                      <p className="text-muted small mb-0">Weekly visits to water, prune, and care for plants</p>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="mb-5">
                  <h3 className="mb-4">Frequently Asked Questions</h3>
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item border-0 mb-2">
                      <h2 className="accordion-header">
                        <button className="accordion-button bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                          What is the minimum rental period?
                        </button>
                      </h2>
                      <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          Minimum rental period is 3 months. You can cancel anytime after that with 15 days notice.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 mb-2">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                          What if a plant dies or becomes unhealthy?
                        </button>
                      </h2>
                      <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          We replace unhealthy plants free of charge during our weekly maintenance visits.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 mb-2">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                          Is maintenance really included?
                        </button>
                      </h2>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          Yes! Our team visits weekly to water, check plant health, prune if needed, and clean pots. All included in the monthly rental.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                          Which areas do you serve?
                        </button>
                      </h2>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          We serve Greater Noida, Noida, and nearby areas including Amrapali Leisure Valley, Ace Aspire, Alpha, Beta, Gamma sectors, Pari Chowk, and Knowledge Park.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div style={{ backgroundColor: '#4a7c59', padding: '3rem', borderRadius: '10px', textAlign: 'center' }}>
                  <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Ready to Green Your Home?</h3>
                  <p style={{ color: '#ffffff', marginBottom: '1.5rem' }}>Start with just 5 plants and transform your living space today!</p>
                  <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                    <a
                      href="https://wa.me/919220404309?text=Hi!%20I'm%20interested%20in%20plant%20rental%20for%20my%20home.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lg px-5 py-3"
                      style={{
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        border: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className="fa-brands fa-whatsapp me-2"></i>
                      WhatsApp Us
                    </a>
                    <Link
                      to="/contact"
                      className="btn btn-lg px-5 py-3"
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#4a7c59',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        border: '2px solid #ffffff',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className="icofont-phone me-2"></i>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PlantRentalHome;
