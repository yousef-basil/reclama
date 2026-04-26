import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Preloader.css';

export default function Preloader() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          <div className="preloader-content">
            <motion.div 
              className="preloader-logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
            >
              <img 
                src="https://reclama.agency/wp-content/uploads/2026/01/01-1.svg" 
                alt="Reclama Logo" 
                className="preloader-logo"
              />
              <div className="logo-glow"></div>
            </motion.div>
            
            <div className="preloader-progress-container">
              <motion.div 
                className="preloader-progress-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p 
              className="preloader-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {i18n.language === 'ar' ? 'جاري بناء الهوية الرقمية...' : 'Building Digital Identity...'}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
