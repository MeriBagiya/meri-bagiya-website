import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ToolWhatsAppCTA from '../../components/tools/ToolWhatsAppCTA';
import ToolRelatedServices from '../../components/tools/ToolRelatedServices';
import ToolMoreTools from '../../components/tools/ToolMoreTools';
import { trackEvent } from '../../utils/analytics';

const scopeOptions = [
  { id: 'common-area', label: 'Common Area Gardens' },
  { id: 'entrance', label: 'Entrance Landscaping' },
  { id: 'parks', label: 'Parks & Play Areas' },
  { id: 'pathways', label: 'Pathway Greenery' },
  { id: 'lobby', label: 'Lobby Plants' },
  { id: 'boundary', label: 'Boundary Plantation' }
];

const addonOptions = [
  { id: 'irrigation', label: 'Drip Irrigation System', cost: 15000 },
  { id: 'pest-control', label: 'Monthly Pest Control', cost: 8000 },
  { id: 'artificial-grass', label: 'Artificial Grass Areas', cost: 25000 },
  { id: 'water-fountain', label: 'Water Fountains', cost: 20000 }
];

const potTypeOptions = [
  { id: 'fiber', label: 'Fiber Pots', multiplier: 1.0 },
  { id: 'plastic', label: 'Plastic Pots', multiplier: 0.7 },
  { id: 'mitti', label: 'Mitti (Clay) Pots', multiplier: 0.5 },
  { id: 'mix', label: 'Mix (Fiber + Plastic + Mitti)', multiplier: 0.8 }
];

const contractOptions = [
  { id: '6months', label: '6 Months', multiplier: 1.15 },
  { id: '1year', label: '1 Year', multiplier: 1.0 },
  { id: '2years', label: '2 Years', multiplier: 0.9 }
];

const faqItems = [
  {
    question: "How much does society garden maintenance cost per month?",
    answer: "Society garden AMC costs typically range from ₹50,000 to ₹3,00,000+ per month depending on the society area, number of pots, scope of work, and contract duration. Our estimator provides a rough range based on your specific requirements. For an accurate quote, we recommend a free site visit."
  },
  {
    question: "What is included in a society garden AMC?",
    answer: "A comprehensive garden AMC includes: all seasonal plants supplied and replaced 3x/year, permanent plants (for 12+ month contracts), pot supply (fiber, plastic, and clay pots at zero cost), dedicated on-site team (malis + supervisor), daily watering, fertilization, pest control, pruning, and seasonal changeovers."
  },
  {
    question: "How many gardeners (malis) are needed for a society?",
    answer: "As a general rule, 1 mali is needed per 2 acres of garden area, plus 1 supervisor for every 5 malis. For example, a 10-acre society would need approximately 5 malis and 1 supervisor. The exact staffing depends on the scope — lobby plants, entrance landscaping, and parks require additional attention."
  },
  {
    question: "Are seasonal plant replacements included in the AMC cost?",
    answer: "Yes. In our AMC model, all seasonal plants are supplied and replaced 3 times per year (summer, monsoon, winter) at no additional cost. This is included in your fixed monthly fee — no surprises or hidden charges. For contracts of 12 months or more, permanent plants are also included."
  },
  {
    question: "Do you supply pots for the society garden?",
    answer: "Yes. We provide a one-time supply of pots (fiber, plastic, and mitti) at zero cost as part of the AMC. For example, for a large society we might supply 3,000+ fiber pots (10-18 inch), mix pots, and 2,000 mitti pots — all included. Damaged pot replacements during the contract are charged separately."
  }
];

const relatedServices = [
  { name: 'Portfolio - Our Society Projects', icon: 'icofont-image', color: '#4a7c59', link: '/portfolio' },
  { name: 'Garden Maintenance Service', icon: 'icofont-tools-alt-2', color: '#28a745', link: '/services/garden-maintenance' },
  { name: 'Landscape Design', icon: 'icofont-paint', color: '#0d6efd', link: '/services/landscape-design' }
];

