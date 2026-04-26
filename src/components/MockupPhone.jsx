import { motion } from 'framer-motion';
import './Mockups.css';

export default function MockupPhone() {
  return (
    <div className="mockup-container mockup-phone-container">
      <motion.div
        className="phone-3d"
        initial={{ rotateY: 12, rotateX: -5 }}
        animate={{ 
          rotateY: [12, 8, 12],
          rotateX: [-5, -2, -5]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Phone Frame */}
        <div className="phone-frame">
          <div className="phone-notch">
            <div className="phone-camera"></div>
          </div>
          <div className="phone-screen">
            {/* Status Bar */}
            <div className="phone-status-bar">
              <span className="status-time">9:41</span>
              <div className="status-icons">
                <div className="signal-bars">
                  <span></span><span></span><span></span><span></span>
                </div>
                <div className="battery-icon"></div>
              </div>
            </div>
            {/* Colorful App Content */}
            <div className="app-content">
              {/* Big Hero Image */}
              <div className="app-hero-card">
                <div className="app-hero-gradient"></div>
                <div className="app-hero-overlay">
                  <div className="app-hero-badge">NEW</div>
                  <div className="app-hero-title-mock"></div>
                  <div className="app-hero-sub-mock"></div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="app-quick-actions">
                <div className="quick-action purple">
                  <div className="qa-icon">⚡</div>
                </div>
                <div className="quick-action blue">
                  <div className="qa-icon">📊</div>
                </div>
                <div className="quick-action green">
                  <div className="qa-icon">💬</div>
                </div>
                <div className="quick-action orange">
                  <div className="qa-icon">🔔</div>
                </div>
              </div>

              {/* Colorful List Items */}
              <div className="app-colorful-list">
                <div className="app-color-item">
                  <div className="color-thumb gradient-1"></div>
                  <div className="color-item-text">
                    <div className="text-line-mock tiny" style={{width: '65%'}}></div>
                    <div className="text-line-mock tiny" style={{width: '40%', opacity: 0.4}}></div>
                  </div>
                  <div className="color-item-badge green-badge">+24%</div>
                </div>
                <div className="app-color-item">
                  <div className="color-thumb gradient-2"></div>
                  <div className="color-item-text">
                    <div className="text-line-mock tiny" style={{width: '55%'}}></div>
                    <div className="text-line-mock tiny" style={{width: '35%', opacity: 0.4}}></div>
                  </div>
                  <div className="color-item-badge blue-badge">12K</div>
                </div>
                <div className="app-color-item">
                  <div className="color-thumb gradient-3"></div>
                  <div className="color-item-text">
                    <div className="text-line-mock tiny" style={{width: '70%'}}></div>
                    <div className="text-line-mock tiny" style={{width: '45%', opacity: 0.4}}></div>
                  </div>
                  <div className="color-item-badge purple-badge">★ 4.9</div>
                </div>
              </div>

              {/* Bottom Tab Bar */}
              <div className="app-tab-bar-v2">
                <div className="tab-v2">
                  <div className="tab-v2-icon"></div>
                </div>
                <div className="tab-v2">
                  <div className="tab-v2-icon"></div>
                </div>
                <div className="tab-v2 active-tab">
                  <div className="tab-v2-dot"></div>
                </div>
                <div className="tab-v2">
                  <div className="tab-v2-icon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-side-btn"></div>
        </div>
        <div className="phone-glow"></div>
      </motion.div>
    </div>
  );
}
