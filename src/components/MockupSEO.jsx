import { motion } from 'framer-motion';
import './Mockups.css';

export default function MockupSEO() {
  return (
    <div className="mockup-container mockup-seo-container">
      <motion.div
        className="seo-3d"
        initial={{ rotateY: -15, rotateX: 10 }}
        animate={{ 
          rotateY: [-15, -5, -15],
          rotateX: [10, 5, 10]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="seo-dashboard">
          <div className="seo-header">
            <div className="text-line-mock tiny" style={{width: '40%'}}></div>
            <div className="p-dot" style={{background: 'var(--accent)'}}></div>
          </div>
          
          <div className="seo-stats-grid">
            <div className="seo-stat-box">
              <div className="stat-line accent"></div>
              <div className="stat-line" style={{width: '80%'}}></div>
            </div>
            <div className="seo-stat-box">
              <div className="stat-line accent" style={{width: '40%'}}></div>
              <div className="stat-line" style={{width: '90%'}}></div>
            </div>
            <div className="seo-stat-box">
              <div className="stat-line accent" style={{width: '75%'}}></div>
              <div className="stat-line" style={{width: '60%'}}></div>
            </div>
          </div>

          <div className="seo-chart">
            <div className="chart-bar" style={{animationDelay: '0.1s'}}></div>
            <div className="chart-bar" style={{animationDelay: '0.3s'}}></div>
            <div className="chart-bar" style={{animationDelay: '0.5s'}}></div>
            <div className="chart-bar" style={{animationDelay: '0.2s'}}></div>
            <div className="chart-bar" style={{animationDelay: '0.4s'}}></div>
            <div className="chart-bar" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>
        <div className="seo-glow"></div>
      </motion.div>
    </div>
  );
}
