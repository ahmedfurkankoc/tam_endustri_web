import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-tam-dark text-white pt-20 pb-5 px-6">
      <div className="max-w-[75%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Logo ve Açıklama */}
          <div>
            <img 
              src="/tam-endustri-black-logo.png" 
              alt="Tam Endüstri Logo" 
              className="w-32 h-auto mb-6"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Email Butonu */}
            <button className="bg-tam-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-tam-accent transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>{t('footer.email')}</span>
            </button>
          </div>
          
          {/* Kurumsal */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.corporate')}</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.why')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.services')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
          
          {/* Danışmanlık Proje Tasarım ve İmalat */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.consulting_design')}</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.3d_design_services')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.3d_design_automation')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.rnd_machine_design')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.custom_machine_design')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.factory_setup_plan')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.reverse_engineering')}</a></li>
            </ul>
          </div>
          
          {/* İş Geliştirme ve İyileştirme */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.business_improvement')}</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.lean_production_methods')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.3d_design_automation_2')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.rnd_machine_design_2')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.technical_sales_program')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.calculation_reporting_apps')}</a></li>
            </ul>
          </div>
          
          {/* Danışmanlık */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.consulting')}</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.turkey_business_consulting')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.design_training')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.feasibility_studies')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.lean_production_training')}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 