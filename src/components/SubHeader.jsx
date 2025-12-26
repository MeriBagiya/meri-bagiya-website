import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SubHeader component with proper parallax handling for React SPA
 * Fixes the jarallax height issue when navigating between pages
 */
function SubHeader({ backgroundImage, children }) {
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Function to initialize/reinitialize jarallax
    const initJarallax = () => {
      if (window.jarallax && sectionRef.current) {
        const imgElement = sectionRef.current.querySelector('.jarallax-img');

        // Destroy existing jarallax instance if any
        if (sectionRef.current.jarallax) {
          window.jarallax(sectionRef.current, 'destroy');
        }

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          window.jarallax(sectionRef.current, {
            speed: 0.5,
            imgSrc: backgroundImage,
            imgElement: imgElement
          });
        }, 100);
      }
    };

    // Initialize jarallax
    initJarallax();

    // Handle window resize
    const handleResize = () => {
      if (window.jarallax && sectionRef.current) {
        window.jarallax(sectionRef.current, 'onResize');
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.jarallax && sectionRef.current) {
        window.jarallax(sectionRef.current, 'destroy');
      }
    };
  }, [location.pathname, backgroundImage]);

  return (
    <section
      id="subheader"
      ref={sectionRef}
      className="relative jarallax text-light"
      style={{ minHeight: '300px' }}
    >
      <img
        src={backgroundImage}
        className="jarallax-img"
        alt="Page background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      <div className="container relative z-index-1000">
        {children}
      </div>
      <img
        src={process.env.PUBLIC_URL + '/assets/images/logo-wm.webp'}
        className="abs end-0 bottom-0 z-2 w-20"
        alt=""
      />
      <div className="de-overlay"></div>
    </section>
  );
}

export default SubHeader;
