import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './BrandsTicker.css';

const brands = [
  { 
    name: 'Google', 
    logo: <svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> 
  },
  { 
    name: 'Meta', 
    logo: <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5v-9l5.5 4.5L13 16.5z" fill="#0668E1"/></svg>
  },
  { 
    name: 'Amazon', 
    logo: <svg viewBox="0 0 24 24"><path d="M18.712 17.04c-1.744 1.136-4.456 1.704-7.232 1.704-3.664 0-6.84-1-9.144-2.664-.2-.144-.112-.416.128-.464 2.08-.432 4.416-.656 6.64-.656 2.528 0 5.056.288 7.376.928.24.064.288.36.032.496zM23.368 13.04c-.168-.216-.96-.088-1.28.024-1.84.568-4.048.84-5.912.84-2.088 0-4.264-.336-6.144-1.28-.216-.112-.464-.04-.568.176l-.256.512c-.088.184.024.384.216.488 2.304 1.136 4.704 1.688 7.216 1.688 2.088 0 4.512-.344 6.48-1.04.376-.136.56-.528.504-.912l-.256-.504z" fill="#FF9900"/></svg> 
  },
  { 
    name: 'Stripe', 
    logo: <svg viewBox="0 0 24 24"><path d="M13.976 9.15c0-2.172-1.918-2.435-2.99-2.435-1.49 0-2.353.38-2.353.38l-.613-1.512s1.12-.482 2.868-.482c3.032 0 4.41 1.45 4.41 3.527 0 4.032-5.36 4.032-5.36 5.487 0 .526.477.702 1.162.702 1.61 0 2.868-.526 2.868-.526l.525 1.477s-1.447.674-3.477.674c-2.31 0-4.41-.833-4.41-3.123 0-3.527 5.38-3.79 5.38-4.178z" fill="#635BFF"/></svg> 
  },
  { 
    name: 'Figma', 
    logo: <svg viewBox="0 0 38 57"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg> 
  },
  { 
    name: 'React', 
    logo: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><path d="M12 7.5c-3.1 0-5.6 2-5.6 4.5s2.5 4.5 5.6 4.5 5.6-2 5.6-4.5-2.5-4.5-5.6-4.5zm0 8.1c-2.5 0-4.5-1.6-4.5-3.6s2-3.6 4.5-3.6 4.5 1.6 4.5 3.6-2 3.6-4.5 3.6zm0-13.1c-6.1 0-11 2.2-11 5s4.9 5 11 5 11-2.2 11-5-4.9-5-11-5zm0 9c-5.5 0-10-1.8-10-4s4.5-4 10-4 10 1.8 10 4-4.5 4-10 4zm0 2.1c-6.1 0-11 2.2-11 5s4.9 5 11 5 11-2.2 11-5-4.9-5-11-5zm0 9c-5.5 0-10-1.8-10-4s4.5-4 10-4 10 1.8 10 4-4.5 4-10 4z" fill="#61DAFB" opacity=".5"/></svg> 
  },
  { 
    name: 'Vercel', 
    logo: <svg viewBox="0 0 24 24"><path d="M24 22.525H0l12-21.05 12 21.05z" fill="#FFF"/></svg> 
  },
  { 
    name: 'Shopify', 
    logo: <svg viewBox="0 0 24 24"><path d="M19.5 9.5l-1.5-6h-12l-1.5 6h15z" fill="#96BF48"/><path d="M3 10l2 11h14l2-11H3z" fill="#5E8E3E"/></svg>
  },
  { 
    name: 'Notion', 
    logo: <svg viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="#FFF"/></svg>
  },
];

export default function BrandsTicker() {
  const { i18n } = useTranslation();
  const displayBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="brands-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="brands-label"
        >
          {i18n.language === 'ar' ? 'نعمل مع الأفضل' : 'TRUSTED BY THE BEST'}
        </motion.div>
        <div className="brands-ticker-container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="brands-ticker"
          >
            <div className="brands-track">
              {displayBrands.map((brand, i) => (
                <motion.div 
                  key={i} 
                  className="brand-item" 
                  title={brand.name}
                  whileHover={{ scale: 1.1, opacity: 1, filter: 'grayscale(0)' }}
                >
                  <div className="brand-logo-wrapper">
                    {brand.logo}
                  </div>
                  <span className="brand-name">{brand.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
