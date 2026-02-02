import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage, translations } from '../store/useLanguage';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass-card ${scrolled ? 'scrolled' : ''} ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Logo size={150} />
        </div>

        <div className="nav-links desktop-only">
          <a href="#home">{translations[lang].home}</a>
          <a href="#about">{lang === 'ar' ? 'من نحن' : 'About Us'}</a>
          <a href="#innovations">{translations[lang].innovations}</a>
          <a href="#products">{translations[lang].products}</a>
          <a href="#contact-form">{translations[lang].contact}</a>
        </div>

        <div className="nav-actions">
          <button className="lang-toggle neu-inset" onClick={toggleLang}>
            <Globe size={18} />
            <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
          </button>

          <button className="mobile-toggle desktop-hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>{translations[lang].home}</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>{lang === 'ar' ? 'من نحن' : 'About Us'}</a>
        <a href="#innovations" onClick={() => setMobileMenuOpen(false)}>{translations[lang].innovations}</a>
        <a href="#products" onClick={() => setMobileMenuOpen(false)}>{translations[lang].products}</a>
        <a href="#contact-form" onClick={() => setMobileMenuOpen(false)}>{translations[lang].contact}</a>
      </div>
    </nav>
  );
};
