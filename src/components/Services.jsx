import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Smartphone, Search, PlayCircle, Fingerprint, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import MockupLaptop from './MockupLaptop';
import MockupPhone from './MockupPhone';
import MockupSEO from './MockupSEO';
import MockupVideo from './MockupVideo';
import MockupBranding from './MockupBranding';
import FloatingShapes from './FloatingShapes';
import './Services.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.9,
    rotateX: 15
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8 
    }
  },
};

export default function Services() {
  const { i18n } = useTranslation();
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

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
      <motion.div className="parallax-bg" style={{ y: backgroundY }}>
        <FloatingShapes />
      </motion.div>
      
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="section-header"
        >
          <motion.span variants={cardVariants} className="section-tag">
            {i18n.language === 'ar' ? 'ماذا نقدم' : 'What We Offer'}
          </motion.span>
          <motion.h2 variants={cardVariants} className="section-title">
            {i18n.language === 'ar' ? 'كل اللي محتاجه علامتك التجارية في مكان واحد' : 'Everything Your Brand Needs in One Place'}
          </motion.h2>
          <motion.p variants={cardVariants} className="section-subtitle">
            {i18n.language === 'ar' 
              ? 'نحن نلغي الحاجة للتعامل مع أطراف متعددة. من الهوية والعلامة التجارية إلى البرمجيات المخصصة — نحن نبني النظام الذي تعمل عليه شركتك.'
              : 'We eliminate the need to deal with multiple parties. From identity and branding to customized software — we build the system your company operates on.'}
          </motion.p>
          <motion.div variants={cardVariants} className="section-line"></motion.div>
        </motion.div>

        <motion.div 
          className="services-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`service-card-bento ${s.size} has-mockup`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
              }}
            >
              <div className="card-noise"></div>
              <div className="card-glow"></div>
              
              {/* 3D Mockups (Pure CSS/Framer - FAST) */}
              {s.mockup === 'laptop' && <MockupLaptop />}
              {s.mockup === 'phone' && <MockupPhone />}
              {s.mockup === 'seo' && <MockupSEO />}
              {s.mockup === 'video' && <MockupVideo />}
              {s.mockup === 'branding' && <MockupBranding />}

              <div className="card-content">
                <div className="service-number">0{s.id}</div>
                <div className="service-icon-wrapper">
                   <div className="service-icon">{s.icon}</div>
                   <div className="icon-shadow"></div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
