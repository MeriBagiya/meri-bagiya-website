import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ToolWhatsAppCTA from '../../components/tools/ToolWhatsAppCTA';
import ToolRelatedServices from '../../components/tools/ToolRelatedServices';
import ToolMoreTools from '../../components/tools/ToolMoreTools';
import { trackEvent } from '../../utils/analytics';

const ACCENT = '#009688';

const contextOptions = [
  { id: 'home', label: 'Home', icon: 'icofont-home' },
  { id: 'office', label: 'Office', icon: 'icofont-building-alt' }
];

const plantSizeOptions = [
  { id: 'small', label: 'Small', description: '6-8 inch' },
  { id: 'medium', label: 'Medium', description: '10-12 inch' },
  { id: 'large', label: 'Large', description: '14-18 inch' }
];

const maintenanceOptions = [
  { id: 'diy', label: "I'll do it myself", description: 'DIY' },
  { id: 'hire', label: "I'll hire someone", description: 'Hire Mali' },
  { id: 'full', label: 'Zero hassle', description: 'Full service' }
];

const durationOptions = [
  { id: 1, label: '1 Year' },
  { id: 2, label: '2 Years' },
  { id: 3, label: '3 Years' }
];

const quickPlantCounts = [5, 10, 25, 50, 100];

// Buy-side pricing
const buyCosts = {
  plant: { small: 300, medium: 600, large: 1200 },
  pot: { small: 150, medium: 300, large: 600 },
  soilFertilizer: 100, // per plant per year
  replacementRate: 0.30, // 30% die rate per year
  maintenance: {
    hire: (count) => {
      if (count <= 25) return 8000;
      if (count <= 50) return 15000;
      return 25000;
    }
  }
};

// Rent-side pricing (monthly per plant)
const rentCosts = {
  home: { small: 150, medium: 200, large: 300 },
  office: { small: 250, medium: 350, large: 450 }
};

const rentExtras = {
  home: { delivery: 300, maintenancePerMonth: 300, firstMonthFree: true },
  office: { delivery: 0, maintenancePerMonth: 5000, firstMonthFree: false }
};

const faqItems = [
  {
    question: 'Is renting plants cheaper than buying?',
    answer: 'In most cases, yes — especially for offices and when you factor in maintenance costs. Buying plants seems cheaper upfront, but ongoing expenses like replacement (30% die rate), fertilizer, pest control, and hiring a gardener add up significantly. Our calculator helps you compare the true cost over 1-3 years.'
  },
  {
    question: 'What is included in plant rental?',
    answer: 'Meri Bagiya plant rental includes: premium indoor plants, decorative pots, regular maintenance and watering, free replacement of dead or unhealthy plants, seasonal rotation for a fresh look, and fertilization and pest control — all for a fixed monthly fee.'
  },
  {
    question: 'What is the minimum rental period?',
    answer: 'The minimum rental period is 3 months for home plant rental and 6 months for office plant rental. Longer commitments often come with better monthly rates.'
  },
  {
    question: 'Can I switch plants during my rental?',
    answer: 'Yes! Seasonal rotation is included in your rental plan. We refresh your plants periodically so your space always looks vibrant and fresh. You can also request specific plants or themes for special occasions.'
  }
];

const relatedServices = [
  { name: 'Plant Rental Corporate', icon: 'icofont-building-alt', color: '#009688', link: '/services/plant-rental' },
  { name: 'Plant Rental Home', icon: 'icofont-home', color: '#4caf50', link: '/services/plant-rental-home' },
  { name: 'Plant Rent in Office', icon: 'icofont-desk', color: '#2196f3', link: '/plant-rent-in-office' }
];

