import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function WaterFountain() {
  return (
    <>
      <SEO
        title="Water Bodies & Fountain Services"
        description="Custom water fountain and water body installation in Greater Noida. Decorative fountains, ponds, waterfalls for homes, gardens, and commercial spaces by Meri Bagiya."
        keywords="water fountain, garden fountain, decorative fountain Greater Noida, water feature, pond, waterfall, water body"
        canonicalUrl="/services/water-fountain"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Water Fountain' }
        ]}
        faqItems={[
          {
            question: 'How much does a garden fountain cost?',
            answer: 'Garden fountains range from ₹5,000 for small tabletop fountains to ₹50,000+ for large custom water features. Price depends on size, material, and design complexity.'
          },
          {
            question: 'Do water fountains attract mosquitoes?',
            answer: 'Moving water in fountains does not attract mosquitoes as they prefer stagnant water. We also recommend adding fish or fountain treatments to prevent any breeding.'
          },
          {
            question: 'What maintenance do water fountains require?',
            answer: 'Regular cleaning of pump filters, water top-up, and algae control every 2-4 weeks. We offer maintenance packages for hassle-free fountain care.'
          }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/unsplash/1541123603104-512919d6a96c.jpg" className="jarallax-img" alt="Water fountain"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Water Bodies & Fountain</li>
                </ul>
                <h1 className="text-uppercase">Water Bodies & Fountain</h1>
                <p className="col-lg-10">Add Serenity with Flowing Water!</p>
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
                  <Link to="/services/indoor-plants" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Indoor Plants</h4>
                  </Link>
                  <Link to="/services/artificial-grass" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Artificial Grass</h4>
                  </Link>
                  <Link to="/services/water-fountain" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Water Fountain</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-9 col-12 order-lg-2 order-1">
                {/* Intro Section */}
                <div className="row g-4 gx-5 align-items-center">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Transform</span> Your Space with the <span className="id-color-2">Magic of Water</span></h2>
                    <p>The gentle sound of flowing water creates an atmosphere of peace and tranquility that no other element can match. Our custom water features bring luxury, elegance, and a sense of calm to any environment.</p>
                    <p>From grand outdoor fountains to compact indoor water walls, we design and install water features that become the centerpiece of your space.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1541123603104-512919d6a96c.jpg" className="w-100 rounded-1 wow zoomIn" alt="Garden fountain"/>
                      </div>
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1585320806297-9794b3e4eeae.jpg" className="w-100 rounded-1 wow zoomIn mb-3" alt="Water feature"/>
                        <img src="/assets/images/unsplash/1519331379826-f10be5486c6f.jpg" className="w-100 rounded-1 wow zoomIn" alt="Decorative fountain"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Types of Water Features */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Types of <span className="id-color-2">Water Features</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1541123603104-512919d6a96c.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Tiered fountain"/>
                      <div className="bg-color text-light p-4">
                        <h5>Tiered Fountains</h5>
                        <p className="mb-0 small">Classic multi-level fountains that create beautiful cascading water effects.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1506905925346-21bda4d32df4.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Waterfall"/>
                      <div className="bg-color text-light p-4">
                        <h5>Waterfalls</h5>
                        <p className="mb-0 small">Natural rock or modern waterfalls that bring dramatic beauty to gardens.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1519331379826-f10be5486c6f.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Pond"/>
                      <div className="bg-color text-light p-4">
                        <h5>Koi Ponds</h5>
                        <p className="mb-0 small">Serene fish ponds with aquatic plants creating a living ecosystem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1534237710431-e2fc698436d0.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Wall fountain"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Water Walls</h5>
                        <p className="mb-0 small">Sleek vertical water features perfect for modern spaces.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1558618666-fcd25c85cd64.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Bubble fountain"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Bubble Fountains</h5>
                        <p className="mb-0 small">Compact tabletop fountains for indoor spaces and offices.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/unsplash/1600607687939-ce8a6c25118c.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Stream"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Garden Streams</h5>
                        <p className="mb-0 small">Flowing water channels that meander through your garden.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Benefits */}
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <img src="/assets/images/unsplash/1541123603104-512919d6a96c.jpg" className="w-100 rounded-1" alt="Fountain benefits"/>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="mb-4">Benefits of <span className="id-color-2">Water Features</span></h2>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-headphone-alt fs-24"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Peaceful Ambiance</h5>
                        <p className="mb-0">Flowing water creates soothing sounds that reduce stress.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-air fs-24"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Natural Humidifier</h5>
                        <p className="mb-0">Adds moisture to the air, especially beneficial in dry climates.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-bird fs-24"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Attracts Wildlife</h5>
                        <p className="mb-0">Birds and butterflies are drawn to water sources.</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-crown fs-24"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Adds Luxury</h5>
                        <p className="mb-0">Elevates the aesthetic and value of your property.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* What We Offer */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Our Complete <span className="id-color-2">Services</span></h2>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color text-light rounded-1 h-100">
                      <i className="icofont-pencil-alt-5 fs-48 mb-3"></i>
                      <h5>Custom Design</h5>
                      <p className="mb-0 small">Unique designs tailored to your space and style preferences.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-tools fs-48 mb-3"></i>
                      <h5>Installation</h5>
                      <p className="mb-0 small">Professional installation with plumbing, electrical, and stonework.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color text-light rounded-1 h-100">
                      <i className="icofont-light-bulb fs-48 mb-3"></i>
                      <h5>LED Lighting</h5>
                      <p className="mb-0 small">Underwater and accent lighting for stunning night views.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-repair fs-48 mb-3"></i>
                      <h5>Maintenance</h5>
                      <p className="mb-0 small">Regular cleaning, pump service, and water treatment.</p>
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
                      <h6>Villas</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-company fs-40 id-color mb-2"></i>
                      <h6>Offices</h6>
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
                      <i className="icofont-restaurant fs-40 id-color mb-2"></i>
                      <h6>Restaurants</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-institution fs-40 id-color mb-2"></i>
                      <h6>Temples</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-4 wow fadeInUp">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-building-alt fs-40 id-color mb-2"></i>
                      <h6>Farmhouses</h6>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Request Consultation</Link>
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

export default WaterFountain;
