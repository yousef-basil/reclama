import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Hero3DObject.css';

export default function Hero3DObject() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 100, damping: 20 });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      ref={containerRef}
      className="hero-3d-wrapper"
      style={{ scale, opacity }}
    >
      <motion.div 
        className="hero-3d-container"
        style={{ rotateX, rotateY }}
      >
        <div className="core-glow" />
        
        {/* Outer Rings */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={`ring-${i}`} 
            className={`orbit-ring ring-${i}`}
            style={{ transform: `rotateY(${i * 30}deg) rotateX(${i * 15}deg)` }}
          />
        ))}

        {/* Floating geometric particles inside */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className={`geo-particle particle-${i}`}
          />
        ))}

        <div className="center-orb" />
      </motion.div>
    </motion.div>
  );
}
