import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.design.title'),
      description: t('services.design.desc')
    },
    {
      title: t('services.improvement.title'),
      description: t('services.improvement.desc')
    },
    {
      title: t('services.training.title'),
      description: t('services.training.desc')
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-tam-blue font-semibold text-lg mb-4 heading-secondary">{service.title}</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed body-text">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-tam-blue font-semibold text-lg heading-secondary">{t('services.details')}</span>
                <div className="w-8 h-8 bg-tam-blue rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 