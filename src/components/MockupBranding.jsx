import { motion } from 'framer-motion';
import './Mockups.css';

export default function MockupBranding() {
  return (
    <div className="mockup-container mockup-branding-container">
      <motion.div
        className="branding-3d"
        initial={{ rotateY: -20, rotateX: 15 }}
        animate={{ 
          rotateY: [-20, -10, -20],
          rotateX: [15, 5, 15]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Business Card Mockup - Colorful Front */}
        <div className="brand-card front colorful">
          <div className="brand-card-bg-gradient"></div>
          <div className="brand-logo-spot white"></div>
          <div className="brand-card-lines white">
            <div className="b-line w-40"></div>
            <div className="b-line w-60"></div>
          </div>
        </div>
        
        {/* Brand Guide Paper - Colorful Splotches */}
        <div className="brand-paper">
           <div className="paper-header">
              <div className="paper-logo color-neon"></div>
              <div className="paper-title">VISUAL SYSTEM</div>
           </div>
           <div className="paper-colors">
              <div className="p-color c-neon"></div>
              <div className="p-color c-purple"></div>
              <div className="p-color c-blue"></div>
           </div>
           <div className="paper-grid-colorful">
              <div className="grid-box b1"></div>
              <div className="grid-box b2"></div>
              <div className="grid-box b3"></div>
              <div className="grid-box b4"></div>
           </div>
        </div>

        <div className="branding-glow-colorful"></div>
      </motion.div>
    </div>
  );
}
