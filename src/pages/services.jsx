import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Meri Bagiya Services",
    "description": "Professional garden services in Greater Noida - Garden design, maintenance, planting, tree care, irrigation and specialty services by Meri Bagiya experts.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Garden Design",
          "url": "https://meribagiya.com/services/garden-design"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Garden Maintenance",
          "url": "https://meribagiya.com/services/garden-maintenance"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Planting Services",
          "url": "https://meribagiya.com/services/planting-services"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Tree Care",
          "url": "https://meribagiya.com/services/tree-care"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Irrigation Services",
          "url": "https://meribagiya.com/services/irrigation-services"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Specialty Services",
          "url": "https://meribagiya.com/services/specialty-services"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Garden Services"
        description="Professional garden services in Greater Noida - Garden design, maintenance, planting, tree care, irrigation and specialty services by Meri Bagiya experts."
        keywords="garden services, garden design, garden maintenance, landscaping, Greater Noida"
        canonicalUrl="/services"
        jsonLd={jsonLd}
      />

      {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="subheader" className="relative jarallax text-light">
                <img src="/assets/images/background/7.webp" className="jarallax-img" alt=""/>
                <div className="container relative z-index-1000">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="crumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Services</li>
                            </ul>
                            <h1 className="text-uppercase">Our Services</h1>
                            <p className="col-lg-10 lead">Transform Your Garden into a Personal Paradise!</p>
                        </div>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt=""/>
                <div className="de-gradient-edge-top dark"></div>
                <div className="de-overlay"></div>
            </section>

            <section className="p-4">
                <div className="container-fluid">
                    <div className="row g-4">
                        {/* <!-- service item begin --> */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                                <img src="/assets/images/services/1.webp" className="hover-scale-1-1 w-100" alt=""/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Imagine stepping into your own private oasis—a garden designed just for you, where every plant, path, and stone tells your story.</div>
                                    <Link className="btn-line" to="/services/garden-design">View Details</Link>
                                </div>
                                <img src="/assets/images/logo-icon.webp" className="abs abs-centered w-20" alt=""/>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="mb-3">Garden Design</h4>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>
                        {/* <!-- service item end --> */}

                        {/* <!-- service item begin --> */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".3s">
                                <img src="/assets/images/services/2.webp" className="hover-scale-1-1 w-100" alt=""/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">A beautiful garden is more than just a space—it's a living, breathing part of your home. But maintaining that beauty takes time and expertise.</div>
                                    <Link className="btn-line" to="/services/garden-maintenance">View Details</Link>
                                </div>
                                <img src="/assets/images/logo-icon.webp" className="abs abs-centered w-20" alt=""/>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="mb-3">Garden Maintenance</h4>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>
                        {/* <!-- service item end --> */}

                        {/* <!-- service item begin --> */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                                <img src="/assets/images/services/3.webp" className="hover-scale-1-1 w-100" alt=""/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Choosing the right plants for your garden is crucial for long-term success. Our expert team helps you select plants that thrive in your conditions.</div>
                                    <Link className="btn-line" to="/services/planting-services">View Details</Link>
                                </div>
                                <img src="/assets/images/logo-icon.webp" className="abs abs-centered w-20" alt=""/>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="mb-3">Planting Services</h4>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>
                        {/* <!-- service item end --> */}

                        {/* <!-- service item begin --> */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                                <img src="/assets/images/services/4.webp" className="hover-scale-1-1 w-100" alt="Tree care service"/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Trees are valuable assets that require specialized care. Our certified team provides comprehensive tree care including pruning and health assessments.</div>
                                    <Link className="btn-line" to="/services/tree-care">View Details</Link>
                                </div>
                                <img src="/assets/images/logo-icon.webp" className="abs abs-centered w-20" alt=""/>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="mb-3">Tree Care</h4>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>
                        {/* <!-- service item end --> */}

                        {/* <!-- service item begin --> */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".3s">
                                <img src="/assets/images/services/5.webp" className="hover-scale-1-1 w-100" alt="Irrigation services"/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Proper irrigation is essential for a healthy garden. Our specialists design and install efficient watering systems tailored to your garden's needs.</div>
                                    <Link className="btn-line" to="/services/irrigation-services">View Details</Link>
                                </div>
                                <img src="/assets/images/logo-icon.webp" className="abs abs-centered w-20" alt=""/>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="mb-3">Irrigation Services</h4>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>
                        {/* <!-- service item end --> */}

                        {/* <!-- service item begin --> */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                                <img src="/assets/images/services/6.webp" className="hover-scale-1-1 w-100" alt="Specialty garden services"/>
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Beyond standard services, we offer specialty solutions including outdoor lighting, water features, and hardscaping for unique garden needs.</div>
                                    <Link className="btn-line" to="/services/specialty-services">View Details</Link>
                                </div>
                                <img src="/assets/images/logo-icon.webp" className="abs abs-centered w-20" alt=""/>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="mb-3">Specialty Services</h4>
                                </div>
                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                            </div>
                        </div>
                        {/* <!-- service item end --> */}

                    </div>
                </div>
            </section>

            <section className="jarallax pt80 pb80 relative text-light">
                <img src="/assets/images/background/3.webp" className="jarallax-img" alt=""/>
                <div className="container relative z-2">
                    <div className="row">
                        <div className="col-lg-8">
                            <img src="/assets/images/logo-icon.webp" className="w-60px mb-4" alt=""/>
                            <h2 className="text-uppercase mb-4">Transform Your Garden – Contact Us for a Free Consultation</h2>
                            <Link className="btn-main" to="/contact">Free Consultation</Link>
                        </div>
                    </div>
                </div>
                <div className="de-gradient-edge-bottom dark"></div>
                <div className="de-overlay"></div>
            </section>
            
        </div>
        {/* <!-- content end --> */}


    </>
  )
}

export default Services;
