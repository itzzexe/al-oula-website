import React from 'react';
import { motion } from 'framer-motion';
import { Product3D } from './Product3D';
import { useLanguage, translations } from '../store/useLanguage';

export const PaperBakery: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  return (
    <section className={`paper-section ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="content-grid">
          <motion.div
            className="text-content"
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{t.paperBakeryTitle}</h2>
            <p className="section-desc">{t.paperBakeryDesc}</p>
            <div className="features-list">
              <div className="feature-item">
                <span className="dot"></span>
                <span>{lang === 'ar' ? 'صديق للبيئة 100%' : '100% Eco-friendly'}</span>
              </div>
              <div className="feature-item">
                <span className="dot"></span>
                <span>{lang === 'ar' ? 'يحافظ على القرمشة' : 'Preserves crunchiness'}</span>
              </div>
              <div className="feature-item">
                <span className="dot"></span>
                <span>{lang === 'ar' ? 'تصميم عصري وجذاب' : 'Modern and attractive design'}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="visual-content"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card viewer-card">
              <Product3D />
              <p className="hint">{lang === 'ar' ? 'اسحب لتدوير المنتج' : 'Drag to rotate the product'}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
