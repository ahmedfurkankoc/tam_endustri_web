import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  backgroundType?: 'video' | 'image';
  backgroundSrc?: string;
  showScrollIndicator?: boolean;
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  keywords,
  backgroundType = 'video',
  backgroundSrc = '/hero.mp4',
  showScrollIndicator = true,
  overlayOpacity = 0.4
}) => {
  const { t, language } = useLanguage();

  // Update document title and meta description from hero
  useEffect(() => {
    const heroTitle = title || t('hero.title');
    const heroDescriptionRaw = description || t('hero.description');
    const siteName = 'Tam Endüstri';
    const fullTitle = heroTitle ? `${heroTitle} | ${siteName}` : siteName;

    // Optimize description length to ~150 chars without cutting words
    const optimizeDescription = (text: string, maxLen = 160): string => {
      const normalized = (text || '').replace(/\s+/g, ' ').trim();
      if (normalized.length <= maxLen) return normalized;
      const slice = normalized.slice(0, maxLen - 1);
      const cut = slice.lastIndexOf(' ');
      return (cut > 60 ? slice.slice(0, cut) : slice).replace(/[.,;:!?\-\s]+$/, '') + '…';
    };

    const heroDescription = optimizeDescription(heroDescriptionRaw);

    if (fullTitle) {
      document.title = fullTitle;
    }

    const upsertMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (heroDescription) {
      upsertMeta('description', heroDescription);
    }

    // Optional: keep social meta aligned
    const upsertProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertProperty('og:title', fullTitle);
    upsertProperty('og:description', heroDescription);
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', heroDescription);

    // Keywords (optional): use provided keywords or derive basic ones from title
    const deriveKeywords = (): string[] => {
      if (keywords && keywords.length) return keywords;
      const base = (heroTitle || '').toLowerCase();
      const words = base
        .replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, ' ')
        .split(' ')
        .filter(w => w.length > 2 && !['ve', 'ile', 'the', 'and', 'for', 'with'].includes(w));
      const dedup = Array.from(new Set(words));
      const common = language === 'en'
        ? ['industrial consulting', 'manufacturing', 'design', 'turkiye', 'lean']
        : ['endüstri danışmanlığı', 'imalat', 'tasarım', 'türkiye', 'yalın üretim'];
      return Array.from(new Set([...dedup, ...common])).slice(0, 12);
    };

    const keywordList = deriveKeywords();
    if (keywordList.length) {
      upsertMeta('keywords', keywordList.join(', '));
    }
  }, [title, description, keywords, t, language]);

  const scrollToNextSection = () => {
    // Hero'dan sonraki ilk section'ı bul
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const nextElement = heroSection.nextElementSibling as HTMLElement;
      
      if (nextElement) {
        // Lenis smooth scroll
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(nextElement, {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          // Fallback to native smooth scroll
          nextElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="max-h-[60vh] relative flex items-center hero-section overflow-hidden">
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
            {title || t('hero.title')}
          </h1>
          <p className="mt-2 mb-6 text-xl md:text-2xl text-white/90">
            {subtitle || t('hero.title2')}
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

export default Hero; 