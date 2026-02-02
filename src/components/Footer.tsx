import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage, translations } from '../store/useLanguage';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang] as typeof translations['ar'];

  return (
    <footer className={`footer glass-card ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <Logo size={150} />
            </div>
            <p className="brand-desc">
              {lang === 'ar' ? 'جودة تُخبز، وابتكار يُغلف' : 'Baked Quality, Packaged Innovation'}
            </p>
            <div className="social-links">
              <Instagram size={20} />
              <Facebook size={20} />
              <Twitter size={20} />
            </div>
          </div>

          {/* Quick links removed as requested */}

          <div className="footer-contact">
            <h3>{t.contact}</h3>
            <div className="contact-item">
              <Mail size={18} />
              <span>info@al-oula.com</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+964 770 000 0000</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>{lang === 'ar' ? 'بغداد، العراق' : 'Baghdad, Iraq'}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Al-Oula Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
