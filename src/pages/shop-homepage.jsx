import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Shophomepage() {
  // Initialize Swiper after component mounts
  useEffect(() => {
    // Check if Swiper is available globally
    if (typeof window.Swiper !== 'undefined') {
      const swiper = new window.Swiper('.swiper', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        direction: 'horizontal',
        loop: true,
        speed: 1200,
        watchSlidesProgress: true,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      // Cleanup on unmount
      return () => {
        if (swiper && swiper.destroy) {
          swiper.destroy(true, true);
        }
      };
    }
  }, []);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://meribagiya.com/#business",
    "name": "Meri Bagiya",
    "alternateName": "Meri Bagiya Plant Nursery",
    "description": "Meri Bagiya is a trusted plant nursery and garden services provider in Greater Noida, Delhi NCR. We offer indoor plants, outdoor plants, garden design, landscaping, and plant rental services.",
    "image": [
      "https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png",
      "https://meribagiya.com/assets/images/gallery/1.webp",
      "https://meribagiya.com/assets/images/gallery/2.webp"
    ],
    "logo": "https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png",
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
      "latitude": "28.4744",
      "longitude": "77.5040"
    },
    "url": "https://meribagiya.com",
    "telephone": "+91-XXXXXXXXXX",
    "email": "contact@meribagiya.com",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/meribagiya",
      "https://www.instagram.com/meribagiya"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Greater Noida"
      },
      {
        "@type": "City",
        "name": "Noida"
      },
      {
        "@type": "State",
        "name": "Delhi NCR"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Garden Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plant Rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Maintenance"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Plant Nursery & Garden Services"
        description="Meri Bagiya - Buy quality indoor plants, outdoor plants, flowering plants. Professional garden design, maintenance & landscaping services in Greater Noida."
        keywords="plant nursery near me, indoor plants, outdoor plants, garden services Greater Noida, buy plants online, nursery near me, plant shop Noida, Delhi NCR plants, landscaping services, garden design near me"
        canonicalUrl="/"
        jsonLd={jsonLd}
      />

        {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="section-intro" className="slider-light no-top no-bottom relative overflow-hidden z-1000">
                <div className="v-center relative">

                    <div className="swiper">
                      {/* <!-- Additional required wrapper --> */}
                      <div className="swiper-wrapper">

                        {/* <!-- Slide 1 --> */}
                        <div className="swiper-slide">
                            <div className="swiper-inner jarallax" style={{position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/slider/1.jpg'} className="jarallax-img" alt=""/>
                                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
                                <div className="sw-caption z-1000 text-white">
                                    <div className="container">
                                        <div className="row g-4 align-items-center justify-content-between">

                                            <div className="spacer-double"></div>

                                            <div className="col-lg-5">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="subtitle" style={{color: '#8bc34a'}}>Best Quality Plants</div>
                                                    <h2 className="slider-title text-uppercase mb-4">Discover Amazing <span className="id-color-2">variety of plants</span></h2>
                                                    <p className="slider-text">From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.</p>

                                                    <div className="d-flex mb-4 slider-extra xs-hide">
                                                        <div className="d-inline me-3 w-130px text-center overlay-white-6 p-3 rounded-1">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/shop/svg/coupon-svgrepo-com.svg'} className="w-40 mb-1" alt=""/>
                                                            <h6 className="mb-0">Special Price</h6>
                                                        </div>

                                                        <div className="d-inline me-3 w-130px text-center overlay-white-6 p-3 rounded-1">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/shop/svg/shipped-truck-svgrepo-com.svg'} className="w-40 mb-1" alt=""/>
                                                            <h6 className="mb-0">Free Delivery</h6>
                                                        </div>

                                                        <div className="d-inline me-3 w-130px text-center overlay-white-6 p-3 rounded-1">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/shop/svg/recommended-like-svgrepo-com.svg'} className="w-40 mb-1" alt=""/>
                                                            <h6 className="mb-0">Guarantee</h6>
                                                        </div>
                                                    </div>

                                                    <Link to="/services/plant-rental" className="btn-main mb10 mb-3">Rental Service</Link>
                                                </div>
                                            </div>

                                            <div className="spacer-single"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 2 --> */}
                        <div className="swiper-slide">
                            <div className="swiper-inner jarallax" style={{position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/slider/2.jpg'} className="jarallax-img" alt=""/>
                                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
                                <div className="sw-caption z-1000 text-white">
                                    <div className="container">
                                        <div className="row g-4 align-items-center justify-content-between">

                                            <div className="spacer-double"></div>

                                            <div className="col-lg-5">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="subtitle" style={{color: '#8bc34a'}}>Premium Garden Services</div>
                                                    <h2 className="slider-title text-uppercase mb-4">Transform Your <span className="id-color-2">Garden Today</span></h2>
                                                    <p className="slider-text">Expert garden design, maintenance and care services to create your dream outdoor space.</p>

                                                    <Link to="/services" className="btn-main mb10 mb-3">Our Services</Link>
                                                </div>
                                            </div>

                                            <div className="spacer-single"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 3 --> */}
                        <div className="swiper-slide">
                            <div className="swiper-inner jarallax" style={{position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/slider/3.jpg'} className="jarallax-img" alt=""/>
                                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
                                <div className="sw-caption z-1000 text-white">
                                    <div className="container">
                                        <div className="row g-4 align-items-center justify-content-between">

                                            <div className="spacer-double"></div>

                                            <div className="col-lg-5">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="subtitle" style={{color: '#8bc34a'}}>Fresh & Healthy Plants</div>
                                                    <h2 className="slider-title text-uppercase mb-4">Bring Nature <span className="id-color-2">To Your Home</span></h2>
                                                    <p className="slider-text">Wide selection of indoor and outdoor plants to brighten up any space.</p>

                                                    <Link to="/services/plant-rental" className="btn-main mb10 mb-3">Rental Service</Link>
                                                </div>
                                            </div>

                                            <div className="spacer-single"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 4 --> */}
                        <div className="swiper-slide">
                            <div className="swiper-inner jarallax" style={{position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/slider/4.jpg'} className="jarallax-img" alt=""/>
                                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
                                <div className="sw-caption z-1000 text-white">
                                    <div className="container">
                                        <div className="row g-4 align-items-center justify-content-between">

                                            <div className="spacer-double"></div>

                                            <div className="col-lg-5">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="subtitle" style={{color: '#8bc34a'}}>Expert Care</div>
                                                    <h2 className="slider-title text-uppercase mb-4">Professional <span className="id-color-2">Plant Care</span></h2>
                                                    <p className="slider-text">Let our experts help you maintain a beautiful and thriving garden all year round.</p>

                                                    <Link to="/contact" className="btn-main mb10 mb-3">Contact Us</Link>
                                                </div>
                                            </div>

                                            <div className="spacer-single"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 5 --> */}
                        <div className="swiper-slide">
                            <div className="swiper-inner jarallax" style={{position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/slider/5.jpg'} className="jarallax-img" alt=""/>
                                <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
                                <div className="sw-caption z-1000 text-white">
                                    <div className="container">
                                        <div className="row g-4 align-items-center justify-content-between">

                                            <div className="spacer-double"></div>

                                            <div className="col-lg-5">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="subtitle" style={{color: '#8bc34a'}}>Special Offers</div>
                                                    <h2 className="slider-title text-uppercase mb-4">Great Deals on <span className="id-color-2">Plants & Services</span></h2>
                                                    <p className="slider-text">Check out our latest offers and discounts on plants and garden services.</p>

                                                    <Link to="/shop-all" className="btn-main mb10 mb-3">View Offers</Link>
                                                </div>
                                            </div>

                                            <div className="spacer-single"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- If we need navigation buttons --> */}
                    <div className="swiper-button-prev no-bg text-dark"></div>
                    <div className="swiper-button-next no-bg text-dark"></div>

                </div>
            </div>
        </section>





        <section className="bg-light">
            <div className="container">
                <div className="row g-4 mb-3 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Wholesale Plant Nursery</div>
                        <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Wholesale Plant Nursery in <span className="id-color-2">Greater Noida</span>, Uttar Pradesh</h2>
                        <p className="wow fadeInUp" data-wow-delay=".3s">Discover a world of vibrant, high-quality plants at our wholesale nursery. We specialize in supplying retail nurseries, landscapers, and garden centers with a diverse range of trees, shrubs, perennials, and more. Our state-of-the-art facilities ensure optimal growing conditions, and our sustainable practices promote environmental stewardship.</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp">
                        <div className="relative h-100 bg-color text-light padding30 rounded-1">
                            <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Wide variety"/>
                            <div>
                                <h4>Wide Variety</h4>
                                <p className="mb-0">From native species to exotic blooms, we offer an extensive selection to meet all your landscaping needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                        <div className="relative h-100 bg-color text-light padding30 rounded-1">
                            <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Quality assurance"/>
                            <div>
                                <h4>Quality Assurance</h4>
                                <p className="mb-0">Our meticulous cultivation practices ensure that every plant is healthy and robust.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                        <div className="relative h-100 bg-color text-light padding30 rounded-1">
                            <img src="/assets/images/logo-icon.webp" className="w-50px mb-3" alt="Sustainable practices"/>
                            <div>
                                <h4>Sustainable Practices</h4>
                                <p className="mb-0">We prioritize water conservation, organic methods, and energy efficiency in all our operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay=".6s">
                        <Link to="/contact" className="btn-main">Contact for Wholesale</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="jarallax">
            <img src="/assets/images/shop/slider/bg.webp" className="jarallax-img" alt=""/>
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between">

                    <div className="col-lg-5 col-12 text-center text-lg-start">
                        <div className="sw-text-wrapper">
                            <div className="subtitle">Best Quality Plants</div>
                            <h2 className="mb-2 text-uppercase" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'}}>Discover Amazing <span className="id-color-2">variety of plants</span></h2>
                            <p>From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.</p>

                            <Link to="/services/plant-rental" className="btn-main mb10 mb-3">Rental Service</Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="row g-3">
                            <div className="col-6">
                                <img src={process.env.PUBLIC_URL + '/assets/images/shop/misc/1.webp'} className="w-100 rounded-1" alt="Quality Plants"/>
                            </div>
                            <div className="col-6">
                                <img src={process.env.PUBLIC_URL + '/assets/images/shop/misc/2.webp'} className="w-100 rounded-1" alt="Quality Plants"/>
                            </div>
                            <div className="col-6">
                                <img src={process.env.PUBLIC_URL + '/assets/images/shop/misc/3.webp'} className="w-100 rounded-1" alt="Quality Plants"/>
                            </div>
                            <div className="col-6">
                                <img src={process.env.PUBLIC_URL + '/assets/images/shop/misc/4.webp'} className="w-100 rounded-1" alt="Quality Plants"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>



    </div>
    {/* <!-- content end --> */}


    {/* <!-- overlay content begin --> */}
<div id="extra-wrap" className="de-light cart-wrap">
    <div id="btn-close" className="dark">
        <span></span>
        <span></span>
    </div>

    <div id="extra-content">
        <img src="/assets/images/logo-black.webp" className="w-150px" alt=""/>

        <div className="spacer-30-line"></div>

        <h5 className="mb-3">Your Cart</h5>
        
        <div className="cart-items">                
            {/* <!-- cart item begin --> */}
            <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                    <div className="d-wrap">
                        <input type="checkbox" id="item" name="item" className="d-checkbox__input" checked />
                        <label for="item" className="d-checkbox__label align-items-center"></label>
                        <img src="/assets/images/shop/plants/peace-lily-l.webp" alt=""/>
                        <div className="d-info">
                            <div>
                                <h4>Peace Lily</h4>                                
                                <span className="d-price">₹150</span> 
                            </div>         
                        </div>  
                    </div>

                    <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" value="1"/>
                        <span className="d-plus">+</span>
                    </div>
                </div>
            </div>   
            {/* <!-- cart item end --> */}

            {/* <!-- cart item begin --> */}
            <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                    <div className="d-wrap">
                        <input type="checkbox" id="item" name="item" className="d-checkbox__input" checked />
                        <label for="item" className="d-checkbox__label align-items-center"></label>
                        <img src={process.env.PUBLIC_URL + '/assets/images/shop/plants/aglonema.webp'} alt=""/>
                        <div className="d-info">
                            <div>
                                <h4>Aglonema Plant</h4>                                
                                <span className="d-price">₹150</span> 
                            </div>         
                        </div>  
                    </div>

                    <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" value="1"/>
                        <span className="d-plus">+</span>
                    </div>
                </div>
            </div>   
            {/* <!-- cart item end --> */}

            {/* <!-- cart item begin --> */}
            <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                    <div className="d-wrap">
                        <input type="checkbox" id="item" name="item" className="d-checkbox__input" checked />
                        <label for="item" className="d-checkbox__label align-items-center"></label>
                        <img src={process.env.PUBLIC_URL + '/assets/images/shop/plants/jade-mini.webp'} alt=""/>
                        <div className="d-info">
                            <div>
                                <h4>Jade Mini Plant</h4>                                
                                <span className="d-price">₹150</span> 
                            </div>         
                        </div>  
                    </div>

                    <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" value="1"/>
                        <span className="d-plus">+</span>
                    </div>
                </div>
            </div>   
            {/* <!-- cart item end --> */}

            {/* <!-- cart item begin --> */}
            <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                    <div className="d-wrap">
                        <input type="checkbox" id="item" name="item" className="d-checkbox__input" checked />
                        <label for="item" className="d-checkbox__label align-items-center"></label>
                        <img src="/assets/images/shop/plants/monstera-deliciosa.webp" alt=""/>
                        <div className="d-info">
                            <div>
                                <h4>Monstera Deliciosa Plant</h4>                                
                                <span className="d-price">₹150</span> 
                            </div>         
                        </div>  
                    </div>

                    <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" value="1"/>
                        <span className="d-plus">+</span>
                    </div>
                </div>
            </div>   
            {/* <!-- cart item end --> */}

            {/* <!-- cart item begin --> */}
            <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                    <div className="d-wrap">
                        <input type="checkbox" id="item" name="item" className="d-checkbox__input" checked />
                        <label for="item" className="d-checkbox__label align-items-center"></label>
                        <img src="/assets/images/shop/plants/anthurium-red.webp" alt=""/>
                        <div className="d-info">
                            <div>
                                <h4>Anthurium Red Plant</h4>                                
                                <span className="d-price">₹150</span> 
                            </div>         
                        </div>  
                    </div>

                    <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" value="1"/>
                        <span className="d-plus">+</span>
                    </div>
                </div>
            </div>   
            {/* <!-- cart item end --> */}

            {/* <!-- cart item begin --> */}
            <div className="de__cart">
                <div className="de__cart-item justify-content-between">
                    <div className="d-wrap">
                        <input type="checkbox" id="item" name="item" className="d-checkbox__input" checked />
                        <label for="item" className="d-checkbox__label align-items-center"></label>
                        <img src="images/shop/plants/peace-lily-l.webp" alt=""/>
                        <div className="d-info">
                            <div>
                                <h4>Peace Lily</h4>                                
                                <span className="d-price">₹150</span> 
                            </div>         
                        </div>  
                    </div>

                    <div className="de-number">
                        <span className="d-minus">-</span>
                        <input type="text" className="no-border no-bg" value="1"/>
                        <span className="d-plus">+</span>
                    </div>
                </div>
            </div>   
            {/* <!-- cart item end -->                    */}
        </div>

    </div>
</div>
{/* <!-- overlay content end --> */}

    </>
  )
};

export default Shophomepage;