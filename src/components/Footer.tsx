import React from 'react';
import { Mail, ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-tam-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo ve Açıklama - Geniş Tasarım */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl p-8 border border-tam-blue/20">
              <div className="flex items-center mb-6">
                <div className="rounded-xl p-3 mr-4 shadow-lg">
                  <img 
                    src="/tam-endustri-black-logo.png" 
                    alt="Tam Endüstri Logo" 
                    className="w-16 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Tam Endüstri</h3>
                  <p className="text-tam-blue text-sm font-medium">Endüstriyel Çözümler</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {t('footer.description')}
              </p>
              
              {/* İletişim Bilgileri */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-tam-blue flex-shrink-0" />
                  <span className="text-sm">İstanbul, Türkiye</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-tam-blue flex-shrink-0" />
                  <span className="text-sm">+90 (212) XXX XX XX</span>
                </div>
              </div>
              
              {/* Email Butonu - Modern Tasarım */}
              <button className="group bg-gradient-to-r from-tam-blue to-tam-accent text-white px-6 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 w-full">
                <Mail className="w-5 h-5" />
                <span>{t('footer.email')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
          
          {/* Hizmetler - Sol Sütun */}
          <div className="lg:col-span-1">
            <div className="space-y-12">
              {/* Kurumsal */}
              <div>
                <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.corporate')}</h4>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.about')}</span>
                  </a></li>

                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.services')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.contact')}</span>
                  </a></li>
                </ul>
              </div>
              
              {/* Proje Tasarım ve İmalat */}
              <div>
                <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.consulting_design')}</h4>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.3d_design_services')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.3d_design_automation')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.rnd_machine_design')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.custom_machine_design')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.factory_setup_plan')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.reverse_engineering')}</span>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Hizmetler - Sağ Sütun */}
          <div className="lg:col-span-1">
            <div className="space-y-12">
              {/* İş Geliştirme ve İyileştirme */}
              <div>
                <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.business_improvement')}</h4>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.lean_production_methods')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.3d_design_automation_2')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.rnd_machine_design_2')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.technical_sales_program')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.calculation_reporting_apps')}</span>
                  </a></li>
                </ul>
              </div>
              
              {/* Danışmanlık */}
              <div>
                <h4 className="font-semibold mb-6 text-lg text-tam-blue">{t('footer.consulting')}</h4>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.turkey_business_consulting')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.design_training')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.feasibility_studies')}</span>
                  </a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-3 text-tam-blue group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                    <span className="text-sm">{t('footer.lean_production_training')}</span>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <span>{t('footer.copyright')}</span>
            <a 
              href="https://monolitdigital.com" 
              target="_blank" 
              rel="nofollow" 
              className="text-gray-500 hover:text-gray-300 transition-colors duration-200 flex items-center space-x-1"
            >
              <span className="text-xs">developed by</span>
              <span className="text-xs font-semibold">Monolit Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 