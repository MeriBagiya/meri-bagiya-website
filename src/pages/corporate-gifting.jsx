import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';
import { useFormValidation } from '../hooks/useFormValidation';
import { validators } from '../constants/validation';
import { FormInput, FormTextarea, FormSelect } from '../components/form';

// API URL from environment variable with fallback
const FUNCTION_URL = process.env.REACT_APP_API_URL || 'https://meri-bagiya-project.vercel.app/api/send-email';

// reCAPTCHA site key from environment
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

// Gift packages data
const giftPackages = [
  {
    id: 1,
    name: "Starter Pack",
    priceRange: "₹500 - ₹1,000",
    perPlant: "per plant",
    description: "Perfect for small teams and desk plants",
    features: ["Indoor plants", "Decorative pots", "Care instructions", "Delivery included"],
    image: "/assets/images/misc/1.webp",
    popular: false
  },
  {
    id: 2,
    name: "Premium Pack",
    priceRange: "₹1,000 - ₹2,500",
    perPlant: "per plant",
    description: "Ideal for corporate offices and events",
    features: ["Premium indoor plants", "Designer ceramic pots", "Personalized message cards", "Setup assistance", "1-month care support"],
    image: "/assets/images/misc/2.webp",
    popular: true
  },
  {
    id: 3,
    name: "Luxury Pack",
    priceRange: "₹2,500+",
    perPlant: "per plant",
    description: "Executive gifts and VIP clients",
    features: ["Rare & exotic plants", "Handcrafted premium pots", "Custom branding options", "White-glove delivery", "3-month care guarantee"],
    image: "/assets/images/misc/3.webp",
    popular: false
  }
];

const quantityOptions = [
  { value: '10-50', label: '10 - 50 plants' },
  { value: '50-100', label: '50 - 100 plants' },
  { value: '100-500', label: '100 - 500 plants' },
  { value: '500+', label: '500+ plants' }
];

const budgetOptions = [
  { value: 'Under ₹50,000', label: 'Under ₹50,000' },
  { value: '₹50,000 - ₹1,00,000', label: '₹50,000 - ₹1,00,000' },
  { value: '₹1,00,000 - ₹5,00,000', label: '₹1,00,000 - ₹5,00,000' },
  { value: 'Above ₹5,00,000', label: 'Above ₹5,00,000' }
];

const occasionOptions = [
  { value: 'Diwali', label: 'Diwali' },
  { value: 'New Year', label: 'New Year' },
  { value: 'Employee Appreciation', label: 'Employee Appreciation' },
  { value: 'Client Gift', label: 'Client Gift' },
  { value: 'Office Inauguration', label: 'Office Inauguration' },
  { value: 'Other', label: 'Other' }
];

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  quantity: '',
  budget: '',
  occasion: '',
  message: ''
};

const validationRules = {
  name: (value) => validators.name(value, 'Contact person name'),
  company: validators.company,
  email: validators.email,
  phone: validators.phone,
  quantity: (value) => validators.required(value, 'Quantity'),
  budget: (value) => validators.required(value, 'Budget'),
  message: (value) => validators.message(value, 10, 2000)
};

