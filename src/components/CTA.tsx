import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-tam-blue">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-8 leading-tight heading-primary">
          {t('cta.title')}<br />
          {t('cta.title2')}
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed body-text">
          {t('cta.description')}
        </p>
        <button className="bg-tam-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors font-heading">
          {t('cta.button')}
        </button>
      </div>
    </section>
  );
};

export default CTA; 