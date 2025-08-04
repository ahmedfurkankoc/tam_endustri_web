import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ConceptValidators: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-tam-dark rounded-b-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-center">
          {/* Sol - Başlık */}
          <div className="lg:col-span-1 text-left">
            <h2 className="text-4xl text-white leading-tight">
              {t('concept.title')}
            </h2>
          </div>
          
          {/* Orta - Açıklama */}
          <div className="lg:col-span-1 text-left">
            <p className="text-gray-300 text-md leading-relaxed body-text">
              {t('concept.description')}
            </p>
          </div>
          
          {/* Sağ - Buton */}
          <div className="lg:col-span-1 flex justify-center">
            <button className="bg-tam-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading">
              {t('concept.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptValidators; 