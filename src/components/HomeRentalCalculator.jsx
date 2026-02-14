import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';

const POT_SIZES = {
  small: {
    name: 'Small',
    size: '6 inch',
    price: 150,
    icon: '🌱',
    description: 'Perfect for desks, shelves & small spaces',
    plants: ['Money Plant', 'Jade Plant', 'Spider Plant', 'Pothos']
  },
  medium: {
    name: 'Medium',
    size: '10 inch',
    price: 200,
    icon: '🪴',
    description: 'Ideal for floor corners & balconies',
    plants: ['Snake Plant', 'Peace Lily', 'Rubber Plant', 'ZZ Plant']
  },
  large: {
    name: 'Large',
    size: '14 inch',
    price: 300,
    icon: '🌿',
    description: 'Statement plants for living rooms',
    plants: ['Areca Palm', 'Fiddle Leaf Fig', 'Monstera', 'Dracaena']
  }
};

const MIN_PLANTS = 5;
const MAX_PLANTS = 20;

function HomeRentalCalculator() {
  const [selectedSizes, setSelectedSizes] = useState({
    small: 2,
    medium: 2,
    large: 1
  });

  const calculation = useMemo(() => {
    let totalPlants = 0;
    let totalMonthly = 0;

    Object.entries(selectedSizes).forEach(([size, qty]) => {
      totalPlants += qty;
      totalMonthly += POT_SIZES[size].price * qty;
    });

    return {
      totalPlants,
      totalMonthly,
      totalQuarterly: totalMonthly * 3,
      totalYearly: totalMonthly * 12
    };
  }, [selectedSizes]);

  const handleQuantityChange = (size, delta) => {
    setSelectedSizes(prev => {
      const newQty = Math.max(0, prev[size] + delta);
      const totalOther = Object.entries(prev)
        .filter(([key]) => key !== size)
        .reduce((sum, [, qty]) => sum + qty, 0);

      // Ensure total is between MIN and MAX
      if (totalOther + newQty > MAX_PLANTS) return prev;

      return { ...prev, [size]: newQty };
    });
  };

  const generateWhatsAppMessage = () => {
    let message = `Hi! I'm interested in Plant Rental for Home.\n\n`;
    message += `My Selection:\n`;

    Object.entries(selectedSizes).forEach(([size, qty]) => {
      if (qty > 0) {
        const sizeData = POT_SIZES[size];
        message += `- ${qty}x ${sizeData.name} (${sizeData.size}) @ ₹${sizeData.price}/month\n`;
      }
    });

    message += `\nTotal: ${calculation.totalPlants} plants\n`;
    message += `Monthly Cost: ₹${calculation.totalMonthly.toLocaleString()}\n\n`;
    message += `Please share more details about the service.`;

    return encodeURIComponent(message);
  };

  const isValidOrder = calculation.totalPlants >= MIN_PLANTS;

  return (
    <div className="home-rental-calculator bg-light p-4 rounded-10px">
      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="mb-2">Home Plant Rental <span className="id-color-2">Calculator</span></h3>
        <p className="text-muted mb-0">Select pot sizes and quantity (minimum {MIN_PLANTS} plants)</p>
      </div>

      {/* Pot Size Selection */}
      <div className="row g-3 mb-4">
        {Object.entries(POT_SIZES).map(([key, data]) => (
          <div key={key} className="col-md-4">
            <div
              className={`p-3 rounded-10px h-100 ${selectedSizes[key] > 0 ? 'bg-color text-light' : 'bg-white border'}`}
              style={{ transition: 'all 0.3s ease' }}
            >
              <div className="text-center mb-3">
                <span style={{ fontSize: '2.5rem' }}>{data.icon}</span>
                <h5 className="mb-1 mt-2">{data.name}</h5>
                <div className={`${selectedSizes[key] > 0 ? 'text-light' : 'text-muted'}`} style={{ fontSize: '0.85rem' }}>
                  {data.size} pot
                </div>
                <div className="fw-bold fs-4 mt-2">
                  ₹{data.price}<span style={{ fontSize: '0.8rem' }}>/month</span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="d-flex align-items-center justify-content-center gap-3">
                <button
                  className={`btn ${selectedSizes[key] > 0 ? 'btn-light' : 'btn-outline-secondary'} btn-sm rounded-circle`}
                  onClick={() => handleQuantityChange(key, -1)}
                  disabled={selectedSizes[key] <= 0}
                  style={{ width: '36px', height: '36px' }}
                >
                  -
                </button>
                <span className="fw-bold fs-4" style={{ minWidth: '30px', textAlign: 'center' }}>
                  {selectedSizes[key]}
                </span>
                <button
                  className={`btn ${selectedSizes[key] > 0 ? 'btn-light' : 'btn-outline-secondary'} btn-sm rounded-circle`}
                  onClick={() => handleQuantityChange(key, 1)}
                  disabled={calculation.totalPlants >= MAX_PLANTS}
                  style={{ width: '36px', height: '36px' }}
                >
                  +
                </button>
              </div>

              {/* Plant suggestions */}
              <div className={`mt-3 ${selectedSizes[key] > 0 ? 'text-light' : 'text-muted'}`} style={{ fontSize: '0.75rem' }}>
                <strong>Best for:</strong> {data.plants.slice(0, 2).join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white p-4 rounded-10px border">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="mb-3">Your Selection</h5>
            {Object.entries(selectedSizes).map(([size, qty]) => (
              qty > 0 && (
                <div key={size} className="d-flex justify-content-between mb-2">
                  <span>{POT_SIZES[size].icon} {qty}x {POT_SIZES[size].name} ({POT_SIZES[size].size})</span>
                  <span className="fw-bold">₹{(POT_SIZES[size].price * qty).toLocaleString()}/mo</span>
                </div>
              )
            ))}
            {calculation.totalPlants === 0 && (
              <p className="text-muted mb-0">Select plants to see pricing</p>
            )}
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <div className="mb-2">
              <span className="text-muted">Total Plants:</span>
              <span className={`ms-2 fw-bold ${isValidOrder ? 'text-success' : 'text-danger'}`}>
                {calculation.totalPlants} {!isValidOrder && `(min ${MIN_PLANTS})`}
              </span>
            </div>
            <div className="mb-2">
              <span className="text-muted">Monthly:</span>
              <span className="ms-2 fw-bold fs-4 id-color">₹{calculation.totalMonthly.toLocaleString()}</span>
            </div>
            <div className="text-muted" style={{ fontSize: '0.85rem' }}>
              Quarterly: ₹{calculation.totalQuarterly.toLocaleString()} | Yearly: ₹{calculation.totalYearly.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="mt-4 p-3 bg-white rounded-10px border">
        <h6 className="mb-3">What's Included:</h6>
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <i className="icofont-check-circled id-color me-2"></i>
              <small>Free Replacement</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <i className="icofont-check-circled id-color me-2"></i>
              <small>No Long-term Lock-in</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <i className="icofont-info-circle text-warning me-2"></i>
              <small>Delivery: ₹300</small>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center">
              <i className="icofont-info-circle text-warning me-2"></i>
              <small>Maintenance: ₹300/mo</small>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <small className="text-success fw-bold">✓ First month maintenance FREE!</small>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-4 d-flex flex-column flex-md-row gap-3 justify-content-center">
        <a
          href={`https://wa.me/919220404309?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_lead', { button_text: 'Get Quote on WhatsApp', location: 'home-rental-calculator' })}
          style={{
            display: 'inline-block',
            backgroundColor: '#25D366',
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '1rem',
            border: 'none',
            textDecoration: 'none',
            cursor: 'pointer',
            padding: '12px 24px',
            borderRadius: '5px',
            outline: 'none',
            boxShadow: 'none'
          }}
        >
          <i className="fa-brands fa-whatsapp me-2"></i>
          Get Quote on WhatsApp
        </a>
        <Link
          to="/contact"
          style={{
            display: 'inline-block',
            backgroundColor: '#4a7c59',
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '1rem',
            border: 'none',
            textDecoration: 'none',
            cursor: 'pointer',
            padding: '12px 24px',
            borderRadius: '5px',
            outline: 'none',
            boxShadow: 'none'
          }}
        >
          <i className="icofont-phone me-2"></i>
          Contact Us
        </Link>
      </div>

      {!isValidOrder && calculation.totalPlants > 0 && (
        <p className="text-center text-danger mt-3 mb-0">
          <small>Please select at least {MIN_PLANTS} plants to proceed</small>
        </p>
      )}
    </div>
  );
}

export default HomeRentalCalculator;
