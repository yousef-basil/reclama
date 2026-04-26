import { motion } from 'framer-motion';
import './Mockups.css';

export default function MockupLaptop() {
  return (
    <div className="mockup-container mockup-laptop-container">
      <motion.div
        className="laptop-3d"
        initial={{ rotateY: -15, rotateX: 10 }}
        animate={{ 
          rotateY: [-15, -10, -15],
          rotateX: [10, 5, 10]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Laptop Screen */}
        <div className="laptop-screen">
          <div className="screen-frame">
            <div className="screen-notch"></div>
            <div className="screen-content">
              {/* Browser UI */}
              <div className="browser-bar">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-url">
                  <span>reclama.agency</span>
                </div>
              </div>
              {/* Website Content Mockup - Colorful & Premium */}
              <div className="website-content-v2">
                <div className="web-v2-nav">
                  <div className="web-v2-logo"></div>
                  <div className="web-v2-links">
                    <div className="v2-link"></div>
                    <div className="v2-link"></div>
                    <div className="v2-link highlight"></div>
                  </div>
                </div>
                
                <div className="web-v2-hero">
                   <div className="v2-hero-content">
                      <div className="v2-badge">PREMIUM DESIGN</div>
                      <div className="v2-title-main"></div>
                      <div className="v2-title-sub"></div>
                      <div className="v2-hero-btns">
                         <div className="v2-btn-p"></div>
                         <div className="v2-btn-s"></div>
                      </div>
                   </div>
                   <div className="v2-hero-visual">
                      <div className="v2-visual-blob"></div>
                      <div className="v2-visual-card"></div>
                   </div>
                </div>

                <div className="web-v2-stats">
                   <div className="v2-stat-item"></div>
                   <div className="v2-stat-item"></div>
                   <div className="v2-stat-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Laptop Base */}
        <div className="laptop-base">
          <div className="laptop-base-top"></div>
        </div>
        {/* Glow under laptop */}
        <div className="laptop-glow-v2"></div>
      </motion.div>
    </div>
  );
}
