import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Monitor, Smartphone, Search, PlayCircle, Fingerprint, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import MockupLaptop from './MockupLaptop';
import MockupPhone from './MockupPhone';
import MockupSEO from './MockupSEO';
import MockupVideo from './MockupVideo';
import MockupBranding from './MockupBranding';
import FloatingShapes from './FloatingShapes';
import './Services.css';

/* ---- 3D Tilt Card Component ---- */
function TiltCard({ children, className, size }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 200, damping: 25, mass: 0.5
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200, damping: 25, mass: 0.5
  });
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 200, damping: 25
  });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 200, damping: 25
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    e.currentTarget.style.setProperty('--mouse-x', `${(x + 0.5) * 100}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${(y + 0.5) * 100}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`service-card-bento ${size} ${isHovered ? 'is-hovered' : ''}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 80, rotateX: 25, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.1,
      }}
    >
      {/* Animated gradient border */}
      <div className="card-border-glow" />
      <div className="card-noise" />
      <motion.div
        className="card-glow"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(191, 255, 0, 0.25) 0%, transparent 60%)`
          ),
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Shine sweep on hover */}
      <div className="card-shine" />

      {children}
    </motion.div>
  );
}

/* ---- Section Header Animations ---- */
const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Services() {
  const { i18n } = useTranslation();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const services = i18n.language === 'ar'
    ? [
        { id: 1, icon: <Monitor size={36} />, title: 'تصميم المواقع', desc: 'مواقع تسويقية عالية الأداء، صفحات هبوط، وتجارب ويب مبنية بتقنيات WebGL و React مع اهتمام فائق بالتفاصيل.', size: 'large', mockup: 'laptop' },
        { id: 2, icon: <Smartphone size={32} />, title: 'تطبيقات الجوال', desc: 'منتجات iOS و Android — من النماذج الأولية إلى الإنتاج الكامل مع مزامنة فورية، دفع، وإشعارات.', size: 'medium', mockup: 'phone' },
        { id: 3, icon: <Search size={32} />, title: 'تحسين محركات البحث', desc: 'سيو تقني، مجموعات محتوى، ومخططات تجعل علامتك تتصدر جوجل وتظهر بذكاء في ملخصات الذكاء الاصطناعي.', size: 'small', mockup: 'seo' },
        { id: 4, icon: <PlayCircle size={32} />, title: 'الموشن جرافيك', desc: 'موشن جرافيك للعلامات التجارية، ريلز إعلانية، فيديوهات شرح المنتجات، وتترات — نبتكرها باستخدام After Effects و Cinema 4D.', size: 'small', mockup: 'video' },
        { id: 5, icon: <Fingerprint size={32} />, title: 'الهوية التجارية', desc: 'هويات استراتيجية مصممة لتضعك في مكانة مميزة في السوق — شعارات، أنظمة بصرية، ونبرة صوت العلامة.', size: 'small', mockup: 'branding' },
      ]
    : [
        { id: 1, icon: <Monitor size={36} />, title: 'Website design', desc: 'High-performance marketing sites, landing pages, web experiences built with WebGL and React, and obsessive details.', size: 'large', mockup: 'laptop' },
        { id: 2, icon: <Smartphone size={32} />, title: 'Mobile apps', desc: 'iOS and Android products — from MVP to full-fledged production with real-time syncing, payments and notifications.', size: 'medium', mockup: 'phone' },
        { id: 3, icon: <Search size={32} />, title: 'SEO', desc: 'Technical SEO, content clusters, and a schema that makes the brand rank highly on Google and be remembered in AI Overviews.', size: 'small', mockup: 'seo' },
        { id: 4, icon: <PlayCircle size={32} />, title: 'Motion graphics', desc: 'Brand motion graphics, advertising reels, product explanation videos, and title sequences — we create them with After Effects and Cinema 4D.', size: 'small', mockup: 'video' },
        { id: 5, icon: <Fingerprint size={32} />, title: 'Business identity', desc: 'Strategic brand identities designed to put you in a distinctive market position — logos, systems, and tone of voice.', size: 'small', mockup: 'branding' },
      ];

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      {/* Animated Background */}
      <motion.div className="parallax-bg" style={{ y: backgroundY }}>
        <FloatingShapes />
      </motion.div>

      {/* Dot grid pattern */}
      <div className="services-grid-pattern" />

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="section-header"
        >
          <motion.span variants={itemVariants} className="section-tag">
            {i18n.language === 'ar' ? 'ماذا نقدم' : 'What We Offer'}
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            {i18n.language === 'ar' ? 'كل اللي محتاجه علامتك التجارية في مكان واحد' : 'Everything Your Brand Needs in One Place'}
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            {i18n.language === 'ar'
              ? 'نحن نلغي الحاجة للتعامل مع أطراف متعددة. من الهوية والعلامة التجارية إلى البرمجيات المخصصة — نحن نبني النظام الذي تعمل عليه شركتك.'
              : 'We eliminate the need to deal with multiple parties. From identity and branding to customized software — we build the system your company operates on.'}
          </motion.p>
          <motion.div variants={itemVariants} className="section-line" />
        </motion.div>

        <div className="services-bento-grid">
          {services.map((s, index) => (
            <TiltCard key={s.id} size={s.size}>
              {/* 3D Mockups */}
              <div className="mockup-3d-wrapper" style={{ transform: 'translateZ(40px)' }}>
                {s.mockup === 'laptop' && <MockupLaptop />}
                {s.mockup === 'phone' && <MockupPhone />}
                {s.mockup === 'seo' && <MockupSEO />}
                {s.mockup === 'video' && <MockupVideo />}
                {s.mockup === 'branding' && <MockupBranding />}
              </div>

              <div className="card-content" style={{ transform: 'translateZ(50px)' }}>
                <div className="service-number">0{s.id}</div>

                <div className="service-icon-wrapper">
                  <div className="service-icon">
                    <div className="icon-ring" />
                    {s.icon}
                  </div>
                  <div className="icon-shadow" />
                </div>

                <div className="text-content">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                </div>

                <div className="service-footer">
                  <div className="service-arrow">
                    <ChevronRight size={22} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
