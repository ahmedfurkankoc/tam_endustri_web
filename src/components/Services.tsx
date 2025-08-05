import React from 'react';
import { ArrowRight, Cpu, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.design.title'),
      description: t('services.design.desc'),
      icon: Cpu,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: t('services.improvement.title'),
      description: t('services.improvement.desc'),
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: t('services.training.title'),
      description: t('services.training.desc'),
      icon: Users,
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              {/* Service Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} bg-opacity-20`}></div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-tam-blue font-bold text-lg md:text-xl mb-3 md:mb-4 heading-secondary group-hover:text-tam-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed body-text">
                  {service.description}
                </p>
                <div className="flex items-center justify-between group-hover:transform group-hover:translate-x-2 transition-transform">
                  <span className="text-tam-blue font-semibold text-base md:text-lg heading-secondary">
                    {t('services.details')}
                  </span>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-tam-blue rounded-full flex items-center justify-center group-hover:bg-tam-accent transition-colors">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
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