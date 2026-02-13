import React from 'react';

function ToolWhatsAppCTA({ title = "Need Expert Help?", description = "Our garden experts can help you with personalized advice.", whatsappMessage = "Hi! I need help with my garden." }) {
  const encodedMessage = encodeURIComponent(whatsappMessage);

  return (
    <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}>
      <div className="card-body p-4 text-white">
        <h5 className="mb-2">
          <i className="icofont-headphone-alt me-2"></i>
          {title}
        </h5>
        <p className="mb-3 small" style={{ opacity: 0.9 }}>{description}</p>
        <a
          href={`https://wa.me/919220404309?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light d-block mb-2"
          style={{ borderRadius: '25px', fontWeight: '600' }}
        >
          <i className="icofont-whatsapp me-2" style={{ color: '#25d366' }}></i>
          Chat on WhatsApp
        </a>
        <a
          href="tel:9220404309"
          className="btn btn-outline-light d-block"
          style={{ borderRadius: '25px' }}
        >
          <i className="icofont-phone me-2"></i>
          Call Us Now
        </a>
      </div>
    </div>
  );
}

export default ToolWhatsAppCTA;