function SocietyGardenCostEstimator() {
  const [societyName, setSocietyName] = useState('');
  const [area, setArea] = useState(5);
  const [towers, setTowers] = useState(5);
  const [units, setUnits] = useState(500);
  const [potCount, setPotCount] = useState(2000);
  const [potType, setPotType] = useState('mix');
  const [contract, setContract] = useState('1year');
  const [scope, setScope] = useState(['common-area', 'entrance', 'lobby']);
  const [addons, setAddons] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const toggleScope = (id) => {
    setScope(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const toggleAddon = (id) => {
    setAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  const calculateEstimate = () => {
    const potTypeData = potTypeOptions.find(p => p.id === potType);
    const contractData = contractOptions.find(c => c.id === contract);

    // Base cost per acre per month (includes basic plants, malis, supervision)
    const baseCostPerAcre = 15000;

    // Pot cost contribution (per pot per month for supply + seasonal replacement)
    const potCostPerPot = 25 * potTypeData.multiplier;

    // Mali calculation: 1 per 2 acres, min 2
    const maliCount = Math.max(2, Math.ceil(area / 2));
    const maliCostPerMonth = 12000; // per mali

    // Supervisor: 1 per 5 malis, min 1
    const supervisorCount = Math.max(1, Math.ceil(maliCount / 5));
    const supervisorCostPerMonth = 18000;

    // Scope multiplier: more scope areas = more work
    const scopeMultiplier = 0.8 + (scope.length * 0.05);

    // Base monthly cost
    const baseCost = area * baseCostPerAcre * scopeMultiplier;
    const potCost = potCount * potCostPerPot;
    const staffingCost = (maliCount * maliCostPerMonth) + (supervisorCount * supervisorCostPerMonth);

    // Addons
    const addonCost = addons.reduce((sum, addonId) => {
      const addon = addonOptions.find(a => a.id === addonId);
      return sum + (addon ? addon.cost : 0);
    }, 0);

    // Contract duration multiplier
    const subtotal = (baseCost + potCost + staffingCost + addonCost) * contractData.multiplier;

    // Range: -15% to +20%
    const low = Math.round(subtotal * 0.85 / 1000) * 1000;
    const high = Math.round(subtotal * 1.2 / 1000) * 1000;

    // Seasonal replacement cost (3x/year, included in AMC)
    const seasonalCost = potCount * 15 * 3 / 12; // per month amortized

    return {
      low,
      high,
      baseCost: Math.round(baseCost),
      potCost: Math.round(potCost),
      staffingCost: Math.round(staffingCost),
      addonCost: Math.round(addonCost),
      maliCount,
      supervisorCount,
      seasonalCost: Math.round(seasonalCost),
      contractLabel: contractData.label,
      potTypeLabel: potTypeData.label
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
    trackEvent('tool_calculate', { tool_name: 'society_garden_cost_estimator', area, pot_count: potCount, contract });
  };

  const handleReset = () => {
    setShowResults(false);
    setSocietyName('');
    setArea(5);
    setTowers(5);
    setUnits(500);
    setPotCount(2000);
    setPotType('mix');
    setContract('1year');
    setScope(['common-area', 'entrance', 'lobby']);
    setAddons([]);
  };

  const results = showResults ? calculateEstimate() : null;

  const getWhatsAppMessage = () => {
    if (!results) return 'Hi! I need a quote for society garden maintenance.';
    return `Hi! I need a detailed proposal for society garden maintenance.\n\nSociety: ${societyName || 'Not specified'}\nArea: ${area} acres\nTowers: ${towers}\nUnits: ${units}\nPot Count: ${potCount}\nPot Type: ${results.potTypeLabel}\nContract: ${results.contractLabel}\nEstimated Range: ₹${results.low.toLocaleString('en-IN')} - ₹${results.high.toLocaleString('en-IN')}/month\n\nPlease share a detailed proposal.`;
  };

  return (
    <>
      <SEO
        title="Society Garden AMC Cost Estimator - Calculate Monthly Maintenance Cost"
        description="Free tool to estimate society garden annual maintenance contract (AMC) costs. Calculate monthly fees for residential society garden maintenance including plants, pots, malis, and seasonal replacements."
        keywords="society garden maintenance cost, AOA garden AMC, residential society landscaping cost Greater Noida, society garden AMC, RWA garden maintenance"
        canonicalUrl="/tools/society-garden-cost-estimator"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Society Garden AMC Cost Estimator', url: '/tools/society-garden-cost-estimator' }
        ]}
        faqItems={faqItems}
      />

      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Society Garden Cost Estimator" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Society Garden AMC Estimator</li>
              </ul>
              <h1>Society Garden AMC Cost Estimator</h1>
              <p>Free Tool - Get a rough monthly estimate for your society's garden maintenance</p>
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
                    <i className="icofont-building-alt me-2" style={{ color: '#4a7c59' }}></i>
                    Estimate Your Society's Garden AMC Cost
                  </h4>

                  {/* Society Name */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Society Name (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={societyName}
                      onChange={(e) => setSocietyName(e.target.value)}
                      placeholder="e.g., Ace Divino, Amrapali Leisure Valley"
                      style={{ borderRadius: '10px' }}
                    />
                  </div>

                  {/* Society Area */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">1</span>
                      Society Area: <span className="text-success">{area} acres</span>
                    </label>
                    <input
                      type="range"
                      className="form-range"
                      min="1"
                      max="15"
                      step="0.5"
                      value={area}
                      onChange={(e) => setArea(parseFloat(e.target.value))}
                    />
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">1 acre</small>
                      <small className="text-muted">15 acres</small>
                    </div>
                  </div>

                  {/* Towers & Units */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        <span className="badge bg-success me-2">2</span>
                        Number of Towers
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="20"
                        value={towers}
                        onChange={(e) => setTowers(parseInt(e.target.value) || 1)}
                        style={{ borderRadius: '10px' }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Approximate Units</label>
                      <input
                        type="number"
                        className="form-control"
                        min="100"
                        max="3000"
                        value={units}
                        onChange={(e) => setUnits(parseInt(e.target.value) || 100)}
                        style={{ borderRadius: '10px' }}
                      />
                    </div>
                  </div>

                  {/* Pot Count */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">3</span>
                      Pot Count: <span className="text-success">{potCount.toLocaleString('en-IN')}</span>
                    </label>
                    <input
                      type="range"
                      className="form-range"
                      min="500"
                      max="5000"
                      step="100"
                      value={potCount}
                      onChange={(e) => setPotCount(parseInt(e.target.value))}
                    />
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">500 pots</small>
                      <small className="text-muted">5,000 pots</small>
                    </div>
                  </div>

                  {/* Pot Type */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">4</span>
                      Pot Type Preference
                    </label>
                    <div className="row g-2">
                      {potTypeOptions.map(opt => (
                        <div key={opt.id} className="col-6 col-md-3">
                          <div
                            className={`card ${potType === opt.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'all 0.2s' }}
                            onClick={() => setPotType(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-0" style={{ fontSize: '13px' }}>{opt.label}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contract Duration */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">5</span>
                      Contract Duration
                    </label>
                    <div className="row g-2">
                      {contractOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card ${contract === opt.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'all 0.2s' }}
                            onClick={() => setContract(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-0">{opt.label}</h6>
                              {opt.id === '2years' && <small className="text-success">Best Value</small>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scope */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">6</span>
                      Scope of Work
                    </label>
                    <div className="row g-2">
                      {scopeOptions.map(opt => (
                        <div key={opt.id} className="col-6 col-md-4">
                          <div
                            className={`form-check card ${scope.includes(opt.id) ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '10px', margin: 0 }}
                            onClick={() => toggleScope(opt.id)}
                          >
                            <div className="card-body p-2 d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={scope.includes(opt.id)}
                                onChange={() => toggleScope(opt.id)}
                                style={{ cursor: 'pointer' }}
                              />
                              <label className="form-check-label" style={{ cursor: 'pointer', fontSize: '13px' }}>{opt.label}</label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">7</span>
                      Add-ons (optional)
                    </label>
                    <div className="row g-2">
                      {addonOptions.map(opt => (
                        <div key={opt.id} className="col-6">
                          <div
                            className={`form-check card ${addons.includes(opt.id) ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '10px', margin: 0 }}
                            onClick={() => toggleAddon(opt.id)}
                          >
                            <div className="card-body p-2 d-flex align-items-center">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={addons.includes(opt.id)}
                                onChange={() => toggleAddon(opt.id)}
                                style={{ cursor: 'pointer' }}
                              />
                              <div>
                                <label className="form-check-label" style={{ cursor: 'pointer', fontSize: '13px' }}>{opt.label}</label>
                                <small className="text-muted d-block">+₹{opt.cost.toLocaleString('en-IN')}/month</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-main btn-lg"
                      onClick={handleCalculate}
                      disabled={scope.length === 0}
                      style={{ borderRadius: '25px', padding: '12px 30px' }}
                    >
                      <i className="icofont-check-circled me-2"></i>
                      Get Estimate
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
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', borderLeft: '4px solid #4a7c59' }}>
                  <div className="card-body p-4">
                    <h4 className="mb-4">
                      <i className="icofont-check-circled me-2" style={{ color: '#4a7c59' }}></i>
                      Your Estimated Monthly AMC Cost
                    </h4>

                    {/* Main Estimate */}
                    <div className="text-center p-4 mb-4 rounded-3" style={{ backgroundColor: 'rgba(74, 124, 89, 0.1)' }}>
                      <h2 style={{ color: '#4a7c59', fontSize: '2.5rem' }}>
                        ₹{results.low.toLocaleString('en-IN')} - ₹{results.high.toLocaleString('en-IN')}
                      </h2>
                      <p className="mb-0 text-muted">Estimated Monthly AMC Cost</p>
                      <small className="text-muted">Contract: {results.contractLabel} | Pots: {results.potTypeLabel}</small>
                    </div>

                    {/* Breakdown */}
                    <h5 className="mb-3">Cost Breakdown</h5>
                    <div className="table-responsive mb-4">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td><i className="icofont-leaf text-success me-2"></i>Plant Supply & Maintenance</td>
                            <td className="text-end fw-bold">₹{results.baseCost.toLocaleString('en-IN')}/month</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-flower-pot text-warning me-2"></i>Pot Supply (amortized)</td>
                            <td className="text-end fw-bold">₹{results.potCost.toLocaleString('en-IN')}/month</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-people text-primary me-2"></i>Staffing ({results.maliCount} malis + {results.supervisorCount} supervisor)</td>
                            <td className="text-end fw-bold">₹{results.staffingCost.toLocaleString('en-IN')}/month</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-recycle text-info me-2"></i>Seasonal Replacement (3x/year, included)</td>
                            <td className="text-end fw-bold">₹{results.seasonalCost.toLocaleString('en-IN')}/month</td>
                          </tr>
                          {results.addonCost > 0 && (
                            <tr>
                              <td><i className="icofont-plus-circle text-danger me-2"></i>Add-ons</td>
                              <td className="text-end fw-bold">₹{results.addonCost.toLocaleString('en-IN')}/month</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* What's Included */}
                    <h5 className="mb-3">What's Included in Your AMC</h5>
                    <div className="row g-2 mb-4">
                      {[
                        'All seasonal plants (3x/year replacement)',
                        'Permanent plants (12+ month contracts)',
                        'Pot supply at zero cost',
                        `${results.maliCount} dedicated malis on-site daily`,
                        `${results.supervisorCount} supervisor for quality control`,
                        'Daily watering & maintenance',
                        'Monthly fertilization',
                        'Pest control',
                        'Pruning & trimming',
                        'Seasonal changeover management'
                      ].map((item, idx) => (
                        <div key={idx} className="col-md-6">
                          <div className="d-flex align-items-start">
                            <i className="icofont-check-circled text-success me-2 mt-1"></i>
                            <small>{item}</small>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* AMC vs Hiring Separately */}
                    <div className="alert alert-info" style={{ borderRadius: '12px' }}>
                      <h6 className="alert-heading">
                        <i className="icofont-chart-bar-graph me-2"></i>
                        Your AMC vs Hiring Separately
                      </h6>
                      <div className="row">
                        <div className="col-md-6">
                          <strong className="text-success">With Meri Bagiya AMC:</strong>
                          <ul className="small mb-0">
                            <li>Fixed monthly fee, no surprises</li>
                            <li>Plants + pots + staff all included</li>
                            <li>Free seasonal replacements 3x/year</li>
                            <li>Professional supervision</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <strong className="text-danger">Hiring Separately:</strong>
                          <ul className="small mb-0">
                            <li>Mali salary: ₹{(results.maliCount * 15000).toLocaleString('en-IN')}/month</li>
                            <li>Plant purchases: variable</li>
                            <li>Pot purchases: one-time ₹{(potCount * 80).toLocaleString('en-IN')}+</li>
                            <li>Seasonal replacements: extra cost each time</li>
                          </ul>
                        </div>
                      </div>
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
                          trackEvent('generate_lead', { tool_name: 'society_garden_cost_estimator' });
                          trackEvent('whatsapp_lead', { button_text: 'Get Detailed Proposal on WhatsApp', location: 'society-garden-estimator-results' });
                        }}
                      >
                        <i className="icofont-whatsapp me-2"></i>
                        Get Detailed Proposal on WhatsApp
                      </a>
                      <p className="text-muted small mt-2">Free site visit included. No obligation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <ToolWhatsAppCTA
                title="Need a Custom Quote?"
                description="Every society is unique. Get a tailored proposal with a free site visit."
                whatsappMessage={getWhatsAppMessage()}
              />

              {/* Ace Divino Case Study */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-star me-2" style={{ color: '#ffd700' }}></i>
                    Our Flagship Project
                  </h5>
                  <h6>Ace Divino, Greater Noida West</h6>
                  <ul className="list-unstyled small">
                    <li className="mb-1"><i className="icofont-check text-success me-2"></i>10.41 acres, 11 towers</li>
                    <li className="mb-1"><i className="icofont-check text-success me-2"></i>1,572 residential units</li>
                    <li className="mb-1"><i className="icofont-check text-success me-2"></i>5,000+ pots supplied</li>
                    <li className="mb-1"><i className="icofont-check text-success me-2"></i>1 supervisor + 5 malis daily</li>
                    <li className="mb-1"><i className="icofont-check text-success me-2"></i>3x/year seasonal replacement</li>
                  </ul>
                  <Link to="/portfolio" className="btn btn-outline-success btn-sm" style={{ borderRadius: '20px' }}>
                    View Portfolio <i className="icofont-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>

              <ToolRelatedServices services={relatedServices} />
              <ToolMoreTools currentTool="society-garden-cost-estimator" />
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
              <h3>Ready to Transform Your Society's Green Spaces?</h3>
              <p className="mb-0">Schedule a free site visit and get a detailed, customized proposal for your society.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a
                href={`https://wa.me/919220404309?text=${encodeURIComponent('Hi! I want to schedule a free site visit for society garden maintenance.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-main"
                style={{ borderRadius: '25px' }}
                onClick={() => trackEvent('whatsapp_lead', { button_text: 'Schedule Free Visit', location: 'society-garden-estimator-bottom-cta' })}
              >
                <i className="icofont-whatsapp me-2"></i>Schedule Free Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocietyGardenCostEstimator;
