import React from 'react';
import { Globe, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ConceptValidators: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-tam-dark rounded-b-2xl md:rounded-b-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight heading-primary">
              {t('concept.title')}
            </h2>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed body-text">
              {t('concept.description')}
            </p>
            
            <button className="bg-tam-blue text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-tam-accent transition-colors font-heading transform hover:scale-105 flex items-center space-x-2 text-sm md:text-base">
              <span>{t('concept.cta')}</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Türkiye Business Danışmanlığı"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <h4 className="font-bold text-lg md:text-xl mb-1 md:mb-2">Türkiye Pazarına Giriş</h4>
                <p className="text-xs md:text-sm opacity-90">Uzman danışmanlık hizmetleri</p>
              </div>
            </div>
            
            
          </div>
        </div>
        
        {/* Bottom Features */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pazar Araştırması"
              className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
              <h4 className="font-semibold text-sm md:text-lg">Pazar Araştırması</h4>
              <p className="text-xs md:text-sm opacity-90">Detaylı analiz ve raporlama</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Strateji Geliştirme"
              className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
              <h4 className="font-semibold text-sm md:text-lg">Strateji Geliştirme</h4>
              <p className="text-xs md:text-sm opacity-90">Uzun vadeli planlama</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Uygulama Desteği"
              className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
              <h4 className="font-semibold text-sm md:text-lg">Uygulama Desteği</h4>
              <p className="text-xs md:text-sm opacity-90">Sürekli destek ve takip</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptValidators; 