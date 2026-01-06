import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// API URL from environment variable with fallback
const FUNCTION_URL = process.env.REACT_APP_API_URL || 'https://meri-bagiya-project.vercel.app/api/send-email';

// reCAPTCHA site key from environment
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

// Validation functions
const validators = {
  name: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Name is required';
    if (trimmed.length < 2) return 'Name must be at least 2 characters';
    if (trimmed.length > 100) return 'Name must be less than 100 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    return '';
  },
  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return 'Please enter a valid email address';
    if (trimmed.length > 254) return 'Email must be less than 254 characters';
    return '';
  },
  phone: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Phone number is required';
    const digitsOnly = trimmed.replace(/[\s\-()]/g, '');
    if (!/^\+?\d{10,13}$/.test(digitsOnly)) return 'Please enter a valid phone number (10-13 digits)';
    return '';
  },
  message: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Message is required';
    if (trimmed.length < 10) return 'Message must be at least 10 characters';
    if (trimmed.length > 2000) return 'Message must be less than 2000 characters';
    return '';
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

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

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field was already touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const executeRecaptcha = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded. Please refresh the page.'));
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    if (!validateAllFields()) {
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha();

      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({ name: '', email: '', phone: '', message: '' });
        setTouched({ name: false, email: false, phone: false, message: false });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error.message || 'Something went wrong. Please try again.'
      });
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Meri Bagiya",
    "description": "Contact Meri Bagiya for plant purchases and garden services in Greater Noida. Visit our nursery or reach us for free consultation.",
    "url": "https://meribagiya.com/contact"
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact Meri Bagiya for plant purchases and garden services in Greater Noida. Visit our nursery or reach us for free consultation."
        keywords="contact Meri Bagiya, plant nursery contact, garden services Greater Noida"
        canonicalUrl="/contact"
        jsonLd={jsonLd}
      />

      {/* <!-- content begin --> */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="subheader" className="jarallax" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background/12.webp'})`}}>
            <div className="container relative z-index-1000">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="crumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Contact</li>
                        </ul>
                        <h1 className="text-uppercase" style={{ color: 'white' }}>Contact Us</h1>
                        <p className="col-lg-10 lead" style={{ color: 'white' }}>Transform Your Garden into a Personal Paradise!</p>
                    </div>
                </div>
            </div>
        </section>

            {/* Contact Info Cards Section */}
            <section className="bg-light">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1 text-center">
                                <i className="icofont-clock-time fs-40 mb-3 d-block"></i>
                                <h5>We're Open</h5>
                                <p className="mb-0">Monday - Sunday<br/>08:00 AM - 06:00 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            <div className="relative h-100 bg-color text-light padding30 rounded-1 text-center">
                                <i className="icofont-location-pin fs-40 mb-3 d-block"></i>
                                <h5>Office Location</h5>
                                <p className="mb-0">Near Ace Aspire, Amrapali Leisure Valley, Greater Noida, UP-201318</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1 text-center">
                                <i className="icofont-phone fs-40 mb-3 d-block"></i>
                                <h5>Call Us Directly</h5>
                                <p className="mb-0">9220404309<br/>9463563049<br/>9911654089</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            <div className="relative h-100 bg-color-2 text-light padding30 rounded-1 text-center">
                                <i className="icofont-envelope fs-40 mb-3 d-block"></i>
                                <h5>Send a Message</h5>
                                <p className="mb-0">Contact@meribagiya.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pt-0">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="subtitle wow fadeInUp mb-3">Find Us</div>
                            <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Our <span className="id-color-2">Location</span></h2>
                            <p className="wow fadeInUp" data-wow-delay=".3s">Visit our nursery at Amrapali Leisure Valley, Greater Noida. Click on the map for directions!</p>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center mt-4">
                        <div className="col-lg-10">
                            <div className="rounded-1 overflow-hidden" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                                <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                                    <iframe
                                        src="https://maps.google.com/maps?q=Amrapali+Leisure+Valley,+Greater+Noida,+Uttar+Pradesh+201318&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0, position: 'absolute', top: 0, left: 0}}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Meri Bagiya Location - Amrapali Leisure Valley, Greater Noida"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Amrapali+Leisure+Valley,+Greater+Noida,+Uttar+Pradesh+201318"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-main"
                                >
                                    <i className="icofont-direction-sign me-2"></i>Get Directions
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services Near You */}
                    <div className="row g-4 mt-5">
                        <div className="col-lg-12 text-center">
                            <h4 className="text-uppercase wow fadeInUp">Services We Provide in <span className="id-color-2">Greater Noida & Nearby Areas</span></h4>
                            <p className="wow fadeInUp" data-wow-delay=".2s">We proudly serve Amrapali Leisure Valley, Ace Aspire, Alpha, Beta, Gamma sectors, Pari Chowk, Knowledge Park, and surrounding areas in Greater Noida.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                            <div className="bg-light p-4 rounded-1 h-100">
                                <i className="icofont-tree-alt fs-40 id-color mb-3 d-block"></i>
                                <h5>Garden Design & Landscaping</h5>
                                <p className="mb-0">Custom garden designs for homes, villas, and apartments. We create beautiful outdoor spaces tailored to your vision and local climate.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="bg-light p-4 rounded-1 h-100">
                                <i className="icofont-leaf fs-40 id-color mb-3 d-block"></i>
                                <h5>Garden Maintenance</h5>
                                <p className="mb-0">Regular lawn mowing, pruning, weeding, and seasonal care. Keep your garden lush and healthy throughout the year.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="bg-light p-4 rounded-1 h-100">
                                <i className="icofont-plant fs-40 id-color mb-3 d-block"></i>
                                <h5>Planting Services</h5>
                                <p className="mb-0">Expert plant selection and installation. We help you choose plants that thrive in Greater Noida's climate conditions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="bg-light p-4 rounded-1 h-100">
                                <i className="icofont-fruits fs-40 id-color mb-3 d-block"></i>
                                <h5>Tree Care & Pruning</h5>
                                <p className="mb-0">Professional tree trimming, health assessments, and disease treatment. We care for trees of all sizes in residential and commercial spaces.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="bg-light p-4 rounded-1 h-100">
                                <i className="icofont-water-drop fs-40 id-color mb-3 d-block"></i>
                                <h5>Irrigation Systems</h5>
                                <p className="mb-0">Drip irrigation, sprinkler systems, and water-efficient solutions. Save water while keeping your plants perfectly hydrated.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="bg-light p-4 rounded-1 h-100">
                                <i className="icofont-sun-alt fs-40 id-color mb-3 d-block"></i>
                                <h5>Specialty Services</h5>
                                <p className="mb-0">Outdoor lighting, water features, vertical gardens, and terrace gardening. Transform any space into a green paradise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section>
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="subtitle wow fadeInUp mb-3">Get In Touch</div>
                            <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">Send Us a <span className="id-color-2">Message</span></h2>
                            <p className="wow fadeInUp" data-wow-delay=".3s">Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we'll get back to you as soon as possible.</p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-8">
                            <div className="p-4 bg-light rounded-1">
                                <form onSubmit={handleSubmit} className="position-relative z1000">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                                    placeholder="Your Name"
                                                    disabled={status.submitting}
                                                />
                                                {touched.name && errors.name && (
                                                    <div className="invalid-feedback" style={{display: 'block'}}>{errors.name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                                    placeholder="Your Email"
                                                    disabled={status.submitting}
                                                />
                                                {touched.email && errors.email && (
                                                    <div className="invalid-feedback" style={{display: 'block'}}>{errors.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-set">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                                    placeholder="Your Phone"
                                                    disabled={status.submitting}
                                                />
                                                {touched.phone && errors.phone && (
                                                    <div className="invalid-feedback" style={{display: 'block'}}>{errors.phone}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="field-set">
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                                                    placeholder="Your Message"
                                                    rows="5"
                                                    disabled={status.submitting}
                                                ></textarea>
                                                {touched.message && errors.message && (
                                                    <div className="invalid-feedback" style={{display: 'block'}}>{errors.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button
                                                type="submit"
                                                className="btn-main"
                                                disabled={status.submitting}
                                            >
                                                {status.submitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {status.success && (
                                        <div className="alert alert-success mt-3" role="alert">
                                            <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
                                        </div>
                                    )}

                                    {status.error && (
                                        <div className="alert alert-danger mt-3" role="alert">
                                            <strong>Error:</strong> {status.error}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
    {/* <!-- content end --> */}


    </>
  )
}

export default Contact
