import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Servicesingle() {
  return (
    <>
      <SEO
        title="Garden Services"
        description="Professional garden services in Greater Noida - Garden design, maintenance, planting, tree care, irrigation and specialty services by Meri Bagiya experts."
        keywords="garden services, garden design, garden maintenance, landscaping, Greater Noida"
        canonicalUrl="/service-single"
      />
      
      {/* // <!-- content begin --> */}

<div className="no-bottom no-top" id="content">

    <div id="top"></div>

    <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/1.webp" className="jarallax-img" alt=""/>
        <div className="container relative z-index-1000">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="crumb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li className="active">Garden Design</li>
                    </ul>
                    <h1 className="text-uppercase">Garden Design</h1>
                    <p className="col-lg-10">Transform Your Garden into a Personal Paradise!</p>
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
                        <Link to="/services/garden-design" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                            <h4 className="mb-0">Garden Design</h4>
                            <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
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
                        <Link to="/services/specialty-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                            <h4 className="mb-0">Specialty Services</h4>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-9 col-12 order-lg-2 order-1">
                    <div className="row g-4 gx-5">

                        <div className="col-lg-6">
                            <h2><span className="id-color-2">Transform</span> Your Outdoor Space into a <span className="id-color-2">Beautiful Oasis</span></h2>
                            <p>At Meri Bagiya, we believe that your garden should be a reflection of your personal style and a sanctuary where you can relax and unwind. Our team of expert garden designers is dedicated to bringing your vision to life, creating stunning outdoor spaces that combine beauty, functionality, and sustainability.</p>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <img src="/assets/images/misc/3.webp" className="w-100 rounded-1 wow zoomIn" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <img src="/assets/images/misc/1.webp" className="w-100 rounded-1 wow zoomIn" alt=""/>
                                        </div>
                                        <div className="col-lg-12">
                                            <img src="/assets/images/misc/2.webp" className="w-100 rounded-1 wow zoomIn" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spacer-double"></div>

                    <div className="row g-4">
                        <div className="col-lg-12">
                            <h2 className="mb-0">Why <span className="id-color-2">Choose</span> Us</h2>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <div>
                                    <h4>Expertise and Experience</h4>
                                    <p className="mb-0">With years of hands-on experience, our team of professional gardeners and landscapers bring a wealth of knowledge to every project.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <div>
                                    <h4>Personalized Service</h4>
                                    <p className="mb-0">We believe that every garden is unique, just like its owner. We take the time to understand your vision, preferences, and the specific needs.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <div>
                                    <h4>Comprehensive Solutions</h4>
                                    <p className="mb-0">From garden design and installation to regular maintenance and specialty services, we offer a full range of garden services.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                                <div>
                                    <h4>Quality Workmanship</h4>
                                    <p className="mb-0">Our commitment to quality is evident in every service we provide. We use only the best materials, plants, and tools to your garden.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                                <div>
                                    <h4>Eco-Friendly Practices</h4>
                                    <p className="mb-0">We are dedicated to environmentally sustainable practices. Our organic gardening methods, water-wise landscaping, and  waste management.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                                <div>
                                    <h4>Satisfaction Guarantee</h4>
                                    <p className="mb-0">Our top priority is your satisfaction. We take pride in our work, and our many happy customers are a testament to the quality and care.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spacer-double"></div>
                    
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <h2 className="mb-0">Latest <span className="id-color-2">Projects</span></h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="hover rounded-1 overflow-hidden relative text-light wow fadeInRight" data-wow-delay=".3s">
                                <img src="/assets/images/projects-square/4.jpg" className="hover-scale-1-1 w-100" alt=""/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">A beautiful garden is more than just a space—it's a living, breathing part of your home. But maintaining that beauty takes time and expertise.</div>
                                    <Link className="btn-line" to="/services/garden-design">View Details</Link>
                                </div>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 w-100 hover-op-0">
                                    <div className="bg-blur d-flex m-4 p-3 px-4 rounded-1">
                                        <div className="me-5">
                                            Name
                                            <h5>Garden Beauty</h5>
                                        </div>
                                        <div>
                                            Location
                                            <h5>Greater Noida</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hover rounded-1 overflow-hidden relative text-light wow fadeInRight" data-wow-delay=".6s">
                                <img src="/assets/images/projects-square/5.jpg" className="hover-scale-1-1 w-100" alt=""/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Create an inviting space for entertaining, or a functional extension of your home, our expert team can craft the outdoor area of your dreams.</div>
                                    <Link className="btn-line" to="/services/garden-maintenance">View Details</Link>
                                </div>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 w-100 hover-op-0">
                                    <div className="bg-blur d-flex m-4 p-3 px-4 rounded-1">
                                        <div className="me-5">
                                            Name
                                            <h5>Garden Beauty</h5>
                                        </div>
                                        <div>
                                            Location
                                            <h5>Greater Noida</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 text-center">
                            <Link className="btn-main wow fadeInUp" to="/services">View All Services</Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
    
</div>

{/* <!-- content end --> */}

    </>
  )
}

export default Servicesingle;








