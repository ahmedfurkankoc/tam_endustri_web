import React from 'react';
import { Check, GraduationCap, Palette, Globe, FileText, Calculator, Factory, Settings, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrainingServices: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { text: t('approvals.lean_training'), icon: GraduationCap },
    { text: t('approvals.design_training'), icon: Palette },
    { text: t('approvals.business_consulting'), icon: Globe },
    { text: t('approvals.feasibility'), icon: FileText },
    { text: t('approvals.calculation'), icon: Calculator },
    { text: t('approvals.factory_setup'), icon: Factory },
    { text: t('approvals.custom_machine'), icon: Settings },
    { text: 'Ekip Eğitimleri ve Geliştirme', icon: Users }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tam-dark mb-6 md:mb-8 leading-tight heading-primary">
              {t('approvals.title')}
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed body-text">
              {t('approvals.description')}
            </p>
            
            <button className="bg-tam-blue text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading transform hover:scale-105 text-sm md:text-base">
              {t('approvals.cta')}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-tam-blue to-tam-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-gray-700 text-xs md:text-sm body-text font-medium leading-tight">
                  {service.text}
                </span>
                <Check className="w-3 h-3 md:w-4 md:h-4 text-tam-blue flex-shrink-0 ml-auto" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Image Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
            <img 
              src="/images/improvement-service.webp"
              alt="Eğitim ve Danışmanlık"
              className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
              <h4 className="font-semibold text-base md:text-lg">Eğitim Programları</h4>
              <p className="text-xs md:text-sm opacity-90">Uzman eğitmenlerimizle</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
            <video 
              src="/images/sales-consulting.mp4"
              className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-300"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:bottom-4 text-white">
              <h4 className="font-semibold text-base md:text-lg">Danışmanlık</h4>
              <p className="text-xs md:text-sm opacity-90">Uzman danışmanlık hizmetleri</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg">
            <img 
              src="/images/project-design.webp"
              alt="Proje Tasarımı"
              className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
              <h4 className="font-semibold text-base md:text-lg">Proje Tasarımı</h4>
              <p className="text-xs md:text-sm opacity-90">3D tasarım ve imalat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingServices;
