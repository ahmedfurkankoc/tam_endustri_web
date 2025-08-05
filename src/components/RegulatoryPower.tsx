import React from 'react';
import { Check, Cpu, TrendingUp, Users, Zap, Target, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RegulatoryPower: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { text: t('regulatory.3d_design'), icon: Cpu },
    { text: t('regulatory.rnd_machine'), icon: TrendingUp },
    { text: t('regulatory.technical_sales'), icon: Users }
  ];

  const stats = [
    { number: '40%', label: 'Verimlilik Artışı', icon: Zap },
    { number: '60%', label: 'Maliyet Azalması', icon: Target },
    { number: '3x', label: 'Hızlı Tasarım', icon: BarChart3 }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tam-dark mb-6 md:mb-8 leading-tight heading-primary">
              {t('regulatory.title')}
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed body-text">
              {t('regulatory.description')}
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-tam-blue to-tam-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <span className="text-gray-700 body-text font-medium text-sm md:text-base">
                    {feature.text}
                  </span>
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-tam-blue flex-shrink-0 ml-auto" />
                </div>
              ))}
            </div>
            
            <button className="bg-tam-blue text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading transform hover:scale-105 text-sm md:text-base">
              {t('regulatory.cta')}
            </button>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Endüstriyel tasarım"
                className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <h4 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Endüstriyel Tasarım</h4>
                <p className="text-xs md:text-sm opacity-90">Modern teknoloji ile</p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-tam-blue to-tam-accent rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-tam-blue mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-600 body-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default RegulatoryPower; 