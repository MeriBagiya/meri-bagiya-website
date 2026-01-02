import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import RentalCalculator from '../../components/RentalCalculator';

function PlantRental() {
  return (
    <>
      <SEO
        title="Plant Rental Service"
        description="Premium plant rental services in Greater Noida. Rent indoor & outdoor plants for homes, offices, events, weddings, and corporate functions. Maintenance included by Meri Bagiya."
        keywords="plant rental near me, plants on rent Greater Noida, event plant rental Delhi NCR, wedding plants decoration, corporate plant rental Noida, indoor plant hire, office plants on rent, plant rental service"
        canonicalUrl="/services/plant-rental"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src={process.env.PUBLIC_URL + '/assets/images/background/12.webp'} className="jarallax-img" alt="Plant rental service"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Plant Rental Service</li>
                </ul>
                <h1 className="text-uppercase">Plant Rental Service</h1>
                <p className="col-lg-10">Green Solutions Without the Commitment!</p>
              </div>
            </div>
          </div>
          <div className="de-overlay"></div>
        </section>

        {/* Main Content */}
        <section>
          <div className="container">
            <div className="row g-4 gx-5">
              {/* Sidebar */}
              <div className="col-lg-3 col-12 order-lg-1 order-2">
                <div className="me-lg-3">
                  <Link to="/services/plant-rental" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Plant Rental</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/plant-rent-in-office" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Office Plants</h4>
                  </Link>
                  <Link to="/services/indoor-plants" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Indoor Plants</h4>
                  </Link>
                  <Link to="/services/landscape-design" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Landscape Design</h4>
                  </Link>
                  <Link to="/services/vertical-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Vertical Garden</h4>
                  </Link>
                  <Link to="/services/garden-maintenance" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Maintenance</h4>
                  </Link>
                </div>

                {/* Quick Contact */}
                <div className="bg-color text-light p-4 rounded-1 mt-4">
                  <h5 className="mb-3">Quick Enquiry</h5>
                  <p className="small mb-3">Need plants for your next event or space? Get in touch!</p>
                  <a href="tel:9220404309" className="btn-line text-light d-block text-center mb-2">
                    <i className="icofont-phone me-2"></i>Call Now
                  </a>
                  <a href="https://wa.me/919220404309" target="_blank" rel="noopener noreferrer" className="btn-main d-block text-center">
                    <i className="icofont-whatsapp me-2"></i>WhatsApp
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-9 col-12 order-lg-2 order-1">
                {/* Intro Section */}
                <div className="row g-4 gx-5 align-items-center">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Rent Plants</span> for Any Occasion & <span className="id-color-2">Any Space</span></h2>
                    <p>Why buy when you can rent? Our plant rental service provides you with beautiful, healthy plants for your home, office, events, or any space - with complete maintenance included. No watering, no worrying, just greenery!</p>
                    <p>From a single potted plant to hundreds of plants for large events, we have flexible rental plans to suit every need and budget.</p>
                    <div className="d-flex gap-3 mt-4">
                      <Link to="/contact" className="btn-main">Get Quote</Link>
                      <a href="tel:9220404309" className="btn-line">Call Us</a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&q=80" className="w-100 rounded-1 wow zoomIn" alt="Plants for rent"/>
                      </div>
                      <div className="col-6">
                        <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80" className="w-100 rounded-1 wow zoomIn mb-3" alt="Indoor plant rental"/>
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" className="w-100 rounded-1 wow zoomIn" alt="Event plants"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Rental Categories */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Rental <span className="id-color-2">Categories</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Office plant rental"/>
                      <div className="bg-color text-light p-4">
                        <h5>Office & Corporate</h5>
                        <p className="mb-2 small">Monthly rental for offices, co-working spaces, and corporate lobbies.</p>
                        <span className="badge bg-light text-dark">From ₹500/plant/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Wedding plant rental"/>
                      <div className="bg-color text-light p-4">
                        <h5>Weddings & Events</h5>
                        <p className="mb-2 small">Beautiful plants and arrangements for weddings, parties, and celebrations.</p>
                        <span className="badge bg-light text-dark">Custom Packages</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Exhibition plant rental"/>
                      <div className="bg-color text-light p-4">
                        <h5>Exhibitions & Trade Shows</h5>
                        <p className="mb-2 small">Make your booth stand out with green displays and planters.</p>
                        <span className="badge bg-light text-dark">Daily/Weekly Rental</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Home plant rental"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Home & Apartments</h5>
                        <p className="mb-2 small">Green up your living space without the hassle of maintenance.</p>
                        <span className="badge bg-light text-dark">From ₹300/plant/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Hotel plant rental"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Hotels & Restaurants</h5>
                        <p className="mb-2 small">Create inviting spaces for guests with premium greenery.</p>
                        <span className="badge bg-light text-dark">Bulk Discounts</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Film shoot plant rental"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Film & Photo Shoots</h5>
                        <p className="mb-2 small">Perfect backdrop plants for shoots, ads, and productions.</p>
                        <span className="badge bg-light text-dark">Short-term Rental</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* How It Works */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">How It <span className="id-color-2">Works</span></h2>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                        <span className="fs-32 fw-bold">1</span>
                      </div>
                      <h5>Tell Us Your Needs</h5>
                      <p className="mb-0 small">Share your space details, plant preferences, and rental duration.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                        <span className="fs-32 fw-bold">2</span>
                      </div>
                      <h5>Get Custom Quote</h5>
                      <p className="mb-0 small">We design a plant arrangement and provide a detailed quotation.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                        <span className="fs-32 fw-bold">3</span>
                      </div>
                      <h5>We Deliver & Setup</h5>
                      <p className="mb-0 small">Our team delivers, places, and arranges all plants at your location.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                        <span className="fs-32 fw-bold">4</span>
                      </div>
                      <h5>We Maintain</h5>
                      <p className="mb-0 small">Regular visits for watering, pruning, and plant health checks.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Plants Available */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Plants <span className="id-color-2">Available for Rent</span></h2>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Money Plant"/>
                      <h6 className="small mb-0">Money Plant</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Snake Plant"/>
                      <h6 className="small mb-0">Snake Plant</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Areca Palm"/>
                      <h6 className="small mb-0">Areca Palm</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Peace Lily"/>
                      <h6 className="small mb-0">Peace Lily</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Rubber Plant"/>
                      <h6 className="small mb-0">Rubber Plant</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Ficus"/>
                      <h6 className="small mb-0">Ficus</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Pothos"/>
                      <h6 className="small mb-0">Pothos</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Jade Plant"/>
                      <h6 className="small mb-0">Jade Plant</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Dracaena"/>
                      <h6 className="small mb-0">Dracaena</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Flowering Plants"/>
                      <h6 className="small mb-0">Flowering</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&q=80" className="rounded-circle mb-2" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt="Bonsai"/>
                      <h6 className="small mb-0">Bonsai</h6>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-3 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-color text-light rounded-1">
                      <div className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-2" style={{width: '60px', height: '60px'}}>
                        <i className="icofont-plus fs-24 id-color"></i>
                      </div>
                      <h6 className="small mb-0">50+ More</h6>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Why Rent */}
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6 order-lg-2">
                    <img src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80" className="w-100 rounded-1" alt="Why rent plants"/>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <h2 className="mb-4">Why <span className="id-color-2">Rent</span> Instead of Buy?</h2>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px'}}>
                        <i className="icofont-money fs-20"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Cost Effective</h5>
                        <p className="mb-0 small">No large upfront investment. Pay only for what you need.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px'}}>
                        <i className="icofont-tools fs-20"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Zero Maintenance</h5>
                        <p className="mb-0 small">We handle all watering, pruning, and plant care.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px'}}>
                        <i className="icofont-refresh fs-20"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Free Replacement</h5>
                        <p className="mb-0 small">Any unhealthy plant is replaced at no extra cost.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px'}}>
                        <i className="icofont-exchange fs-20"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Flexibility</h5>
                        <p className="mb-0 small">Change plants, upgrade, or cancel anytime.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '45px', height: '45px'}}>
                        <i className="icofont-leaf fs-20"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Always Fresh</h5>
                        <p className="mb-0 small">Guaranteed healthy, vibrant plants at all times.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Enterprise Rental Calculator */}
                <div className="row">
                  <div className="col-12">
                    <RentalCalculator />
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* CTA */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bg-color-2 text-light p-5 rounded-1 text-center">
                      <h3 className="mb-3">Ready to Green Your Space?</h3>
                      <p className="mb-4">Get a free consultation and custom quote for your plant rental needs.</p>
                      <Link className="btn-main bg-light text-dark me-3" to="/contact">Get Free Quote</Link>
                      <a href="https://wa.me/919220404309" target="_blank" rel="noopener noreferrer" className="btn-line text-light">
                        <i className="icofont-whatsapp me-2"></i>WhatsApp Us
                      </a>
                    </div>
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

export default PlantRental;
