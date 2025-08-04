import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GlobalApprovals: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold text-tam-dark mb-8 leading-tight heading-primary">
              {t('approvals.title')}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed body-text">
              {t('approvals.description')}
            </p>
            
            <button className="bg-tam-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading">
              {t('approvals.cta')}
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.lean_training')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.design_training')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.business_consulting')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.feasibility')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.calculation')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.factory_setup')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-tam-blue flex-shrink-0" />
              <span className="text-gray-700 text-lg body-text">{t('approvals.custom_machine')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalApprovals; 