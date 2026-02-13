import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ToolWhatsAppCTA from '../../components/tools/ToolWhatsAppCTA';
import ToolRelatedServices from '../../components/tools/ToolRelatedServices';
import ToolMoreTools from '../../components/tools/ToolMoreTools';
import { trackEvent } from '../../utils/analytics';

const presets = [
  { label: 'Small Balcony', sqft: 50 },
  { label: 'Standard Terrace', sqft: 200 },
  { label: 'Large Terrace', sqft: 500 },
  { label: 'Full Rooftop', sqft: 1000 }
];

const gardenTypes = [
  { id: 'decorative', label: 'Decorative', icon: 'icofont-flower', description: 'Beautiful flowering and ornamental plants', costMultiplier: 1.0 },
  { id: 'vegetable', label: 'Vegetable Garden', icon: 'icofont-carrot', description: 'Grow your own organic vegetables', costMultiplier: 0.8 },
  { id: 'mixed', label: 'Mixed Garden', icon: 'icofont-leaf', description: 'Combination of decorative and edible plants', costMultiplier: 1.1 },
  { id: 'leisure', label: 'Leisure & Seating', icon: 'icofont-chair', description: 'Garden with seating area for relaxation', costMultiplier: 1.3 }
];

const featureOptions = [
  { id: 'waterproofing', label: 'Waterproofing', cost: 80, unit: '/sqft', description: 'Essential for rooftop' },
  { id: 'raised-beds', label: 'Raised Beds', cost: 45, unit: '/sqft', description: 'Better drainage & root health' },
  { id: 'drip-irrigation', label: 'Drip Irrigation', cost: 35, unit: '/sqft', description: 'Automated watering system' },
  { id: 'seating', label: 'Seating Area', cost: 150, unit: '/sqft', description: 'Benches/chairs + flooring' },
  { id: 'pergola', label: 'Pergola / Shade', cost: 500, unit: '/sqft (coverage)', description: 'Wooden/metal shade structure' },
  { id: 'artificial-grass', label: 'Artificial Grass Border', cost: 90, unit: '/sqft', description: 'Low-maintenance green border' },
  { id: 'vertical-wall', label: 'Vertical Green Wall', cost: 200, unit: '/sqft (wall)', description: 'Space-saving vertical garden' },
  { id: 'lighting', label: 'Garden Lighting', cost: 25, unit: '/sqft', description: 'LED & solar path lights' },
  { id: 'water-feature', label: 'Water Feature', cost: 15000, unit: ' (fixed)', description: 'Small fountain or pond' }
];

const densityOptions = [
  { id: 'basic', label: 'Basic', multiplier: 0.7, description: 'Minimal planting, spacious feel' },
  { id: 'moderate', label: 'Moderate', multiplier: 1.0, description: 'Balanced greenery' },
  { id: 'lush', label: 'Lush', multiplier: 1.4, description: 'Dense, jungle-like feel' }
];

const floorOptions = [
  { id: 'ground', label: 'Ground Floor', multiplier: 0.9 },
  { id: 'mid', label: 'Mid-Level', multiplier: 1.0 },
  { id: 'rooftop', label: 'Rooftop', multiplier: 1.15 }
];

const faqItems = [
  {
    question: "What is the cost of a terrace garden per sq ft in India?",
    answer: "Terrace garden costs in India typically range from ₹50 to ₹200 per sq ft for basic setup, depending on the type of garden, features included, and plant density. With features like waterproofing (₹80/sqft), drip irrigation (₹35/sqft), raised beds, pergola, and seating, the total cost can go higher. Use our calculator to get a personalized estimate."
  },
  {
    question: "Is waterproofing necessary for a terrace garden?",
    answer: "Yes, waterproofing is highly recommended for rooftop and terrace gardens. It prevents water seepage into the building structure, protects against moisture damage, and extends the life of your terrace. Professional waterproofing typically costs ₹60-100 per sqft and is a one-time investment that saves costly repairs later."
  },
  {
    question: "What are the best plants for a terrace garden in India?",
    answer: "Popular terrace garden plants in India include: flowering plants (Bougainvillea, Hibiscus, Roses), vegetables (Tomatoes, Chillies, Brinjal), herbs (Tulsi, Mint, Coriander), climbers (Money Plant, Jasmine), and shade plants (Ferns, Peace Lily). The choice depends on your terrace's sunlight, wind exposure, and whether you want a decorative or edible garden."
  },
  {
    question: "How much maintenance does a terrace garden need?",
    answer: "A well-designed terrace garden with drip irrigation needs about 15-30 minutes of daily attention (checking soil moisture, removing dead leaves). Without irrigation, you'll need to water daily. Professional maintenance services like Meri Bagiya's can handle everything — watering, fertilizing, pruning, pest control — for a fixed monthly fee."
  }
];

