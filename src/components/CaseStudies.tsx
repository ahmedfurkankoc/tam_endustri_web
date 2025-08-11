import React from 'react';
import { ArrowRight, TrendingUp, Award, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CaseStudies: React.FC = () => {
  const { t } = useLanguage();

  const stories = [
    {
      title: t('success.automotive.title'),
      category: t('success.category'),
      image: '/images/case-study-1.webp',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-purple-600',
      stats: '40% Verimlilik Artışı'
    },
    {
      title: t('success.manufacturing.title'),
      category: t('success.category'),
      image: '/images/machine-design.webp',
      icon: Award,
      gradient: 'from-green-500 to-blue-600',
      stats: '60% Maliyet Azalması'
    },
    {
      title: t('success.design.title'),
      category: t('success.category'),
      image: '/images/improvement-service.webp',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      stats: '3x Hızlı Tasarım'
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tam-dark mb-4 md:mb-6 heading-primary">
            {t('success.title')}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto body-text px-4">
            Müşterilerimizin başarı hikayeleri ve elde ettikleri sonuçlar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              {/* Story Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} bg-opacity-30`}></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${story.gradient} flex items-center justify-center shadow-lg`}>
                    <story.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                    <span className="text-xs md:text-sm font-semibold text-gray-800">{story.stats}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3 font-medium body-text uppercase tracking-wide">
                  {story.category}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-relaxed heading-secondary group-hover:text-tam-blue transition-colors">
                  {story.title}
                </h3>
                <div className="flex items-center justify-between group-hover:transform group-hover:translate-x-2 transition-transform">
                  <span className="text-tam-blue font-semibold text-sm md:text-lg heading-secondary">
                    Detayları Gör
                  </span>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-tam-blue rounded-full flex items-center justify-center group-hover:bg-tam-accent transition-colors">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Stats Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-tam-blue mb-1 md:mb-2">150+</div>
            <div className="text-gray-600 body-text text-xs md:text-sm">Tamamlanan Proje</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-tam-blue mb-1 md:mb-2">50+</div>
            <div className="text-gray-600 body-text text-xs md:text-sm">Mutlu Müşteri</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-tam-blue mb-1 md:mb-2">5+</div>
            <div className="text-gray-600 body-text text-xs md:text-sm">Yıllık Deneyim</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-tam-blue mb-1 md:mb-2">24/7</div>
            <div className="text-gray-600 body-text text-xs md:text-sm">Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
