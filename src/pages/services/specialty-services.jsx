import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function SpecialtyServices() {
  return (
    <>
      <SEO
        title="Specialty Garden Services"
        description="Specialty garden services in Greater Noida. Outdoor lighting, water features, vertical gardens, terrace gardening and hardscaping by Meri Bagiya experts."
        keywords="specialty garden services Greater Noida, outdoor lighting, water features, vertical garden, terrace gardening, hardscaping"
        canonicalUrl="/services/specialty-services"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/1.webp" className="jarallax-img" alt="Specialty services background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Specialty Services</li>
                </ul>
                <h1 className="text-uppercase">Specialty Services</h1>
                <p className="col-lg-10">Unique Solutions for Your Special Garden Needs!</p>
              </div>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt=""/>
          <div className="de-overlay"></div>
        </section>

        <section>
          <div className="container">
            <div className="row g-4 gx-5">
              <div className="col-lg-3 col-12 order-lg-1 order-2">
                <div className="me-lg-3">
                  <Link to="/services/garden-design" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Design</h4>
                  </Link>
                  <Link to="/services/garden-maintenance" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Maintenance</h4>
                  </Link>
                  <Link to="/services/planting-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Planting Services</h4>
                  </Link>
                  <Link to="/services/tree-care" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Tree Care</h4>
                  </Link>
                  <Link to="/services/irrigation-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Irrigation Services</h4>
                  </Link>
                  <Link to="/services/specialty-services" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Specialty Services</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-9 col-12 order-lg-2 order-1">
                <div className="row g-4 gx-5">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Specialized</span> Garden Solutions for <span className="id-color-2">Unique Needs</span></h2>
                    <p>Beyond standard garden services, we offer specialty solutions for unique projects and requirements. From outdoor lighting to hardscaping, our team has the expertise to handle specialized projects that transform your outdoor living space.</p>
                  </div>

                  <div className="col-lg-6">
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <img src="/assets/images/misc/3.webp" className="w-100 rounded-1 wow zoomIn" alt="Outdoor lighting"/>
                      </div>
                      <div className="col-sm-6">
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/1.webp" className="w-100 rounded-1 wow zoomIn" alt="Garden features"/>
                          </div>
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/2.webp" className="w-100 rounded-1 wow zoomIn" alt="Hardscaping"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Our <span className="id-color-2">Specialty</span> Services</h2>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Outdoor Lighting</h4>
                      <p className="mb-0">Beautiful landscape lighting to enhance your garden's beauty and safety after dark.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Water Features</h4>
                      <p className="mb-0">Custom fountains, ponds, and water gardens that add tranquility to your space.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Hardscaping</h4>
                      <p className="mb-0">Patios, walkways, retaining walls, and other hardscape elements for structure and function.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Vertical Gardens</h4>
                      <p className="mb-0">Space-saving vertical garden installations perfect for walls and small spaces.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Garden Renovation</h4>
                      <p className="mb-0">Complete garden makeovers to revitalize tired or overgrown outdoor spaces.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Event Setup</h4>
                      <p className="mb-0">Garden preparation and decoration for special events and occasions.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Discuss Your Project</Link>
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

export default SpecialtyServices;
