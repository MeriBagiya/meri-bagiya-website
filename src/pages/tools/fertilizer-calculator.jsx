import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

// Plant types with fertilizer requirements
const plantTypes = [
  { id: 'flowering', name: 'Flowering Plants', icon: 'icofont-sun', npk: { n: 10, p: 30, k: 20 }, description: 'Roses, Hibiscus, Jasmine, Marigold' },
  { id: 'foliage', name: 'Foliage Plants', icon: 'icofont-leaf', npk: { n: 24, p: 8, k: 16 }, description: 'Monstera, Pothos, Philodendron, Ferns' },
  { id: 'succulents', name: 'Succulents & Cacti', icon: 'icofont-plant', npk: { n: 2, p: 7, k: 7 }, description: 'Aloe Vera, Jade Plant, Echeveria' },
  { id: 'vegetables', name: 'Vegetables', icon: 'icofont-carrot', npk: { n: 10, p: 10, k: 10 }, description: 'Tomatoes, Peppers, Leafy Greens' },
  { id: 'herbs', name: 'Herbs', icon: 'icofont-culinary', npk: { n: 5, p: 5, k: 5 }, description: 'Basil, Mint, Coriander, Tulsi' },
  { id: 'fruiting', name: 'Fruit Trees', icon: 'icofont-fruits', npk: { n: 12, p: 12, k: 17 }, description: 'Mango, Lemon, Guava, Papaya' },
  { id: 'palms', name: 'Palms', icon: 'icofont-tree', npk: { n: 12, p: 4, k: 12 }, description: 'Areca Palm, Parlor Palm, Fan Palm' },
  { id: 'lawn', name: 'Lawn Grass', icon: 'icofont-sun-alt', npk: { n: 32, p: 0, k: 4 }, description: 'Bermuda, Zoysia, St. Augustine' }
];

// Pot sizes with volume multipliers
const potSizes = [
  { id: 'small', name: 'Small (4-6 inch)', volume: 0.5, description: 'Small pots, seedlings' },
  { id: 'medium', name: 'Medium (8-10 inch)', volume: 1, description: 'Standard indoor plants' },
  { id: 'large', name: 'Large (12-14 inch)', volume: 2, description: 'Large plants, floor pots' },
  { id: 'xl', name: 'Extra Large (16+ inch)', volume: 3.5, description: 'Planters, trees' },
  { id: 'ground', name: 'Ground/Garden Bed', volume: 5, description: 'Per square meter' }
];

// Growth stages with feeding adjustments
const growthStages = [
  { id: 'seedling', name: 'Seedling', multiplier: 0.25, frequency: 21, description: 'Young plants, newly sprouted' },
  { id: 'vegetative', name: 'Vegetative Growth', multiplier: 1, frequency: 14, description: 'Active leaf and stem growth' },
  { id: 'flowering', name: 'Flowering/Blooming', multiplier: 1.25, frequency: 10, description: 'Producing flowers or fruits' },
  { id: 'mature', name: 'Mature/Maintenance', multiplier: 0.75, frequency: 21, description: 'Fully grown, stable' },
  { id: 'dormant', name: 'Dormant (Winter)', multiplier: 0.1, frequency: 45, description: 'Resting period, minimal growth' }
];

