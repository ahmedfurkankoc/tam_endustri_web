import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProblemStatement: React.FC = () => {
  const { t } = useLanguage();

  return (
<<<<<<< HEAD
    <section className="pt-24 px-6 problem-statement">
=======
    <section id="problem-statement" className="py-24 px-6 problem-statement">
>>>>>>> 0373d26860168a89a54b340052565e34e67024c5
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight heading-primary">
            {t('problem.title')}
          </h2>
          <p className="text-2xl text-tam-blue font-semibold body-text-bold">
            {t('problem.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement; 