function CorporateGifting() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState('');

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset
  } = useFormValidation(initialValues, validationRules);

  const [status, setStatus] = useState({
    submitting: false,
    error: null
  });

  const handleGetQuote = (packageName = '') => {
    setSelectedPackage(packageName);
    setStep(2);
    setTimeout(() => {
      document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleStartOver = () => {
    setStep(1);
    setStatus({ submitting: false, error: null });
  };

  const executeRecaptcha = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded. Please refresh the page.'));
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'corporate_gifting_form' })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'company', 'email', 'phone', 'quantity', 'budget', 'message'];
    if (!validateAll(requiredFields)) return;

    setStatus({ submitting: true, error: null });

    try {
      const recaptchaToken = await executeRecaptcha();

      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          source: 'corporate-gifting',
          recaptchaToken
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStep(3);
        reset();
        toast.success('Inquiry submitted! Our team will contact you shortly.');
      } else {
        throw new Error(data.error || 'Failed to send inquiry');
      }
    } catch (error) {
      const errorMessage = error.message || 'Something went wrong. Please try again.';
      setStatus({
        submitting: false,
        error: errorMessage
      });
      toast.error(errorMessage);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Plant Gifting Services",
    "description": "Premium plant gifts for corporate clients, employees and business partners. Customizable packages for Diwali, New Year, employee appreciation and client gifts.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Meri Bagiya",
      "image": "https://meribagiya.com/assets/images/MERI-BAGIYA-LOGO-UPDATED.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Ace Aspire, Amrapali Leisure Valley",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201318",
        "addressCountry": "IN"
      },
      "telephone": "+91-9220404309",
      "email": "contact@meribagiya.com"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.5899943",
        "longitude": "77.4281686"
      },
      "geoRadius": "100000"
    },
    "serviceType": "Corporate Gifting",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Pack",
        "description": "Perfect for small teams and desk plants",
        "priceRange": "₹500 - ₹1,000 per plant"
      },
      {
        "@type": "Offer",
        "name": "Premium Pack",
        "description": "Ideal for corporate offices and events",
        "priceRange": "₹1,000 - ₹2,500 per plant"
      },
      {
        "@type": "Offer",
        "name": "Luxury Pack",
        "description": "Executive gifts and VIP clients",
        "priceRange": "₹2,500+ per plant"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Corporate Gifting - Premium Plant Gifts for Businesses | Meri Bagiya"
        description="Elevate your corporate gifting with premium plants from Meri Bagiya, Greater Noida. Perfect for Diwali, New Year, employee appreciation & client gifts. Bulk orders welcome. Custom branding available."
        keywords="corporate gifting plants Greater Noida, business gifts Delhi NCR, Diwali corporate gifts, employee appreciation gifts, client gifts plants, bulk plant orders, corporate plant gifts Noida, office plants gifts, eco-friendly corporate gifts, sustainable business gifts"
        canonicalUrl="/corporate-gifting"
        jsonLd={jsonLd}
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Hero Section */}
        <section id="subheader" className="jarallax text-light" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background/1.webp'})`}}>
          <div className="container relative z-index-1000">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <ul className="crumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Corporate Gifting</li>
                </ul>
                <h1 className="text-uppercase mb-3">Corporate Gifting</h1>
                <p className="lead mb-4">Elevate Your Corporate Relationships with the Gift of Green</p>
                <p className="mb-4">Make a lasting impression on clients, employees, and partners with our premium plant gifts. Perfect for festivals, milestones, and appreciation.</p>
                <button onClick={() => handleGetQuote()} className="btn-main">
                  Get a Quote <i className="icofont-long-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="de-overlay"></div>
        </section>

        {step === 1 && (
        <>
        {/* Why Choose Corporate Plant Gifting */}
        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center">
                <div className="subtitle wow fadeInUp mb-3">Why Plants?</div>
                <h2 className="text-uppercase wow fadeInUp">The <span className="id-color-2">Perfect</span> Corporate Gift</h2>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                <div className="relative h-100 bg-color text-light padding30 rounded-1 text-center">
                  <i className="icofont-heart-alt fs-48 mb-3 d-block"></i>
                  <h4>Memorable & Lasting</h4>
                  <p className="mb-0">Unlike consumables, plants grow with your relationship. A living reminder of your thoughtfulness.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="relative h-100 bg-color text-light padding30 rounded-1 text-center">
                  <i className="icofont-leaf fs-48 mb-3 d-block"></i>
                  <h4>Eco-Friendly Choice</h4>
                  <p className="mb-0">Show your commitment to sustainability with gifts that purify air and reduce carbon footprint.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="relative h-100 bg-color text-light padding30 rounded-1 text-center">
                  <i className="icofont-building fs-48 mb-3 d-block"></i>
                  <h4>Boosts Productivity</h4>
                  <p className="mb-0">Studies show plants improve focus, reduce stress, and enhance workplace wellbeing.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                <div className="relative h-100 bg-color-2 text-light padding30 rounded-1 text-center">
                  <i className="icofont-gift fs-48 mb-3 d-block"></i>
                  <h4>Customizable</h4>
                  <p className="mb-0">Add your brand logo, personalized messages, and custom packaging to make it uniquely yours.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="relative h-100 bg-color-2 text-light padding30 rounded-1 text-center">
                  <i className="icofont-truck-alt fs-48 mb-3 d-block"></i>
                  <h4>Hassle-Free Delivery</h4>
                  <p className="mb-0">We handle everything - from selection to packaging to doorstep delivery across NCR.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="relative h-100 bg-color-2 text-light padding30 rounded-1 text-center">
                  <i className="icofont-rupee fs-48 mb-3 d-block"></i>
                  <h4>Bulk Discounts</h4>
                  <p className="mb-0">Special pricing for corporate orders. The more you order, the more you save.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Packages */}
        <section>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <div className="subtitle wow fadeInUp mb-3">Our Packages</div>
                <h2 className="text-uppercase wow fadeInUp">Choose Your <span className="id-color-2">Gift Package</span></h2>
                <p className="wow fadeInUp">Select from our curated packages or create a custom order tailored to your needs.</p>
              </div>
            </div>
            <div className="row g-4">
              {giftPackages.map((pkg, index) => (
                <div key={pkg.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className={`relative h-100 rounded-1 overflow-hidden ${pkg.popular ? 'border border-3 border-success' : 'border'}`} style={{background: '#fff'}}>
                    {pkg.popular && (
                      <div className="position-absolute top-0 end-0 bg-color text-white px-3 py-1 rounded-bl" style={{zIndex: 10}}>
                        Most Popular
                      </div>
                    )}
                    <div style={{height: '200px', overflow: 'hidden'}}>
                      <img src={pkg.image} alt={pkg.name} className="w-100 h-100" style={{objectFit: 'cover'}} />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2">{pkg.name}</h3>
                      <div className="mb-2">
                        <span className="fs-24 fw-bold id-color">{pkg.priceRange}</span>
                        <span className="text-muted ms-2">{pkg.perPlant}</span>
                      </div>
                      <p className="text-muted mb-3">{pkg.description}</p>
                      <ul className="list-unstyled mb-4">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="mb-2">
                            <i className="icofont-check-circled id-color me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button onClick={() => handleGetQuote(pkg.name)} className={`btn-main w-100 ${pkg.popular ? '' : 'btn-outline'}`}>
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-12 text-center">
                <p className="text-muted">
                  <i className="icofont-info-circle me-2"></i>
                  Need a custom package? Fill out the form below and we'll create a tailored solution for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Occasions */}
        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center">
                <div className="subtitle wow fadeInUp mb-3">Perfect For</div>
                <h2 className="text-uppercase wow fadeInUp">Every <span className="id-color-2">Occasion</span></h2>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {['Diwali & Festivals', 'New Year', 'Employee Appreciation', 'Client Thank You', 'Office Inauguration', 'Milestone Celebrations'].map((occasion, i) => (
                <div key={i} className="col-lg-2 col-md-4 col-6 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                  <div className="text-center p-3 bg-white rounded-1 h-100">
                    <i className={`icofont-${['gift', 'calendar', 'users', 'handshake-deal', 'building-alt', 'trophy'][i]} fs-36 id-color mb-2 d-block`}></i>
                    <p className="mb-0 fw-500">{occasion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
        )}

        {(step === 2 || step === 3) && (
        <section id="inquiry-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">

                {step === 3 ? (
                  <div className="text-center p-5 bg-light rounded-1">
                    <i className="icofont-check-circled fs-64 text-success mb-3 d-block"></i>
                    <h3 className="text-success">Thank You!</h3>
                    <p>Your inquiry has been submitted successfully. Our corporate gifting specialist will contact you within 24 hours.</p>
                    <button onClick={handleStartOver} className="btn-main mt-3">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                <>
                <div className="text-center mb-5">
                  <div className="subtitle wow fadeInUp mb-3">Get Started</div>
                  <h2 className="text-uppercase wow fadeInUp">Request a <span className="id-color-2">Quote</span></h2>
                  <p className="wow fadeInUp">Fill out the form below and our corporate gifting specialist will get back to you within 24 hours.</p>
                  {selectedPackage && <p className='lead'>Selected Package: <strong>{selectedPackage}</strong></p>}
                </div>
                  <form onSubmit={handleSubmit} className="bg-light p-4 p-lg-5 rounded-1">
                    {status.error && (
                      <div className="alert alert-danger mb-4">
                        <i className="icofont-warning me-2"></i>{status.error}
                      </div>
                    )}

                    <div className="row g-4">
                      <div className="col-md-6">
                        <FormInput
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Your Company Name"
                          label="Company Name"
                          error={errors.company}
                          touched={touched.company}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Your Name"
                          label="Contact Person"
                          error={errors.name}
                          touched={touched.name}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="email@company.com"
                          label="Email Address"
                          error={errors.email}
                          touched={touched.email}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <FormInput
                          type="tel"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+91 9220404309"
                          label="Phone Number"
                          error={errors.phone}
                          touched={touched.phone}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <FormSelect
                          name="quantity"
                          value={values.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Quantity"
                          placeholder="Select quantity"
                          options={quantityOptions}
                          error={errors.quantity}
                          touched={touched.quantity}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <FormSelect
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Budget Range"
                          placeholder="Select budget"
                          options={budgetOptions}
                          error={errors.budget}
                          touched={touched.budget}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <FormSelect
                          name="occasion"
                          value={values.occasion}
                          onChange={handleChange}
                          label="Occasion"
                          placeholder="Select occasion"
                          options={occasionOptions}
                          size="lg"
                        />
                      </div>
                      <div className="col-12">
                        <FormTextarea
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell us about your requirements - type of plants, delivery locations, customization needs, timeline, etc."
                          label="Requirements"
                          rows={4}
                          error={errors.message}
                          touched={touched.message}
                          size="lg"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn-main w-100"
                          disabled={status.submitting}
                        >
                          {status.submitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Submitting...
                            </>
                          ) : (
                            <>Submit Inquiry</>
                          )}
                        </button>
                        <p className="text-muted text-center mt-3 small">
                          <i className="icofont-lock me-1"></i>
                          Your information is secure and will never be shared.
                        </p>
                      </div>
                    </div>
                  </form>
                </>
                )}
              </div>
            </div>
          </div>
        </section>
        )}

        {/* CTA Section */}
        <section className="jarallax text-light" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background/5.webp'})`}}>
          <div className="de-overlay"></div>
          <div className="container relative z-index-1000">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-uppercase wow fadeInUp">Need Help Choosing?</h2>
                <p className="lead wow fadeInUp" data-wow-delay=".2s">
                  Our corporate gifting experts are here to help you find the perfect plants for your team and clients.
                </p>
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <a href="tel:9220404309" className="btn-main me-3">
                    <i className="icofont-phone me-2"></i>Call Us: 9220404309
                  </a>
                  <Link to="/contact" className="btn-main btn-outline">
                    Visit Our Nursery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CorporateGifting;
