import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function Tools() {
  const tools = [
    {
      id: 'plant-care-calendar',
      title: 'Plant Care Calendar',
      description: 'Track watering, fertilizing, pruning, and repotting schedules for all your plants. Get reminders so you never forget to care for your green friends.',
      icon: 'icofont-calendar',
      link: '/tools/plant-care-calendar',
      color: '#4a7c59'
    }
  ];

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

      {/* Subheader */}
      <section
        id="subheader"
        className="jarallax text-light"
        style={{ backgroundImage: 'url(/assets/images/background/subheader-green.webp)' }}
      >
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-12">
              <div className="subtitle wow fadeInUp mb-3">Free Online Tools</div>
              <h1 className="wow fadeInUp" data-wow-delay=".2s">Gardening Tools</h1>
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

      {/* Tools Grid */}
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 text-center mb-4">
              <h2 className="wow fadeInUp">Free Tools for Plant Lovers</h2>
              <p className="lead wow fadeInUp" data-wow-delay=".2s">
                Helpful tools to make caring for your plants easier
              </p>
            </div>

            {tools.map((tool, index) => (
              <div key={tool.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div className="card-body text-center p-4">
                    <div
                      className="icon-box mb-3 mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: `${tool.color}20`
                      }}
                    >
                      <i className={tool.icon} style={{ fontSize: '36px', color: tool.color }}></i>
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
                        padding: '10px 30px'
                      }}
                    >
                      Open Tool
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                <div className="card-body text-center p-4 d-flex flex-column justify-content-center">
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
                  <h4 className="card-title mb-3 text-muted">More Coming Soon</h4>
                  <p className="card-text text-muted">
                    We're working on more helpful tools for plant lovers. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light">
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
