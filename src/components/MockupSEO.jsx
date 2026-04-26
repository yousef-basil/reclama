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
            <div className="text-line-mock tiny" style={{width: '40%', background: 'rgba(255,255,255,0.5)'}}></div>
            <div className="seo-status-dot"></div>
          </div>
          
          <div className="seo-stats-grid">
            <div className="seo-stat-box">
              <div className="stat-line accent"></div>
              <div className="stat-value-mock">+85%</div>
            </div>
            <div className="seo-stat-box">
              <div className="stat-line accent" style={{width: '40%', background: '#3b82f6'}}></div>
              <div className="stat-value-mock">12.4K</div>
            </div>
            <div className="seo-stat-box">
              <div className="stat-line accent" style={{width: '75%', background: '#8b5cf6'}}></div>
              <div className="stat-value-mock">#1</div>
            </div>
          </div>

          <div className="seo-main-chart">
            {/* Animated SVG Path for SEO growth */}
            <svg viewBox="0 0 100 40" className="seo-svg-chart">
              <motion.path
                d="M0,35 Q20,30 40,15 T100,5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              />
              <motion.path
                d="M0,35 Q20,30 40,15 T100,5 L100,40 L0,40 Z"
                fill="url(#seoGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
              />
              <defs>
                <linearGradient id="seoGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="seo-bars-container">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="chart-bar-v2"
                  animate={{ height: [10, 30, 15, 25, 10][i % 5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="seo-glow-v2"></div>
      </motion.div>
    </div>
  );
}
