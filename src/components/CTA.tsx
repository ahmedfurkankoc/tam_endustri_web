import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-tam-blue">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight heading-primary">
          {t('cta.title')}<br />
          {t('cta.title2')}
        </h2>
        <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed body-text">
          {t('cta.description')}
        </p>
        <button className="bg-tam-dark text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors font-heading text-sm md:text-base">
          {t('cta.button')}
        </button>
      </div>
    </section>
  );
};

export default CTA; 