function PlantRentalVsBuyCalculator() {
  const [context, setContext] = useState('home');
  const [plantCount, setPlantCount] = useState(10);
  const [plantSize, setPlantSize] = useState('medium');
  const [maintenance, setMaintenance] = useState('diy');
  const [duration, setDuration] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const calculateCosts = () => {
    const years = duration;
    const count = plantCount;
    const size = plantSize;

    // --- BUY SIDE ---
    const plantCostEach = buyCosts.plant[size];
    const potCostEach = buyCosts.pot[size];
    const initialCost = count * (plantCostEach + potCostEach);
    const annualSoilFertilizer = count * buyCosts.soilFertilizer;
    const annualReplacement = Math.round(count * buyCosts.replacementRate * plantCostEach);

    let annualMaintenance = 0;
    let maintenanceNote = '';
    if (maintenance === 'diy') {
      annualMaintenance = 0;
      maintenanceNote = 'Your time & effort (not counted)';
    } else if (maintenance === 'hire') {
      annualMaintenance = buyCosts.maintenance.hire(count) * 12;
      maintenanceNote = '';
    } else {
      // Full service not available when buying
      annualMaintenance = 0;
      maintenanceNote = 'Full service not available when buying';
    }

    const buyYearly = [];
    let buyCumulative = 0;
    for (let y = 1; y <= 3; y++) {
      let yearCost = annualSoilFertilizer + annualReplacement + annualMaintenance;
      if (y === 1) yearCost += initialCost;
      buyCumulative += yearCost;
      buyYearly.push({ year: y, cost: yearCost, cumulative: buyCumulative });
    }

    // --- RENT SIDE ---
    const monthlyPerPlant = rentCosts[context][size];
    const monthlyPlantCost = count * monthlyPerPlant;
    const extras = rentExtras[context];
    const deliveryCost = extras.delivery; // one-time

    const rentYearly = [];
    let rentCumulative = 0;
    for (let y = 1; y <= 3; y++) {
      let months = 12;
      let maintenanceCost;
      if (context === 'home') {
        // first month free maintenance in year 1
        maintenanceCost = y === 1 ? extras.maintenancePerMonth * 11 : extras.maintenancePerMonth * 12;
      } else {
        maintenanceCost = extras.maintenancePerMonth * 12;
      }
      let yearCost = (monthlyPlantCost * months) + maintenanceCost;
      if (y === 1) yearCost += deliveryCost;
      rentCumulative += yearCost;
      rentYearly.push({ year: y, cost: yearCost, cumulative: rentCumulative });
    }

    const selectedBuy = buyYearly.find(y => y.year === years);
    const selectedRent = rentYearly.find(y => y.year === years);
    const winner = selectedRent.cumulative <= selectedBuy.cumulative ? 'rent' : 'buy';
    const savings = Math.abs(selectedBuy.cumulative - selectedRent.cumulative);

    return {
      buyYearly,
      rentYearly,
      initialCost,
      annualSoilFertilizer,
      annualReplacement,
      annualMaintenance,
      maintenanceNote,
      monthlyPlantCost,
      deliveryCost,
      monthlyMaintenance: extras.maintenancePerMonth,
      winner,
      savings,
      selectedBuyCumulative: selectedBuy.cumulative,
      selectedRentCumulative: selectedRent.cumulative
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
    trackEvent('tool_calculate', {
      tool_name: 'plant_rental_vs_buy_calculator',
      context,
      plant_count: plantCount,
      plant_size: plantSize,
      maintenance,
      duration
    });
  };

  const handleReset = () => {
    setShowResults(false);
    setContext('home');
    setPlantCount(10);
    setPlantSize('medium');
    setMaintenance('diy');
    setDuration(1);
  };

  const results = showResults ? calculateCosts() : null;

  const getWhatsAppMessage = () => {
    if (!results) return 'Hi! I want to know about plant rental options.';
    const contextLabel = context === 'home' ? 'Home' : 'Office';
    const sizeLabel = plantSizeOptions.find(s => s.id === plantSize)?.label || plantSize;
    if (results.winner === 'rent') {
      return `Hi! I used the Plant Rental vs Buy Calculator on your website.\n\nContext: ${contextLabel}\nPlants: ${plantCount} (${sizeLabel})\nDuration: ${duration} year(s)\nEstimated Savings with Rental: ₹${results.savings.toLocaleString('en-IN')}\n\nI'd like to explore plant rental options. Can you share more details?`;
    }
    return `Hi! I used the Plant Rental vs Buy Calculator on your website.\n\nContext: ${contextLabel}\nPlants: ${plantCount} (${sizeLabel})\nDuration: ${duration} year(s)\n\nI'd like to know more about your plant rental plans.`;
  };

  return (
    <>
      <SEO
        title="Plant Rental vs Buy Calculator - Compare Costs | Meri Bagiya"
        description="Free calculator to compare plant rental vs buying costs over 1-3 years. Includes maintenance, replacement, and hidden costs. Find out which option saves more."
        keywords="plant rental vs buying, should I rent office plants, plant rental cost comparison, indoor plant rental cost"
        canonicalUrl="/tools/plant-rental-vs-buy-calculator"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tools', url: '/tools' },
          { name: 'Rental vs Buy Calculator', url: '/tools/plant-rental-vs-buy-calculator' }
        ]}
        faqItems={faqItems}
      />

      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Plant Rental vs Buy Calculator" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Rental vs Buy Calculator</li>
              </ul>
              <h1>Plant Rental vs Buy Calculator</h1>
              <p>Free Tool - Compare the true cost of renting vs buying plants</p>
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
                    <i className="icofont-exchange me-2" style={{ color: ACCENT }}></i>
                    Rent or Buy? Let the Numbers Decide
                  </h4>

                  {/* 1. Context */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge me-2" style={{ backgroundColor: ACCENT }}>1</span>
                      Where are the plants for?
                    </label>
                    <div className="row g-2">
                      {contextOptions.map(opt => (
                        <div key={opt.id} className="col-6">
                          <div
                            className={`card h-100 ${context === opt.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: context === opt.id ? ACCENT : undefined
                            }}
                            onClick={() => setContext(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <i className={opt.icon} style={{ fontSize: '28px', color: context === opt.id ? ACCENT : '#6c757d' }}></i>
                              <h6 className="mb-0 mt-2">{opt.label}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Number of Plants */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge me-2" style={{ backgroundColor: ACCENT }}>2</span>
                      Number of Plants: <span style={{ color: ACCENT }}>{plantCount}</span>
                    </label>

                    {/* Quick Select Buttons */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {quickPlantCounts.map(count => (
                        <button
                          key={count}
                          className={`btn btn-sm ${plantCount === count ? '' : 'btn-outline-secondary'}`}
                          style={{
                            borderRadius: '20px',
                            backgroundColor: plantCount === count ? ACCENT : undefined,
                            borderColor: plantCount === count ? ACCENT : undefined,
                            color: plantCount === count ? '#fff' : undefined
                          }}
                          onClick={() => setPlantCount(count)}
                        >
                          {count} plants
                        </button>
                      ))}
                    </div>

                    <input
                      type="range"
                      className="form-range"
                      min="5"
                      max="100"
                      step="5"
                      value={plantCount}
                      onChange={(e) => setPlantCount(parseInt(e.target.value))}
                    />
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">5 plants</small>
                      <small className="text-muted">100 plants</small>
                    </div>
                  </div>

                  {/* 3. Plant Size Mix */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge me-2" style={{ backgroundColor: ACCENT }}>3</span>
                      Plant Size
                    </label>
                    <div className="row g-2">
                      {plantSizeOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card h-100 ${plantSize === opt.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: plantSize === opt.id ? ACCENT : undefined
                            }}
                            onClick={() => setPlantSize(opt.id)}
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

                  {/* 4. Maintenance Capability */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge me-2" style={{ backgroundColor: ACCENT }}>4</span>
                      Maintenance Capability
                    </label>
                    <div className="row g-2">
                      {maintenanceOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card h-100 ${maintenance === opt.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: maintenance === opt.id ? ACCENT : undefined
                            }}
                            onClick={() => setMaintenance(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-1" style={{ fontSize: '13px' }}>{opt.label}</h6>
                              <small className="text-muted" style={{ fontSize: '11px' }}>{opt.description}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {maintenance === 'full' && (
                      <small className="text-muted mt-2 d-block">
                        <i className="icofont-info-circle me-1" style={{ color: ACCENT }}></i>
                        Full-service maintenance is only available with plant rental. Buying result will show without this cost.
                      </small>
                    )}
                  </div>

                  {/* 5. Duration */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge me-2" style={{ backgroundColor: ACCENT }}>5</span>
                      Comparison Duration
                    </label>
                    <div className="row g-2">
                      {durationOptions.map(opt => (
                        <div key={opt.id} className="col-4">
                          <div
                            className={`card ${duration === opt.id ? 'border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              borderColor: duration === opt.id ? ACCENT : undefined
                            }}
                            onClick={() => setDuration(opt.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <h6 className="mb-0">{opt.label}</h6>
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
                      Compare Costs
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
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', borderLeft: `4px solid ${ACCENT}` }}>
                  <div className="card-body p-4">
                    <h4 className="mb-4">
                      <i className="icofont-chart-bar-graph me-2" style={{ color: ACCENT }}></i>
                      Cost Comparison Results
                    </h4>

                    {/* Side-by-Side Summary */}
                    <div className="row g-3 mb-4">
                      {/* Rent Column */}
                      <div className="col-md-6">
                        <div
                          className="p-4 rounded-3 text-center h-100 position-relative"
                          style={{ backgroundColor: 'rgba(0, 150, 136, 0.08)', border: results.winner === 'rent' ? `2px solid ${ACCENT}` : '2px solid transparent' }}
                        >
                          {results.winner === 'rent' && (
                            <span className="badge position-absolute top-0 start-50 translate-middle" style={{ backgroundColor: ACCENT, fontSize: '12px' }}>
                              <i className="icofont-trophy me-1"></i>Winner
                            </span>
                          )}
                          <h5 style={{ color: ACCENT }}>
                            <i className="icofont-recycle me-2"></i>Rent
                          </h5>
                          <h3 style={{ color: ACCENT }}>
                            ₹{results.selectedRentCumulative.toLocaleString('en-IN')}
                          </h3>
                          <small className="text-muted">Total over {duration} year{duration > 1 ? 's' : ''}</small>
                        </div>
                      </div>

                      {/* Buy Column */}
                      <div className="col-md-6">
                        <div
                          className="p-4 rounded-3 text-center h-100 position-relative"
                          style={{ backgroundColor: 'rgba(220, 53, 69, 0.08)', border: results.winner === 'buy' ? '2px solid #dc3545' : '2px solid transparent' }}
                        >
                          {results.winner === 'buy' && (
                            <span className="badge bg-danger position-absolute top-0 start-50 translate-middle" style={{ fontSize: '12px' }}>
                              <i className="icofont-trophy me-1"></i>Winner
                            </span>
                          )}
                          <h5 className="text-danger">
                            <i className="icofont-cart me-2"></i>Buy
                          </h5>
                          <h3 className="text-danger">
                            ₹{results.selectedBuyCumulative.toLocaleString('en-IN')}
                          </h3>
                          <small className="text-muted">Total over {duration} year{duration > 1 ? 's' : ''}</small>
                        </div>
                      </div>
                    </div>

                    {/* Savings Highlight */}
                    <div className="text-center p-3 mb-4 rounded-3" style={{ backgroundColor: results.winner === 'rent' ? 'rgba(0, 150, 136, 0.1)' : 'rgba(220, 53, 69, 0.1)' }}>
                      <h5 className="mb-1" style={{ color: results.winner === 'rent' ? ACCENT : '#dc3545' }}>
                        You save ₹{results.savings.toLocaleString('en-IN')} over {duration} year{duration > 1 ? 's' : ''} with {results.winner === 'rent' ? 'rental' : 'buying'}
                      </h5>
                    </div>

                    {/* Year-by-Year Table */}
                    <h5 className="mb-3">Year-by-Year Cumulative Cost</h5>
                    <div className="table-responsive mb-4">
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th>Period</th>
                            <th style={{ color: ACCENT }}>
                              <i className="icofont-recycle me-1"></i>Rent (Cumulative)
                            </th>
                            <th className="text-danger">
                              <i className="icofont-cart me-1"></i>Buy (Cumulative)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3].map(year => (
                            <tr key={year} style={year === duration ? { fontWeight: 'bold', backgroundColor: 'rgba(0, 150, 136, 0.05)' } : {}}>
                              <td>Year {year} {year === duration && <span className="badge bg-secondary ms-1" style={{ fontSize: '10px' }}>Selected</span>}</td>
                              <td style={{ color: ACCENT }}>₹{results.rentYearly[year - 1].cumulative.toLocaleString('en-IN')}</td>
                              <td className="text-danger">₹{results.buyYearly[year - 1].cumulative.toLocaleString('en-IN')}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Buy Breakdown */}
                    <h5 className="mb-3">Buy Cost Breakdown</h5>
                    <div className="table-responsive mb-4">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td><i className="icofont-leaf text-success me-2"></i>Plants (one-time)</td>
                            <td className="text-end fw-bold">₹{(plantCount * buyCosts.plant[plantSize]).toLocaleString('en-IN')}</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-flower-pot text-warning me-2"></i>Pots (one-time)</td>
                            <td className="text-end fw-bold">₹{(plantCount * buyCosts.pot[plantSize]).toLocaleString('en-IN')}</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-earth me-2" style={{ color: '#795548' }}></i>Soil & Fertilizer (per year)</td>
                            <td className="text-end fw-bold">₹{results.annualSoilFertilizer.toLocaleString('en-IN')}/yr</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-warning text-danger me-2"></i>Replacement - 30% die rate (per year)</td>
                            <td className="text-end fw-bold">₹{results.annualReplacement.toLocaleString('en-IN')}/yr</td>
                          </tr>
                          <tr>
                            <td>
                              <i className="icofont-people text-primary me-2"></i>
                              Maintenance (per year)
                              {results.maintenanceNote && <small className="text-muted d-block">{results.maintenanceNote}</small>}
                            </td>
                            <td className="text-end fw-bold">
                              {results.annualMaintenance > 0 ? `₹${results.annualMaintenance.toLocaleString('en-IN')}/yr` : '₹0'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Rent Breakdown */}
                    <h5 className="mb-3">Rent Cost Breakdown</h5>
                    <div className="table-responsive mb-4">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td><i className="icofont-leaf me-2" style={{ color: ACCENT }}></i>Plant Rental ({plantCount} plants x ₹{rentCosts[context][plantSize]}/mo)</td>
                            <td className="text-end fw-bold">₹{results.monthlyPlantCost.toLocaleString('en-IN')}/mo</td>
                          </tr>
                          <tr>
                            <td><i className="icofont-tools-alt-2 me-2" style={{ color: ACCENT }}></i>Maintenance{context === 'home' && ' (1st month free)'}</td>
                            <td className="text-end fw-bold">₹{results.monthlyMaintenance.toLocaleString('en-IN')}/mo</td>
                          </tr>
                          {results.deliveryCost > 0 && (
                            <tr>
                              <td><i className="icofont-truck-loaded me-2" style={{ color: ACCENT }}></i>Delivery (one-time)</td>
                              <td className="text-end fw-bold">₹{results.deliveryCost.toLocaleString('en-IN')}</td>
                            </tr>
                          )}
                          <tr>
                            <td><i className="icofont-check-circled me-2" style={{ color: ACCENT }}></i>Includes: pots, replacement, seasonal rotation</td>
                            <td className="text-end fw-bold text-success">Included</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Hidden Costs of Buying */}
                    <div className="alert alert-warning" style={{ borderRadius: '12px' }}>
                      <h6 className="alert-heading mb-2">
                        <i className="icofont-exclamation-tringle me-2"></i>
                        Hidden Costs of Buying (Not in the Numbers)
                      </h6>
                      <ul className="small mb-0">
                        <li className="mb-1"><strong>Time value:</strong> Watering, pruning, and care can take 30-60 minutes daily</li>
                        <li className="mb-1"><strong>Plant death:</strong> 30% of indoor plants die within the first year without expert care</li>
                        <li className="mb-1"><strong>Pest control:</strong> Unexpected pest infestations can damage entire collections</li>
                        <li className="mb-1"><strong>Fertilizer & soil:</strong> Regular repotting and soil replacement needed every 6-12 months</li>
                        <li><strong>Seasonal gaps:</strong> Dead or dormant plants leave your space looking bare for weeks</li>
                      </ul>
                    </div>

                    {/* WhatsApp CTA if rental wins */}
                    {results.winner === 'rent' && (
                      <div className="text-center mt-4">
                        <a
                          href={`https://wa.me/919220404309?text=${encodeURIComponent(getWhatsAppMessage())}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success btn-lg"
                          style={{ borderRadius: '25px', padding: '12px 30px' }}
                          onClick={() => trackEvent('generate_lead', { tool_name: 'plant_rental_vs_buy_calculator', savings: results.savings })}
                        >
                          <i className="icofont-whatsapp me-2"></i>
                          Start Renting — Save ₹{results.savings.toLocaleString('en-IN')}
                        </a>
                        <p className="text-muted small mt-2">Get a customized rental plan on WhatsApp. No obligation.</p>
                      </div>
                    )}

                    {results.winner === 'buy' && (
                      <div className="text-center mt-4">
                        <p className="text-muted small">Buying looks cheaper for your current selection, but remember the hidden costs above. Want to explore rental anyway?</p>
                        <a
                          href={`https://wa.me/919220404309?text=${encodeURIComponent(getWhatsAppMessage())}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success"
                          style={{ borderRadius: '25px', padding: '10px 24px' }}
                          onClick={() => trackEvent('generate_lead', { tool_name: 'plant_rental_vs_buy_calculator' })}
                        >
                          <i className="icofont-whatsapp me-2"></i>
                          Explore Rental Plans
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <ToolWhatsAppCTA
                title="Want to Try Plant Rental?"
                description="Get premium plants delivered to your doorstep with zero maintenance hassle. Try our flexible rental plans."
                whatsappMessage={getWhatsAppMessage()}
              />

              {/* Rental Benefits Card */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-star me-2" style={{ color: ACCENT }}></i>
                    Rental Benefits
                  </h5>
                  <ul className="list-unstyled small mb-0">
                    <li className="mb-2"><i className="icofont-check-circled me-2" style={{ color: ACCENT }}></i>Zero maintenance — we handle everything</li>
                    <li className="mb-2"><i className="icofont-check-circled me-2" style={{ color: ACCENT }}></i>Free replacement of dead or unhealthy plants</li>
                    <li className="mb-2"><i className="icofont-check-circled me-2" style={{ color: ACCENT }}></i>Cost effective — no hidden expenses</li>
                    <li className="mb-2"><i className="icofont-check-circled me-2" style={{ color: ACCENT }}></i>Flexible plans — scale up or down anytime</li>
                    <li><i className="icofont-check-circled me-2" style={{ color: ACCENT }}></i>Always fresh — seasonal rotation included</li>
                  </ul>
                </div>
              </div>

              <ToolRelatedServices services={relatedServices} />
              <ToolMoreTools currentTool="plant-rental-vs-buy-calculator" />
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
              <h3>Ready to Switch to Hassle-Free Plant Rental?</h3>
              <p className="mb-0">Get beautiful plants without the worry. Explore our rental plans for home and office.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/services/plant-rental" className="btn btn-main" style={{ borderRadius: '25px' }}>
                <i className="icofont-leaf me-2"></i>Explore Rental Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlantRentalVsBuyCalculator;
