import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { whatsappUrl, PHONE_TEL } from '../constants/contact';
import { BUSINESS_NAME } from '../constants/business';
import { trackEvent } from '../utils/analytics';

const OFFICE_QUOTE_MESSAGE = 'Hi! I want to rent plants for my office in Noida. Please send a quote.';

const faqItems = [
  {
    question: 'How does office plant rental work?',
    answer: 'You pay a monthly rental. We choose plants that suit your office light and layout, set them up, and look after them. Our team visits regularly to water, fertilize, and prune.'
  },
  {
    question: 'Which areas do you serve for office plant rental?',
    answer: 'We serve offices in Noida and Greater Noida. Message us on WhatsApp for other Delhi NCR areas.'
  },
  {
    question: 'Which plants can I rent for my office?',
    answer: 'You can choose Money Plant, Peace Lily, Snake Plant, Areca Palm, Rubber Plant, and other office-friendly indoor plants.'
  },
  {
    question: 'What happens if a rented plant does not thrive?',
    answer: 'We replace any plant that does not thrive at no extra cost.'
  },
  {
    question: 'How do I get a quote for my office?',
    answer: 'Send us a WhatsApp message with your office size and area. We reply with a quote.'
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Office Plant Rental in Noida',
  serviceType: 'Office plant rental',
  provider: { '@id': 'https://meribagiya.com/#business', '@type': 'LocalBusiness', name: BUSINESS_NAME },
  areaServed: [
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' }
  ],
  url: 'https://meribagiya.com/plant-rent-in-office'
};

function PlantRentInOffice() {
  return (
    <>
      <SEO
        title="Office Plant Rental in Noida & Greater Noida"
        description="Rent plants for your office in Noida and Greater Noida. Monthly plant rental with watering, pruning, and free replacement included. Get a quote on WhatsApp."
        keywords="office plant rental Noida, plants on rent Noida, office plants Greater Noida, indoor plants for office, corporate plant rental, plant rent in office"
        canonicalUrl="/plant-rent-in-office"
        jsonLd={jsonLd}
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Office Plant Rental', url: '/plant-rent-in-office' }
        ]}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/assets/images/background/1.webp" className="jarallax-img" alt="Office plant rental background"/>
          <div className="container relative z-index-1000">
            <div className="row">
              <div className="col-lg-6">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Office Plant Rental</li>
                </ul>
                <h1 className="text-uppercase">Office Plant Rental in Noida</h1>
                <p className="col-lg-10">Healthy plants for your workspace. We set up, water, and replace. You pay one monthly fee.</p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <a
                    className="btn-main"
                    href={whatsappUrl(OFFICE_QUOTE_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('generate_lead', { method: 'whatsapp', location: 'office_rental_hero' })}
                  >
                    Get a Quote on WhatsApp
                  </a>
                  <a className="btn-line text-light" href={PHONE_TEL}>Call Us</a>
                </div>
              </div>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'} className="abs end-0 bottom-0 z-2 w-20" alt=""/>
          <div className="de-overlay"></div>
        </section>

        <section>
          <div className="container">
            <div className="row g-4 gx-5">
              <div className="col-lg-3 col-12 order-lg-1 order-2">
                <div className="me-lg-3">
                  <Link to="/plant-rent-in-office" className="bg-color text-light d-block p-3 px-4 rounded-10px mb-3 relative">
                    <h4 className="mb-0">Office Plant Rental</h4>
                    <i className="icofont-long-arrow-right absolute abs-middle fs-24 end-20px"></i>
                  </Link>
                  <Link to="/services/garden-design" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Design</h4>
                  </Link>
                  <Link to="/services/garden-maintenance" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Garden Maintenance</h4>
                  </Link>
                  <Link to="/services/planting-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Planting Services</h4>
                  </Link>
                  <Link to="/services/specialty-services" className="bg-light d-block p-3 px-4 rounded-10px mb-3">
                    <h4 className="mb-0">Specialty Services</h4>
                  </Link>
                </div>
              </div>

              <div className="col-lg-9 col-12 order-lg-2 order-1">
                <div className="row g-4 gx-5">
                  <div className="col-lg-6">
                    <h2><span className="id-color-2">Green</span> Your Office Space with <span className="id-color-2">Plants on Rent</span></h2>
                    <p>Transform your workplace into a vibrant, healthy environment with our office plant rental services. We provide a wide selection of indoor plants perfectly suited for office spaces, complete with professional maintenance so you can enjoy the benefits of greenery without any hassle.</p>
                    <p>Whether you have a small startup office or a large corporate space, our plant rental solutions are tailored to meet your specific needs and budget.</p>
                  </div>

                  <div className="col-lg-6">
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <img src="/assets/images/misc/3.webp" className="w-100 rounded-1 wow zoomIn" alt="Office plants"/>
                      </div>
                      <div className="col-sm-6">
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/1.webp" className="w-100 rounded-1 wow zoomIn" alt="Indoor plants for office"/>
                          </div>
                          <div className="col-lg-12">
                            <img src="/assets/images/misc/2.webp" className="w-100 rounded-1 wow zoomIn" alt="Corporate plant rental"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Benefits of <span className="id-color-2">Office Plants</span></h2>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Improved Air Quality</h4>
                      <p className="mb-0">Plants naturally purify the air by absorbing toxins and releasing oxygen, creating a healthier breathing environment for your team.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Enhanced Productivity</h4>
                      <p className="mb-0">Studies show that offices with plants see up to 15% increase in productivity. Greenery helps employees focus and work more efficiently.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color text-light padding30 rounded-1">
                      <h4>Reduced Stress</h4>
                      <p className="mb-0">The presence of plants in the workspace reduces stress levels and promotes mental well-being among employees.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Professional Appearance</h4>
                      <p className="mb-0">Create a positive first impression on clients and visitors with a beautifully green and welcoming office environment.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Noise Reduction</h4>
                      <p className="mb-0">Plants help absorb sound and reduce background noise, creating a quieter and more comfortable workspace.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                    <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                      <h4>Maintenance Free</h4>
                      <p className="mb-0">With our rental service, we handle all plant care including watering, pruning, and replacement - you just enjoy the greenery.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Our <span className="id-color-2">Plant Rental</span> Services Include</h2>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Wide Plant Selection</h4>
                      <p className="mb-0">Choose from a variety of indoor plants including Money Plants, Peace Lily, Snake Plant, Areca Palm, Rubber Plant, and many more office-friendly varieties.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Customized Packages</h4>
                      <p className="mb-0">We design plant arrangements based on your office layout, lighting conditions, and aesthetic preferences to maximize visual impact.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Regular Maintenance</h4>
                      <p className="mb-0">Our team visits your office regularly to water, fertilize, prune, and ensure all plants remain healthy and vibrant.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 wow fadeInRight" data-wow-delay=".3s">
                    <div className="relative h-100 bg-light padding30 rounded-1">
                      <h4>Free Replacement</h4>
                      <p className="mb-0">Any plant that doesn't thrive is replaced at no additional cost. We guarantee your office always looks its best.</p>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Ideal <span className="id-color-2">For</span></h2>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".0s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-building fs-48 id-color mb-2"></i>
                      <h5>Corporate Offices</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-computer fs-48 id-color mb-2"></i>
                      <h5>IT Companies</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-hotel fs-48 id-color mb-2"></i>
                      <h5>Hotels & Lobbies</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="text-center p-3 bg-light rounded-1">
                      <i className="icofont-shop fs-48 id-color mb-2"></i>
                      <h5>Showrooms</h5>
                    </div>
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <h2 className="mb-0">Office Plant Rental <span className="id-color-2">FAQ</span></h2>
                  </div>
                  <div className="col-lg-12">
                    {faqItems.map((item) => (
                      <div key={item.question} className="bg-light padding30 rounded-1 mb-3">
                        <h4>{item.question}</h4>
                        <p className="mb-0">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="spacer-double"></div>

                <div className="row g-4">
                  <div className="col-lg-12 text-center">
                    <a
                      className="btn-main wow fadeInUp me-3"
                      href={whatsappUrl(OFFICE_QUOTE_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('generate_lead', { method: 'whatsapp', location: 'office_rental_footer' })}
                    >
                      Get a Quote on WhatsApp
                    </a>
                    <Link className="btn-line wow fadeInUp" to="/contact">Contact Form</Link>
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

export default PlantRentInOffice;
