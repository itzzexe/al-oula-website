import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, translations } from '../store/useLanguage';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

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

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
                style={{ textAlign: 'center', padding: '40px', color: 'var(--soft-gold)', fontWeight: 'bold', fontSize: '1.2rem' }}
              >
                {lang === 'ar' ? 'تم استلام رسالتك بنجاح! شكراً لك.' : 'Your message has been received! Thank you.'}
              </motion.div>
            ) : (
              <form className="main-form" onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <input type="text" placeholder={t.namePlace} className="neu-inset" required />
                  </div>
                  <div className="input-group">
                    <input type="email" placeholder={t.emailPlace} className="neu-inset" required />
                  </div>
                </div>
                <div className="input-group">
                  <textarea placeholder={t.msgPlace} className="neu-inset" rows={6} required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary form-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t.send}</span>
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
