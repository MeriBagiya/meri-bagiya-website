import React, { useEffect, useCallback } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { trackEvent } from './utils/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageViewTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackEvent('page_view', {
      page_path: pathname,
      page_title: document.title,
    });
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
      <PageViewTracker />
      <PluginReinitializer />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
          success: {
            style: {
              background: '#22c55e',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#22c55e',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
      <Header/>
      <main style={{ flex: 1 }}>
        <Outlet/>
      </main>
      <Footer/>
      <WhatsAppButton />
    </div>
  )
};

export default App;
