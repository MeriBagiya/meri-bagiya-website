import React, { useState, useMemo } from 'react';

const PRICING_DATA = {
  bronze: {
    name: 'Bronze',
    color: '#CD7F32',
    potType: '18-inch White Pots',
    sixMonths: 300,
    oneYear: 250,
    features: [
      'Standard 18-inch white pots',
      'Basic watering service',
      'Monthly health check-up',
      'Pot cleaning'
    ]
  },
  silver: {
    name: 'Silver',
    color: '#C0C0C0',
    potType: 'Premium Quality Pots',
    sixMonths: 400,
    oneYear: 350,
    features: [
      'Premium quality pots',
      'All Bronze features',
      'Fertilization service',
      'Pest control',
      'Seasonal plant rotation'
    ]
  },
  gold: {
    name: 'Gold',
    color: '#FFD700',
    potType: 'Terracotta Pots',
    sixMonths: 500,
    oneYear: 450,
    features: [
      'Terracotta pots (premium)',
      'All Silver features',
      'Plant replacement guarantee',
      'Decorative arrangement',
      'Emergency support',
      'Monthly performance report'
    ]
  }
};

const MAINTENANCE_CHARGE = 5000;
const MIN_PLANTS = 10;

const getDiscount = (quantity) => {
  if (quantity >= 100) return 15;
  if (quantity >= 50) return 10;
  if (quantity >= 25) return 5;
  return 0;
};

