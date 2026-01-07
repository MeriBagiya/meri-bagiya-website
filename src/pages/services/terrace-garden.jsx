import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function TerraceGarden() {
  return (
    <>
      <SEO
        title="Terrace Garden Design Services"
        description="Professional terrace garden design in Greater Noida. Transform your rooftop into a lush garden with seating areas, vegetable gardens, and beautiful landscaping by Meri Bagiya."
        keywords="terrace garden design, rooftop garden Greater Noida, terrace landscaping cost, rooftop garden ideas India, terrace garden near me, roof garden design Delhi NCR, small terrace garden"
        canonicalUrl="/services/terrace-garden"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Terrace Garden' }
        ]}
        faqItems={[
          {
            question: 'How much does a terrace garden cost in India?',
            answer: 'Terrace garden costs range from ₹50-200 per sq.ft. depending on design, waterproofing requirements, planters, and plant selection. We provide free consultations with detailed quotes.'
          },
          {
            question: 'Is waterproofing necessary for terrace gardens?',
            answer: 'Yes, proper waterproofing is essential to prevent water seepage into the building. We ensure proper drainage and waterproofing as part of our terrace garden installation.'
          },
          {
            question: 'Can I grow vegetables on my terrace garden?',
            answer: 'Absolutely! Terrace gardens are perfect for growing vegetables, herbs, and fruits. We can design dedicated vegetable sections with proper soil and sunlight arrangements.'
          },
          {
            question: 'How much weight can a terrace garden support?',
            answer: 'We assess your terrace load-bearing capacity before design. We use lightweight materials, proper drainage, and strategic plant placement to ensure safety.'
          }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/unsplash/1558618666-fcd25c85cd64.jpg" className="jarallax-img" alt="Terrace garden"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Terrace Garden</li>
                </ul>
                <h1 className="text-uppercase">Terrace Garden</h1>
                <p className="col-lg-10">Elevate Your Living with Rooftop Greenery!</p>
              </div>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt=""/>
          <div className="de-overlay"></div>
        </section>

        {/* Main Content */}
        <section>
          <div className="container">
            <div className="row g-4 gx-5">
              {/* Sidebar */}
              <div className="col-lg-3 col-12 order-lg-1 order-2">
                <div className="me-lg-3">
                  <Link to="/services/landscape-design" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Landscape Design</h4>
                  </Link>
                  <Link to="/services/vertical-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Vertical Garden</h4>
                  </Link>
                  <Link to="/services/balcony-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Balcony Garden</h4>
                  </Link>
                  <Link to="/services/terrace-garden" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Terrace Garden</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/services/indoor-plants" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Indoor Plants</h4>
                  </Link>
                  <Link to="/services/artificial-grass" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Artificial Grass</h4>
                  </Link>
                  <Link to="/services/water-fountain" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Water Fountain</h4>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-9 col-12 order-lg-2 order-1">
                {/* Intro Section */}
                <div className="row g-4 gx-5 align-items-center">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Convert</span> Your Terrace Into a <span className="id-color-2">Green Sanctuary</span></h2>
                    <p>Your terrace holds incredible potential! Transform this unused space into a beautiful rooftop garden that adds value to your property while providing a private outdoor retreat for relaxation, entertainment, and even growing your own vegetables.</p>
                    <p>Our expert team handles everything from waterproofing to plant selection, creating terrace gardens that are both beautiful and functional.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1585320806297-9794b3e4eeae.jpg" className="w-100 rounded-1 wow zoomIn" alt="Rooftop garden"/>
                      </div>
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1416879595882-3373a0480b5b.jpg" className="w-100 rounded-1 wow zoomIn mb-3" alt="Terrace plants"/>
                        <img src="/assets/images/unsplash/1466692476868-aef1dfb1e735.jpg" className="w-100 rounded-1 wow zoomIn" alt="Terrace design"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Services */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Our Terrace Garden <span className="id-color-2">Solutions</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1591857177580-dc82b9ac4e1e.jpg" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Kitchen garden"/>
                      <div className="bg-color text-light p-4">
                        <h5>Kitchen Garden</h5>
                        <p className="mb-0 small">Grow fresh vegetables, herbs, and fruits right on your terrace for healthy organic produce.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1600607687939-ce8a6c25118c.jpg" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Seating area"/>
                      <div className="bg-color text-light p-4">
                        <h5>Outdoor Lounge</h5>
                        <p className="mb-0 small">Comfortable seating areas surrounded by plants for relaxation and entertaining guests.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1558618666-fcd25c85cd64.jpg" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Container garden"/>
                      <div className="bg-color text-light p-4">
                        <h5>Container Garden</h5>
                        <p className="mb-0 small">Stylish planters and containers arranged for maximum visual impact and easy maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* What's Included */}
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6 order-lg-2">
                    <img src="/assets/images/unsplash/1585320806297-9794b3e4eeae.jpg" className="w-100 rounded-1" alt="Terrace garden setup"/>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                    <h2 className="mb-4">Complete <span className="id-color-2">Setup Includes</span></h2>

                    <div className="d-flex align-items-start mb-3">
                      <i className="icofont-check-circled fs-24 id-color me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Waterproofing</h5>
                        <p className="mb-0">Professional waterproofing to protect your building structure.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3">
                      <i className="icofont-check-circled fs-24 id-color me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Drainage System</h5>
                        <p className="mb-0">Proper drainage to prevent water logging and root rot.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3">
                      <i className="icofont-check-circled fs-24 id-color me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Lightweight Soil Mix</h5>
                        <p className="mb-0">Special soil mixture that's nutrient-rich yet light on the structure.</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3">
                      <i className="icofont-check-circled fs-24 id-color me-3 mt-1"></i>
                      <div>
                        <h5 className="mb-1">Automatic Irrigation</h5>
                        <p className="mb-0">Timer-based watering system for hassle-free maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Benefits */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Why a <span className="id-color-2">Terrace Garden?</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-thermometer fs-48 mb-3"></i>
                      <h5>Reduces Heat</h5>
                      <p className="mb-0">Plants absorb heat and keep your home cooler, reducing AC costs by up to 30%.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color-2 text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-ui-home fs-48 mb-3"></i>
                      <h5>Increases Property Value</h5>
                      <p className="mb-0">A well-designed terrace garden significantly boosts your property's market value.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-fruits fs-48 mb-3"></i>
                      <h5>Fresh Produce</h5>
                      <p className="mb-0">Grow organic vegetables and herbs for your kitchen, saving money on groceries.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color-2 text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-bird fs-48 mb-3"></i>
                      <h5>Wildlife Haven</h5>
                      <p className="mb-0">Attract butterflies, birds, and beneficial insects to your urban space.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-user-suited fs-48 mb-3"></i>
                      <h5>Entertainment Space</h5>
                      <p className="mb-0">Host parties, BBQs, and gatherings in your beautiful outdoor space.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color-2 text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-gym-alt-2 fs-48 mb-3"></i>
                      <h5>Healthy Living</h5>
                      <p className="mb-0">Gardening is great exercise and therapy for mind and body.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Start Your Terrace Garden</Link>
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

export default TerraceGarden;
