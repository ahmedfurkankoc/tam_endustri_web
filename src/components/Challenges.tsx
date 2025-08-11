import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Challenges: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="problem-statement" className="pt-12 md:pt-24 px-4 md:px-6 problem-statement">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight heading-primary">
            {t('problem.title')}
          </h2>
          <p className="text-xl md:text-2xl text-tam-blue font-semibold body-text-bold">
            {t('problem.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges; 