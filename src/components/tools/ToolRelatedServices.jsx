import React from 'react';
import { Link } from 'react-router-dom';

function ToolRelatedServices({ services = [] }) {
  if (services.length === 0) return null;

  return (
    <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
      <div className="card-body p-4">
        <h5 className="mb-3">
          <i className="icofont-leaf me-2" style={{ color: '#4a7c59' }}></i>
          Related Services
        </h5>
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="d-flex align-items-center p-2 rounded-3 text-decoration-none mb-2"
            style={{ backgroundColor: '#f8f9fa', transition: 'all 0.2s' }}
          >
            <i className={`${service.icon} me-2`} style={{ color: service.color || '#4a7c59' }}></i>
            <span className="text-dark">{service.name}</span>
            <i className="icofont-arrow-right ms-auto text-muted" style={{ fontSize: '12px' }}></i>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToolRelatedServices;
