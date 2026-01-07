import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function VerticalGarden() {
  return (
    <>
      <SEO
        title="Vertical Garden Services"
        description="Professional vertical garden installation in Greater Noida. Living walls, green walls for homes and offices. Transform any wall into a lush garden by Meri Bagiya."
        keywords="vertical garden, living wall, green wall, vertical planting, wall garden Greater Noida, indoor vertical garden"
        canonicalUrl="/services/vertical-garden"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Vertical Garden' }
        ]}
        faqItems={[
          {
            question: 'What is a vertical garden or living wall?',
            answer: 'A vertical garden (living wall) is a wall-mounted system that allows plants to grow vertically. It transforms blank walls into lush green spaces, perfect for homes, offices, and commercial spaces.'
          },
          {
            question: 'How much does a vertical garden cost in India?',
            answer: 'Vertical garden costs range from ₹400-1500 per sq.ft. depending on the system type (modular, pocket, or hydroponic), plant selection, and installation complexity.'
          },
          {
            question: 'Do vertical gardens need a lot of maintenance?',
            answer: 'Modern vertical garden systems require minimal maintenance. We install automated irrigation systems and select low-maintenance plants. Monthly maintenance visits keep your wall looking beautiful.'
          },
          {
            question: 'Can vertical gardens be installed indoors?',
            answer: 'Yes! Indoor vertical gardens are very popular. We use shade-tolerant plants and install grow lights if needed to ensure healthy plant growth indoors.'
          }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=1920&q=80" className="jarallax-img" alt="Vertical garden"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Vertical Garden</li>
                </ul>
                <h1 className="text-uppercase">Vertical Garden</h1>
                <p className="col-lg-10">Bring Nature to Your Walls!</p>
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
                  <Link to="/services/vertical-garden" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Vertical Garden</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/services/balcony-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Balcony Garden</h4>
                  </Link>
                  <Link to="/services/terrace-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Terrace Garden</h4>
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
                    <h2><span className="id-color-2">Living Walls</span> That Breathe Life Into <span className="id-color-2">Any Space</span></h2>
                    <p>Vertical gardens, also known as living walls or green walls, are the perfect solution for adding greenery to spaces where floor area is limited. Our expert team designs and installs stunning vertical gardens that transform ordinary walls into living works of art.</p>
                    <p>Whether it's for your home, office, restaurant, or commercial space, we create custom vertical garden solutions that enhance aesthetics and improve air quality.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80" className="w-100 rounded-1 wow zoomIn" alt="Living wall"/>
                      </div>
                      <div className="col-6">
                        <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80" className="w-100 rounded-1 wow zoomIn mb-3" alt="Green wall"/>
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" className="w-100 rounded-1 wow zoomIn" alt="Vertical planting"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Types Section */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Types of <span className="id-color-2">Vertical Gardens</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Modular vertical garden"/>
                      <div className="bg-color text-light p-4">
                        <h4>Modular Systems</h4>
                        <p className="mb-0">Pre-planted panels that can be easily installed and maintained. Perfect for indoor and outdoor spaces.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Pocket vertical garden"/>
                      <div className="bg-color text-light p-4">
                        <h4>Pocket Systems</h4>
                        <p className="mb-0">Fabric pockets mounted on walls for a natural, flowing look. Great for herbs and small plants.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="https://images.unsplash.com/photo-1524247108137-732e0f642303?w=400&q=80" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Hydroponic wall"/>
                      <div className="bg-color text-light p-4">
                        <h4>Hydroponic Walls</h4>
                        <p className="mb-0">Soil-free systems with automated irrigation. Low maintenance and high visual impact.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Benefits */}
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <img src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=600&q=80" className="w-100 rounded-1" alt="Vertical garden benefits"/>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="mb-4">Benefits of <span className="id-color-2">Vertical Gardens</span></h2>
                    <div className="d-flex mb-3">
                      <i className="icofont-leaf fs-36 id-color me-3"></i>
                      <div>
                        <h5 className="mb-1">Improved Air Quality</h5>
                        <p className="mb-0">Plants naturally filter toxins and produce fresh oxygen.</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="icofont-thermometer fs-36 id-color me-3"></i>
                      <div>
                        <h5 className="mb-1">Temperature Regulation</h5>
                        <p className="mb-0">Natural insulation that keeps spaces cooler in summer.</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="icofont-sound-wave fs-36 id-color me-3"></i>
                      <div>
                        <h5 className="mb-1">Noise Reduction</h5>
                        <p className="mb-0">Living walls absorb sound, creating quieter environments.</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <i className="icofont-heart-eyes fs-36 id-color me-3"></i>
                      <div>
                        <h5 className="mb-1">Aesthetic Appeal</h5>
                        <p className="mb-0">Stunning visual impact that transforms any space.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Ideal For */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Perfect <span className="id-color-2">For</span></h2>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-home fs-40 id-color mb-2"></i>
                      <h6>Homes</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-building fs-40 id-color mb-2"></i>
                      <h6>Offices</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-restaurant fs-40 id-color mb-2"></i>
                      <h6>Restaurants</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-hotel fs-40 id-color mb-2"></i>
                      <h6>Hotels</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-shopping-cart fs-40 id-color mb-2"></i>
                      <h6>Malls</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-hospital fs-40 id-color mb-2"></i>
                      <h6>Hospitals</h6>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Get Free Quote</Link>
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

export default VerticalGarden;
