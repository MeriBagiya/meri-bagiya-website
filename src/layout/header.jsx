import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if path is active (exact match or starts with for nested routes)
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Active link styles
  const getActiveStyle = (path) => ({
    backgroundColor: isActive(path) ? '#e8f5e9' : 'transparent',
    color: isActive(path) ? '#2d5016' : '#333',
    fontWeight: isActive(path) ? '600' : 'normal',
    borderLeft: isActive(path) ? '3px solid #4a7c59' : '3px solid transparent'
  });

  const getSubActiveStyle = (path) => ({
    backgroundColor: isActive(path) ? '#e8f5e9' : '#fafafa',
    color: isActive(path) ? '#2d5016' : '#555',
    fontWeight: isActive(path) ? '600' : 'normal'
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
       {/* <!-- header begin --> */}
       <header className="header-light" style={{backgroundColor: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10" style={{alignItems: 'center', justifyContent: 'space-between'}}>
                            <div className="de-flex-col">
                                {/* <!-- logo begin --> */}
                                <div id="logo">
                                    <Link to='/'>
                                        <img className="logo-main d-none d-md-block"
                                        style={{height:120,width:120,borderRadius:100}}
                                        src="/assets/images/MERI-BAGIYA-LOGO-UPDATED.png"
                                        alt="Meri Bagiya - Plant Nursery Logo" />
                                        <img className="logo-main d-block d-md-none"
                                        style={{height:60,width:60,borderRadius:100}}
                                        src="/assets/images/MERI-BAGIYA-LOGO-UPDATED.png"
                                        alt="Meri Bagiya - Plant Nursery Logo" />
                                    </Link>
                                </div>
                                {/* <!-- logo end --> */}
                            </div>

                            {/* Desktop Menu */}
                            <div className="de-flex-col header-col-mid d-none d-lg-block">
                                {/* <!-- mainemenu begin --> */}
                                <ul id="mainmenu">
                                    <li>
                                        <Link to="/" className="menu-item">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/services" className="menu-item">
                                            Services
                                        </Link>
                                        <ul>
                                            {/* FOR HOME */}
                                            <li className="menu-section-header"><span style={{color: '#4a7c59', fontWeight: '600', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', padding: '8px 15px', display: 'block', borderBottom: '1px solid #eee', pointerEvents: 'none'}}>For Home</span></li>
                                            <li><Link to="/services/plant-rental-home">Plant Rental - Home</Link></li>
                                            <li><Link to="/services/balcony-garden">Balcony Garden</Link></li>
                                            <li><Link to="/services/terrace-garden">Terrace Garden</Link></li>
                                            <li><Link to="/services/indoor-plants">Indoor Plants</Link></li>
                                            {/* FOR BUSINESS */}
                                            <li className="menu-section-header"><span style={{color: '#4a7c59', fontWeight: '600', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', padding: '8px 15px', display: 'block', borderBottom: '1px solid #eee', marginTop: '5px', pointerEvents: 'none'}}>For Business</span></li>
                                            <li><Link to="/services/plant-rental">Plant Rental - Corporate</Link></li>
                                            <li><Link to="/plant-rent-in-office">Plant Rent in Office</Link></li>
                                            <li><Link to="/corporate-gifting">Corporate Gifting</Link></li>
                                            {/* OTHER SERVICES */}
                                            <li className="menu-section-header"><span style={{color: '#4a7c59', fontWeight: '600', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', padding: '8px 15px', display: 'block', borderBottom: '1px solid #eee', marginTop: '5px', pointerEvents: 'none'}}>Other Services</span></li>
                                            <li><Link to="/services/landscape-design">Landscape Design</Link></li>
                                            <li><Link to="/services/vertical-garden">Vertical Garden</Link></li>
                                            <li><Link to="/services/artificial-grass">Artificial Grass</Link></li>
                                            <li><Link to="/services/water-fountain">Water Fountain</Link></li>
                                            <li><Link to="/services/garden-maintenance">Garden Maintenance</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/tools" className="menu-item">
                                            Tools
                                        </Link>
                                        <ul>
                                            <li><Link to="/tools/plant-care-calendar">Plant Care Calendar</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/about" className="menu-item">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="menu-item">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/919220404309" target="_blank" rel="noopener noreferrer" className="menu-item">
                                            Chat on WhatsApp
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- mainmenu end --> */}
                            </div>

                            <div className="de-flex-col" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>




                                {/* Hamburger Menu Button - Visible on mobile only */}
                                <button
                                    className="d-lg-none"
                                    onClick={toggleMobileMenu}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: '8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '5px'
                                    }}
                                    aria-label="Toggle mobile menu"
                                >
                                    <span style={{
                                        display: 'block',
                                        width: '25px',
                                        height: '3px',
                                        backgroundColor: '#4a7c59',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s ease'
                                    }}></span>
                                    <span style={{
                                        display: 'block',
                                        width: '25px',
                                        height: '3px',
                                        backgroundColor: '#4a7c59',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s ease'
                                    }}></span>
                                    <span style={{
                                        display: 'block',
                                        width: '25px',
                                        height: '3px',
                                        backgroundColor: '#4a7c59',
                                        borderRadius: '2px',
                                        transition: 'all 0.3s ease'
                                    }}></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- header end --> */}

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
            <div
                className="d-lg-none"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 9998
                }}
                onClick={closeMobileMenu}
            />
        )}

        {/* Mobile Menu Sidebar */}
        <div
            className="d-lg-none"
            style={{
                position: 'fixed',
                top: 0,
                right: mobileMenuOpen ? 0 : '-280px',
                width: '280px',
                height: '100vh',
                backgroundColor: '#fff',
                zIndex: 9999,
                transition: 'right 0.3s ease',
                boxShadow: mobileMenuOpen ? '-5px 0 15px rgba(0,0,0,0.2)' : 'none',
                overflowY: 'auto'
            }}
        >
            {/* Close Button */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderBottom: '1px solid #eee'
            }}>
                <span style={{fontWeight: 'bold', color: '#4a7c59', fontSize: '18px'}}>Menu</span>
                <button
                    onClick={closeMobileMenu}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '28px',
                        cursor: 'pointer',
                        color: '#333',
                        padding: '0',
                        lineHeight: '1'
                    }}
                    aria-label="Close menu"
                >
                    &times;
                </button>
            </div>



            {/* Mobile Menu Links */}
            <nav style={{padding: '10px 0'}}>
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    style={{
                        display: 'block',
                        padding: '15px 20px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        borderBottom: '1px solid #f5f5f5',
                        ...getActiveStyle('/')
                    }}
                >
                    Home
                </Link>

                <Link
                    to="/services"
                    onClick={closeMobileMenu}
                    style={{
                        display: 'block',
                        padding: '15px 20px',
                        color: '#4a7c59',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderBottom: '1px solid #f5f5f5'
                    }}
                >
                    Services
                </Link>

                {/* FOR HOME Section */}
                <div style={{ padding: '10px 20px 5px', color: '#4a7c59', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: '#f0f7f2' }}>
                    For Home
                </div>
                <Link to="/services/plant-rental-home" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/plant-rental-home') }}>
                    → Plant Rental - Home
                </Link>
                <Link to="/services/balcony-garden" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/balcony-garden') }}>
                    → Balcony Garden
                </Link>
                <Link to="/services/terrace-garden" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/terrace-garden') }}>
                    → Terrace Garden
                </Link>
                <Link to="/services/indoor-plants" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/indoor-plants') }}>
                    → Indoor Plants
                </Link>

                {/* FOR BUSINESS Section */}
                <div style={{ padding: '10px 20px 5px', color: '#4a7c59', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: '#f0f7f2', marginTop: '5px' }}>
                    For Business
                </div>
                <Link to="/services/plant-rental" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/plant-rental') }}>
                    → Plant Rental - Corporate
                </Link>
                <Link to="/plant-rent-in-office" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/plant-rent-in-office') }}>
                    → Plant Rent in Office
                </Link>
                <Link to="/corporate-gifting" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/corporate-gifting') }}>
                    → Corporate Gifting
                </Link>

                {/* OTHER SERVICES Section */}
                <div style={{ padding: '10px 20px 5px', color: '#4a7c59', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', backgroundColor: '#f0f7f2', marginTop: '5px' }}>
                    Other Services
                </div>
                <Link to="/services/landscape-design" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/landscape-design') }}>
                    → Landscape Design
                </Link>
                <Link to="/services/vertical-garden" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/vertical-garden') }}>
                    → Vertical Garden
                </Link>
                <Link to="/services/artificial-grass" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/artificial-grass') }}>
                    → Artificial Grass
                </Link>
                <Link to="/services/water-fountain" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/water-fountain') }}>
                    → Water Fountain
                </Link>
                <Link to="/services/garden-maintenance" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/services/garden-maintenance') }}>
                    → Garden Maintenance
                </Link>

                {/* TOOLS Section */}
                <Link
                    to="/tools"
                    onClick={closeMobileMenu}
                    style={{
                        display: 'block',
                        padding: '15px 20px',
                        color: '#4a7c59',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderBottom: '1px solid #f5f5f5',
                        marginTop: '5px'
                    }}
                >
                    Tools
                </Link>
                <Link to="/tools/plant-care-calendar" onClick={closeMobileMenu} style={{ display: 'block', padding: '12px 20px 12px 35px', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #f5f5f5', ...getSubActiveStyle('/tools/plant-care-calendar') }}>
                    → Plant Care Calendar
                </Link>

                <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    style={{
                        display: 'block',
                        padding: '15px 20px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        borderBottom: '1px solid #f5f5f5',
                        ...getActiveStyle('/about')
                    }}
                >
                    About Us
                </Link>

                <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    style={{
                        display: 'block',
                        padding: '15px 20px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        borderBottom: '1px solid #f5f5f5',
                        ...getActiveStyle('/contact')
                    }}
                >
                    Contact Us
                </Link>
                <a
                    href="https://wa.me/919220404309"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        padding: '15px 20px',
                        color: '#25D366',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderBottom: '1px solid #f5f5f5'
                    }}
                >
                    <i className="icofont-whatsapp" style={{marginRight: '8px'}}></i>
                    Chat on WhatsApp
                </a>
            </nav>

            {/* Mobile Menu Footer */}
            <div style={{
                padding: '20px',
                borderTop: '1px solid #eee',
                marginTop: 'auto'
            }}>
                <p style={{fontSize: '12px', color: '#666', margin: 0}}>
                    Call us: <a href="tel:9220404309" style={{color: '#4a7c59'}}>9220404309</a>
                </p>
            </div>
        </div>
    </>
  )
};

export default Header;
