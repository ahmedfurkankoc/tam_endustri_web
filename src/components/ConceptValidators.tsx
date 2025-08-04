import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ConceptValidators: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-tam-dark rounded-b-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight heading-primary">
              {t('concept.title')}
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed body-text">
              {t('concept.description')}
            </p>
            
            <button className="bg-tam-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading">
              {t('concept.cta')}
            </button>
          </div>
          <div className="lg:pl-8">
            {/* Placeholder for additional content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptValidators; 