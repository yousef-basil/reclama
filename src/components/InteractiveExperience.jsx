import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Hand } from 'lucide-react';
import './InteractiveExperience.css';

export default function InteractiveExperience() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section className="interactive-section" ref={sectionRef}>
      <div className="container relative z-10">
        <motion.div 
          className="interactive-header"
          style={{ opacity, y }}
        >
          <div className="section-tag glass-tag">
            {i18n.language === 'ar' ? 'التجارب التفاعلية' : 'Interactive Experiences'}
          </div>
          <h2 className="section-title text-glow">
            {i18n.language === 'ar' ? 'إبداع رقمي يتجاوز الحدود' : 'Digital Creativity Beyond Boundaries'}
          </h2>
          <p className="interactive-subtitle">
            {i18n.language === 'ar' 
              ? 'اكتشف كيف ندمج التصميم المتقدم بالتقنية الحديثة لبناء واجهات ويب تفاعلية ومرنة تترك أثراً استثنائياً لعلامتك التجارية.'
              : 'Discover how we blend advanced design with modern technology to build highly interactive web interfaces that leave an exceptional impact.'}
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="interactive-spline-wrapper" 
        style={{ opacity }}
        onMouseDown={() => setHasInteracted(true)}
        onTouchStart={() => setHasInteracted(true)}
      >
        <div className="spline-glow-bg"></div>
        
        {/* Interaction Hint Overlay */}
        <div className={`interaction-hint ${hasInteracted ? 'hidden' : ''}`}>
          <div className="hint-icon">
            <Hand size={32} />
          </div>
          <span>{i18n.language === 'ar' ? 'اسحب للتفاعل' : 'Drag to interact'}</span>
        </div>

        <spline-viewer 
          url="https://prod.spline.design/V3S4JyNCcYa8hagW/scene.splinecode"
          events-target="global"
        ></spline-viewer>
      </motion.div>
    </section>
  );
}
