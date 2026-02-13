import React from 'react';
import { Link } from 'react-router-dom';

const allTools = [
  { id: 'plant-care-calendar', name: 'Plant Care Calendar', icon: 'icofont-calendar', color: '#4a7c59', link: '/tools/plant-care-calendar' },
  { id: 'plant-disease-identifier', name: 'Plant Disease Identifier', icon: 'icofont-search-2', color: '#28a745', link: '/tools/plant-disease-identifier' },
  { id: 'fertilizer-calculator', name: 'Fertilizer Calculator', icon: 'icofont-calculator', color: '#fd7e14', link: '/tools/fertilizer-calculator' },
  { id: 'plant-growth-tracker', name: 'Plant Growth Tracker', icon: 'icofont-chart-growth', color: '#9c27b0', link: '/tools/plant-growth-tracker' },
  { id: 'society-garden-cost-estimator', name: 'Society Garden AMC Estimator', icon: 'icofont-building-alt', color: '#0d6efd', link: '/tools/society-garden-cost-estimator' },
  { id: 'terrace-garden-cost-calculator', name: 'Terrace Garden Cost Calculator', icon: 'icofont-home', color: '#e91e63', link: '/tools/terrace-garden-cost-calculator' },
  { id: 'corporate-gifting-calculator', name: 'Corporate Gifting Planner', icon: 'icofont-gift', color: '#ff9800', link: '/tools/corporate-gifting-calculator' },
  { id: 'plant-rental-vs-buy-calculator', name: 'Rental vs Buy Calculator', icon: 'icofont-exchange', color: '#009688', link: '/tools/plant-rental-vs-buy-calculator' },
  { id: 'indoor-plant-quiz', name: 'Indoor Plant Quiz', icon: 'icofont-question-circle', color: '#673ab7', link: '/tools/indoor-plant-quiz' },
];

function ToolMoreTools({ currentTool }) {
  const otherTools = allTools.filter(t => t.id !== currentTool).slice(0, 4);

  return (
    <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
      <div className="card-body p-4">
        <h5 className="mb-3">
          <i className="icofont-tools-alt-2 me-2" style={{ color: '#4a7c59' }}></i>
          More Tools
        </h5>
        {otherTools.map((tool) => (
          <Link
            key={tool.id}
            to={tool.link}
            className="d-flex align-items-center p-2 rounded-3 text-decoration-none mb-2"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            <i className={`${tool.icon} me-2`} style={{ color: tool.color }}></i>
            <span className="text-dark">{tool.name}</span>
          </Link>
        ))}
        <Link to="/tools" className="btn btn-outline-success btn-sm d-block mt-3" style={{ borderRadius: '20px' }}>
          View All Tools
        </Link>
      </div>
    </div>
  );
}

export default ToolMoreTools;
