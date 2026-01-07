import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function ArtificialGrass() {
  return (
    <>
      <SEO
        title="Artificial Grass Lawn Services"
        description="Premium artificial grass installation in Greater Noida. Low maintenance synthetic turf for lawns, balconies, terraces, and sports areas by Meri Bagiya."
        keywords="artificial grass, synthetic turf, fake lawn, artificial lawn Greater Noida, grass carpet, turf installation"
        canonicalUrl="/services/artificial-grass"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/5.webp" className="jarallax-img" alt="Artificial grass"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li className="active">Artificial Grass</li>
                </ul>
                <h1 className="text-uppercase">Artificial Grass Lawn</h1>
                <p className="col-lg-10">Evergreen Beauty, Zero Maintenance!</p>
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
                  <Link to="/services/balcony-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Balcony Garden</h4>
                  </Link>
                  <Link to="/services/terrace-garden" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Terrace Garden</h4>
                  </Link>
                  <Link to="/services/indoor-plants" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Indoor Plants</h4>
                  </Link>
                  <Link to="/services/artificial-grass" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Artificial Grass</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
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
                    <h2><span className="id-color-2">Lush Green</span> Lawns Without the <span className="id-color-2">Hassle</span></h2>
                    <p>Get the perfect lawn that stays green year-round without watering, mowing, or fertilizing. Our premium quality artificial grass looks and feels incredibly realistic while saving you time, water, and money.</p>
                    <p>Ideal for areas where natural grass struggles to grow or where maintenance is impractical. Our synthetic turf is safe, durable, and environmentally friendly.</p>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-3">
                      <div className="col-6">
                        <img src="/assets/images/services/1.webp" className="w-100 rounded-1 wow zoomIn" alt="Synthetic lawn"/>
                      </div>
                      <div className="col-6">
                        <img src="/assets/images/services/2.webp" className="w-100 rounded-1 wow zoomIn mb-3" alt="Artificial turf"/>
                        <img src="/assets/images/services/3.webp" className="w-100 rounded-1 wow zoomIn" alt="Green lawn"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Applications */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Perfect <span className="id-color-2">Applications</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/gallery/1.webp" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Home lawn"/>
                      <div className="bg-color text-light p-4">
                        <h5>Home Lawns</h5>
                        <p className="mb-0 small">Transform your front or backyard into an evergreen paradise.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/gallery/2.webp" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Balcony turf"/>
                      <div className="bg-color text-light p-4">
                        <h5>Balconies & Terraces</h5>
                        <p className="mb-0 small">Create soft, green flooring for your outdoor spaces.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/gallery/3.webp" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Sports turf"/>
                      <div className="bg-color text-light p-4">
                        <h5>Sports Areas</h5>
                        <p className="mb-0 small">Durable turf for playgrounds, golf putting greens, and sports.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/gallery/4.webp" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Office grass"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Commercial Spaces</h5>
                        <p className="mb-0 small">Offices, hotels, malls - impress visitors with green aesthetics.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/gallery/5.webp" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="School playground"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Schools & Playgrounds</h5>
                        <p className="mb-0 small">Safe, soft surface for children to play on.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="relative overflow-hidden rounded-1 h-100">
                      <img src="/assets/images/gallery/6.webp" className="w-100" style={{height: '180px', objectFit: 'cover'}} alt="Wall grass"/>
                      <div className="bg-color-2 text-light p-4">
                        <h5>Wall Coverings</h5>
                        <p className="mb-0 small">Vertical grass walls for unique interior/exterior design.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Why Choose */}
                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-4">Why Choose <span className="id-color-2">Artificial Grass?</span></h2>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <i className="icofont-water-drop fs-48 id-color mb-3"></i>
                      <h5>Save Water</h5>
                      <p className="mb-0">No watering needed ever. Save thousands of liters annually.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <i className="icofont-clock-time fs-48 id-color mb-3"></i>
                      <h5>Zero Maintenance</h5>
                      <p className="mb-0">No mowing, fertilizing, or pest control required.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <i className="icofont-sun-alt fs-48 id-color mb-3"></i>
                      <h5>Always Green</h5>
                      <p className="mb-0">UV-resistant - stays vibrant in all weather conditions.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <i className="icofont-shield fs-48 id-color mb-3"></i>
                      <h5>10+ Year Warranty</h5>
                      <p className="mb-0">Long-lasting quality with manufacturer warranty.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <i className="icofont-baby fs-48 id-color mb-3"></i>
                      <h5>Child & Pet Safe</h5>
                      <p className="mb-0">Non-toxic, lead-free, and soft for safe play.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 wow fadeInUp">
                    <div className="text-center p-4 bg-light rounded-1 h-100">
                      <i className="icofont-leaf fs-48 id-color mb-3"></i>
                      <h5>Eco-Friendly</h5>
                      <p className="mb-0">No pesticides or fertilizers polluting groundwater.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                {/* Our Grass Types */}
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <h2 className="mb-4">Our Grass <span className="id-color-2">Varieties</span></h2>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="bg-color text-light">
                          <tr>
                            <th>Type</th>
                            <th>Pile Height</th>
                            <th>Best For</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Standard</strong></td>
                            <td>25mm</td>
                            <td>Balconies, Walls</td>
                          </tr>
                          <tr>
                            <td><strong>Premium</strong></td>
                            <td>35mm</td>
                            <td>Lawns, Gardens</td>
                          </tr>
                          <tr>
                            <td><strong>Luxury</strong></td>
                            <td>40mm</td>
                            <td>High-end Spaces</td>
                          </tr>
                          <tr>
                            <td><strong>Sports</strong></td>
                            <td>50mm</td>
                            <td>Playgrounds, Sports</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src="/assets/images/services/4.webp" className="w-100 rounded-1" alt="Grass types"/>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row">
                  <div className="col-lg-12 text-center">
                    <Link className="btn-main wow fadeInUp" to="/contact">Get Free Quote</Link>
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

export default ArtificialGrass;
