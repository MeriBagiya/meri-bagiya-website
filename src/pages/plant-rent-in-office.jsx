import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function PlantRentInOffice() {
  return (
    <>
      <SEO
        title="Plant Rent in Office"
        description="Rent plants for your office in Greater Noida. Transform your workspace with indoor plants on rent. Professional plant rental services with maintenance included by Meri Bagiya."
        keywords="plant rent office, office plant rental, indoor plants for office, plants on rent Greater Noida, corporate plant rental, office greenery"
        canonicalUrl="/plant-rent-in-office"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/1.webp" className="jarallax-img" alt="Office plant rental background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Plant Rent in Office</li>
                </ul>
                <h1 className="text-uppercase">Plant Rent in Office</h1>
                <p className="col-lg-10">Transform Your Workspace with Green Elegance!</p>
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
                  <Link to="/plant-rent-in-office" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Plant Rent in Office</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/services/garden-design" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Design</h4>
                  </Link>
                  <Link to="/services/garden-maintenance" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Maintenance</h4>
                  </Link>
                  <Link to="/services/planting-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Planting Services</h4>
                  </Link>
                  <Link to="/services/specialty-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Specialty Services</h4>
                  </Link>
                </div>
              </div>

              <div className="col-lg-9 col-12 order-lg-2 order-1">
                <div className="row g-4 gx-5">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Green</span> Your Office Space with <span className="id-color-2">Plants on Rent</span></h2>
                    <p>Transform your workplace into a vibrant, healthy environment with our office plant rental services. We provide a wide selection of indoor plants perfectly suited for office spaces, complete with professional maintenance so you can enjoy the benefits of greenery without any hassle.</p>
                    <p>Whether you have a small startup office or a large corporate space, our plant rental solutions are tailored to meet your specific needs and budget.</p>
                  </div>

                  <div className="col-lg-6">
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <img src="/assets/images/misc/3.webp" className="w-100 rounded-1 wow zoomIn" alt="Office plants"/>
                      </div>
                      <div className="col-sm-6">
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/1.webp" className="w-100 rounded-1 wow zoomIn" alt="Indoor plants for office"/>
                          </div>
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/2.webp" className="w-100 rounded-1 wow zoomIn" alt="Corporate plant rental"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Benefits of <span className="id-color-2">Office Plants</span></h2>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Improved Air Quality</h4>
                      <p className="mb-0">Plants naturally purify the air by absorbing toxins and releasing oxygen, creating a healthier breathing environment for your team.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Enhanced Productivity</h4>
                      <p className="mb-0">Studies show that offices with plants see up to 15% increase in productivity. Greenery helps employees focus and work more efficiently.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Reduced Stress</h4>
                      <p className="mb-0">The presence of plants in the workspace reduces stress levels and promotes mental well-being among employees.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Professional Appearance</h4>
                      <p className="mb-0">Create a positive first impression on clients and visitors with a beautifully green and welcoming office environment.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Noise Reduction</h4>
                      <p className="mb-0">Plants help absorb sound and reduce background noise, creating a quieter and more comfortable workspace.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Maintenance Free</h4>
                      <p className="mb-0">With our rental service, we handle all plant care including watering, pruning, and replacement - you just enjoy the greenery.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Our <span className="id-color-2">Plant Rental</span> Services Include</h2>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Wide Plant Selection</h4>
                      <p className="mb-0">Choose from a variety of indoor plants including Money Plants, Peace Lily, Snake Plant, Areca Palm, Rubber Plant, and many more office-friendly varieties.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Customized Packages</h4>
                      <p className="mb-0">We design plant arrangements based on your office layout, lighting conditions, and aesthetic preferences to maximize visual impact.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Regular Maintenance</h4>
                      <p className="mb-0">Our team visits your office regularly to water, fertilize, prune, and ensure all plants remain healthy and vibrant.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Free Replacement</h4>
                      <p className="mb-0">Any plant that doesn't thrive is replaced at no additional cost. We guarantee your office always looks its best.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Ideal <span className="id-color-2">For</span></h2>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-building fs-48 id-color mb-2"></i>
                      <h5>Corporate Offices</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-computer fs-48 id-color mb-2"></i>
                      <h5>IT Companies</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-hotel fs-48 id-color mb-2"></i>
                      <h5>Hotels & Lobbies</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-shop fs-48 id-color mb-2"></i>
                      <h5>Showrooms</h5>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Get a Quote</Link>
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

export default PlantRentInOffice;
