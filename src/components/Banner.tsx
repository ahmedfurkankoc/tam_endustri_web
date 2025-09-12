import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundType?: 'video' | 'image';
  backgroundSrc?: string;
  showScrollIndicator?: boolean;
  overlayOpacity?: number;
}

const Banner: React.FC<BannerProps> = ({
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
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const nextElement = heroSection.nextElementSibling as HTMLElement;
      if (nextElement) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(nextElement, {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          nextElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="h-screen relative flex items-center hero-section overflow-hidden">
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
            {title || t('hero.title')}
          </h1>
          <p className="mt-2 mb-6 text-xl md:text-2xl text-white/90">
            {subtitle || t('hero.subtitle')}
          </p>
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

export default Banner; 


