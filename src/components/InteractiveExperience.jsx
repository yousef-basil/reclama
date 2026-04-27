import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './InteractiveExperience.css';

export default function InteractiveExperience() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

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
            {i18n.language === 'ar' ? 'تفاعل معنا' : 'Interact with us'}
          </div>
          <h2 className="section-title text-glow">
            {i18n.language === 'ar' ? 'العب مع إبداعنا' : 'Play with our creativity'}
          </h2>
          <p className="interactive-subtitle">
            {i18n.language === 'ar' 
              ? 'حرك الماوس واسحب المجسم في جميع الاتجاهات لاستكشاف قدراتنا في بناء تجارب الويب التفاعلية.'
              : 'Move your mouse and drag the object in all directions to explore our capabilities in building interactive web experiences.'}
          </p>
        </motion.div>
      </div>

      <motion.div className="interactive-spline-wrapper" style={{ opacity }}>
        <div className="spline-glow-bg"></div>
        <spline-viewer 
          url="https://prod.spline.design/V3S4JyNCcYa8hagW/scene.splinecode"
          events-target="global"
        ></spline-viewer>
      </motion.div>
    </section>
  );
}
