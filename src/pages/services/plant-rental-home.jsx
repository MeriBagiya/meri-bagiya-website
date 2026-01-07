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
      "url": "https://meribagiya.com",
      "telephone": "+91-9220404309",
      "email": "contact@meribagiya.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Ace Aspire, Amrapali Leisure Valley",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201318",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.5899943",
        "longitude": "77.4281686"
      },
      "sameAs": [
        "https://www.facebook.com/meribagiya",
        "https://www.instagram.com/meribagiya_",
        "https://www.google.com/maps/place/Meri+Bagiya/@28.589999,77.4255937,17z"
      ]
    },
    "description": "Affordable plant rental service for homes in Greater Noida. Rent indoor plants starting from just Rs 150/month with free delivery and maintenance.",
    "areaServed": ["Greater Noida", "Noida", "Delhi NCR"],
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
            <div className="row g-4 gx-5">
              {/* Sidebar */}
              <div className="col-lg-3 col-12 order-lg-1 order-2">
                <div className="me-lg-3">
                  <Link to="/services/plant-rental-home" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Plant Rental - Home</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/services/plant-rental" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Plant Rental - Corporate</h4>
                  </Link>
                  <Link to="/services/indoor-plants" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Indoor Plants</h4>
                  </Link>
                  <Link to="/services/balcony-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Balcony Garden</h4>
                  </Link>
                  <Link to="/services/terrace-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Terrace Garden</h4>
                  </Link>
                  <Link to="/services/garden-maintenance" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Maintenance</h4>
                  </Link>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-lg-9 col-12 order-lg-2 order-1">
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
                      plants with replacement guarantee. No green thumb required!
                    </p>
                    <p className="small text-muted mb-0">
                      <i className="icofont-info-circle me-1"></i>
                      Delivery: ₹300 | Maintenance: ₹300/month (1st month FREE!)
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
                        <div className="fs-1 fw-bold id-color">5km</div>
                        <small className="text-muted">Service Area</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-2">
                      <div className="col-6">
                        <img
                          src="/assets/images/unsplash/1493552152660-f915ab47ae9d.jpg"
                          alt="Indoor plants in living room"
                          className="w-100 rounded-10px"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="/assets/images/unsplash/1463320726281-696a485928c7.jpg"
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
                        <h5>Hassle-Free Care</h5>
                        <p className="mb-0 text-muted">We handle watering, pruning, and fertilizing. You just enjoy! (₹300/mo)</p>
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
                        <span style={{
                          display: 'inline-block',
                          backgroundColor: '#ffffff',
                          color: '#333333',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          marginBottom: '10px'
                        }}>Popular</span>
                        <br />
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
                      <h6>Delivery & Setup</h6>
                      <p className="text-muted small mb-0">We deliver and set up plants at your home (₹300 charges)</p>
                    </div>
                    <div className="col-md-3 col-6 text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                        <span className="fs-4 fw-bold">4</span>
                      </div>
                      <h6>We Maintain</h6>
                      <p className="text-muted small mb-0">Weekly visits (₹300/mo, 1st month FREE!)</p>
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
                          What about maintenance?
                        </button>
                      </h2>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          Maintenance is charged at <strong>₹300/month</strong> separately. Our team visits weekly to water, check plant health, prune if needed, and clean pots. <strong>First month maintenance is FREE!</strong>
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
                          We serve locations within <strong>5 km radius</strong> of our nursery (Near Ace Aspire, Greater Noida). This includes Amrapali Leisure Valley, Ace Aspire, nearby sectors, and Pari Chowk area. A minimum <strong>₹300 delivery charge</strong> applies for all orders.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="mb-5 p-4 rounded-10px" style={{ backgroundColor: '#fff8e1', border: '1px solid #ffc107' }}>
                  <h5 className="mb-3" style={{ color: '#856404' }}>
                    <i className="icofont-warning me-2"></i>
                    Terms & Conditions
                  </h5>
                  <ul className="mb-0" style={{ color: '#856404' }}>
                    <li className="mb-2">
                      <strong>Service Area:</strong> Plant rental service is available only within <strong>5 km radius</strong> from our nursery location (Near Ace Aspire, Greater Noida).
                    </li>
                    <li className="mb-2">
                      <strong>Delivery Charges:</strong> <strong>₹300 delivery charges</strong> applicable separately (not included in rental).
                    </li>
                    <li className="mb-2">
                      <strong>Maintenance Charges:</strong> <strong>₹300/month</strong> for weekly maintenance visits. <span style={{ color: '#28a745', fontWeight: 'bold' }}>First month FREE!</span>
                    </li>
                    <li className="mb-2">
                      <strong>Minimum Order:</strong> Minimum 5 plants required for home rental service.
                    </li>
                    <li className="mb-0">
                      <strong>Rental Period:</strong> Minimum rental period is 3 months with 15 days cancellation notice.
                    </li>
                  </ul>
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
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: '1rem',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                    >
                      <i className="fa-brands fa-whatsapp me-2"></i>
                      WhatsApp Us
                    </a>
                    <Link
                      to="/contact"
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#ffffff',
                        color: '#4a7c59',
                        fontWeight: '600',
                        fontSize: '1rem',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        outline: 'none',
                        boxShadow: 'none'
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
