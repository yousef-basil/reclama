import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Eye, Rocket, Quote, Sparkles } from 'lucide-react';
import founderImg from '../assets/alaa-hamdon.webp';
import './About.css';

/* ---- 3D Parallax Tilt Card ---- */
function DepthCard({ children, className, depth = 50 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 150, damping: 20 });
  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        z: isHovered ? 30 : 0
      }}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${className} depth-card`}
    >
      <motion.div
        className="depth-glow"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(191, 255, 0, 0.3) 0%, transparent 60%)`
          ),
          opacity: isHovered ? 1 : 0
        }}
      />
      <div className="depth-content" style={{ transform: `translateZ(${depth}px)` }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

  // Advanced Scroll Parallax
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* 3D Animated Background Shapes */}
      <div className="about-bg-shapes">
        <motion.div style={{ y: bgY1, rotate: scrollYProgress }} className="a-shape shape-1" />
        <motion.div style={{ y: bgY2, rotate: -scrollYProgress }} className="a-shape shape-2" />
        <div className="about-grid-pattern" />
      </div>

      <div className="container relative z-10">
        {/* Floating Header */}
        <motion.div
          style={{ y: textY }}
          className="about-header"
        >
          <div className="section-tag glass-tag">
            <Sparkles size={16} />
            <span>{t('about.title')}</span>
          </div>

          <h2 className="section-title text-glow">
            {t('about.tagline')}
          </h2>
        </motion.div>

        {/* 3D Grid Layout */}
        <div className="about-3d-grid">

          {/* Founder 3D Card */}
          <DepthCard className="founder-card-3d glass" depth={60}>
            <div className="founder-image-wrapper">
              <div className="image-border-animated" />
              <img
                src={founderImg}
                alt={t('about.founder.name')}
                className="founder-image pop-out"
              />
              <div className="founder-overlay" />
            </div>
            <div className="founder-info-3d">
              <h3 className="founder-name">{t('about.founder.name')}</h3>
              <p className="founder-title-text">{t('about.founder.title')}</p>
              <div className="founder-quote-3d glass">
                <Quote size={20} className="quote-icon" />
                <span>We don't just build, we innovate.</span>
              </div>
            </div>
          </DepthCard>

          {/* Description & CTA */}
          <div className="about-content-stack">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-text-block glass"
            >
              <p className="main-desc-3d">{t('about.description')}</p>
            </motion.div>

            <DepthCard className="cta-box-3d glass" depth={40}>
              <div className="cta-glow-bg" />
              <Rocket className="cta-icon-3d" size={48} />
              <div className="cta-content-3d">
                <h4>{t('about.cta.title')}</h4>
                <p>{t('about.cta.desc')}</p>
                <a href="#contact" className="btn-3d-neon">
                  <span>{t('nav.contact_now')}</span>
                </a>
              </div>
            </DepthCard>
          </div>
        </div>

        {/* Mission & Vision 3D Cards */}
        <div className="mission-vision-3d-grid">
          <DepthCard className="mv-card-3d glass mission" depth={50}>
            <div className="mv-icon-3d">
              <Target size={40} />
            </div>
            <h3>{t('about.mission.title')}</h3>
            <p>{t('about.mission.desc')}</p>
            <div className="mv-watermark-3d">MISSION</div>
          </DepthCard>

          <DepthCard className="mv-card-3d glass vision" depth={50}>
            <div className="mv-icon-3d">
              <Eye size={40} />
            </div>
            <h3>{t('about.vision.title')}</h3>
            <p>{t('about.vision.desc')}</p>
            <div className="mv-watermark-3d">VISION</div>
          </DepthCard>
        </div>
      </div>
    </section>
  );
}
