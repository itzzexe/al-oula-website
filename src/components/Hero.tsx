import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { useLanguage, translations } from '../store/useLanguage';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  const handleExploreClick = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5E6D3', '#FFFFFF']
    });
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`hero-section ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-title"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-desc"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-actions"
          >
            <button className="btn-primary" onClick={handleExploreClick}>
              {t.explore}
            </button>
          </motion.div>

          <motion.div
            className="logo-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ marginTop: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Logo size="min(800px, 90vw)" variant={2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
