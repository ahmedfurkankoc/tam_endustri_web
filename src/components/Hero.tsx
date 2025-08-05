import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Lenis from 'lenis';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('problem-statement');
    if (nextSection) {
      // Lenis smooth scroll
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(nextSection, {
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        // Fallback to native smooth scroll
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="h-screen relative flex items-center hero-section overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: -1 }}></div>
      
      <div className="max-w-7xl mx-auto px-6 hero-content relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-4xl lg:text-6xl text-white hero-text">
            {t('hero.title')}<br />
            {t('hero.title2')}
          </h1>
          
          <div className="flex items-start space-x-6">
            <button
              onClick={scrollToNextSection}
              className="scroll-indicator hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-2"
            >
              <ChevronRight className="w-5 h-5 text-white transform rotate-90" />
              <span className="text-white text-xs font-light"></span>
            </button>
            <p className="text-white text-base md:text-lg max-w-lg leading-relaxed body-text">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 