import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Meri Bagiya collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        keywords="privacy policy, data protection, Meri Bagiya privacy, personal information"
        canonicalUrl="/privacy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/8.webp" className="jarallax-img" alt="Privacy policy background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Privacy Policy</li>
                </ul>
                <h1 className="text-uppercase">Privacy Policy</h1>
                <p className="col-lg-10 lead">Your privacy is important to us. Learn how we protect your data.</p>
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
                <p>Meri Bagiya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (meribagiya.com) or use our services.</p>
                <p className="mb-4">By using our website or services, you consent to the data practices described in this policy.</p>

                <h3 className="mb-3">2. Information We Collect</h3>
                <p><strong>2.1 Personal Information:</strong> We may collect the following personal information when you:</p>
                <ul>
                  <li>Fill out contact or inquiry forms</li>
                  <li>Place an order for products or services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via phone, email, or WhatsApp</li>
                </ul>
                <p className="mt-3">This information may include:</p>
                <ul className="mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Delivery address</li>
                  <li>Company name (for corporate clients)</li>
                  <li>Message content and inquiries</li>
                </ul>

                <p><strong>2.2 Automatically Collected Information:</strong> When you visit our website, we may automatically collect:</p>
                <ul className="mb-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Geographic location (city/region level)</li>
                </ul>

                <h3 className="mb-3">3. How We Use Your Information</h3>
                <p>We use your information for the following purposes:</p>
                <ul className="mb-4">
                  <li><strong>Service Delivery:</strong> To process orders, arrange deliveries, and provide requested services</li>
                  <li><strong>Communication:</strong> To respond to inquiries, send order updates, and provide customer support</li>
                  <li><strong>Marketing:</strong> To send promotional emails about new products, services, or offers (with your consent)</li>
                  <li><strong>Improvement:</strong> To analyze website usage and improve our services</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                </ul>

                <h3 className="mb-3">4. Data Storage and Security</h3>
                <p><strong>4.1 Storage:</strong> Your data is stored securely using:</p>
                <ul>
                  <li>Google Sheets (for form submissions and lead management)</li>
                  <li>Email servers (for communication records)</li>
                  <li>Secure cloud hosting (for website data)</li>
                </ul>
                <p className="mt-3 mb-4"><strong>4.2 Security Measures:</strong> We implement appropriate technical and organizational measures to protect your data, including encryption, secure access controls, and regular security reviews.</p>

                <h3 className="mb-3">5. Third-Party Services</h3>
                <p>We use the following third-party services that may collect or process your data:</p>
                <ul className="mb-4">
                  <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                  <li><strong>Google reCAPTCHA:</strong> To protect forms from spam and abuse</li>
                  <li><strong>Google Sheets:</strong> For storing form submissions securely</li>
                  <li><strong>WhatsApp Business:</strong> For customer communication (when you initiate contact)</li>
                  <li><strong>Email Service Provider:</strong> For sending transactional and marketing emails</li>
                </ul>
                <p className="mb-4">Each third-party service has its own privacy policy governing the use of your information.</p>

                <h3 className="mb-3">6. Cookies and Tracking</h3>
                <p><strong>6.1 What Are Cookies:</strong> Cookies are small text files stored on your device when you visit our website.</p>
                <p><strong>6.2 How We Use Cookies:</strong></p>
                <ul className="mb-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="mb-4">You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>

                <h3 className="mb-3">7. Data Sharing</h3>
                <p>We do not sell your personal information. We may share your data with:</p>
                <ul className="mb-4">
                  <li><strong>Service Providers:</strong> Delivery partners, payment processors, and IT service providers who assist in our operations</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                </ul>

                <h3 className="mb-3">8. Your Rights</h3>
                <p>You have the following rights regarding your personal data:</p>
                <ul className="mb-4">
                  <li><strong>Access:</strong> Request a copy of the data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mb-4">To exercise these rights, please contact us at contact@meribagiya.com.</p>

                <h3 className="mb-3">9. Data Retention</h3>
                <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, customer data is retained for 5 years after the last interaction.</p>

                <h3 className="mb-3">10. Children's Privacy</h3>
                <p className="mb-4">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.</p>

                <h3 className="mb-3">11. Links to Other Websites</h3>
                <p className="mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.</p>

                <h3 className="mb-3">12. Changes to This Policy</h3>
                <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>

                <h3 className="mb-3">13. Contact Us</h3>
                <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
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

export default Privacy;