// Recommended products
const recommendedProducts = {
  flowering: [
    { name: 'NPK 10-30-20', type: 'Water Soluble', usage: 'Every 2 weeks during blooming' },
    { name: 'Bone Meal', type: 'Organic', usage: 'Once a month for phosphorus boost' },
    { name: 'Bloom Booster', type: 'Liquid', usage: 'Weekly during flowering season' }
  ],
  foliage: [
    { name: 'NPK 24-8-16', type: 'Water Soluble', usage: 'Every 2-3 weeks' },
    { name: 'Seaweed Extract', type: 'Organic', usage: 'Monthly for healthy leaves' },
    { name: 'Nitrogen-Rich Fertilizer', type: 'Granular', usage: 'Every 4-6 weeks' }
  ],
  succulents: [
    { name: 'Cactus & Succulent Feed', type: 'Liquid', usage: 'Once a month (spring/summer only)' },
    { name: 'NPK 2-7-7', type: 'Water Soluble', usage: 'Monthly, diluted to half strength' },
    { name: 'Balanced Organic', type: 'Organic', usage: 'Once in spring, once in summer' }
  ],
  vegetables: [
    { name: 'NPK 10-10-10', type: 'Balanced', usage: 'Every 2 weeks during growing season' },
    { name: 'Vermicompost', type: 'Organic', usage: 'Monthly as top dressing' },
    { name: 'Vegetable Special', type: 'Slow Release', usage: 'Every 6-8 weeks' }
  ],
  herbs: [
    { name: 'Organic Herb Fertilizer', type: 'Organic', usage: 'Every 3-4 weeks' },
    { name: 'Compost Tea', type: 'Liquid Organic', usage: 'Every 2 weeks' },
    { name: 'NPK 5-5-5', type: 'Balanced', usage: 'Monthly, light feeding' }
  ],
  fruiting: [
    { name: 'Fruit Tree Fertilizer', type: 'Granular', usage: 'Every 4-6 weeks during fruiting' },
    { name: 'NPK 12-12-17', type: 'Water Soluble', usage: 'Every 3 weeks' },
    { name: 'Potassium-Rich Feed', type: 'Organic', usage: 'During fruit development' }
  ],
  palms: [
    { name: 'Palm Special', type: 'Slow Release', usage: 'Every 3 months' },
    { name: 'NPK 12-4-12', type: 'Granular', usage: 'Every 2-3 months' },
    { name: 'Magnesium Sulfate', type: 'Supplement', usage: 'Quarterly to prevent yellowing' }
  ],
  lawn: [
    { name: 'Lawn Fertilizer', type: 'Granular', usage: 'Every 6-8 weeks during growing season' },
    { name: 'NPK 32-0-4', type: 'Slow Release', usage: 'Every 2-3 months' },
    { name: 'Iron Supplement', type: 'Liquid', usage: 'Monthly for green color' }
  ]
};

