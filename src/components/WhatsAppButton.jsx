import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';

const WHATSAPP_NUMBER = '919220404309';
const DEFAULT_MESSAGE = 'Hi! I visited your website and would like to know more about your plants and garden services.';

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
    cursor: 'pointer',
    zIndex: 9999,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    textDecoration: 'none',
  };

  const iconStyle = {
    fontSize: '32px',
    color: 'white',
  };

  const tooltipStyle = {
    position: 'absolute',
    right: '70px',
    backgroundColor: 'white',
    color: '#333',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  };

  return (
    <>
      <style>
        {`
          @keyframes whatsapp-pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          .whatsapp-float-btn {
            animation: whatsapp-pulse 2s infinite;
          }
          @media (max-width: 768px) {
            .whatsapp-float-btn {
              width: 50px !important;
              height: 50px !important;
              bottom: 16px !important;
              right: 16px !important;
            }
            .whatsapp-float-btn .wa-icon {
              font-size: 26px !important;
            }
            .whatsapp-tooltip {
              display: none !important;
            }
          }
        `}
      </style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        onClick={() => trackEvent('generate_lead', { method: 'whatsapp' })}
      >
        <span className="whatsapp-tooltip" style={tooltipStyle}>Chat with us!</span>
        <i className="fa-brands fa-whatsapp wa-icon" style={iconStyle}></i>
      </a>
    </>
  );
}

export default WhatsAppButton;
