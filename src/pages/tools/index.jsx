import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { plantTemplates } from '../../data/plantTemplates';

function Tools() {
  const tools = [
    {
      id: 'plant-care-calendar',
      title: 'Plant Care Calendar',
      description: 'Track watering, fertilizing, pruning, and repotting schedules for all your plants. Get reminders so you never forget to care for your green friends.',
      icon: 'icofont-calendar',
      link: '/tools/plant-care-calendar',
      color: '#4a7c59',
      image: '/assets/images/plants/monstera.jpg'
    },
    {
      id: 'plant-disease-identifier',
      title: 'Plant Disease Identifier',
      description: 'Upload a photo of your plant to identify diseases with our AI-powered tool. Get instant results and care recommendations.',
      icon: 'icofont-search-2',
      link: '/tools/plant-disease-identifier',
      color: '#28a745',
      image: '/assets/images/plants/plant-disease.jpg'
    }
  ];

  // Get first 6 plants for the showcase
  const showcasePlants = plantTemplates.slice(0, 6);

  return (
    <>
      <SEO
        title="Gardening Tools | Meri Bagiya"
        description="Free online gardening tools to help you care for your plants. Plant care calendar, watering reminders, and more."
        keywords="gardening tools, plant care calendar, watering reminder, plant tracker, garden planner"
        breadcrumbs={[
          { name: 'Home', url: 'https://meribagiya.com/' },
          { name: 'Tools', url: 'https://meribagiya.com/tools' }
        ]}
      />

      {/* Subheader with Plant Images */}
      <section
        id="subheader"
        className="jarallax text-light"
        style={{
          backgroundImage: 'url(/assets/images/plants/monstera.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}></div>
        <div className="container relative z-index-1000" style={{ position: 'relative', zIndex: 10 }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="subtitle wow fadeInUp mb-3">Free Online Tools</div>
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Gardening Tools</h1>
              <p className="lead mt-3 wow fadeInUp" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                Helpful digital tools to make caring for your plants easier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container">
        <ul className="crumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Tools</li>
        </ul>
      </div>

      {/* Plant Showcase Section */}
      <section className="pt-0">
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

      {/* Tools Grid */}
      <section className="pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="wow fadeInUp">Free Tools for Plant Lovers</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".2s">
                Helpful tools to make caring for your plants easier
              </p>
            </div>

            {tools.map((tool, index) => (
              <div key={tool.id} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="card h-100 border-0 shadow" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                  <div className="row g-0">
                    <div className="col-md-5">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="h-100 w-100"
                        style={{ objectFit: 'cover', minHeight: '250px' }}
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4 d-flex flex-column justify-content-center h-100">
                        <div
                          className="icon-box mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: `${tool.color}20`
                          }}
                        >
                          <i className={tool.icon} style={{ fontSize: '28px', color: tool.color }}></i>
                        </div>
                        <h4 className="card-title mb-3">{tool.title}</h4>
                        <p className="card-text text-muted mb-4">{tool.description}</p>
                        <Link
                          to={tool.link}
                          className="btn btn-main"
                          style={{
                            backgroundColor: tool.color,
                            borderColor: tool.color,
                            borderRadius: '25px',
                            padding: '12px 30px',
                            width: 'fit-content'
                          }}
                        >
                          Open Tool <i className="icofont-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '20px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <div className="card-body text-center p-5 d-flex flex-column justify-content-center">
                  <div
                    className="icon-box mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: '#e9ecef'
                    }}
                  >
                    <i className="icofont-plus" style={{ fontSize: '36px', color: '#adb5bd' }}></i>
                  </div>
                  <h4 className="card-title mb-3 text-muted">More Tools Coming Soon</h4>
                  <p className="card-text text-muted">
                    We're working on more helpful tools for plant lovers. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
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
                style={{ borderRadius: '30px', padding: '15px 40px' }}
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
