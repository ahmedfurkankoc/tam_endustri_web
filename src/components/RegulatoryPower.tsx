import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RegulatoryPower: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-tam-dark mb-8 leading-tight heading-primary">
              {t('regulatory.title')}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed body-text">
              {t('regulatory.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
                <span className="text-gray-700 body-text">{t('regulatory.3d_design')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
                <span className="text-gray-700 body-text">{t('regulatory.rnd_machine')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
                <span className="text-gray-700 body-text">{t('regulatory.technical_sales')}</span>
              </div>
            </div>
            
            <button className="bg-tam-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading">
              {t('regulatory.cta')}
            </button>
          </div>
          
          <div className="lg:pl-8">
            <img 
              src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Endüstriyel tasarım"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryPower; 