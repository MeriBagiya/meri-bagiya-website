import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function BalconyGarden() {
  return (
    <>
      <SEO
        title="Balcony Garden Design Services"
        description="Professional balcony garden design in Greater Noida. Transform your balcony into a green oasis with custom planters, vertical gardens, and expert landscaping by Meri Bagiya."
        keywords="balcony garden, balcony plants, balcony landscaping Greater Noida, small space garden, apartment garden, balcony design"
        canonicalUrl="/services/balcony-garden"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Balcony Garden' }
        ]}
        faqItems={[
          {
            question: 'What plants are best for balcony gardens?',
            answer: 'Low-maintenance plants like money plant, snake plant, peace lily, herbs, and succulents work great for balconies. We select plants based on your balcony sunlight and space.'
          },
          {
            question: 'How much does balcony garden design cost?',
            answer: 'Balcony garden costs depend on size and design complexity. Basic setups start from ₹5,000, while premium designs with planters and irrigation can range from ₹15,000-50,000.'
          },
          {
            question: 'Can you design a balcony garden for apartments?',
            answer: 'Yes! We specialize in apartment balcony gardens in Greater Noida. We work with limited space using vertical planters, railing pots, and creative arrangements.'
          }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/unsplash/1622383563227-04401ab4e5ea.jpg" className="jarallax-img" alt="Balcony garden"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Balcony Garden</li>
                </ul>
                <h1 className="text-uppercase">Balcony Garden</h1>
                <p className="col-lg-10">Your Personal Green Retreat!</p>
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
                  <Link to="/services/balcony-garden" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Balcony Garden</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
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
                    <h2><span className="id-color-2">Transform</span> Your Balcony Into a <span className="id-color-2">Green Paradise</span></h2>
                    <p>Don't let limited space stop you from having a beautiful garden! Our balcony garden design service helps you maximize every inch of your outdoor space, creating a lush, functional, and visually stunning garden retreat right outside your door.</p>
                    <p>From cozy reading nooks surrounded by plants to productive vegetable gardens, we design balcony spaces that suit your lifestyle and preferences.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1598902108854-10e335adac99.jpg" className="w-100 rounded-1 wow zoomIn" alt="Balcony plants"/>
                      </div>
                      <div className="col-6">
                        <img src="/assets/images/unsplash/1416879595882-3373a0480b5b.jpg" className="w-100 rounded-1 wow zoomIn mb-3" alt="Small garden"/>
                        <img src="/assets/images/unsplash/1459411552884-841db9b3cc2a.jpg" className="w-100 rounded-1 wow zoomIn" alt="Balcony design"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* What We Offer */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">What We <span className="id-color-2">Offer</span></h2>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="d-flex bg-light p-4 rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-paint fs-24"></i>
                      </div>
                      <div>
                        <h5>Custom Design</h5>
                        <p className="mb-0">Personalized layouts that maximize your balcony space and match your aesthetic preferences.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="d-flex bg-light p-4 rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-flower fs-24"></i>
                      </div>
                      <div>
                        <h5>Plant Selection</h5>
                        <p className="mb-0">Right plants for your balcony's sunlight, wind exposure, and local climate conditions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="d-flex bg-light p-4 rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-box fs-24"></i>
                      </div>
                      <div>
                        <h5>Planters & Containers</h5>
                        <p className="mb-0">Stylish, space-efficient planters including railing planters, hanging baskets, and tiered stands.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="d-flex bg-light p-4 rounded-1 h-100">
                      <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '50px', height: '50px'}}>
                        <i className="icofont-water-drop fs-24"></i>
                      </div>
                      <div>
                        <h5>Irrigation Setup</h5>
                        <p className="mb-0">Drip irrigation systems for easy watering, even when you're away on vacation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Balcony Types */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Balcony Garden <span className="id-color-2">Ideas</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/unsplash/1466692476868-aef1dfb1e735.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Flowering balcony"/>
                      <div className="bg-color text-light p-4">
                        <h5>Flowering Garden</h5>
                        <p className="mb-0 small">Colorful blooms with petunias, marigolds, and seasonal flowers.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/unsplash/1591857177580-dc82b9ac4e1e.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Herb garden"/>
                      <div className="bg-color text-light p-4">
                        <h5>Herb & Kitchen Garden</h5>
                        <p className="mb-0 small">Fresh herbs, vegetables, and greens for your daily cooking needs.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1">
                      <img src="/assets/images/unsplash/1524247108137-732e0f642303.jpg" className="w-100" style={{height: '200px', objectFit: 'cover'}} alt="Zen balcony"/>
                      <div className="bg-color text-light p-4">
                        <h5>Zen Retreat</h5>
                        <p className="mb-0 small">Peaceful space with bamboo, ornamental grasses, and meditation area.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Benefits */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Benefits of a <span className="id-color-2">Balcony Garden</span></h2>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color text-light rounded-1 h-100">
                      <i className="icofont-air fs-48 mb-3"></i>
                      <h5>Fresh Air</h5>
                      <p className="mb-0 small">Plants purify the air you breathe at home.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-emo-simple-smile fs-48 mb-3"></i>
                      <h5>Stress Relief</h5>
                      <p className="mb-0 small">Gardening reduces stress and improves mental health.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color text-light rounded-1 h-100">
                      <i className="icofont-sun-alt fs-48 mb-3"></i>
                      <h5>Privacy Screen</h5>
                      <p className="mb-0 small">Plants create natural privacy from neighbors.</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp">
                    <div className="text-center p-4 bg-color-2 text-light rounded-1 h-100">
                      <i className="icofont-home fs-48 mb-3"></i>
                      <h5>Property Value</h5>
                      <p className="mb-0 small">Beautiful balcony increases your home's appeal.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Design My Balcony</Link>
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

export default BalconyGarden;
