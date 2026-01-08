import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function IndoorPlants() {
  return (
    <>
      <SEO
        title="Indoor Plants Services"
        description="Indoor plant services in Greater Noida. Buy, rent or get maintenance for indoor plants. Air-purifying plants, decorative plants for home and office by Meri Bagiya."
        keywords="indoor plants, house plants, indoor plant rental, air purifying plants Greater Noida, office plants, home plants"
        canonicalUrl="/services/indoor-plants"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Indoor Plants' }
        ]}
        faqItems={[
          {
            question: 'What are the best indoor plants for beginners?',
            answer: 'Money plant, snake plant, pothos, and ZZ plant are excellent for beginners as they require minimal care and can survive in low light conditions.'
          },
          {
            question: 'Do indoor plants really purify air?',
            answer: 'Yes! Plants like snake plant, peace lily, and spider plant are proven to remove toxins like formaldehyde and benzene from indoor air.'
          },
          {
            question: 'How often should I water indoor plants?',
            answer: 'Most indoor plants need watering once a week. Check the top inch of soil - if dry, water thoroughly. Overwatering is the most common cause of indoor plant death.'
          }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/unsplash/1545241047-6083a3684587.jpg" className="jarallax-img" alt="Indoor plants"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Indoor Plants</li>
                </ul>
                <h1 className="text-uppercase">Indoor Plants</h1>
                <p className="col-lg-10">Bring Nature Inside Your Home!</p>
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
                  <Link to="/services/terrace-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Terrace Garden</h4>
                  </Link>
                  <Link to="/services/indoor-plants" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Indoor Plants</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
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
                    <h2><span className="id-color-2">Breathe Life</span> Into Your <span className="id-color-2">Indoor Spaces</span></h2>
                    <p>Indoor plants do more than just decorate - they purify the air, boost mood, reduce stress, and create a welcoming atmosphere in any space. Whether you're looking to buy, rent, or need maintenance services, we have the perfect green solution for you.</p>
                    <p>Our experts help you choose the right plants based on your space, lighting conditions, and maintenance preferences.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1459411552884-841db9b3cc2a.jpg" className="w-100 rounded-1 wow zoomIn" alt="House plants"/>
                      </div>
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1463320726281-696a485928c7.jpg" className="w-100 rounded-1 wow zoomIn mb-3" alt="Indoor greenery"/>
                        <img src="/assets/images/unsplash/1416879595882-3373a0480b5b.jpg" className="w-100 rounded-1 wow zoomIn" alt="Plant decor"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Popular Plants */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Popular <span className="id-color-2">Indoor Plants</span></h2>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1593691509543-c55fb32e1735.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Money Plant"/>
                      <h5>Money Plant</h5>
                      <p className="small mb-0">Low maintenance, air purifier</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".1s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1558171813-4c088753af8f.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Snake Plant"/>
                      <h5>Snake Plant</h5>
                      <p className="small mb-0">Night oxygen, very hardy</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1509423350716-97f9360b4e09.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Peace Lily"/>
                      <h5>Peace Lily</h5>
                      <p className="small mb-0">Flowering, shade tolerant</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1520412099551-62b6bafeb5bb.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Areca Palm"/>
                      <h5>Areca Palm</h5>
                      <p className="small mb-0">Humidifier, decorative</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1485955900006-10f4d324d411.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Rubber Plant"/>
                      <h5>Rubber Plant</h5>
                      <p className="small mb-0">Bold leaves, easy care</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".5s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1507003211169-0a1dd7228f2d.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Jade Plant"/>
                      <h5>Jade Plant</h5>
                      <p className="small mb-0">Lucky plant, succulent</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1446071103084-c257b5f70672.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Pothos"/>
                      <h5>Pothos</h5>
                      <p className="small mb-0">Trailing vine, adaptable</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".7s">
                    <div className="text-center bg-light p-4 rounded-1 h-100">
                      <img src="/assets/images/unsplash/1459411552884-841db9b3cc2a.jpg" className="rounded-circle mb-3" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="Ficus"/>
                      <h5>Ficus</h5>
                      <p className="small mb-0">Tree-like, statement piece</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Services */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Our <span className="id-color-2">Services</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-cart fs-48 mb-3"></i>
                      <h4>Buy Plants</h4>
                      <p className="mb-0">Wide variety of healthy indoor plants with beautiful pots and planters to choose from.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color-2 text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-refresh fs-48 mb-3"></i>
                      <h4>Rent Plants</h4>
                      <p className="mb-0">Monthly plant rental with complete maintenance. Perfect for offices and events.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="bg-color text-light p-4 rounded-1 h-100 text-center">
                      <i className="icofont-tools-alt-2 fs-48 mb-3"></i>
                      <h4>Maintenance</h4>
                      <p className="mb-0">Regular care visits for watering, pruning, fertilizing, and pest control.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Benefits */}
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <img src="/assets/images/unsplash/1545241047-6083a3684587.jpg" className="w-100 rounded-1" alt="Indoor plants benefits"/>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="mb-4">Benefits of <span className="id-color-2">Indoor Plants</span></h2>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px'}}>
                        <i className="icofont-air"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Purify Air</h5>
                        <p className="mb-0 small">Remove toxins like formaldehyde, benzene, and xylene.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px'}}>
                        <i className="icofont-brain"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Boost Mood</h5>
                        <p className="mb-0 small">Plants reduce anxiety and improve overall well-being.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px'}}>
                        <i className="icofont-focus"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Increase Focus</h5>
                        <p className="mb-0 small">Studies show 15% productivity boost with indoor plants.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '40px', height: '40px'}}>
                        <i className="icofont-water-drop"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Add Humidity</h5>
                        <p className="mb-0 small">Natural humidifiers that prevent dry skin and colds.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp me-3" to="/catalog">Shop Plants</Link>
                    <Link className="btn-line wow fadeInUp" to="/contact">Get Consultation</Link>
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

export default IndoorPlants;
