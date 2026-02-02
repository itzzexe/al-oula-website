import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, translations } from '../store/useLanguage';

export const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  return (
    <section className={`about-section ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: lang === 'ar' ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="neu-card image-container">
              <img
                src="/products.png"
                alt="Al-Oula Products"
              />
              <div className="floating-badge glass-card">
                <span>{lang === 'ar' ? 'منذ 1995' : 'Since 1995'}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h5 className="sub-title">{t.discoverWorld}</h5>
            <h2 className="section-title">{t.aboutTitle}</h2>
            <p className="section-desc">{t.aboutDesc}</p>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>+25</h3>
                <p>{lang === 'ar' ? 'عام من الخبرة' : 'Years Experience'}</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>{lang === 'ar' ? 'مكونات طبيعية' : 'Natural Ingredients'}</p>
              </div>
              <div className="stat-item">
                <h3>+50</h3>
                <p>{lang === 'ar' ? 'حل تغليف مبتكر' : 'Packaging Solutions'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
