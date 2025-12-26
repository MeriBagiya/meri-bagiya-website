import React, { useEffect, useCallback } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import { Outlet, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Component to reinitialize jarallax and other plugins on route change
function PluginReinitializer() {
  const { pathname } = useLocation();

  const reinitPlugins = useCallback(() => {
    // Reinitialize Jarallax
    if (window.jarallax) {
      // Destroy all existing instances first
      const jarallaxElements = document.querySelectorAll('.jarallax');
      jarallaxElements.forEach((el) => {
        if (el.jarallax) {
          window.jarallax(el, 'destroy');
        }
      });

      // Reinitialize after a short delay to ensure DOM is ready
      setTimeout(() => {
        const newJarallaxElements = document.querySelectorAll('.jarallax');
        newJarallaxElements.forEach((el) => {
          window.jarallax(el, {
            speed: 0.5
          });
        });
      }, 150);
    }

    // Reinitialize WOW animations if available
    if (window.WOW) {
      new window.WOW().init();
    }

    // Trigger resize event to help other plugins recalculate
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }, []);

  useEffect(() => {
    reinitPlugins();
  }, [pathname, reinitPlugins]);

  return null;
}

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <PluginReinitializer />
      <Header/>
      <main style={{ flex: 1 }}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
};

export default App;
