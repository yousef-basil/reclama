import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Hero.css';

// Particle system for background with parallax effect
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particleCount = Math.min(window.innerWidth / 15, 100);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(191, 255, 0, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Subtle connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(191, 255, 0, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <motion.div style={{ y }} className="particle-canvas-wrapper">
      <canvas ref={canvasRef} className="particle-canvas" />
    </motion.div>
  );
}

// Spline 3D Viewer
function Spline3D() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [0.55, 0]);

  return (
    <motion.div style={{ y, opacity }} className="spline-container">
      <spline-viewer 
        url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        events-target="global"
      ></spline-viewer>
    </motion.div>
  );
}

// Stats counter
function AnimatedCounter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-item">
      <span className="stat-number">{count}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const stats = i18n.language === 'ar'
    ? [
        { target: 150, label: 'مشروع منجز' },
        { target: 50, label: 'عميل سعيد' },
        { target: 5, label: 'سنوات خبرة' },
      ]
    : [
        { target: 150, label: 'Projects Done' },
        { target: 50, label: 'Happy Clients' },
        { target: 5, label: 'Years Experience' },
      ];

  return (
    <section id="home" className="hero-section">
      <ParticleCanvas />
      <Spline3D />

      {/* Gradient overlays with subtle animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hero-gradient-1" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.06, 0.04] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hero-gradient-2" 
      />

      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="container hero-content"
      >
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-badge glass"
          >
            <span className="badge-dot"></span>
            {i18n.language === 'ar' ? 'وكالة تسويق رقمي رائدة' : 'Leading Digital Agency'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <button className="btn-primary">
              <span>{t('hero.cta')}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-ghost">
              {t('hero.explore')}
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hero-stats"
          >
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} target={stat.target} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with bounce animation */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="scroll-indicator"
      >
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </motion.div>
    </section>
  );
}
