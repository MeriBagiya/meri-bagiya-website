import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function GardenMaintenance() {
  return (
    <>
      <SEO
        title="Garden Maintenance Services"
        description="Professional garden maintenance services in Greater Noida. Lawn mowing, pruning, weeding, fertilizing and seasonal care by Meri Bagiya experts."
        keywords="garden maintenance Greater Noida, lawn care, garden upkeep, pruning services, weeding, lawn mowing service"
        canonicalUrl="/services/garden-maintenance"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/1.webp" className="jarallax-img" alt="Garden maintenance background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Garden Maintenance</li>
                </ul>
                <h1 className="text-uppercase">Garden Maintenance</h1>
                <p className="col-lg-10">Keep Your Garden Looking Beautiful Year-Round!</p>
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
                  <Link to="/services/garden-maintenance" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Garden Maintenance</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
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
                  <Link to="/services/specialty-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Specialty Services</h4>
                  </Link>
                </div>
              </div>

              <div className="col-lg-9 col-12 order-lg-2 order-1">
                <div className="row g-4 gx-5">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Professional</span> Garden Care for a <span className="id-color-2">Thriving Garden</span></h2>
                    <p>A beautiful garden requires regular care and attention. Our garden maintenance services ensure your outdoor space stays healthy, vibrant, and well-maintained throughout the year. From lawn care to seasonal clean-ups, we handle all aspects of garden upkeep.</p>
                  </div>

                  <div className="col-lg-6">
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <img src="/assets/images/misc/3.webp" className="w-100 rounded-1 wow zoomIn" alt="Garden maintenance"/>
                      </div>
                      <div className="col-sm-6">
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/1.webp" className="w-100 rounded-1 wow zoomIn" alt="Lawn care service"/>
                          </div>
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/2.webp" className="w-100 rounded-1 wow zoomIn" alt="Garden upkeep"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Our <span className="id-color-2">Maintenance</span> Services</h2>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Lawn Care</h4>
                      <p className="mb-0">Regular mowing, edging, and fertilization to keep your lawn lush, green, and healthy throughout the seasons.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Pruning & Trimming</h4>
                      <p className="mb-0">Expert pruning of shrubs, hedges, and plants to maintain shape, encourage growth, and enhance appearance.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Weeding & Mulching</h4>
                      <p className="mb-0">Regular weeding and fresh mulch application to suppress weeds, retain moisture, and improve soil health.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Seasonal Clean-ups</h4>
                      <p className="mb-0">Thorough spring and fall clean-ups including leaf removal, debris clearing, and garden bed preparation.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Pest Control</h4>
                      <p className="mb-0">Eco-friendly pest management to protect your plants from harmful insects and diseases.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Fertilization</h4>
                      <p className="mb-0">Customized fertilization programs to provide essential nutrients for optimal plant growth and health.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Schedule Maintenance</Link>
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

export default GardenMaintenance;
