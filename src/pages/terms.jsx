import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the terms and conditions for using Meri Bagiya services. Understand our policies, user responsibilities, and service agreements."
        keywords="terms and conditions, Meri Bagiya terms, service agreement, user policy"
        canonicalUrl="/terms"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/8.webp" className="jarallax-img" alt="Terms and conditions background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Terms & Conditions</li>
                </ul>
                <h1 className="text-uppercase">Terms & Conditions</h1>
                <p className="col-lg-10 lead">Please read these terms carefully before using our services.</p>
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

                <h3 className="mb-3">1. Introduction</h3>
                <p>Welcome to Meri Bagiya ("we," "our," or "us"). These Terms and Conditions govern your use of our website (meribagiya.com) and services, including plant nursery sales, garden design, maintenance, and related services.</p>
                <p className="mb-4">By accessing our website or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>

                <h3 className="mb-3">2. Services Offered</h3>
                <p>Meri Bagiya provides the following services in Greater Noida and Delhi NCR:</p>
                <ul className="mb-4">
                  <li>Wholesale and retail plant sales</li>
                  <li>Garden design and landscaping</li>
                  <li>Garden maintenance services</li>
                  <li>Plant rental for offices and events</li>
                  <li>Corporate gifting solutions</li>
                  <li>Vertical gardens and terrace gardens</li>
                  <li>Water fountain installation</li>
                </ul>

                <h3 className="mb-3">3. Orders and Payments</h3>
                <p><strong>3.1 Order Acceptance:</strong> All orders are subject to acceptance and availability. We reserve the right to refuse any order at our discretion.</p>
                <p><strong>3.2 Pricing:</strong> All prices displayed are in Indian Rupees (INR) and are subject to change without notice. Prices do not include delivery charges unless specified.</p>
                <p><strong>3.3 Payment:</strong> We accept payments via UPI, bank transfer, and cash on delivery for select areas. Full payment is required before delivery for online orders.</p>
                <p className="mb-4"><strong>3.4 Invoicing:</strong> GST invoices will be provided for all purchases as per applicable laws.</p>

                <h3 className="mb-3">4. Delivery and Shipping</h3>
                <p><strong>4.1 Delivery Areas:</strong> We currently deliver to Greater Noida, Noida, and select areas in Delhi NCR. Delivery to other locations may be arranged on request.</p>
                <p><strong>4.2 Delivery Time:</strong> Standard delivery takes 2-5 business days. Express delivery options may be available for additional charges.</p>
                <p className="mb-4"><strong>4.3 Risk of Loss:</strong> Risk of damage or loss passes to you upon delivery of the plants/products to the specified address.</p>

                <h3 className="mb-3">5. Plant Health Guarantee</h3>
                <p><strong>5.1 Quality Assurance:</strong> We guarantee that all plants will be healthy at the time of delivery. Plants are carefully inspected before dispatch.</p>
                <p><strong>5.2 Care Instructions:</strong> We provide care instructions with each plant. Following these instructions is essential for plant survival.</p>
                <p className="mb-4"><strong>5.3 Replacement Policy:</strong> If a plant arrives damaged or unhealthy, please contact us within 24 hours with photos. We will replace the plant or provide a refund at our discretion.</p>

                <h3 className="mb-3">6. Service Agreements</h3>
                <p><strong>6.1 Garden Services:</strong> Garden design, maintenance, and landscaping services are provided based on site-specific quotations. A service agreement will be signed before work commences.</p>
                <p><strong>6.2 Plant Rental:</strong> Rental agreements specify duration, maintenance responsibilities, and replacement terms. Monthly rental fees are payable in advance.</p>
                <p className="mb-4"><strong>6.3 Cancellation:</strong> Service cancellations must be made at least 48 hours in advance. Late cancellations may incur charges.</p>

                <h3 className="mb-3">7. User Responsibilities</h3>
                <p>When using our services, you agree to:</p>
                <ul className="mb-4">
                  <li>Provide accurate contact and delivery information</li>
                  <li>Be available to receive deliveries at the scheduled time</li>
                  <li>Ensure safe access to your property for service personnel</li>
                  <li>Follow plant care instructions provided</li>
                  <li>Make timely payments as agreed</li>
                  <li>Not misuse our website or services</li>
                </ul>

                <h3 className="mb-3">8. Intellectual Property</h3>
                <p className="mb-4">All content on this website, including images, text, logos, and designs, is the property of Meri Bagiya and protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.</p>

                <h3 className="mb-3">9. Limitation of Liability</h3>
                <p><strong>9.1</strong> Meri Bagiya shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
                <p><strong>9.2</strong> Our total liability for any claim shall not exceed the amount paid by you for the specific service or product in question.</p>
                <p className="mb-4"><strong>9.3</strong> We are not responsible for plant death or damage resulting from improper care, environmental factors, or neglect after delivery.</p>

                <h3 className="mb-3">10. Dispute Resolution</h3>
                <p><strong>10.1</strong> Any disputes shall first be attempted to be resolved through mutual discussion.</p>
                <p className="mb-4"><strong>10.2</strong> If disputes cannot be resolved amicably, they shall be subject to the exclusive jurisdiction of the courts in Greater Noida, Uttar Pradesh, India.</p>

                <h3 className="mb-3">11. Governing Law</h3>
                <p className="mb-4">These terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>

                <h3 className="mb-3">12. Changes to Terms</h3>
                <p className="mb-4">We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of modified terms.</p>

                <h3 className="mb-3">13. Contact Us</h3>
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                <ul className="mb-4">
                  <li><strong>Email:</strong> contact@meribagiya.com</li>
                  <li><strong>Phone:</strong> +91-9220404309</li>
                  <li><strong>Address:</strong> Near Ace Aspire, Amrapali Leisure Valley, Greater Noida, UP-201318</li>
                </ul>

                <div className="text-center mt-5">
                  <Link to="/contact" className="btn-main">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Terms;