const relatedServices = [
  { name: 'Terrace Garden Service', icon: 'icofont-home', color: '#e91e63', link: '/services/terrace-garden' },
  { name: 'Vertical Garden', icon: 'icofont-wall', color: '#4caf50', link: '/services/vertical-garden' },
  { name: 'Balcony Garden', icon: 'icofont-ui-home', color: '#2196f3', link: '/services/balcony-garden' }
];

function TerraceGardenCostCalculator() {
  const [inputMode, setInputMode] = useState('slider');
  const [area, setArea] = useState(200);
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(10);
  const [gardenType, setGardenType] = useState('mixed');
  const [features, setFeatures] = useState([]);
  const [density, setDensity] = useState('moderate');
  const [floor, setFloor] = useState('rooftop');
  const [showResults, setShowResults] = useState(false);

  const effectiveArea = inputMode === 'slider' ? area : length * width;

  const toggleFeature = (id) => {
    setFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const calculateEstimate = () => {
    const typeData = gardenTypes.find(t => t.id === gardenType);
    const densityData = densityOptions.find(d => d.id === density);
    const floorData = floorOptions.find(f => f.id === floor);

    // Base cost per sqft (plants + soil + basic pots)
    const baseCostPerSqft = 100 * typeData.costMultiplier * densityData.multiplier * floorData.multiplier;

    const baseCost = effectiveArea * baseCostPerSqft;

    // Feature costs
    let featureCost = 0;
    const featureBreakdown = [];
    features.forEach(fId => {
      const feat = featureOptions.find(f => f.id === fId);
      if (feat) {
        let cost;
        if (feat.id === 'water-feature') {
          cost = feat.cost;
        } else if (feat.id === 'pergola') {
          cost = feat.cost * Math.min(effectiveArea * 0.2, 100); // 20% coverage or max 100sqft
        } else if (feat.id === 'vertical-wall') {
          cost = feat.cost * Math.min(effectiveArea * 0.15, 50); // 15% of area or max 50sqft
        } else if (feat.id === 'seating') {
          cost = feat.cost * Math.min(effectiveArea * 0.25, 150); // 25% of area or max 150sqft
        } else {
          cost = feat.cost * effectiveArea;
        }
        featureCost += cost;
        featureBreakdown.push({ name: feat.label, cost: Math.round(cost) });
      }
    });

    const totalCost = baseCost + featureCost;
    const low = Math.round(totalCost * 0.85 / 100) * 100;
    const high = Math.round(totalCost * 1.2 / 100) * 100;

    // Timeline estimate
    let timeline;
    if (effectiveArea <= 100) timeline = '1-2 weeks';
    else if (effectiveArea <= 300) timeline = '2-4 weeks';
    else if (effectiveArea <= 700) timeline = '4-6 weeks';
    else timeline = '6-10 weeks';

    return {
      low,
      high,
      baseCost: Math.round(baseCost),
      featureCost: Math.round(featureCost),
      featureBreakdown,
      perSqft: Math.round(totalCost / effectiveArea),
      timeline,
      typeLabel: typeData.label,
      densityLabel: densityData.label,
      floorLabel: floorData.label
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
    trackEvent('tool_calculate', { tool_name: 'terrace_garden_cost_calculator', area: effectiveArea, garden_type: gardenType });
  };

  const handleReset = () => {
    setShowResults(false);
    setArea(200);
    setLength(20);
    setWidth(10);
    setGardenType('mixed');
    setFeatures([]);
    setDensity('moderate');
    setFloor('rooftop');
  };

  const results = showResults ? calculateEstimate() : null;

  const getWhatsAppMessage = () => {
    if (!results) return 'Hi! I need a quote for terrace garden setup.';
    const featuresList = features.map(f => featureOptions.find(o => o.id === f)?.label).filter(Boolean).join(', ');
    return `Hi! I'm interested in a terrace garden setup.\n\nArea: ${effectiveArea} sqft\nType: ${results.typeLabel}\nFloor: ${results.floorLabel}\nDensity: ${results.densityLabel}\nFeatures: ${featuresList || 'Basic'}\nEstimated Cost: ₹${results.low.toLocaleString('en-IN')} - ₹${results.high.toLocaleString('en-IN')}\n\nCan you schedule a free site visit?`;
  };

  return (
    <>
      <SEO
        title="Terrace Garden Cost Calculator - Estimate Rooftop Garden Price"
        description="Free terrace garden cost calculator. Estimate the cost of setting up a terrace or rooftop garden including waterproofing, raised beds, irrigation, and plants per sq ft."
        keywords="terrace garden cost per sq ft India, rooftop garden cost calculator, terrace garden price Greater Noida, balcony garden cost"
        canonicalUrl="/tools/terrace-garden-cost-calculator"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Terrace Garden Cost Calculator', url: '/tools/terrace-garden-cost-calculator' }
        ]}
        faqItems={faqItems}
      />

      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Terrace Garden Cost Calculator" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Terrace Garden Cost Calculator</li>
              </ul>
              <h1>Terrace Garden Cost Calculator</h1>
              <p>Free Tool - Estimate your terrace or rooftop garden setup cost</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-4">
                    <i className="icofont-home me-2" style={{ color: '#e91e63' }}></i>
                    Calculate Your Terrace Garden Cost
                  </h4>

                  {/* Area Input */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">1</span>
                      Garden Area
                    </label>

                    {/* Quick Presets */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {presets.map(preset => (
                        <button
                          key={preset.sqft}
                          className={`btn btn-sm ${effectiveArea === preset.sqft ? 'btn-success' : 'btn-outline-secondary'}`}
                          onClick={() => { setInputMode('slider'); setArea(preset.sqft); }}
                          style={{ borderRadius: '20px' }}
                        >
                          {preset.label} ({preset.sqft} sqft)
                        </button>
                      ))}
                    </div>

                    {/* Input Mode Toggle */}
                    <div className="btn-group btn-group-sm mb-3">
                      <button className={`btn ${inputMode === 'slider' ? 'btn-success' : 'btn-outline-secondary'}`} onClick={() => setInputMode('slider')}>
                        Area in sqft
                      </button>
                      <button className={`btn ${inputMode === 'dimensions' ? 'btn-success' : 'btn-outline-secondary'}`} onClick={() => setInputMode('dimensions')}>
                        Length x Width
                      </button>
                    </div>

                    {inputMode === 'slider' ? (
                      <>
                        <div className="d-flex justify-content-between">
                          <span className="fw-bold text-success">{area} sqft</span>
                        </div>
                        <input
                          type="range"
                          className="form-range"
                          min="50"
                          max="2000"
                          step="10"
                          value={area}
                          onChange={(e) => setArea(parseInt(e.target.value))}
                        />
                        <div className="d-flex justify-content-between">
                          <small className="text-muted">50 sqft</small>
                          <small className="text-muted">2,000 sqft</small>
                        </div>
                      </>
                    ) : (
                      <div className="row g-2">
                        <div className="col-6">
                          <label className="form-label small">Length (ft)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value) || 1)}
                            min="1"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                        <div className="col-6">
                          <label className="form-label small">Width (ft)</label>
                          <input
                            type="number"
                            className="form-control"
                            value={width}
                            onChange={(e) => setWidth(parseInt(e.target.value) || 1)}
                            min="1"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                        <div className="col-12">
                          <small className="text-muted">Total: {length * width} sqft</small>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Garden Type */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">2</span>
                      Garden Type
                    </label>
                    <div className="row g-2">
                      {gardenTypes.map(type => (
                        <div key={type.id} className="col-6 col-md-3">
                          <div
                            className={`card h-100 ${gardenType === type.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'all 0.2s' }}
                            onClick={() => setGardenType(type.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <i className={type.icon} style={{ fontSize: '24px', color: gardenType === type.id ? '#4a7c59' : '#6c757d' }}></i>
                              <h6 className="mb-0 mt-2" style={{ fontSize: '12px' }}>{type.label}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {gardenType && (
                      <small className="text-muted mt-2 d-block">
                        <i className="icofont-info-circle me-1"></i>
                        {gardenTypes.find(t => t.id === gardenType)?.description}
                      </small>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">3</span>
                      Features & Add-ons
                    </label>
                    <div className="row g-2">
                      {featureOptions.map(feat => (
                        <div key={feat.id} className="col-6 col-md-4">
                          <div
                            className={`card ${features.includes(feat.id) ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '10px', transition: 'all 0.2s' }}
                            onClick={() => toggleFeature(feat.id)}
                          >
                            <div className="card-body p-2">
                              <div className="d-flex align-items-center">
                                <input
                                  type="checkbox"
                                  className="form-check-input me-2 flex-shrink-0"
                                  checked={features.includes(feat.id)}
                                  onChange={() => toggleFeature(feat.id)}
                                  style={{ cursor: 'pointer' }}
                                />
                                <div>
                                  <small className="fw-bold d-block" style={{ fontSize: '12px' }}>{feat.label}</small>
                                  <small className="text-success" style={{ fontSize: '11px' }}>₹{feat.cost.toLocaleString('en-IN')}{feat.unit}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plant Density */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">4</span>
                      Plant Density
                    </label>
                    <div className="row g-2">
                      {densityOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card ${density === opt.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'all 0.2s' }}
                            onClick={() => setDensity(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-1" style={{ fontSize: '14px' }}>{opt.label}</h6>
                              <small className="text-muted" style={{ fontSize: '11px' }}>{opt.description}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floor Level */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">5</span>
                      Floor Level
                    </label>
                    <div className="row g-2">
                      {floorOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card ${floor === opt.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'all 0.2s' }}
                            onClick={() => setFloor(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-0" style={{ fontSize: '13px' }}>{opt.label}</h6>
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
                      style={{ borderRadius: '25px', padding: '12px 30px' }}
                    >
                      <i className="icofont-check-circled me-2"></i>
                      Calculate Cost
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

              {/* Results */}
              {showResults && results && (
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', borderLeft: '4px solid #e91e63' }}>
                  <div className="card-body p-4">
                    <h4 className="mb-4">
                      <i className="icofont-check-circled me-2" style={{ color: '#e91e63' }}></i>
                      Your Terrace Garden Estimate
                    </h4>

                    {/* Main Estimate */}
                    <div className="text-center p-4 mb-4 rounded-3" style={{ backgroundColor: 'rgba(233, 30, 99, 0.08)' }}>
                      <h2 style={{ color: '#e91e63', fontSize: '2.5rem' }}>
                        ₹{results.low.toLocaleString('en-IN')} - ₹{results.high.toLocaleString('en-IN')}
                      </h2>
                      <p className="mb-0 text-muted">Estimated Setup Cost for {effectiveArea} sqft</p>
                      <span className="badge bg-secondary">~₹{results.perSqft}/sqft</span>
                      <span className="badge bg-info ms-2">Timeline: {results.timeline}</span>
                    </div>

                    {/* Breakdown */}
                    <h5 className="mb-3">Cost Breakdown</h5>
                    <div className="table-responsive mb-4">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td><i className="icofont-leaf text-success me-2"></i>Plants, Soil & Basic Setup ({results.typeLabel}, {results.densityLabel})</td>
                            <td className="text-end fw-bold">₹{results.baseCost.toLocaleString('en-IN')}</td>
                          </tr>
                          {results.featureBreakdown.map((feat, idx) => (
                            <tr key={idx}>
                              <td><i className="icofont-plus-circle text-primary me-2"></i>{feat.name}</td>
                              <td className="text-end fw-bold">₹{feat.cost.toLocaleString('en-IN')}</td>
                            </tr>
                          ))}
                          <tr className="table-success">
                            <td className="fw-bold">Total Estimated Cost</td>
                            <td className="text-end fw-bold">₹{results.low.toLocaleString('en-IN')} - ₹{results.high.toLocaleString('en-IN')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Fun Fact */}
                    <div className="alert alert-success" style={{ borderRadius: '12px' }}>
                      <h6 className="alert-heading mb-1">
                        <i className="icofont-light-bulb me-2"></i>
                        Did You Know?
                      </h6>
                      <p className="mb-0 small">Terrace gardens can reduce your AC costs by up to 30% by insulating the roof. They also increase property value by 10-15% and improve air quality in your home.</p>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="text-center mt-4">
                      <a
                        href={`https://wa.me/919220404309?text=${encodeURIComponent(getWhatsAppMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-lg"
                        style={{ borderRadius: '25px', padding: '12px 30px' }}
                        onClick={() => trackEvent('generate_lead', { tool_name: 'terrace_garden_cost_calculator' })}
                      >
                        <i className="icofont-whatsapp me-2"></i>
                        Get Free Site Visit
                      </a>
                      <p className="text-muted small mt-2">Free consultation and site visit. No obligation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <ToolWhatsAppCTA
                title="Need Expert Design Help?"
                description="Our terrace garden experts can design the perfect green space for your home."
                whatsappMessage={getWhatsAppMessage()}
              />

              {/* Quick Info */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-light-bulb me-2" style={{ color: '#e91e63' }}></i>
                    Terrace Garden Benefits
                  </h5>
                  <ul className="list-unstyled small mb-0">
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Reduces AC costs by up to 30%</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Increases property value by 10-15%</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Fresh organic vegetables at home</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Natural air purification</li>
                    <li className="mb-2"><i className="icofont-check-circled text-success me-2"></i>Stress relief & relaxation space</li>
                    <li><i className="icofont-check-circled text-success me-2"></i>Noise reduction</li>
                  </ul>
                </div>
              </div>

              <ToolRelatedServices services={relatedServices} />
              <ToolMoreTools currentTool="terrace-garden-cost-calculator" />
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

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Ready to Build Your Dream Terrace Garden?</h3>
              <p className="mb-0">Get a free site visit and professional design consultation from our experts.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/services/terrace-garden" className="btn btn-main" style={{ borderRadius: '25px' }}>
                <i className="icofont-leaf me-2"></i>Explore Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TerraceGardenCostCalculator;
