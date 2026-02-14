import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ToolWhatsAppCTA from '../../components/tools/ToolWhatsAppCTA';
import ToolRelatedServices from '../../components/tools/ToolRelatedServices';
import ToolMoreTools from '../../components/tools/ToolMoreTools';
import { trackEvent } from '../../utils/analytics';

const occasions = [
  { id: 'diwali', label: 'Diwali', icon: 'icofont-light-bulb' },
  { id: 'new-year', label: 'New Year', icon: 'icofont-calendar' },
  { id: 'employee-appreciation', label: 'Employee Appreciation', icon: 'icofont-people' },
  { id: 'client-gift', label: 'Client Gift', icon: 'icofont-briefcase' },
  { id: 'office-inauguration', label: 'Office Inauguration', icon: 'icofont-building-alt' },
  { id: 'other', label: 'Other', icon: 'icofont-gift' }
];

const packageTiers = [
  {
    id: 'starter',
    label: 'Starter',
    range: '₹500 - ₹1,000/plant',
    baseCost: 750,
    badge: null,
    features: ['Indoor plants', 'Decorative pots', 'Care instructions', 'Delivery included']
  },
  {
    id: 'premium',
    label: 'Premium',
    range: '₹1,000 - ₹2,500/plant',
    baseCost: 1750,
    badge: 'Most Popular',
    features: ['Premium plants', 'Designer ceramic pots', 'Personalized cards', 'Setup assistance', '1-month care support']
  },
  {
    id: 'luxury',
    label: 'Luxury',
    range: '₹2,500+/plant',
    baseCost: 3000,
    badge: null,
    features: ['Rare/exotic plants', 'Handcrafted pots', 'Custom branding', 'White-glove delivery', '3-month guarantee']
  }
];

const customizationOptions = [
  { id: 'branded-pot', label: 'Branded Pot', cost: 150 },
  { id: 'message-card', label: 'Custom Message Card', cost: 50 },
  { id: 'premium-wrapping', label: 'Premium Wrapping', cost: 100 },
  { id: 'care-booklet', label: 'Care Instruction Booklet', cost: 30 },
  { id: 'branded-bag', label: 'Branded Carry Bag', cost: 80 }
];

const deliveryOptions = [
  { id: 'self-pickup', label: 'Self Pickup', cost: 0 },
  { id: 'standard', label: 'Standard Delivery', cost: 50 },
  { id: 'white-glove', label: 'White-Glove Delivery', cost: 200 }
];

const recipientQuickSelect = [25, 50, 100, 200, 500];

const faqItems = [
  {
    question: "How much do corporate plant gifts cost?",
    answer: "Corporate plant gifts range from ₹500 to ₹2,500+ per plant depending on the package you choose. Our Starter package (₹500-₹1,000) includes indoor plants with decorative pots, the Premium package (₹1,000-₹2,500) adds designer ceramic pots and personalized cards, and the Luxury package (₹2,500+) features rare/exotic plants with handcrafted pots and custom branding."
  },
  {
    question: "Do you offer bulk discounts for corporate orders?",
    answer: "Yes, we offer attractive bulk discounts for corporate orders. Orders of 100+ units receive a 10% discount, and orders of 250+ units receive a 15% discount. The more you order, the more you save — use our calculator above to see the exact savings for your order size."
  },
  {
    question: "Can I customize plant gifts with my company branding?",
    answer: "Absolutely! We offer several customization options including branded pots with your company logo, custom message cards, premium gift wrapping, care instruction booklets with your branding, and branded carry bags. Each add-on is priced per unit and can be mixed and matched to create the perfect corporate gift."
  },
  {
    question: "What is the delivery timeline for bulk orders?",
    answer: "Standard delivery for bulk corporate orders takes 5-7 business days from order confirmation. For rush orders, we can accommodate shorter timelines with advance notice. White-glove delivery includes setup at the recipient's desk or office space. We recommend placing orders at least 2 weeks before your event for the best selection."
  }
];

const relatedServices = [
  { name: 'Corporate Gifting', icon: 'icofont-gift', color: '#ff9800', link: '/corporate-gifting' },
  { name: 'Plant Rental for Offices', icon: 'icofont-leaf', color: '#4caf50', link: '/services/plant-rental' }
];

