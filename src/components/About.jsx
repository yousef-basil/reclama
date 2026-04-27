import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Target, Eye, Rocket, Quote } from 'lucide-react';
import './About.css';

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { t, i18n } = useTranslation();
  
  return (
    <section id="about" className="about-section">
      {/* Background elements */}
      <div className="about-bg-shapes">
        <div className="a-shape shape-1" />
        <div className="a-shape shape-2" />
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="about-header">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            {t('about.title')}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            {t('about.tagline')}
          </motion.h2>
        </div>

        {/* Founder & Intro Section */}
        <div className="about-intro-grid">
          <motion.div 
            initial={{ opacity: 0, x: i18n.language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="founder-card-wrapper"
          >
            <TiltCard className="founder-card glass">
              <div className="founder-image-container">
                <img 
                  src="/alaa_hamdon.png" 
                  alt={t('about.founder.name')} 
                  className="founder-image"
                />
                <div className="founder-glow" />
              </div>
              <div className="founder-info">
                <h3>{t('about.founder.name')}</h3>
                <p>{t('about.founder.title')}</p>
                <div className="founder-quote">
                  <Quote size={16} />
                  <span>Leading the digital future.</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: i18n.language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-description"
          >
            <p className="main-desc">{t('about.description')}</p>
            
            <div className="cta-box glass">
              <Rocket className="cta-icon" size={32} />
              <div className="cta-content">
                <h4>{t('about.cta.title')}</h4>
                <p>{t('about.cta.desc')}</p>
                <button className="btn-secondary">{t('nav.contact_now')}</button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mission-vision-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mv-card-wrapper"
          >
            <TiltCard className="mv-card mission glass">
              <div className="mv-icon-box">
                <Target size={40} />
              </div>
              <h3>{t('about.mission.title')}</h3>
              <p>{t('about.mission.desc')}</p>
              <div className="mv-bg-icon">a1-bg-shape-1</div>
            </TiltCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mv-card-wrapper"
          >
            <TiltCard className="mv-card vision glass">
              <div className="mv-icon-box">
                <Eye size={40} />
              </div>
              <h3>{t('about.vision.title')}</h3>
              <p>{t('about.vision.desc')}</p>
              <div className="mv-bg-icon">a1-bg-shape-1</div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
