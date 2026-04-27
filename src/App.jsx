import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandsTicker from './components/BrandsTicker';
import About from './components/About';
import Services from './components/Services';
import Preloader from './components/Preloader';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function App() {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    // Wait for the window to load or just set ready after a small delay
    const handleLoad = () => setIsReady(true);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <Preloader />
      <div className={`app-wrapper ${i18n.language}`}>
        <Header />
        <main>
          <Hero />
          <BrandsTicker />
          <Services />
          <About />

          {/* Footer */}
          <footer className="site-footer">
            <div className="container footer-content">
              <div className="footer-brand">
                <img 
                  src="https://reclama.agency/wp-content/uploads/2026/01/01-1.svg" 
                  alt="Reclama Logo" 
                  width="120" 
                  height="auto" 
                />
              </div>

              <div className="footer-links">
                <a href="mailto:info@reclama.agency">info@reclama.agency</a>
                <span className="footer-dot">•</span>
                <a href="https://reclama.agency" target="_blank" rel="noreferrer">reclama.agency</a>
              </div>

              <div className="footer-copy">
                &copy; {new Date().getFullYear()} RECLAMA AGENCY.{' '}
                {i18n.language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
              </div>
            </div>
          </footer>
        </main>

        <style>{`
          .app-wrapper { min-height: 100vh; }

          .site-footer {
            padding: 4rem 0 2rem;
            border-top: 1px solid rgba(255,255,255,0.06);
            background: rgba(5,5,5,0.8);
          }

          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            text-align: center;
          }

          .footer-brand {
            display: flex;
            align-items: center;
            gap: 0.8rem;
          }

          .footer-links {
            display: flex;
            gap: 0.8rem;
            align-items: center;
          }

          .footer-links a {
            color: var(--text-muted);
            font-size: 0.9rem;
            transition: color 0.3s;
          }

          .footer-links a:hover { color: var(--accent); }

          .footer-dot { color: rgba(255,255,255,0.2); }

          .footer-copy {
            color: rgba(255,255,255,0.3);
            font-size: 0.8rem;
          }
        `}</style>
      </div>
    </>
  );
}

export default App;
