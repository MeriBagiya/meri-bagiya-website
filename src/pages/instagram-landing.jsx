import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';
import { useFormValidation } from '../hooks/useFormValidation';
import { validators } from '../constants/validation';
import { FormInput } from '../components/form';
import { trackEvent } from '../utils/analytics';

// API URL from environment variable with fallback
const FUNCTION_URL = process.env.REACT_APP_API_URL || 'https://meri-bagiya-project.vercel.app/api/send-email';

// reCAPTCHA site key from environment
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const initialValues = {
  name: '',
  email: '',
  phone: ''
};

const validationRules = {
  name: validators.name,
  email: validators.email,
  phone: validators.phone
};

function InstagramLanding() {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll
  } = useFormValidation(initialValues, validationRules);

  const [status, setStatus] = useState({
    submitting: false,
    error: null
  });

  const executeRecaptcha = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject(new Error('reCAPTCHA not loaded. Please refresh the page.'));
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'instagram_landing' })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    setStatus({ submitting: true, error: null });

    try {
      const recaptchaToken = await executeRecaptcha();

      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          source: 'instagram-landing',
          message: 'Lead from Instagram landing page - interested in corporate gifting',
          recaptchaToken
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Thanks! Redirecting you to our packages...');
        // Redirect to corporate gifting page with UTM params
        setTimeout(() => {
          navigate('/corporate-gifting?utm_source=instagram&utm_medium=landing&utm_campaign=lead_capture');
        }, 1000);
      } else {
        throw new Error(data.error || 'Failed to submit. Please try again.');
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

  return (
    <>
      <SEO
        title="Corporate Gifting - Get a Quote"
        description="Premium plant gifts for corporates in Greater Noida & Delhi NCR. Get a quote in 24 hours. Bulk discounts available."
        keywords="corporate gifting plants, bulk plant orders, corporate gifts Greater Noida"
        canonicalUrl="/instagram"
      />

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Mobile-first Landing Section */}
        <section className="pt-0 pb-0" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #2d5016 0%, #4a7c23 50%, #6b9b3a 100%)' }}>
          <div className="container">
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
              <div className="col-lg-5 col-md-8 col-12">

                {/* Logo */}
                <div className="text-center mb-4">
                  <img
                    src={process.env.PUBLIC_URL + '/assets/images/MERI-BAGIYA-LOGO-UPDATED.png'}
                    alt="Meri Bagiya"
                    style={{ height: '60px' }}
                  />
                </div>

                {/* Card */}
                <div className="bg-white rounded-1 p-4 p-md-5" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>

                  {/* Header */}
                  <div className="text-center mb-4">
                    <span className="d-inline-block px-3 py-1 mb-3 rounded-1" style={{ background: '#e8f5e9', color: '#2d5016', fontSize: '14px', fontWeight: '600' }}>
                      Corporate Gifting
                    </span>
                    <h1 className="fs-28 mb-2" style={{ color: '#2d5016' }}>Premium Plant Gifts</h1>
                    <p className="text-muted mb-0">Get a personalized quote in 24 hours</p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    {status.error && (
                      <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '14px' }}>
                        <i className="icofont-warning me-2"></i>{status.error}
                      </div>
                    )}

                    <div className="mb-3">
                      <FormInput
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your Name"
                        error={errors.name}
                        touched={touched.name}
                        disabled={status.submitting}
                        style={{ fontSize: '16px', padding: '14px 16px' }}
                      />
                    </div>

                    <div className="mb-3">
                      <FormInput
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number"
                        error={errors.phone}
                        touched={touched.phone}
                        disabled={status.submitting}
                        style={{ fontSize: '16px', padding: '14px 16px' }}
                      />
                    </div>

                    <div className="mb-4">
                      <FormInput
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email Address"
                        error={errors.email}
                        touched={touched.email}
                        disabled={status.submitting}
                        style={{ fontSize: '16px', padding: '14px 16px' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-main w-100"
                      disabled={status.submitting}
                      style={{ padding: '16px', fontSize: '16px', fontWeight: '600' }}
                    >
                      {status.submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        <>Get Free Quote <i className="icofont-long-arrow-right ms-2"></i></>
                      )}
                    </button>
                  </form>

                  {/* Trust Indicators */}
                  <div className="row g-2 mt-4 text-center">
                    <div className="col-6">
                      <div className="p-2 rounded-1" style={{ background: '#f8f9fa' }}>
                        <i className="icofont-check-circled id-color d-block mb-1"></i>
                        <small className="text-muted">Bulk Discounts</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-2 rounded-1" style={{ background: '#f8f9fa' }}>
                        <i className="icofont-truck-alt id-color d-block mb-1"></i>
                        <small className="text-muted">Free Delivery</small>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="text-center my-4">
                    <span className="text-muted" style={{ fontSize: '14px' }}>or contact us directly</span>
                  </div>

                  {/* Secondary CTAs */}
                  <div className="row g-2">
                    <div className="col-6">
                      <a
                        href="https://wa.me/919220404309?text=Hi%2C%20I%27m%20interested%20in%20corporate%20plant%20gifting"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('whatsapp_lead', { button_text: 'WhatsApp', location: 'instagram-landing-corporate-gifting' })}
                        className="btn btn-outline-success w-100 d-flex align-items-center justify-content-center"
                        style={{ padding: '12px', fontSize: '14px' }}
                      >
                        <i className="icofont-brand-whatsapp me-2 fs-20"></i>
                        WhatsApp
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        href="tel:9220404309"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                        style={{ padding: '12px', fontSize: '14px' }}
                      >
                        <i className="icofont-phone me-2 fs-20"></i>
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-white mt-4 mb-0" style={{ fontSize: '13px', opacity: 0.8 }}>
                  <i className="icofont-location-pin me-1"></i>
                  Serving Greater Noida & Delhi NCR
                </p>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default InstagramLanding;
