import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

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
            <div className="scroll-indicator">
              <ChevronRight className="w-5 h-5 text-white transform rotate-90" />
              <span className="text-white text-xs font-light"></span>
            </div>
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