function CorporateGiftingCalculator() {
  const [occasion, setOccasion] = useState('diwali');
  const [recipients, setRecipients] = useState(50);
  const [packageTier, setPackageTier] = useState('premium');
  const [customizations, setCustomizations] = useState([]);
  const [delivery, setDelivery] = useState('standard');
  const [showResults, setShowResults] = useState(false);

  const toggleCustomization = (id) => {
    setCustomizations(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  const calculateEstimate = () => {
    const tier = packageTiers.find(t => t.id === packageTier);
    const deliveryOption = deliveryOptions.find(d => d.id === delivery);

    // Base cost per unit
    const baseCostPerUnit = tier.baseCost;

    // Customization cost per unit
    const customizationCostPerUnit = customizations.reduce((sum, cId) => {
      const opt = customizationOptions.find(o => o.id === cId);
      return sum + (opt ? opt.cost : 0);
    }, 0);

    // Delivery cost per unit
    const deliveryCostPerUnit = deliveryOption.cost;

    // Per unit total
    const perUnitTotal = baseCostPerUnit + customizationCostPerUnit + deliveryCostPerUnit;

    // Subtotal
    const subtotal = perUnitTotal * recipients;

    // Bulk discount
    let discountPercent = 0;
    if (recipients >= 250) {
      discountPercent = 15;
    } else if (recipients >= 100) {
      discountPercent = 10;
    }

    const discountAmount = Math.round(subtotal * discountPercent / 100);
    const totalAfterDiscount = subtotal - discountAmount;

    // Show range: -10% to +15% of calculated total
    const low = Math.round(totalAfterDiscount * 0.9 / 100) * 100;
    const high = Math.round(totalAfterDiscount * 1.15 / 100) * 100;

    // Budget saving tip
    let savingTip = '';
    if (recipients < 100 && recipients >= 75) {
      savingTip = `You're close to the 100-unit threshold! Adding ${100 - recipients} more units would unlock a 10% bulk discount and could actually reduce your per-unit cost.`;
    } else if (recipients < 250 && recipients >= 200) {
      savingTip = `You're close to the 250-unit threshold! Adding ${250 - recipients} more units would unlock a 15% bulk discount — saving you even more per gift.`;
    } else if (packageTier === 'luxury' && recipients >= 100) {
      savingTip = 'For large luxury orders, ask about our custom package pricing — we can often offer better rates with a tailored selection of plants and pots.';
    } else if (packageTier === 'starter' && customizations.length === 0) {
      savingTip = 'Consider adding a Custom Message Card (just ₹50/unit) — it makes your gift personal and memorable at a minimal extra cost.';
    } else if (discountPercent > 0) {
      savingTip = `Great news! You're saving ₹${discountAmount.toLocaleString('en-IN')} with your ${discountPercent}% bulk discount.`;
    } else {
      savingTip = 'Order 100+ units to unlock a 10% bulk discount, or 250+ units for 15% off!';
    }

    return {
      baseCostPerUnit,
      customizationCostPerUnit,
      deliveryCostPerUnit,
      perUnitTotal,
      subtotal,
      discountPercent,
      discountAmount,
      totalAfterDiscount,
      low,
      high,
      savingTip,
      tierLabel: tier.label,
      deliveryLabel: deliveryOption.label
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
    trackEvent('tool_calculate', { tool_name: 'corporate_gifting_calculator', occasion, recipients, package_tier: packageTier });
  };

  const handleReset = () => {
    setShowResults(false);
    setOccasion('diwali');
    setRecipients(50);
    setPackageTier('premium');
    setCustomizations([]);
    setDelivery('standard');
  };

  const results = showResults ? calculateEstimate() : null;

  const getWhatsAppMessage = () => {
    if (!results) return 'Hi! I need a quote for corporate plant gifting.';
    const occasionLabel = occasions.find(o => o.id === occasion)?.label || occasion;
    const customizationsList = customizations.map(c => customizationOptions.find(o => o.id === c)?.label).filter(Boolean).join(', ');
    return `Hi! I'm planning corporate plant gifts.\n\nOccasion: ${occasionLabel}\nQuantity: ${recipients} units\nPackage: ${results.tierLabel}\nCustomizations: ${customizationsList || 'None'}\nDelivery: ${results.deliveryLabel}\nEstimated Budget: ₹${results.low.toLocaleString('en-IN')} - ₹${results.high.toLocaleString('en-IN')}\n\nPlease share a detailed quote.`;
  };

  return (
    <>
      <SEO
        title="Corporate Gifting Budget Planner - Calculate Plant Gift Costs | Meri Bagiya"
        description="Free corporate gifting calculator. Plan your budget for plant gifts - Diwali, New Year, employee appreciation. Bulk discounts available."
        keywords="corporate plant gift price India, Diwali plant gift bulk order, corporate gifting calculator, eco friendly corporate gifts"
        canonicalUrl="/tools/corporate-gifting-calculator"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Corporate Gifting Calculator', url: '/tools/corporate-gifting-calculator' }
        ]}
        faqItems={faqItems}
      />

      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Corporate Gifting Budget Planner" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Corporate Gifting Calculator</li>
              </ul>
              <h1>Corporate Gifting Budget Planner</h1>
              <p>Free Tool - Plan your budget for eco-friendly plant gifts</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {/* Calculator Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-4">
                    <i className="icofont-gift me-2" style={{ color: '#ff9800' }}></i>
                    Calculate Your Corporate Gifting Budget
                  </h4>

                  {/* Step 1: Occasion */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">1</span>
                      Select Occasion
                    </label>
                    <div className="row g-2">
                      {occasions.map(occ => (
                        <div key={occ.id} className="col-6 col-md-4">
                          <div
                            className={`card h-100 ${occasion === occ.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: occasion === occ.id ? '#ff9800' : undefined
                            }}
                            onClick={() => setOccasion(occ.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <i className={occ.icon} style={{ fontSize: '24px', color: occasion === occ.id ? '#ff9800' : '#6c757d' }}></i>
                              <h6 className="mb-0 mt-2" style={{ fontSize: '12px' }}>{occ.label}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Number of Recipients */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">2</span>
                      Number of Recipients: <span style={{ color: '#ff9800' }}>{recipients}</span>
                    </label>

                    {/* Quick select buttons */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {recipientQuickSelect.map(val => (
                        <button
                          key={val}
                          className={`btn btn-sm ${recipients === val ? '' : 'btn-outline-secondary'}`}
                          onClick={() => setRecipients(val)}
                          style={{
                            borderRadius: '20px',
                            backgroundColor: recipients === val ? '#ff9800' : undefined,
                            borderColor: recipients === val ? '#ff9800' : undefined,
                            color: recipients === val ? '#fff' : undefined
                          }}
                        >
                          {val}
                        </button>
                      ))}
                    </div>

                    <input
                      type="range"
                      className="form-range"
                      min="10"
                      max="500"
                      step="10"
                      value={recipients}
                      onChange={(e) => setRecipients(parseInt(e.target.value))}
                    />
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">10 recipients</small>
                      <small className="text-muted">500 recipients</small>
                    </div>
                    {recipients >= 100 && (
                      <small className="text-success d-block mt-1">
                        <i className="icofont-check-circled me-1"></i>
                        {recipients >= 250 ? '15% bulk discount applied!' : '10% bulk discount applied!'}
                      </small>
                    )}
                  </div>

                  {/* Step 3: Package Tier */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">3</span>
                      Select Package
                    </label>
                    <div className="row g-2">
                      {packageTiers.map(tier => (
                        <div key={tier.id} className="col-12 col-md-4">
                          <div
                            className={`card h-100 ${packageTier === tier.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: packageTier === tier.id ? '#ff9800' : undefined,
                              position: 'relative'
                            }}
                            onClick={() => setPackageTier(tier.id)}
                          >
                            {tier.badge && (
                              <span
                                className="badge"
                                style={{
                                  position: 'absolute',
                                  top: '-10px',
                                  right: '10px',
                                  backgroundColor: '#ff9800',
                                  fontSize: '10px',
                                  borderRadius: '10px',
                                  padding: '4px 10px'
                                }}
                              >
                                {tier.badge}
                              </span>
                            )}
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-1" style={{ color: packageTier === tier.id ? '#ff9800' : '#333' }}>{tier.label}</h6>
                              <small className="fw-bold d-block mb-2" style={{ color: '#4a7c59' }}>{tier.range}</small>
                              <ul className="list-unstyled text-start mb-0">
                                {tier.features.map((feat, idx) => (
                                  <li key={idx} style={{ fontSize: '11px' }} className="mb-1">
                                    <i className="icofont-check-circled text-success me-1"></i>{feat}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Customization Add-ons */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">4</span>
                      Customization Add-ons (optional)
                    </label>
                    <div className="row g-2">
                      {customizationOptions.map(opt => (
                        <div key={opt.id} className="col-6 col-md-4">
                          <div
                            className={`card ${customizations.includes(opt.id) ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '10px',
                              transition: 'all 0.2s',
                              borderColor: customizations.includes(opt.id) ? '#ff9800' : undefined
                            }}
                            onClick={() => toggleCustomization(opt.id)}
                          >
                            <div className="card-body p-2">
                              <div className="d-flex align-items-center">
                                <input
                                  type="checkbox"
                                  className="form-check-input me-2 flex-shrink-0"
                                  checked={customizations.includes(opt.id)}
                                  onChange={() => toggleCustomization(opt.id)}
                                  style={{ cursor: 'pointer' }}
                                />
                                <div>
                                  <small className="fw-bold d-block" style={{ fontSize: '12px' }}>{opt.label}</small>
                                  <small style={{ fontSize: '11px', color: '#ff9800' }}>₹{opt.cost}/unit</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: Delivery Type */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">5</span>
                      Delivery Type
                    </label>
                    <div className="row g-2">
                      {deliveryOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card ${delivery === opt.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: delivery === opt.id ? '#ff9800' : undefined
                            }}
                            onClick={() => setDelivery(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-1" style={{ fontSize: '13px' }}>{opt.label}</h6>
                              <small style={{ color: opt.cost > 0 ? '#ff9800' : '#4a7c59', fontWeight: 'bold' }}>
                                {opt.cost === 0 ? 'Free' : `₹${opt.cost}/unit`}
                              </small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-lg"
                      onClick={handleCalculate}
                      style={{ borderRadius: '25px', padding: '12px 30px', backgroundColor: '#ff9800', color: '#fff', border: 'none' }}
                    >
                      <i className="icofont-check-circled me-2"></i>
                      Calculate Budget
                    </button>
                    {showResults && (
                      <button
                        className="btn btn-outline-secondary btn-lg"
                        onClick={handleReset}
                        style={{ borderRadius: '25px', padding: '12px 30px' }}
                      >
                        <i className="icofont-refresh me-2"></i>
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Results Section */}
              {showResults && results && (
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', borderLeft: '4px solid #ff9800' }}>
                  <div className="card-body p-4">
                    <h4 className="mb-4">
                      <i className="icofont-check-circled me-2" style={{ color: '#ff9800' }}></i>
                      Your Corporate Gifting Budget
                    </h4>

                    {/* Main Estimate */}
                    <div className="text-center p-4 mb-4 rounded-3" style={{ backgroundColor: 'rgba(255, 152, 0, 0.08)' }}>
                      <h2 style={{ color: '#ff9800', fontSize: '2.5rem' }}>
                        ₹{results.low.toLocaleString('en-IN')} - ₹{results.high.toLocaleString('en-IN')}
                      </h2>
                      <p className="mb-0 text-muted">Estimated Total Budget for {recipients} gifts</p>
                      {results.discountPercent > 0 && (
                        <span className="badge bg-success mt-2" style={{ fontSize: '13px' }}>
                          <i className="icofont-sale-discount me-1"></i>
                          {results.discountPercent}% Bulk Discount Applied — You Save ₹{results.discountAmount.toLocaleString('en-IN')}!
                        </span>
                      )}
                    </div>

                    {/* Per-Unit Breakdown */}
                    <h5 className="mb-3">Per-Unit Cost Breakdown</h5>
                    <div className="table-responsive mb-4">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td><i className="icofont-leaf text-success me-2"></i>{results.tierLabel} Package (base)</td>
                            <td className="text-end fw-bold">₹{results.baseCostPerUnit.toLocaleString('en-IN')}/unit</td>
                          </tr>
                          {results.customizationCostPerUnit > 0 && (
                            <tr>
                              <td>
                                <i className="icofont-paint me-2" style={{ color: '#ff9800' }}></i>
                                Customizations ({customizations.length} add-on{customizations.length > 1 ? 's' : ''})
                              </td>
                              <td className="text-end fw-bold">₹{results.customizationCostPerUnit.toLocaleString('en-IN')}/unit</td>
                            </tr>
                          )}
                          <tr>
                            <td><i className="icofont-truck-loaded text-primary me-2"></i>{results.deliveryLabel}</td>
                            <td className="text-end fw-bold">{results.deliveryCostPerUnit === 0 ? 'Free' : `₹${results.deliveryCostPerUnit.toLocaleString('en-IN')}/unit`}</td>
                          </tr>
                          <tr style={{ borderTop: '2px solid #dee2e6' }}>
                            <td className="fw-bold">Per-Unit Total</td>
                            <td className="text-end fw-bold">₹{results.perUnitTotal.toLocaleString('en-IN')}/unit</td>
                          </tr>
                          <tr>
                            <td className="text-muted">Subtotal ({recipients} units)</td>
                            <td className="text-end text-muted">₹{results.subtotal.toLocaleString('en-IN')}</td>
                          </tr>
                          {results.discountPercent > 0 && (
                            <tr className="text-success">
                              <td><i className="icofont-sale-discount me-2"></i>Bulk Discount ({results.discountPercent}%)</td>
                              <td className="text-end fw-bold">-₹{results.discountAmount.toLocaleString('en-IN')}</td>
                            </tr>
                          )}
                          <tr className="table-warning">
                            <td className="fw-bold">Estimated Total Budget</td>
                            <td className="text-end fw-bold">₹{results.low.toLocaleString('en-IN')} - ₹{results.high.toLocaleString('en-IN')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Budget Saving Tip */}
                    <div className="alert" style={{ borderRadius: '12px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderColor: '#ff9800' }}>
                      <h6 className="alert-heading mb-1">
                        <i className="icofont-light-bulb me-2" style={{ color: '#ff9800' }}></i>
                        Budget Saving Tip
                      </h6>
                      <p className="mb-0 small">{results.savingTip}</p>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="text-center mt-4">
                      <a
                        href={`https://wa.me/919220404309?text=${encodeURIComponent(getWhatsAppMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-lg"
                        style={{ borderRadius: '25px', padding: '12px 30px' }}
                        onClick={() => {
                          trackEvent('generate_lead', { tool_name: 'corporate_gifting_calculator' });
                          trackEvent('whatsapp_lead', { button_text: 'Get Custom Quote on WhatsApp', location: 'corporate-gifting-calculator-results' });
                        }}
                      >
                        <i className="icofont-whatsapp me-2"></i>
                        Get Custom Quote on WhatsApp
                      </a>
                      <p className="text-muted small mt-2">Share your requirements and get a detailed proposal. No obligation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <ToolWhatsAppCTA
                title="Need a Custom Quote?"
                description="Every corporate gifting requirement is unique. Share your details and get a tailored quote with bulk pricing."
                whatsappMessage={getWhatsAppMessage()}
              />

              {/* Why Plant Gifts */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-leaf me-2" style={{ color: '#ff9800' }}></i>
                    Why Plant Gifts?
                  </h5>
                  <ul className="list-unstyled small mb-0">
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Memorable & long-lasting impression</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Eco-friendly & sustainable choice</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Boosts workplace productivity</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Fully customizable with branding</li>
                    <li><i className="icofont-check-circled text-success me-2"></i>Hassle-free bulk delivery</li>
                  </ul>
                </div>
              </div>

              <ToolRelatedServices services={relatedServices} />
              <ToolMoreTools currentTool="corporate-gifting-calculator" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-center mb-4">Frequently Asked Questions</h3>
              <div className="accordion" id="faqAccordion">
                {faqItems.map((faq, index) => (
                  <div key={index} className="accordion-item border-0 mb-2" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`faq${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Looking for Unique Corporate Gifts?</h3>
              <p className="mb-0">Explore our curated corporate gifting collection — eco-friendly plant gifts for every occasion.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/corporate-gifting" className="btn btn-main" style={{ borderRadius: '25px' }}>
                <i className="icofont-gift me-2"></i>Explore Corporate Gifting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CorporateGiftingCalculator;
