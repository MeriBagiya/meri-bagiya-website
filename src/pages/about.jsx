import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meri Bagiya",
    "alternateName": "Meri Bagiya Plant Nursery",
    "url": "https://meribagiya.com",
    "logo": "https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png",
    "description": "Meri Bagiya is a trusted plant nursery and garden services provider in Greater Noida, Delhi NCR.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Ace Aspire, Amrapali Leisure Valley",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201318",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5899943",
      "longitude": "77.4281686"
    },
    "telephone": "+91-9876543210",
    "email": "contact@meribagiya.com",
    "sameAs": [
      "https://www.facebook.com/meribagiya",
      "https://www.instagram.com/meribagiya_",
      "https://www.google.com/maps/place/Meri+Bagiya/@28.589999,77.4255937,17z"
    ]
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Meri Bagiya - Your trusted plant nursery and garden services provider in Greater Noida. Our story, team, and commitment to green spaces."
        keywords="about Meri Bagiya, plant nursery Greater Noida, garden company"
        canonicalUrl="/about"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us' }
        ]}
      />

      {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="subheader" className="relative jarallax text-light">
                <img src="/assets/images/background/8.webp" className="jarallax-img" alt="About us background"/>
                <div className="container relative z-index-1000">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="crumb">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">About Us</li>
                            </ul>
                            <h1 className="text-uppercase">About Us</h1>
                            <p className="col-lg-10 lead">Transform Your Garden into a Personal Paradise!</p>
                        </div>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt="Meri Bagiya watermark"/>
                <div className="de-gradient-edge-top dark"></div>
                <div className="de-overlay"></div>
            </section>

            <section>
                <div className="container relative z-1">
                    <div className="row g-4 gx-5 align-items-center">
                        <div className="col-lg-6 col-12 text-center text-lg-start">
                            <div className="subtitle wow fadeInUp mb-3">Our Story</div>
                            <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Crafting <span className="id-color-2">Beautiful Gardens</span> Since '99</h2>
                            <p className="wow fadeInUp">Established in 1999, our garden service has been transforming outdoor spaces into thriving, beautiful landscapes for over two decades. With a commitment to quality and personalized care, our experienced team offers a full range of services, from design to maintenance, ensuring your garden flourishes in every season.</p>
                            <Link className="btn-main btn-line wow fadeInUp" to="/catalog" data-wow-delay=".6s">Our Projects</Link>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <img src="/assets/images/misc/3.webp" className="w-100 rounded-1 wow zoomIn" alt="Garden image"/>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="rounded-1 relative bg-color-2 text-light p-4">
                                                <img src="/assets/images/icons/tree.png" className="abs abs-middle w-60px" alt="Tree icon"/>
                                                <div className="de_count ps-80 wow fadeInUp">
                                                    <h2 className="mb-0 fs-32"><span className="timer" data-to="550" data-speed="3000"></span>+</h2>
                                                    <span className="op-7">Garden Designed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="rounded-1 relative bg-color-2 text-light p-4">
                                                <img src="/assets/images/icons/happy.png" className="abs abs-middle w-60px" alt="Happy icon"/>
                                                <div className="de_count ps-80 wow fadeInUp">
                                                    <h2 className="mb-0 fs-32"><span className="timer" data-to="850" data-speed="3000"></span>+</h2>
                                                    <span className="op-7">Happy Customers</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <img src="/assets/images/misc/4.webp" className="w-100 rounded-1 wow zoomIn" alt="Garden image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </section>

            <section>
                <div className="container">
                    <div className="row g-4 mb-3 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="subtitle wow fadeInUp mb-3">B2B Services</div>
                            <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Wholesale Plant Nursery in <span className="id-color-2">Greater Noida</span></h2>
                            <p className="wow fadeInUp" data-wow-delay=".3s">Discover a world of vibrant, high-quality plants at our wholesale nursery. We specialize in supplying retail nurseries, landscapers, and garden centers with a diverse range of trees, shrubs, perennials, and more. Our state-of-the-art facilities ensure optimal growing conditions, and our sustainable practices promote environmental stewardship.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Wide variety icon"/>
                                <div>
                                    <h4>Wide Variety</h4>
                                    <p className="mb-0">From native species to exotic blooms, we offer an extensive selection to meet all your landscaping needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Quality assurance icon"/>
                                <div>
                                    <h4>Quality Assurance</h4>
                                    <p className="mb-0">Our meticulous cultivation practices ensure that every plant is healthy and robust.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Sustainable practices icon"/>
                                <div>
                                    <h4>Sustainable Practices</h4>
                                    <p className="mb-0">We prioritize water conservation, organic methods, and energy efficiency in all our operations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay=".6s">
                            <Link className="btn-main" to="/contact">Contact for Wholesale</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container">
                    <div className="row g-4 mb-3 align-items-center justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="subtitle wow fadeInUp">Why Choose Us</div>
                            <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Our Commitment to <span className="id-color-2">Excellence</span></h2>
                        </div>                        
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Meri Bagiya logo icon"/>
                                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">01</div>
                                <div>
                                    <h4>Expertise and Experience</h4>
                                    <p className="mb-0">With years of hands-on experience, our team of professional gardeners and landscapers bring a wealth of knowledge to every project.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Meri Bagiya logo icon"/>
                                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">02</div>
                                <div>
                                    <h4>Personalized Service</h4>
                                    <p className="mb-0">We believe that every garden is unique, just like its owner. We take the time to understand your vision, preferences, and the specific needs.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Meri Bagiya logo icon"/>
                                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">03</div>
                                <div>
                                    <h4>Comprehensive Solutions</h4>
                                    <p className="mb-0">From garden design and installation to regular maintenance and specialty services, we offer a full range of garden services.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Meri Bagiya logo icon"/>
                                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">04</div>
                                <div>
                                    <h4>Quality Workmanship</h4>
                                    <p className="mb-0">Our commitment to quality is evident in every service we provide. We use only the best materials, plants, and tools to your garden.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Meri Bagiya logo icon"/>
                                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">05</div>
                                <div>
                                    <h4>Eco-Friendly Practices</h4>
                                    <p className="mb-0">We are dedicated to environmentally sustainable practices. Our organic gardening methods, water-wise landscaping, and  waste management.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                                <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Meri Bagiya logo icon"/>
                                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">06</div>
                                <div>
                                    <h4>Satisfaction Guarantee</h4>
                                    <p className="mb-0">Our top priority is your satisfaction. We take pride in our work, and our many happy customers are a testament to the quality and care.</p>
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

export default About;
