import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Cloud Function URL
const FUNCTION_URL = 'https://meri-bagiya-project.vercel.app/api/send-email';

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

// Validation functions
const validators = {
  name: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Contact person name is required';
    if (trimmed.length < 2) return 'Name must be at least 2 characters';
    return '';
  },
  company: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Company name is required';
    return '';
  },
  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return 'Please enter a valid email address';
    return '';
  },
  phone: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Phone number is required';
    const digitsOnly = trimmed.replace(/[\s\-()]/g, '');
    if (!/^\+?\d{10,13}$/.test(digitsOnly)) return 'Please enter a valid phone number';
    return '';
  },
  quantity: (value) => {
    if (!value) return 'Please select quantity range';
    return '';
  },
  budget: (value) => {
    if (!value) return 'Please select budget range';
    return '';
  },
  message: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Please describe your requirements';
    if (trimmed.length < 10) return 'Message must be at least 10 characters';
    return '';
  }
};

function CorporateGifting() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    budget: '',
    occasion: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const validateField = (name, value) => {
    return validators[name] ? validators[name](value) : '';
  };

  const validateAllFields = () => {
    const newErrors = {};
    let isValid = true;
    const requiredFields = ['name', 'company', 'email', 'phone', 'quantity', 'budget', 'message'];

    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    const allTouched = {};
    requiredFields.forEach(f => allTouched[f] = true);
    setTouched(allTouched);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
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

    if (!validateAllFields()) return;

    setStatus({ submitting: true, success: false, error: null });

    try {
      const recaptchaToken = await executeRecaptcha();

      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'corporate-gifting',
          recaptchaToken
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '', company: '', email: '', phone: '',
          quantity: '', budget: '', occasion: '', message: ''
        });
        setErrors({});
        setTouched({});
      } else {
        throw new Error(data.error || 'Failed to send inquiry');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error.message || 'Something went wrong. Please try again.'
      });
    }
  };

  const scrollToForm = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
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
                <button onClick={scrollToForm} className="btn-main">
                  Get a Quote <i className="icofont-long-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="de-overlay"></div>
        </section>

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
                      <button onClick={scrollToForm} className={`btn-main w-100 ${pkg.popular ? '' : 'btn-outline'}`}>
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

        {/* Inquiry Form */}
        <section id="inquiry-form">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <div className="subtitle wow fadeInUp mb-3">Get Started</div>
                  <h2 className="text-uppercase wow fadeInUp">Request a <span className="id-color-2">Quote</span></h2>
                  <p className="wow fadeInUp">Fill out the form below and our corporate gifting specialist will get back to you within 24 hours.</p>
                </div>

                {status.success ? (
                  <div className="text-center p-5 bg-light rounded-1">
                    <i className="icofont-check-circled fs-64 text-success mb-3 d-block"></i>
                    <h3 className="text-success">Thank You!</h3>
                    <p>Your inquiry has been submitted successfully. Our corporate gifting specialist will contact you within 24 hours.</p>
                    <button onClick={() => setStatus({...status, success: false})} className="btn-main mt-3">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-light p-4 p-lg-5 rounded-1">
                    {status.error && (
                      <div className="alert alert-danger mb-4">
                        <i className="icofont-warning me-2"></i>{status.error}
                      </div>
                    )}

                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-500">Company Name *</label>
                        <input
                          type="text"
                          name="company"
                          className={`form-control form-control-lg ${touched.company && errors.company ? 'is-invalid' : ''}`}
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.company && errors.company && <div className="invalid-feedback">{errors.company}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-500">Contact Person *</label>
                        <input
                          type="text"
                          name="name"
                          className={`form-control form-control-lg ${touched.name && errors.name ? 'is-invalid' : ''}`}
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-500">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className={`form-control form-control-lg ${touched.email && errors.email ? 'is-invalid' : ''}`}
                          placeholder="email@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-500">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          className={`form-control form-control-lg ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-500">Quantity *</label>
                        <select
                          name="quantity"
                          className={`form-select form-select-lg ${touched.quantity && errors.quantity ? 'is-invalid' : ''}`}
                          value={formData.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select quantity</option>
                          <option value="10-50">10 - 50 plants</option>
                          <option value="50-100">50 - 100 plants</option>
                          <option value="100-500">100 - 500 plants</option>
                          <option value="500+">500+ plants</option>
                        </select>
                        {touched.quantity && errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-500">Budget Range *</label>
                        <select
                          name="budget"
                          className={`form-select form-select-lg ${touched.budget && errors.budget ? 'is-invalid' : ''}`}
                          value={formData.budget}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select budget</option>
                          <option value="Under ₹50,000">Under ₹50,000</option>
                          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                          <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                          <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                        </select>
                        {touched.budget && errors.budget && <div className="invalid-feedback">{errors.budget}</div>}
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-500">Occasion</label>
                        <select
                          name="occasion"
                          className="form-select form-select-lg"
                          value={formData.occasion}
                          onChange={handleChange}
                        >
                          <option value="">Select occasion</option>
                          <option value="Diwali">Diwali</option>
                          <option value="New Year">New Year</option>
                          <option value="Employee Appreciation">Employee Appreciation</option>
                          <option value="Client Gift">Client Gift</option>
                          <option value="Office Inauguration">Office Inauguration</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-500">Requirements *</label>
                        <textarea
                          name="message"
                          rows="4"
                          className={`form-control form-control-lg ${touched.message && errors.message ? 'is-invalid' : ''}`}
                          placeholder="Tell us about your requirements - type of plants, delivery locations, customization needs, timeline, etc."
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                        {touched.message && errors.message && <div className="invalid-feedback">{errors.message}</div>}
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
                )}
              </div>
            </div>
          </div>
        </section>

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
