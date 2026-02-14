import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';

function Shipping() {
  return (
    <>
      <SEO
        title="Pickup & Delivery Policy"
        description="Learn about Meri Bagiya's plant pickup and delivery options. Visit our nursery in Greater Noida or schedule a delivery."
        keywords="plant pickup, nursery visit, plant delivery Greater Noida, Meri Bagiya location"
        canonicalUrl="/shipping"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pickup & Delivery' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/8.webp" className="jarallax-img" alt="Pickup and delivery background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Pickup & Delivery</li>
                </ul>
                <h1 className="text-uppercase">Pickup & Delivery</h1>
                <p className="col-lg-10 lead">Visit our nursery or get plants delivered to your doorstep.</p>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-top dark"></div>
          <div className="de-overlay"></div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">

                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <div className="bg-color text-light p-4 rounded-1 text-center h-100">
                      <i className="icofont-location-pin fs-40 mb-3"></i>
                      <h4>Self Pickup</h4>
                      <p className="mb-2">Visit our nursery to handpick your plants</p>
                      <span className="badge bg-success fs-16">Recommended</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-color-2 text-light p-4 rounded-1 text-center h-100">
                      <i className="icofont-truck-alt fs-40 mb-3"></i>
                      <h4>Home Delivery</h4>
                      <p className="mb-2">Get plants delivered to your location</p>
                      <span className="badge bg-light text-dark fs-16">On Request</span>
                    </div>
                  </div>
                </div>

                <h3 className="mb-3">1. Self Pickup (Recommended)</h3>
                <p>We encourage customers to visit our nursery for the best experience:</p>
                <ul className="mb-4">
                  <li><strong>See Before You Buy:</strong> Handpick healthy plants that you love</li>
                  <li><strong>Expert Guidance:</strong> Get personalized advice from our team</li>
                  <li><strong>Wide Selection:</strong> Browse our full collection of plants</li>
                  <li><strong>No Delivery Charges:</strong> Save on delivery costs</li>
                  <li><strong>Immediate Availability:</strong> Take your plants home the same day</li>
                </ul>

                <div className="bg-light p-4 rounded-1 mb-5">
                  <h5 className="mb-3"><i className="icofont-location-pin me-2 id-color-2"></i>Nursery Location</h5>
                  <p className="mb-2"><strong>Address:</strong> Near Ace Aspire, Amrapali Leisure Valley, Greater Noida, Uttar Pradesh - 201318</p>
                  <p className="mb-3"><strong>Timings:</strong> Monday - Sunday, 8:00 AM - 7:00 PM</p>
                  <a
                    href="https://www.google.com/maps/place/Meri+Bagiya/@28.589999,77.4255937,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-main btn-sm"
                  >
                    <i className="icofont-google-map me-2"></i>Get Directions
                  </a>
                </div>

                <h3 className="mb-3">2. Home Delivery</h3>
                <p>For customers who cannot visit, we offer delivery services:</p>

                <div className="table-responsive mb-4">
                  <table className="table table-bordered">
                    <thead className="bg-color text-light">
                      <tr>
                        <th>Service</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Delivery Areas</strong></td>
                        <td>Greater Noida, Noida, and nearby areas in Delhi NCR</td>
                      </tr>
                      <tr>
                        <td><strong>Delivery Charge</strong></td>
                        <td>Fixed charge based on location (discussed at time of order)</td>
                      </tr>
                      <tr>
                        <td><strong>Scheduling</strong></td>
                        <td>Mutually convenient date & time arranged with customer</td>
                      </tr>
                      <tr>
                        <td><strong>Minimum Order</strong></td>
                        <td>May apply for delivery orders (contact us for details)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mb-3">3. How to Order with Delivery</h3>
                <ol className="mb-4">
                  <li><strong>Contact Us:</strong> Call or WhatsApp us with your requirements</li>
                  <li><strong>Share Your Location:</strong> Provide your delivery address</li>
                  <li><strong>Get Quote:</strong> We'll confirm availability and delivery charges</li>
                  <li><strong>Schedule Delivery:</strong> Choose a convenient date and time</li>
                  <li><strong>Payment:</strong> Pay in advance or on delivery (as agreed)</li>
                  <li><strong>Receive Plants:</strong> Our team will deliver to your doorstep</li>
                </ol>

                <h3 className="mb-3">4. Bulk & Corporate Orders</h3>
                <p>For large orders (offices, events, landscaping projects):</p>
                <ul className="mb-4">
                  <li>Special delivery arrangements available</li>
                  <li>Installation services can be included</li>
                  <li>Custom scheduling for your convenience</li>
                  <li>Contact us for a personalized quote</li>
                </ul>

                <h3 className="mb-3">5. Plant Care During Transit</h3>
                <p>Whether you pick up or we deliver, we ensure your plants arrive healthy:</p>
                <ul className="mb-4">
                  <li>Plants are carefully wrapped to protect leaves and stems</li>
                  <li>Soil is secured to prevent spillage</li>
                  <li>Care instructions provided with every purchase</li>
                  <li>Tips for acclimatizing plants to your home environment</li>
                </ul>

                <h3 className="mb-3">6. After Receiving Your Plants</h3>
                <p>To help your plants thrive:</p>
                <ul className="mb-4">
                  <li>Unpack immediately upon arrival/pickup</li>
                  <li>Water if the soil feels dry</li>
                  <li>Place in appropriate light conditions</li>
                  <li>Allow 1-2 weeks for plants to adjust to new environment</li>
                  <li>Contact us if you have any concerns within 24 hours</li>
                </ul>

                <h3 className="mb-3">7. Contact Us</h3>
                <p>For pickup appointments, delivery requests, or any questions:</p>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="bg-light p-3 rounded-1">
                      <p className="mb-1"><strong><i className="icofont-whatsapp me-2 text-success"></i>WhatsApp (Fastest)</strong></p>
                      <a href="https://wa.me/919220404309" className="text-dark" onClick={() => trackEvent('whatsapp_lead', { button_text: 'WhatsApp Number', location: 'shipping-page-contact-section' })}>+91-9220404309</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light p-3 rounded-1">
                      <p className="mb-1"><strong><i className="icofont-phone me-2 id-color-2"></i>Phone</strong></p>
                      <a href="tel:+919220404309" className="text-dark">+91-9220404309</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light p-3 rounded-1">
                      <p className="mb-1"><strong><i className="icofont-email me-2 id-color-2"></i>Email</strong></p>
                      <a href="mailto:contact@meribagiya.com" className="text-dark">contact@meribagiya.com</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light p-3 rounded-1">
                      <p className="mb-1"><strong><i className="icofont-clock-time me-2 id-color-2"></i>Hours</strong></p>
                      <span>Mon-Sat: 8 AM - 6 PM</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <a href="https://wa.me/919220404309?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20plant%20pickup%2Fdelivery" className="btn-main me-3" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_lead', { button_text: 'WhatsApp Us', location: 'shipping-page-bottom-cta' })}>
                    <i className="icofont-whatsapp me-2"></i>WhatsApp Us
                  </a>
                  <Link to="/return-policy" className="btn-line">View Return Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Shipping;