function RentalCalculator() {
  const [tier, setTier] = useState('silver');
  const [period, setPeriod] = useState('oneYear');
  const [quantity, setQuantity] = useState(10);

  const calculation = useMemo(() => {
    const tierData = PRICING_DATA[tier];
    const pricePerPlant = period === 'sixMonths' ? tierData.sixMonths : tierData.oneYear;
    const discount = getDiscount(quantity);

    const plantCostBeforeDiscount = pricePerPlant * quantity;
    const discountAmount = (plantCostBeforeDiscount * discount) / 100;
    const plantCostAfterDiscount = plantCostBeforeDiscount - discountAmount;
    const totalMonthly = plantCostAfterDiscount + MAINTENANCE_CHARGE;

    const months = period === 'sixMonths' ? 6 : 12;
    const totalContract = totalMonthly * months;

    return {
      tierData,
      pricePerPlant,
      discount,
      plantCostBeforeDiscount,
      discountAmount,
      plantCostAfterDiscount,
      totalMonthly,
      totalContract,
      months
    };
  }, [tier, period, quantity]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || MIN_PLANTS;
    setQuantity(Math.max(MIN_PLANTS, value));
  };

  return (
    <div className="rental-calculator">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="mb-2">Plant Rental <span className="id-color-2">Calculator</span></h2>
        <p className="text-muted">Calculate your custom enterprise pricing</p>
        <a
          href="https://drive.google.com/file/d/1if5iEZUwk8swDxDQbFP6wBSCjFh6kg2u/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line btn-sm"
        >
          <i className="icofont-file-pdf me-2"></i>View Full Pricing Document
        </a>
      </div>

      <div className="row g-4">
        {/* Calculator Inputs */}
        <div className="col-lg-7">
          <div className="bg-light p-4 rounded-1">
            {/* Service Tier Selection */}
            <div className="mb-4">
              <label className="form-label fw-bold mb-3">Select Service Tier</label>
              <div className="row g-3">
                {Object.entries(PRICING_DATA).map(([key, data]) => (
                  <div className="col-md-4" key={key}>
                    <div
                      className={`p-3 rounded-1 text-center cursor-pointer transition-all ${tier === key ? 'bg-color text-light shadow' : 'bg-white border'}`}
                      onClick={() => setTier(key)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: tier === key ? 'rgba(255,255,255,0.2)' : data.color
                        }}
                      >
                        <i className={`icofont-medal fs-20 ${tier === key ? 'text-light' : 'text-white'}`}></i>
                      </div>
                      <h6 className="mb-1">{data.name}</h6>
                      <small className={tier === key ? 'text-light' : 'text-muted'}>{data.potType}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Period */}
            <div className="mb-4">
              <label className="form-label fw-bold mb-3">Rental Period</label>
              <div className="row g-3">
                <div className="col-6">
                  <div
                    className={`p-3 rounded-1 text-center ${period === 'sixMonths' ? 'bg-color text-light' : 'bg-white border'}`}
                    onClick={() => setPeriod('sixMonths')}
                    style={{ cursor: 'pointer' }}
                  >
                    <h5 className="mb-1">6 Months</h5>
                    <small>Short-term commitment</small>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className={`p-3 rounded-1 text-center ${period === 'oneYear' ? 'bg-color text-light' : 'bg-white border'}`}
                    onClick={() => setPeriod('oneYear')}
                    style={{ cursor: 'pointer' }}
                  >
                    <h5 className="mb-1">1 Year</h5>
                    <small>Best value</small>
                    {period === 'oneYear' && <span className="badge bg-warning text-dark ms-2">Save More</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Number of Plants */}
            <div className="mb-4">
              <label className="form-label fw-bold mb-3">
                Number of Plants <span className="text-muted fw-normal">(Minimum: {MIN_PLANTS})</span>
              </label>
              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(Math.max(MIN_PLANTS, quantity - 5))}
                >
                  -5
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={MIN_PLANTS}
                  style={{ maxWidth: '120px', fontSize: '1.5rem', fontWeight: 'bold' }}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(quantity + 5)}
                >
                  +5
                </button>
              </div>

              {/* Quick Select Buttons */}
              <div className="mt-3 d-flex flex-wrap gap-2">
                {[10, 25, 50, 100, 150].map(num => (
                  <button
                    key={num}
                    className={`btn btn-sm ${quantity === num ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={() => setQuantity(num)}
                  >
                    {num} plants
                  </button>
                ))}
              </div>

              {/* Discount Badge */}
              {calculation.discount > 0 && (
                <div className="alert alert-success mt-3 mb-0 py-2">
                  <i className="icofont-gift me-2"></i>
                  <strong>{calculation.discount}% bulk discount</strong> applied for {quantity} plants!
                </div>
              )}
            </div>

            {/* Features List */}
            <div className="bg-white p-3 rounded-1 border">
              <h6 className="mb-3" style={{ color: calculation.tierData.color }}>
                <i className="icofont-check-circled me-2"></i>
                {calculation.tierData.name} Features Included:
              </h6>
              <div className="row">
                {calculation.tierData.features.map((feature, idx) => (
                  <div className="col-md-6 mb-2" key={idx}>
                    <small><i className="icofont-check text-success me-2"></i>{feature}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="col-lg-5">
          <div className="bg-color text-light p-4 rounded-1 sticky-top" style={{ top: '100px' }}>
            <h4 className="mb-4 text-center">
              <i className="icofont-calculator me-2"></i>Price Summary
            </h4>

            <div className="mb-3 pb-3 border-bottom border-light">
              <div className="d-flex justify-content-between mb-2">
                <span>Service Tier:</span>
                <strong>{calculation.tierData.name}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Rental Period:</span>
                <strong>{calculation.months} Months</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Number of Plants:</span>
                <strong>{quantity}</strong>
              </div>
            </div>

            <div className="mb-3 pb-3 border-bottom border-light">
              <div className="d-flex justify-content-between mb-2">
                <span>Price per Plant:</span>
                <span>Rs. {calculation.pricePerPlant}/month</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Plant Cost ({quantity} plants):</span>
                <span>Rs. {calculation.plantCostBeforeDiscount.toLocaleString()}</span>
              </div>
              {calculation.discount > 0 && (
                <div className="d-flex justify-content-between mb-2 text-warning">
                  <span>Bulk Discount ({calculation.discount}%):</span>
                  <span>- Rs. {calculation.discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="d-flex justify-content-between mb-2">
                <span>Maintenance (included):</span>
                <span>Rs. {MAINTENANCE_CHARGE.toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fs-18">Monthly Total:</span>
                <span className="fs-24 fw-bold">Rs. {calculation.totalMonthly.toLocaleString()}</span>
              </div>
              <div className="bg-warning text-dark p-3 rounded-1 text-center">
                <small>Total Contract Value ({calculation.months} months)</small>
                <div className="fs-28 fw-bold">Rs. {calculation.totalContract.toLocaleString()}</div>
              </div>
            </div>

            <div className="text-center">
              <a
                href={`https://wa.me/919220404309?text=Hi! I'm interested in Plant Rental Service.%0A%0AMy Requirements:%0A- Service: ${calculation.tierData.name}%0A- Plants: ${quantity}%0A- Period: ${calculation.months} months%0A- Monthly Cost: Rs. ${calculation.totalMonthly.toLocaleString()}%0A%0APlease provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-main bg-light text-dark d-block mb-2"
              >
                <i className="icofont-whatsapp me-2"></i>Get This Quote on WhatsApp
              </a>
              <a href="tel:9220404309" className="btn-line text-light d-block">
                <i className="icofont-phone me-2"></i>Call to Discuss
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Structure */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="bg-light p-4 rounded-1">
            <h5 className="mb-3"><i className="icofont-tag me-2 id-color"></i>Bulk Discount Structure</h5>
            <div className="table-responsive">
              <table className="table table-bordered mb-0">
                <thead className="bg-color text-light">
                  <tr>
                    <th>Number of Plants</th>
                    <th>Discount</th>
                    <th>Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={quantity >= 10 && quantity < 25 ? 'table-success' : ''}>
                    <td>10 - 24 plants</td>
                    <td>0%</td>
                    <td>Standard pricing</td>
                  </tr>
                  <tr className={quantity >= 25 && quantity < 50 ? 'table-success' : ''}>
                    <td>25 - 49 plants</td>
                    <td><span className="badge bg-success">5% OFF</span></td>
                    <td>Save on plant costs</td>
                  </tr>
                  <tr className={quantity >= 50 && quantity < 100 ? 'table-success' : ''}>
                    <td>50 - 99 plants</td>
                    <td><span className="badge bg-success">10% OFF</span></td>
                    <td>Great for medium offices</td>
                  </tr>
                  <tr className={quantity >= 100 ? 'table-success' : ''}>
                    <td>100+ plants</td>
                    <td><span className="badge bg-warning text-dark">15% OFF</span></td>
                    <td>Maximum savings!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Service Comparison */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="bg-light p-4 rounded-1">
            <h5 className="mb-3"><i className="icofont-list me-2 id-color"></i>Service Comparison</h5>
            <div className="table-responsive">
              <table className="table table-bordered mb-0">
                <thead className="bg-color text-light">
                  <tr>
                    <th>Feature</th>
                    <th className="text-center" style={{ backgroundColor: '#CD7F32' }}>Bronze</th>
                    <th className="text-center" style={{ backgroundColor: '#A0A0A0' }}>Silver</th>
                    <th className="text-center" style={{ backgroundColor: '#DAA520' }}>Gold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pot Type</td>
                    <td className="text-center">18-inch White</td>
                    <td className="text-center">Premium Quality</td>
                    <td className="text-center">Terracotta</td>
                  </tr>
                  <tr>
                    <td>6 Months Price</td>
                    <td className="text-center">Rs. 300/plant</td>
                    <td className="text-center">Rs. 400/plant</td>
                    <td className="text-center">Rs. 500/plant</td>
                  </tr>
                  <tr>
                    <td>1 Year Price</td>
                    <td className="text-center">Rs. 250/plant</td>
                    <td className="text-center">Rs. 350/plant</td>
                    <td className="text-center">Rs. 450/plant</td>
                  </tr>
                  <tr>
                    <td>Basic Watering</td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                  <tr>
                    <td>Monthly Health Check</td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                  <tr>
                    <td>Fertilization & Pest Control</td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                  <tr>
                    <td>Seasonal Rotation</td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                  <tr>
                    <td>Plant Replacement</td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                  <tr>
                    <td>Emergency Support</td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                  <tr>
                    <td>Monthly Reports</td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-close-circled text-danger fs-20"></i></td>
                    <td className="text-center"><i className="icofont-check-circled text-success fs-20"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalCalculator;
