import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundType?: 'video' | 'image';
  backgroundSrc?: string;
  showScrollIndicator?: boolean;
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundType = 'video',
  backgroundSrc = '/hero.mp4',
  showScrollIndicator = true,
  overlayOpacity = 0.4
}) => {
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
      {/* Background */}
      {backgroundType === 'video' ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        >
          <source src={backgroundSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            zIndex: -1,
            backgroundImage: `url(${backgroundSrc})`
          }}
        />
      )}
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ 
          zIndex: -1,
          opacity: overlayOpacity
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 hero-content relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-4xl lg:text-6xl text-white hero-text">
            {title || t('hero.title')}<br />
            {subtitle || t('hero.title2')}
          </h1>
          
          <div className="flex items-start space-x-6">
            {showScrollIndicator && (
              <button
                onClick={scrollToNextSection}
                className="scroll-indicator hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-2"
              >
                <ChevronRight className="w-5 h-5 text-white transform rotate-90" />
                <span className="text-white text-xs font-light"></span>
              </button>
            )}
            <p className="text-white text-base md:text-lg max-w-lg leading-relaxed body-text">
              {description || t('hero.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 