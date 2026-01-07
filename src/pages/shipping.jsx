import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Shipping() {
  return (
    <>
      <SEO
        title="Shipping Policy"
        description="Learn about Meri Bagiya's shipping and delivery policy. Delivery areas, shipping costs, delivery timelines, and order tracking information."
        keywords="shipping policy, delivery areas, plant delivery, shipping costs, Greater Noida delivery"
        canonicalUrl="/shipping"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Shipping Policy' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/8.webp" className="jarallax-img" alt="Shipping policy background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Shipping Policy</li>
                </ul>
                <h1 className="text-uppercase">Shipping Policy</h1>
                <p className="col-lg-10 lead">Fast, safe delivery of healthy plants to your doorstep.</p>
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
                <p className="mb-4"><strong>Last Updated:</strong> January 2026</p>

                <div className="row g-4 mb-5">
                  <div className="col-md-4">
                    <div className="bg-color text-light p-4 rounded-1 text-center h-100">
                      <i className="icofont-truck-alt fs-40 mb-3"></i>
                      <h5>Free Delivery</h5>
                      <p className="mb-0">On orders above Rs. 999 in Greater Noida</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-color text-light p-4 rounded-1 text-center h-100">
                      <i className="icofont-clock-time fs-40 mb-3"></i>
                      <h5>2-5 Days Delivery</h5>
                      <p className="mb-0">Standard delivery timeline</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-color text-light p-4 rounded-1 text-center h-100">
                      <i className="icofont-box fs-40 mb-3"></i>
                      <h5>Safe Packaging</h5>
                      <p className="mb-0">Plants packed securely for transit</p>
                    </div>
                  </div>
                </div>

                <h3 className="mb-3">1. Delivery Areas</h3>
                <p><strong>Primary Service Areas (Standard Delivery):</strong></p>
                <ul>
                  <li>Greater Noida (all sectors)</li>
                  <li>Noida (all sectors)</li>
                  <li>Ghaziabad</li>
                  <li>Delhi (select areas)</li>
                  <li>Faridabad (select areas)</li>
                  <li>Gurugram (select areas)</li>
                </ul>
                <p className="mt-3 mb-4"><strong>Extended Delivery:</strong> For locations outside our primary service area, please contact us. Additional charges and longer delivery times may apply.</p>

                <h3 className="mb-3">2. Shipping Costs</h3>
                <div className="table-responsive mb-4">
                  <table className="table table-bordered">
                    <thead className="bg-color text-light">
                      <tr>
                        <th>Order Value</th>
                        <th>Greater Noida</th>
                        <th>Noida/Ghaziabad</th>
                        <th>Delhi NCR</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Below Rs. 499</td>
                        <td>Rs. 99</td>
                        <td>Rs. 149</td>
                        <td>Rs. 199</td>
                      </tr>
                      <tr>
                        <td>Rs. 499 - Rs. 999</td>
                        <td>Rs. 49</td>
                        <td>Rs. 99</td>
                        <td>Rs. 149</td>
                      </tr>
                      <tr>
                        <td>Above Rs. 999</td>
                        <td className="text-success fw-bold">FREE</td>
                        <td>Rs. 49</td>
                        <td>Rs. 99</td>
                      </tr>
                      <tr>
                        <td>Above Rs. 2,000</td>
                        <td className="text-success fw-bold">FREE</td>
                        <td className="text-success fw-bold">FREE</td>
                        <td>Rs. 49</td>
                      </tr>
                      <tr>
                        <td>Above Rs. 5,000</td>
                        <td className="text-success fw-bold">FREE</td>
                        <td className="text-success fw-bold">FREE</td>
                        <td className="text-success fw-bold">FREE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4"><em>Note: Large plants, heavy pots, and bulk orders may have additional shipping charges based on weight and size.</em></p>

                <h3 className="mb-3">3. Delivery Timeline</h3>
                <div className="table-responsive mb-4">
                  <table className="table table-bordered">
                    <thead className="bg-color text-light">
                      <tr>
                        <th>Delivery Type</th>
                        <th>Timeline</th>
                        <th>Availability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Same Day Delivery</strong></td>
                        <td>Within 4-6 hours</td>
                        <td>Greater Noida only, orders before 12 PM</td>
                      </tr>
                      <tr>
                        <td><strong>Next Day Delivery</strong></td>
                        <td>Next business day</td>
                        <td>Greater Noida & Noida</td>
                      </tr>
                      <tr>
                        <td><strong>Standard Delivery</strong></td>
                        <td>2-5 business days</td>
                        <td>All service areas</td>
                      </tr>
                      <tr>
                        <td><strong>Scheduled Delivery</strong></td>
                        <td>Choose your date</td>
                        <td>Available for all areas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mb-4"><em>Business days are Monday to Saturday, excluding public holidays.</em></p>

                <h3 className="mb-3">4. Order Processing</h3>
                <ul className="mb-4">
                  <li><strong>Order Confirmation:</strong> You'll receive an email/SMS confirming your order within 30 minutes</li>
                  <li><strong>Processing Time:</strong> Orders are processed within 1 business day</li>
                  <li><strong>Dispatch Notification:</strong> You'll be notified when your order is shipped</li>
                  <li><strong>Delivery Call:</strong> Our delivery partner will call before arriving</li>
                </ul>

                <h3 className="mb-3">5. Packaging</h3>
                <p>We take special care in packaging your plants:</p>
                <ul className="mb-4">
                  <li><strong>Protective Wrapping:</strong> Plants are wrapped to protect leaves and stems</li>
                  <li><strong>Secure Potting:</strong> Soil is secured to prevent spillage</li>
                  <li><strong>Cushioning:</strong> Boxes include cushioning material for protection</li>
                  <li><strong>Ventilation:</strong> Packaging allows for air circulation</li>
                  <li><strong>Care Instructions:</strong> Each order includes plant care guide</li>
                </ul>

                <h3 className="mb-3">6. Delivery Instructions</h3>
                <p><strong>6.1 Receiving Your Order:</strong></p>
                <ul>
                  <li>Please be available at the delivery address during the expected time</li>
                  <li>Inspect the package before accepting</li>
                  <li>Report any visible damage immediately to the delivery person</li>
                  <li>Take photos if you notice any issues</li>
                </ul>
                <p className="mt-3 mb-4"><strong>6.2 If You're Not Available:</strong></p>
                <ul className="mb-4">
                  <li>Authorize someone else to receive on your behalf</li>
                  <li>Contact us to reschedule delivery</li>
                  <li>After 2 failed delivery attempts, order may be returned</li>
                </ul>

                <h3 className="mb-3">7. Bulk & Corporate Orders</h3>
                <p>For large orders (10+ plants or corporate orders):</p>
                <ul className="mb-4">
                  <li>Custom delivery scheduling available</li>
                  <li>Dedicated delivery support</li>
                  <li>Special packaging for bulk quantities</li>
                  <li>Installation services available (additional charges)</li>
                  <li>Contact us for a custom quote: +91-9220404309</li>
                </ul>

                <h3 className="mb-3">8. Garden Services Delivery</h3>
                <p>For garden services (design, maintenance, installation):</p>
                <ul className="mb-4">
                  <li>Service scheduling based on mutual convenience</li>
                  <li>Materials delivered on the day of service</li>
                  <li>Equipment brought by our team</li>
                  <li>No additional delivery charges for service materials</li>
                </ul>

                <h3 className="mb-3">9. Weather & Seasonal Considerations</h3>
                <p>To ensure plant health:</p>
                <ul className="mb-4">
                  <li><strong>Extreme Heat (May-June):</strong> Deliveries scheduled in morning/evening hours</li>
                  <li><strong>Monsoon:</strong> Extra waterproofing for packages</li>
                  <li><strong>Winter:</strong> Cold-sensitive plants may be held until weather improves</li>
                  <li><strong>Delays:</strong> Severe weather may cause delivery delays - we'll notify you</li>
                </ul>

                <h3 className="mb-3">10. Order Tracking</h3>
                <p className="mb-4">Currently, order tracking is provided via WhatsApp updates. For order status inquiries, contact us on WhatsApp: +91-9220404309 with your order number.</p>

                <h3 className="mb-3">11. Failed Deliveries</h3>
                <p>If delivery fails due to:</p>
                <ul className="mb-4">
                  <li><strong>Wrong Address:</strong> Re-delivery charges apply</li>
                  <li><strong>Customer Unavailable:</strong> 2nd attempt free, 3rd attempt has charges</li>
                  <li><strong>Refused Delivery:</strong> Refund minus shipping costs</li>
                  <li><strong>Our Error:</strong> Free re-delivery or full refund</li>
                </ul>

                <h3 className="mb-3">12. Contact Us</h3>
                <p>For shipping inquiries or to track your order:</p>
                <ul className="mb-4">
                  <li><strong>WhatsApp:</strong> +91-9220404309 (fastest response)</li>
                  <li><strong>Email:</strong> contact@meribagiya.com</li>
                  <li><strong>Phone:</strong> +91-9220404309</li>
                  <li><strong>Hours:</strong> Monday - Saturday, 9 AM - 6 PM IST</li>
                </ul>

                <div className="text-center mt-5">
                  <Link to="/contact" className="btn-main me-3">Contact Us</Link>
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
