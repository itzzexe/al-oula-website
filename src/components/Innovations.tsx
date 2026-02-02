import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, translations } from '../store/useLanguage';
import { Smartphone, Recycle, Sparkles } from 'lucide-react';

export const Innovations: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  const innovItems = [
    {
      icon: <Recycle size={40} />,
      title: lang === 'ar' ? 'تغليف ذكي' : 'Smart Packaging',
      desc: lang === 'ar' ? 'تقنيات تحافظ على رطوبة وطراوة الخبز لأيام.' : 'Technologies that keep bread moisture and freshness for days.'
    },
    {
      icon: <Smartphone size={40} />,
      title: lang === 'ar' ? 'سهولة الاستخدام' : 'Easy Access',
      desc: lang === 'ar' ? 'تصاميم علب مريحة للفتح وإعادة الإغلاق المحكم.' : 'Box designs that are easy to open and securely re-seal.'
    },
    {
      icon: <Sparkles size={40} />,
      title: lang === 'ar' ? 'تصميم عصري' : 'Modern Design',
      desc: lang === 'ar' ? 'جماليات تليق بمائدتك وتعكس جودة منتجاتنا.' : 'Aesthetics that suit your table and reflect our product quality.'
    }
  ];

  return (
    <section className={`innovation-section ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.innovationTitle}
          </motion.h2>
          <motion.p
            className="section-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.innovationDesc}
          </motion.p>
        </div>

        <div className="innov-grid">
          {innovItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="neu-card innov-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon-container">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
