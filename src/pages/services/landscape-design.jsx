import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function LandscapeDesign() {
  return (
    <>
      <SEO
        title="Landscape Design Services"
        description="Professional landscape design services in Greater Noida. Transform your outdoor space with custom landscaping, garden planning, and expert design by Meri Bagiya."
        keywords="landscape design, landscaping Greater Noida, garden design, outdoor design, landscape architect, garden planning"
        canonicalUrl="/services/landscape-design"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/unsplash/1558904541-efa843a96f01.jpg" className="jarallax-img" alt="Landscape design"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Landscape Design</li>
                </ul>
                <h1 className="text-uppercase">Landscape Design</h1>
                <p className="col-lg-10">Create Your Dream Outdoor Paradise!</p>
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
                  <Link to="/services/landscape-design" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Landscape Design</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
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
                    <h2><span className="id-color-2">Transform</span> Your Outdoor Space Into a <span className="id-color-2">Masterpiece</span></h2>
                    <p>At Meri Bagiya, we specialize in creating stunning landscape designs that blend beauty with functionality. Our expert designers work closely with you to understand your vision, lifestyle, and the unique characteristics of your property to create outdoor spaces that are truly exceptional.</p>
                    <p>From contemporary minimalist gardens to lush tropical paradises, we bring creativity and expertise to every project.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1585320806297-9794b3e4eeae.jpg" className="w-100 rounded-1 wow zoomIn" alt="Garden design"/>
                      </div>
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1598902108854-10e335adac99.jpg" className="w-100 rounded-1 wow zoomIn mb-3" alt="Landscape planning"/>
                        <img src="/assets/images/unsplash/1551410224-699683e15636.jpg" className="w-100 rounded-1 wow zoomIn" alt="Outdoor landscaping"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Services Grid */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Our <span className="id-color-2">Design</span> Services</h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/unsplash/1558904541-efa843a96f01.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Residential landscaping"/>
                      <div className="bg-color text-light p-4">
                        <h4>Residential Landscaping</h4>
                        <p className="mb-0">Transform your home's outdoor space into a beautiful garden sanctuary tailored to your lifestyle.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/unsplash/1486406146926-c627a92ad1ab.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Commercial landscaping"/>
                      <div className="bg-color text-light p-4">
                        <h4>Commercial Landscaping</h4>
                        <p className="mb-0">Create impressive outdoor spaces for offices, hotels, and commercial properties that leave lasting impressions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/unsplash/1604762512526-b7ce049b5764.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Hardscape design"/>
                      <div className="bg-color text-light p-4">
                        <h4>Hardscape Design</h4>
                        <p className="mb-0">Pathways, patios, retaining walls, and decorative elements that add structure to your garden.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Process Section */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Our <span className="id-color-2">Design Process</span></h2>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".0s">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="fs-24 fw-bold">1</span>
                      </div>
                      <h5>Consultation</h5>
                      <p className="mb-0">We visit your property and discuss your vision, needs, and budget.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="fs-24 fw-bold">2</span>
                      </div>
                      <h5>Design</h5>
                      <p className="mb-0">Our team creates detailed 2D/3D designs for your approval.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="fs-24 fw-bold">3</span>
                      </div>
                      <h5>Implementation</h5>
                      <p className="mb-0">Expert execution with quality materials and skilled craftsmen.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".6s">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <span className="fs-24 fw-bold">4</span>
                      </div>
                      <h5>Maintenance</h5>
                      <p className="mb-0">Ongoing care to keep your landscape looking pristine.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Features */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Why Choose <span className="id-color-2">Our Landscape Design</span></h2>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="d-flex p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-check-circled fs-36 me-3"></i>
                      <div>
                        <h5>Custom Designs</h5>
                        <p className="mb-0">Every design is unique, tailored specifically to your property and preferences.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="d-flex p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-check-circled fs-36 me-3"></i>
                      <div>
                        <h5>Sustainable Practices</h5>
                        <p className="mb-0">We use eco-friendly materials and water-efficient designs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="d-flex p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-check-circled fs-36 me-3"></i>
                      <div>
                        <h5>Expert Team</h5>
                        <p className="mb-0">Skilled designers and horticulturists with years of experience.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="d-flex p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-check-circled fs-36 me-3"></i>
                      <div>
                        <h5>End-to-End Service</h5>
                        <p className="mb-0">From concept to completion and ongoing maintenance support.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Get Free Consultation</Link>
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

export default LandscapeDesign;
