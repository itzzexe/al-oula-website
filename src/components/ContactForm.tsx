import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, translations } from '../store/useLanguage';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  return (
    <section className={`contact-form-section ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="form-wrapper neu-card">
          <div className="form-content">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.contactTitle}
            </motion.h2>
            <motion.p
              className="section-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t.contactDesc}
            </motion.p>

            <form className="main-form">
              <div className="input-row">
                <div className="input-group">
                  <input type="text" placeholder={t.namePlace} className="neu-inset" />
                </div>
                <div className="input-group">
                  <input type="email" placeholder={t.emailPlace} className="neu-inset" />
                </div>
              </div>
              <div className="input-group">
                <textarea placeholder={t.msgPlace} className="neu-inset" rows={6}></textarea>
              </div>
              <motion.button
                type="button"
                className="btn-primary form-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.send}</span>
                <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};