function FertilizerCalculator() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedPotSize, setSelectedPotSize] = useState(null);
  const [selectedGrowthStage, setSelectedGrowthStage] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateFertilizer = () => {
    if (!selectedPlant || !selectedPotSize || !selectedGrowthStage) {
      return null;
    }

    const plant = plantTypes.find(p => p.id === selectedPlant);
    const pot = potSizes.find(p => p.id === selectedPotSize);
    const stage = growthStages.find(s => s.id === selectedGrowthStage);

    // Base amount in grams (for medium pot, vegetative stage)
    const baseAmount = 5;
    const calculatedAmount = baseAmount * pot.volume * stage.multiplier;

    return {
      plant,
      pot,
      stage,
      amount: Math.round(calculatedAmount * 10) / 10,
      npk: plant.npk,
      frequency: stage.frequency,
      products: recommendedProducts[selectedPlant] || []
    };
  };

  const handleCalculate = () => {
    if (selectedPlant && selectedPotSize && selectedGrowthStage) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedPlant(null);
    setSelectedPotSize(null);
    setSelectedGrowthStage(null);
    setShowResults(false);
  };

  const results = calculateFertilizer();

  const getSeasonalTip = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 5) {
      return { season: 'Spring', tip: 'Increase fertilizing frequency. Plants are in active growth phase.', icon: 'icofont-sun-rise' };
    } else if (month >= 6 && month <= 8) {
      return { season: 'Summer/Monsoon', tip: 'Reduce fertilizer during heavy rains. Water-soluble types work best.', icon: 'icofont-sun' };
    } else if (month >= 9 && month <= 10) {
      return { season: 'Autumn', tip: 'Gradually reduce feeding as plants prepare for dormancy.', icon: 'icofont-leaf' };
    } else {
      return { season: 'Winter', tip: 'Minimal fertilizing needed. Most plants are dormant.', icon: 'icofont-snow-flake' };
    }
  };

  const seasonalTip = getSeasonalTip();

  return (
    <>
      <SEO
        title="Fertilizer Calculator - Calculate Exact Plant Fertilizer Amounts | Meri Bagiya"
        description="Free fertilizer calculator tool. Get exact fertilizer amounts, NPK ratios, and feeding schedules based on your plant type, pot size, and growth stage."
        keywords="fertilizer calculator, plant fertilizer, NPK ratio, fertilizer schedule, plant feeding, organic fertilizer, gardening calculator"
        breadcrumbs={[
          { name: 'Home', url: 'https://meribagiya.com/' },
          { name: 'Tools', url: 'https://meribagiya.com/tools' },
          { name: 'Fertilizer Calculator', url: 'https://meribagiya.com/tools/fertilizer-calculator' }
        ]}
      />

      {/* Subheader */}
      <section id="subheader" className="relative jarallax text-light">
        <img src="/assets/images/background/6.webp" className="jarallax-img" alt="Fertilizer Calculator" />
        <div className="container relative z-index-1000">
          <div className="row">
            <div className="col-lg-6">
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li className="active">Fertilizer Calculator</li>
              </ul>
              <h1>Fertilizer Calculator</h1>
              <p>Free Tool</p>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container">
          {/* Seasonal Tip Banner */}
          <div className="alert alert-success d-flex align-items-center mb-4" role="alert" style={{ borderRadius: '12px' }}>
            <i className={`${seasonalTip.icon} me-3`} style={{ fontSize: '24px' }}></i>
            <div>
              <strong>{seasonalTip.season} Tip:</strong> {seasonalTip.tip}
            </div>
          </div>

          <div className="row">
            {/* Calculator Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-4">
                    <i className="icofont-calculator me-2" style={{ color: '#4a7c59' }}></i>
                    Calculate Your Fertilizer Needs
                  </h4>

                  {/* Step 1: Plant Type */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">1</span>
                      Select Plant Type
                    </label>
                    <div className="row g-2">
                      {plantTypes.map(plant => (
                        <div key={plant.id} className="col-6 col-md-3">
                          <div
                            className={`card h-100 ${selectedPlant === plant.id ? 'border-success border-2' : 'border'}`}
                            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'all 0.2s' }}
                            onClick={() => setSelectedPlant(plant.id)}
                          >
                            <div className="card-body p-3 text-center">
                              <i className={plant.icon} style={{ fontSize: '28px', color: selectedPlant === plant.id ? '#4a7c59' : '#6c757d' }}></i>
                              <h6 className="mb-0 mt-2" style={{ fontSize: '12px' }}>{plant.name}</h6>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {selectedPlant && (
                      <small className="text-muted mt-2 d-block">
                        <i className="icofont-info-circle me-1"></i>
                        {plantTypes.find(p => p.id === selectedPlant)?.description}
                      </small>
                    )}
                  </div>

                  {/* Step 2: Pot Size */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">2</span>
                      Select Pot Size
                    </label>
                    <div className="row g-2">
                      {potSizes.map(pot => (
                        <div key={pot.id} className="col-6 col-md-4">
                          <div
                            className={`card ${selectedPotSize === pot.id ? 'border-success border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              backgroundColor: selectedPotSize === pot.id ? 'rgba(74, 124, 89, 0.15)' : 'transparent'
                            }}
                            onClick={() => setSelectedPotSize(pot.id)}
                          >
                            <div className="card-body p-3">
                              <div className="d-flex align-items-center">
                                <i className="icofont-flower-pot me-2" style={{ fontSize: '20px', color: selectedPotSize === pot.id ? '#4a7c59' : '#6c757d' }}></i>
                                <div>
                                  <h6 className="mb-0" style={{ fontSize: '13px', color: selectedPotSize === pot.id ? '#2d4a36' : 'inherit' }}>{pot.name}</h6>
                                  <small style={{ fontSize: '11px', color: selectedPotSize === pot.id ? '#4a7c59' : '#6c757d' }}>{pot.description}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Growth Stage */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <span className="badge bg-success me-2">3</span>
                      Select Growth Stage
                    </label>
                    <div className="row g-2">
                      {growthStages.map(stage => (
                        <div key={stage.id} className="col-6 col-md-4">
                          <div
                            className={`card ${selectedGrowthStage === stage.id ? 'border-success border-2' : 'border'}`}
                            style={{
                              cursor: 'pointer',
                              borderRadius: '12px',
                              transition: 'all 0.2s',
                              backgroundColor: selectedGrowthStage === stage.id ? 'rgba(74, 124, 89, 0.15)' : 'transparent'
                            }}
                            onClick={() => setSelectedGrowthStage(stage.id)}
                          >
                            <div className="card-body p-3">
                              <h6 className="mb-1" style={{ fontSize: '13px', color: selectedGrowthStage === stage.id ? '#2d4a36' : 'inherit' }}>{stage.name}</h6>
                              <small style={{ fontSize: '11px', color: selectedGrowthStage === stage.id ? '#4a7c59' : '#6c757d' }}>{stage.description}</small>
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
                      disabled={!selectedPlant || !selectedPotSize || !selectedGrowthStage}
                      style={{ borderRadius: '25px', padding: '12px 30px' }}
                    >
                      <i className="icofont-check-circled me-2"></i>
                      Calculate
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
                      Your Fertilizer Recommendation
                    </h4>

                    {/* Amount & Schedule */}
                    <div className="row g-3 mb-4">
                      <div className="col-md-4">
                        <div className="p-3 rounded-3 text-center h-100" style={{ backgroundColor: 'rgba(74, 124, 89, 0.15)' }}>
                          <i className="icofont-spoon-and-fork" style={{ fontSize: '32px', color: '#4a7c59' }}></i>
                          <h3 className="mb-0 mt-2" style={{ color: '#4a7c59' }}>{results.amount}g</h3>
                          <small style={{ color: '#5a6268' }}>Amount per application</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 rounded-3 text-center h-100" style={{ backgroundColor: 'rgba(13, 202, 240, 0.15)' }}>
                          <i className="icofont-calendar" style={{ fontSize: '32px', color: '#0dcaf0' }}></i>
                          <h3 className="mb-0 mt-2" style={{ color: '#0aa2c0' }}>Every {results.frequency} days</h3>
                          <small style={{ color: '#5a6268' }}>Feeding frequency</small>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="p-3 rounded-3 text-center h-100" style={{ backgroundColor: 'rgba(255, 193, 7, 0.15)' }}>
                          <i className="icofont-chart-pie-alt" style={{ fontSize: '32px', color: '#e0a800' }}></i>
                          <h3 className="mb-0 mt-2" style={{ color: '#c69500' }}>{results.npk.n}-{results.npk.p}-{results.npk.k}</h3>
                          <small style={{ color: '#5a6268' }}>Recommended NPK ratio</small>
                        </div>
                      </div>
                    </div>

                    {/* NPK Breakdown */}
                    <div className="mb-4">
                      <h5 className="mb-3">NPK Breakdown</h5>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div className="d-flex align-items-center p-3 bg-light rounded-3">
                            <div className="me-3" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="text-white fw-bold">N</span>
                            </div>
                            <div>
                              <h6 className="mb-0">Nitrogen ({results.npk.n}%)</h6>
                              <small className="text-muted">Leaf & stem growth</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center p-3 bg-light rounded-3">
                            <div className="me-3" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fd7e14', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="text-white fw-bold">P</span>
                            </div>
                            <div>
                              <h6 className="mb-0">Phosphorus ({results.npk.p}%)</h6>
                              <small className="text-muted">Root & flower development</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="d-flex align-items-center p-3 bg-light rounded-3">
                            <div className="me-3" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#6f42c1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="text-white fw-bold">K</span>
                            </div>
                            <div>
                              <h6 className="mb-0">Potassium ({results.npk.k}%)</h6>
                              <small className="text-muted">Overall plant health</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommended Products */}
                    <div>
                      <h5 className="mb-3">
                        <i className="icofont-basket me-2" style={{ color: '#4a7c59' }}></i>
                        Recommended Products
                      </h5>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead className="table-light">
                            <tr>
                              <th>Product</th>
                              <th>Type</th>
                              <th>Usage</th>
                            </tr>
                          </thead>
                          <tbody>
                            {results.products.map((product, index) => (
                              <tr key={index}>
                                <td>
                                  <strong>{product.name}</strong>
                                </td>
                                <td>
                                  <span className="badge bg-secondary">{product.type}</span>
                                </td>
                                <td>{product.usage}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Application Tips */}
                    <div className="alert alert-info mt-4" style={{ borderRadius: '12px' }}>
                      <h6 className="alert-heading">
                        <i className="icofont-light-bulb me-2"></i>
                        Application Tips
                      </h6>
                      <ul className="mb-0 small">
                        <li>Water your plant before applying fertilizer to prevent root burn</li>
                        <li>Apply fertilizer in the morning for best absorption</li>
                        <li>Avoid fertilizing stressed or newly repotted plants</li>
                        <li>During monsoon, reduce frequency as nutrients wash away quickly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Quick Guide */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-book me-2" style={{ color: '#4a7c59' }}></i>
                    Understanding NPK
                  </h5>
                  <div className="mb-3">
                    <div>
                      <span className="badge bg-success me-2" style={{ verticalAlign: 'middle' }}>N</span>
                      <strong>Nitrogen</strong>
                    </div>
                    <p className="mb-0 small text-muted mt-1" style={{ paddingLeft: '32px' }}>Promotes lush, green foliage and stem growth. Essential for leafy plants.</p>
                  </div>
                  <div className="mb-3">
                    <div>
                      <span className="badge bg-warning text-dark me-2" style={{ verticalAlign: 'middle' }}>P</span>
                      <strong>Phosphorus</strong>
                    </div>
                    <p className="mb-0 small text-muted mt-1" style={{ paddingLeft: '32px' }}>Supports root development and flower/fruit production. Key for blooming plants.</p>
                  </div>
                  <div>
                    <div>
                      <span className="badge me-2" style={{ backgroundColor: '#6f42c1', color: 'white', verticalAlign: 'middle' }}>K</span>
                      <strong>Potassium</strong>
                    </div>
                    <p className="mb-0 small text-muted mt-1" style={{ paddingLeft: '32px' }}>Enhances overall plant health, disease resistance, and water regulation.</p>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-warning me-2" style={{ color: '#dc3545' }}></i>
                    Common Mistakes
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2 d-flex">
                      <i className="icofont-close-circled text-danger me-2 mt-1"></i>
                      <small>Over-fertilizing (can burn roots)</small>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="icofont-close-circled text-danger me-2 mt-1"></i>
                      <small>Fertilizing dry soil</small>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="icofont-close-circled text-danger me-2 mt-1"></i>
                      <small>Using wrong NPK ratio</small>
                    </li>
                    <li className="mb-2 d-flex">
                      <i className="icofont-close-circled text-danger me-2 mt-1"></i>
                      <small>Fertilizing dormant plants</small>
                    </li>
                    <li className="d-flex">
                      <i className="icofont-close-circled text-danger me-2 mt-1"></i>
                      <small>Ignoring soil pH levels</small>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Signs of Deficiency */}
              <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-search-document me-2" style={{ color: '#4a7c59' }}></i>
                    Signs of Nutrient Deficiency
                  </h5>
                  <div className="mb-2">
                    <span className="badge bg-success me-2">N</span>
                    <small>Yellow older leaves, stunted growth</small>
                  </div>
                  <div className="mb-2">
                    <span className="badge bg-warning text-dark me-2">P</span>
                    <small>Purple/red leaves, poor flowering</small>
                  </div>
                  <div>
                    <span className="badge me-2" style={{ backgroundColor: '#6f42c1', color: 'white' }}>K</span>
                    <small>Brown leaf edges, weak stems</small>
                  </div>
                </div>
              </div>

              {/* Other Tools */}
              <div className="card border-0 shadow-sm" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="icofont-tools-alt-2 me-2" style={{ color: '#4a7c59' }}></i>
                    More Tools
                  </h5>
                  <Link to="/tools/plant-care-calendar" className="d-flex align-items-center p-2 rounded-3 text-decoration-none mb-2" style={{ backgroundColor: '#f8f9fa' }}>
                    <i className="icofont-calendar me-2" style={{ color: '#4a7c59' }}></i>
                    <span className="text-dark">Plant Care Calendar</span>
                  </Link>
                  <Link to="/tools/plant-disease-identifier" className="d-flex align-items-center p-2 rounded-3 text-decoration-none" style={{ backgroundColor: '#f8f9fa' }}>
                    <i className="icofont-search-2 me-2" style={{ color: '#28a745' }}></i>
                    <span className="text-dark">Plant Disease Identifier</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Need Fertilizers for Your Plants?</h3>
              <p className="mb-0">Contact us for high-quality organic and chemical fertilizers delivered to your doorstep.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/contact" className="btn btn-main" style={{ borderRadius: '25px' }}>
                <i className="icofont-phone me-2"></i>Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FertilizerCalculator;
