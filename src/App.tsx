import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Excellence } from './components/Excellence';
import { Innovations } from './components/Innovations';
import { PaperBakery } from './components/PaperBakery';
import { InfiniteScroll } from './components/InfiniteScroll';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { SectionWrapper } from './components/SectionWrapper';
import { Preloader } from './components/Preloader';
import { useLanguage } from './store/useLanguage';

function App() {
  const { lang } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className={`app-wrapper ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      <Preloader />

      {/* Scroll Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="quality">
          <Excellence />
        </SectionWrapper>

        <SectionWrapper id="innovations">
          <Innovations />
        </SectionWrapper>

        <section id="products">
          <InfiniteScroll />
        </section>

        <SectionWrapper id="paper-bakery">
          <PaperBakery />
        </SectionWrapper>

        <SectionWrapper id="contact-form">
          <ContactForm />
        </SectionWrapper>
      </main>

      <SectionWrapper id="contact">
        <Footer />
      </SectionWrapper>
    </div>
  );
}

export default App;
