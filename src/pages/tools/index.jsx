import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { plantTemplates } from '../../data/plantTemplates';

function Tools() {
  const navigate = useNavigate();

  const homeTools = [
    {
      id: 'plant-care-calendar',
      title: 'Plant Care Calendar',
      description: 'Track watering & care schedules for all your plants.',
      icon: 'icofont-calendar',
      link: '/tools/plant-care-calendar',
      color: '#4a7c59',
      image: '/assets/images/plants/monstera.jpg'
    },
    {
      id: 'plant-disease-identifier',
      title: 'Plant Disease Identifier',
      description: 'AI-powered tool to identify plant diseases from photos.',
      icon: 'icofont-search-2',
      link: '/tools/plant-disease-identifier',
      color: '#28a745',
      image: '/assets/images/plants/plant-disease.jpg'
    },
    {
      id: 'fertilizer-calculator',
      title: 'Fertilizer Calculator',
      description: 'Calculate exact fertilizer amounts based on plant type, pot size, and growth stage.',
      icon: 'icofont-calculator',
      link: '/tools/fertilizer-calculator',
      color: '#fd7e14',
      image: '/assets/images/plants/jade-plant.jpg'
    },
    {
      id: 'plant-growth-tracker',
      title: 'Plant Growth Tracker',
      description: 'Track plant height, health, bloom cycles with photo timeline and growth analytics.',
      icon: 'icofont-chart-growth',
      link: '/tools/plant-growth-tracker',
      color: '#9c27b0',
      image: '/assets/images/plants/pothos.jpg'
    },
    {
      id: 'terrace-garden-cost-calculator',
      title: 'Terrace Garden Cost Calculator',
      description: 'Estimate terrace or rooftop garden setup cost per sq ft with features breakdown.',
      icon: 'icofont-home',
      link: '/tools/terrace-garden-cost-calculator',
      color: '#e91e63',
      image: '/assets/images/plants/jade-plant.jpg'
    },
    {
      id: 'plant-rental-vs-buy-calculator',
      title: 'Rental vs Buy Calculator',
      description: 'Compare costs of renting vs buying plants over 1-3 years. Find the better deal.',
      icon: 'icofont-exchange',
      link: '/tools/plant-rental-vs-buy-calculator',
      color: '#009688',
      image: '/assets/images/plants/pothos.jpg'
    },
    {
      id: 'indoor-plant-quiz',
      title: 'Indoor Plant Quiz',
      description: 'Answer 7 questions to find the perfect indoor plants for your space and lifestyle.',
      icon: 'icofont-question-circle',
      link: '/tools/indoor-plant-quiz',
      color: '#673ab7',
      image: '/assets/images/plants/monstera.jpg'
    }
  ];

  const businessTools = [
    {
      id: 'society-garden-cost-estimator',
      title: 'Society Garden AMC Estimator',
      description: 'Estimate monthly garden maintenance contract costs for your residential society.',
      icon: 'icofont-building-alt',
      link: '/tools/society-garden-cost-estimator',
      color: '#0d6efd',
      image: '/assets/images/plants/monstera.jpg'
    },
    {
      id: 'corporate-gifting-calculator',
      title: 'Corporate Gifting Planner',
      description: 'Plan your budget for corporate plant gifts — Diwali, New Year, employee appreciation.',
      icon: 'icofont-gift',
      link: '/tools/corporate-gifting-calculator',
      color: '#ff9800',
      image: '/assets/images/plants/jade-plant.jpg'
    }
  ];

  // Get first 6 plants for the showcase
  const showcasePlants = plantTemplates.slice(0, 6);

  return (
    <>
      <SEO
        title="Free Gardening Tools & Calculators | Meri Bagiya"
        description="Free online gardening tools — plant care calendar, disease identifier, fertilizer calculator, growth tracker, society AMC estimator, terrace garden cost calculator, corporate gifting planner, and more."
        keywords="gardening tools, plant care calendar, society garden maintenance cost calculator, terrace garden cost calculator, corporate plant gifting calculator, plant rental calculator, indoor plant quiz"
        canonicalUrl="/tools"
        breadcrumbs={[
          { name: 'Home', url: 'https://meribagiya.com/' },
          { name: 'Tools', url: 'https://meribagiya.com/tools' }
        ]}
      />

      {/* Subheader with Plant Images */}
      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/plants/monstera.jpg" className="jarallax-img" alt="Gardening Tools" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">Tools</li>
              </ul>
              <h1>Gardening Tools</h1>
              <p>Helpful digital tools to make caring for your plants easier</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      {/* Plant Showcase Section */}
      <section className="pt-4">
        <div className="container">
          <div className="row g-3 mb-5">
            {showcasePlants.map((plant, index) => (
              <div key={plant.id} className="col-4 col-md-2 wow fadeInUp" data-wow-delay={`${0.1 * index}s`}>
                <div
                  className="text-center"
                  style={{
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="p-2 bg-white">
                    <small className="fw-bold" style={{ color: '#4a7c59', fontSize: '11px' }}>{plant.name}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid - Home & Garden */}
      <section className="pt-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="wow fadeInUp">For Your Home & Garden</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".2s">
                Free tools to help you care for your plants and plan your garden
              </p>
            </div>

            {homeTools.map((tool, index) => (
              <div key={tool.id} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="card h-100 border-0 shadow" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                  <div className="row g-0 flex-column flex-md-row h-100">
                    <div className="col-12 col-md-5">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', minHeight: '200px', borderRadius: '20px 0 0 20px' }}
                      />
                    </div>
                    <div className="col-12 col-md-7 d-flex" style={{ overflow: 'hidden' }}>
                      <div className="card-body p-3 p-md-4 d-flex flex-column justify-content-center" style={{ overflow: 'hidden' }}>
                        <div
                          className="icon-box mb-2 mb-md-3 d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: `${tool.color}20`
                          }}
                        >
                          <i className={tool.icon} style={{ fontSize: '24px', color: tool.color }}></i>
                        </div>
                        <h5 className="card-title mb-2 mb-md-3">{tool.title}</h5>
                        <p className="card-text text-muted mb-3 mb-md-4" style={{
                          fontSize: '14px',
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          overflow: 'hidden'
                        }}>{tool.description}</p>
                        <button
                          onClick={() => navigate(tool.link)}
                          className="btn btn-main flex-shrink-0"
                          style={{
                            backgroundColor: tool.color,
                            borderColor: tool.color,
                            borderRadius: '25px',
                            padding: '10px 20px',
                            width: 'fit-content',
                            fontSize: '14px',
                            cursor: 'pointer'
                          }}
                        >
                          Open Tool <i className="icofont-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Tools Grid - Business & Societies */}
      <section className="pt-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="wow fadeInUp">For Business & Societies</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".2s">
                Cost calculators for corporate offices, societies, and bulk orders
              </p>
            </div>

            {businessTools.map((tool, index) => (
              <div key={tool.id} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="card h-100 border-0 shadow" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                  <div className="row g-0 flex-column flex-md-row h-100">
                    <div className="col-12 col-md-5">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', minHeight: '200px', borderRadius: '20px 0 0 20px' }}
                      />
                    </div>
                    <div className="col-12 col-md-7 d-flex" style={{ overflow: 'hidden' }}>
                      <div className="card-body p-3 p-md-4 d-flex flex-column justify-content-center" style={{ overflow: 'hidden' }}>
                        <div
                          className="icon-box mb-2 mb-md-3 d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: `${tool.color}20`
                          }}
                        >
                          <i className={tool.icon} style={{ fontSize: '24px', color: tool.color }}></i>
                        </div>
                        <h5 className="card-title mb-2 mb-md-3">{tool.title}</h5>
                        <p className="card-text text-muted mb-3 mb-md-4" style={{
                          fontSize: '14px',
                          lineHeight: '1.5',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          overflow: 'hidden'
                        }}>{tool.description}</p>
                        <button
                          onClick={() => navigate(tool.link)}
                          className="btn btn-main flex-shrink-0"
                          style={{
                            backgroundColor: tool.color,
                            borderColor: tool.color,
                            borderRadius: '25px',
                            padding: '10px 20px',
                            width: 'fit-content',
                            fontSize: '14px',
                            cursor: 'pointer'
                          }}
                        >
                          Open Tool <i className="icofont-arrow-right ms-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-12 text-center">
              <h3 className="wow fadeInUp">Plants We Support</h3>
              <p className="text-muted wow fadeInUp" data-wow-delay=".2s">
                Our Plant Care Calendar includes care schedules for these popular plants
              </p>
            </div>
          </div>
          <div className="row g-4">
            {plantTemplates.map((plant, index) => (
              <div key={plant.id} className="col-6 col-md-4 col-lg-3 wow fadeInUp" data-wow-delay={`${0.1 * (index % 4)}s`}>
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{ borderRadius: '15px', overflow: 'hidden' }}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="card-body p-3 text-center">
                    <h6 className="mb-1">{plant.name}</h6>
                    <small className="text-muted d-block mb-2" style={{ fontSize: '11px' }}>{plant.scientificName}</small>
                    <span className={`badge ${plant.difficulty === 'Easy' ? 'bg-success' : plant.difficulty === 'Medium' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                      {plant.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <Link
                to="/tools/plant-care-calendar"
                className="btn btn-main btn-lg wow fadeInUp"
                style={{ borderRadius: '30px', padding: '15px 40px', position: 'relative', zIndex: 10 }}
              >
                <i className="icofont-calendar me-2"></i> Start Tracking Your Plants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="wow fadeInUp">Need Help With Your Garden?</h3>
              <p className="wow fadeInUp" data-wow-delay=".2s">
                Our expert team can help you design, maintain, and care for your garden.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact" className="btn btn-main wow fadeInUp" data-wow-delay=".4s">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tools;
