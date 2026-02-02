import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart } from 'lucide-react';
import { useLanguage, translations } from '../store/useLanguage';

export const Excellence: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  const features = [
    {
      icon: <Shield size={32} color="var(--soft-gold)" />,
      title: lang === 'ar' ? 'جودة لا تضاهى' : 'Unmatched Quality',
      desc: lang === 'ar' ? 'نطبق أعلى معايير الجودة في كل خطوة' : 'We apply the highest quality standards in every step'
    },
    {
      icon: <Zap size={32} color="var(--soft-gold)" />,
      title: lang === 'ar' ? 'سهولة الاستخدام' : 'Easy to Use',
      desc: lang === 'ar' ? 'حلول ذكية مصممة لراحتك' : 'Smart solutions designed for your convenience'
    },
    {
      icon: <Heart size={32} color="var(--soft-gold)" />,
      title: lang === 'ar' ? 'استدامة' : 'Sustainability',
      desc: lang === 'ar' ? 'تغليف ورقي يحافظ على البيئة والجودة' : 'Paper packaging that preserves the environment and quality'
    }
  ];

  return (
    <section className={`excellence-section ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.excellenceTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc"
          >
            {t.excellenceDesc}
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="neu-card feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="icon-wrapper neu-inset">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
