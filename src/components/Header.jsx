import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img 
            src="https://reclama.agency/wp-content/uploads/2026/01/01-1.svg" 
            alt="Reclama Logo" 
            className="logo-icon"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {['home', 'services', 'about', 'projects', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="nav-link">
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button onClick={toggleLanguage} className="lang-btn glass">
            <Globe size={16} />
            <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <a href="#contact" className="contact-btn">
            {t('nav.contact_now')}
          </a>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
          >
            {['home', 'services', 'about', 'projects', 'contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${item}`)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
