import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function ReturnPolicy() {
  return (
    <>
      <SEO
        title="Return & Refund Policy"
        description="Understand Meri Bagiya's return and refund policy for plants and garden products. Learn about our plant health guarantee and exchange process."
        keywords="return policy, refund policy, plant return, exchange policy, Meri Bagiya returns"
        canonicalUrl="/return-policy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Return & Refund Policy' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/8.webp" className="jarallax-img" alt="Return policy background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Return & Refund Policy</li>
                </ul>
                <h1 className="text-uppercase">Return & Refund Policy</h1>
                <p className="col-lg-10 lead">Our commitment to your satisfaction with every purchase.</p>
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

                <div className="bg-light p-4 rounded-1 mb-4">
                  <h4 className="mb-2">Our Promise</h4>
                  <p className="mb-0">At Meri Bagiya, we take pride in delivering healthy, high-quality plants. If you're not satisfied with your purchase, we're here to make it right.</p>
                </div>

                <h3 className="mb-3">1. Plant Health Guarantee</h3>
                <p><strong>24-Hour Guarantee:</strong> All plants are guaranteed to arrive in healthy condition. If your plant arrives damaged, wilted, or unhealthy, you must notify us within 24 hours of delivery.</p>
                <p><strong>What's Covered:</strong></p>
                <ul className="mb-4">
                  <li>Plants that arrive dead or severely damaged</li>
                  <li>Plants with visible disease or pest infestation at delivery</li>
                  <li>Incorrect plant species delivered</li>
                  <li>Missing items from your order</li>
                </ul>

                <h3 className="mb-3">2. How to Report an Issue</h3>
                <p>To report a problem with your order:</p>
                <ol className="mb-4">
                  <li><strong>Take Photos:</strong> Photograph the plant and packaging immediately upon delivery</li>
                  <li><strong>Contact Us:</strong> Reach out within 24 hours via:
                    <ul>
                      <li>WhatsApp: +91-9220404309</li>
                      <li>Email: contact@meribagiya.com</li>
                    </ul>
                  </li>
                  <li><strong>Provide Details:</strong> Include your order number, photos, and description of the issue</li>
                  <li><strong>Await Response:</strong> We will respond within 24 hours with a resolution</li>
                </ol>

                <h3 className="mb-3">3. Replacement Policy</h3>
                <p><strong>3.1 Eligible for Replacement:</strong></p>
                <ul>
                  <li>Plants damaged during transit</li>
                  <li>Plants that arrive dead</li>
                  <li>Wrong plant delivered</li>
                </ul>
                <p className="mt-3"><strong>3.2 Replacement Process:</strong></p>
                <ul className="mb-4">
                  <li>Replacement plants will be shipped within 3-5 business days</li>
                  <li>No additional shipping charges for replacements</li>
                  <li>Original plant does not need to be returned (dispose responsibly)</li>
                </ul>

                <h3 className="mb-3">4. Refund Policy</h3>
                <p><strong>4.1 When Refunds Are Issued:</strong></p>
                <ul>
                  <li>Replacement plant not available in stock</li>
                  <li>Multiple delivery failures for the same item</li>
                  <li>Customer preference (instead of replacement)</li>
                </ul>
                <p className="mt-3"><strong>4.2 Refund Process:</strong></p>
                <ul>
                  <li>Refunds are processed within 5-7 business days</li>
                  <li>Refund will be credited to the original payment method</li>
                  <li>For COD orders, refund will be made via bank transfer</li>
                </ul>
                <p className="mt-3 mb-4"><strong>4.3 Refund Amount:</strong> Full refund of the product price. Shipping charges are non-refundable unless the error was on our part.</p>

                <h3 className="mb-3">5. What's NOT Covered</h3>
                <p>We cannot offer returns, replacements, or refunds for:</p>
                <ul className="mb-4">
                  <li>Plants that die or deteriorate after 24 hours of delivery due to improper care</li>
                  <li>Environmental factors (frost, extreme heat, flooding) after delivery</li>
                  <li>Pest infestations that occur after delivery</li>
                  <li>Normal leaf drop or adjustment period (some plants shed leaves when adapting to new environments)</li>
                  <li>Plants kept in unsuitable conditions (wrong light, over/under watering)</li>
                  <li>Change of mind after delivery</li>
                  <li>Gifts where recipient refused delivery</li>
                </ul>

                <h3 className="mb-3">6. Cancellation Policy</h3>
                <p><strong>6.1 Before Dispatch:</strong></p>
                <ul>
                  <li>Orders can be cancelled for a full refund if not yet dispatched</li>
                  <li>Contact us immediately to request cancellation</li>
                </ul>
                <p className="mt-3 mb-4"><strong>6.2 After Dispatch:</strong></p>
                <ul className="mb-4">
                  <li>Orders cannot be cancelled once shipped</li>
                  <li>Please refuse delivery if you don't want the order</li>
                  <li>Refund will be processed minus shipping costs</li>
                </ul>

                <h3 className="mb-3">7. Service-Related Returns</h3>
                <p><strong>7.1 Garden Services:</strong></p>
                <ul>
                  <li>Service fees are non-refundable once work has commenced</li>
                  <li>If dissatisfied with service quality, please raise concerns within 48 hours</li>
                  <li>We will attempt to rectify any issues at no additional cost</li>
                </ul>
                <p className="mt-3 mb-4"><strong>7.2 Plant Rental:</strong></p>
                <ul className="mb-4">
                  <li>Monthly rental fees are non-refundable</li>
                  <li>Damaged rental plants may incur replacement charges</li>
                  <li>Early termination may have associated fees as per agreement</li>
                </ul>

                <h3 className="mb-3">8. Exchange Policy</h3>
                <p>We offer exchanges for:</p>
                <ul className="mb-4">
                  <li>Wrong plant delivered - exchange for correct item</li>
                  <li>Size exchange (if available) - customer pays price difference</li>
                  <li>Exchange requests must be made within 24 hours of delivery</li>
                </ul>

                <h3 className="mb-3">9. Corporate Orders</h3>
                <p className="mb-4">For bulk/corporate orders, return and refund policies may vary based on the specific agreement. Please refer to your contract or contact your account manager for details.</p>

                <h3 className="mb-3">10. Tips for Healthy Plants</h3>
                <p>To ensure your plants thrive:</p>
                <ul className="mb-4">
                  <li>Open the package immediately upon delivery</li>
                  <li>Water the plant if the soil is dry</li>
                  <li>Place in appropriate light conditions as per care instructions</li>
                  <li>Allow 1-2 weeks for the plant to adjust to its new environment</li>
                  <li>Refer to the care guide provided with your order</li>
                </ul>

                <h3 className="mb-3">11. Contact Us</h3>
                <p>For returns, refunds, or any questions:</p>
                <ul className="mb-4">
                  <li><strong>WhatsApp:</strong> +91-9220404309 (fastest response)</li>
                  <li><strong>Email:</strong> contact@meribagiya.com</li>
                  <li><strong>Phone:</strong> +91-9220404309</li>
                  <li><strong>Hours:</strong> Monday - Sunday, 8:00 AM - 7:00 PM IST</li>
                </ul>

                <div className="text-center mt-5">
                  <Link to="/contact" className="btn-main me-3">Contact Us</Link>
                  <Link to="/shipping" className="btn-line">View Shipping Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ReturnPolicy;
