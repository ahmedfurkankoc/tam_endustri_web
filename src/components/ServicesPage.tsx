import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import { Settings, TrendingUp, GraduationCap, ChevronRight, ChevronDown, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  image: string;
  gradient: string;
  accentColor: string;
}

const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const serviceCards: ServiceCard[] = [
    {
      id: 'design-manufacturing',
      title: t('services.design_manufacturing.title'),
      description: t('services.design_manufacturing.description'),
      icon: <Settings className="w-6 h-6" />,
      items: [
        t('services.design_manufacturing.items.3d_design'),
        t('services.design_manufacturing.items.3d_automation'),
        t('services.design_manufacturing.items.rnd_machine'),
        t('services.design_manufacturing.items.custom_machine'),
        t('services.design_manufacturing.items.factory_setup'),
        t('services.design_manufacturing.items.reverse_engineering'),
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-blue-600/20 via-purple-600/20 to-cyan-600/20',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'business-improvement',
      title: t('services.business_improvement.title'),
      description: t('services.business_improvement.description'),
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        t('services.business_improvement.items.lean_production'),
        t('services.business_improvement.items.3d_automation'),
        t('services.business_improvement.items.rnd_machine'),
        t('services.business_improvement.items.technical_sales'),
        t('services.business_improvement.items.calculation_reporting'),
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-emerald-600/20 via-teal-600/20 to-green-600/20',
      accentColor: 'from-emerald-500 to-green-500'
    },
    {
      id: 'consulting-training',
      title: t('services.consulting_training.title'),
      description: t('services.consulting_training.description'),
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        t('services.consulting_training.items.sales_consulting'),
        t('services.consulting_training.items.design_training'),
        t('services.consulting_training.items.feasibility_studies'),
        t('services.consulting_training.items.lean_training'),
      ],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-orange-600/20 via-red-600/20 to-pink-600/20',
      accentColor: 'from-orange-500 to-red-500'
    }
  ];

  const handleCardClick = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-tam-blue via-blue-600 to-tam-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 text-white/20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-white/20">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-white/20">
          <Target className="w-7 h-7" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white/90 font-medium">Innovation & Excellence</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-8">
              {t('services.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Discover Our Services</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 relative">
        <div className="w-full px-6">
          <div className="space-y-0">
            {serviceCards.map((card, index) => (
              <div
                key={card.id}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-1000 ease-out transform perspective-1000 ${
                  expandedCard === card.id
                    ? 'scale-[1.02] shadow-2xl shadow-black/30 rotate-y-0 z-50'
                    : 'hover:scale-[1.01] hover:shadow-xl hover:shadow-black/20 hover:rotate-y-1'
                }`}
                onClick={() => handleCardClick(card.id)}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  marginTop: index === 0 ? '0' : '-1rem',
                  zIndex: expandedCard === card.id ? 50 : serviceCards.length - index
                }}
              >
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 ${
                      expandedCard === card.id ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}></div>
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Card Header */}
                <div className="relative z-10 p-8 lg:p-12 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                      <div className="relative">
                        <div className={`w-24 h-24 bg-gradient-to-br ${card.accentColor} rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          {card.icon}
                        </div>
                        <div className={`absolute -inset-3 bg-gradient-to-br ${card.accentColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        {/* Floating Particles */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-ping opacity-60"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping opacity-40 delay-300"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-1 h-8 bg-gradient-to-b ${card.accentColor} rounded-full`}></div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-sm">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-white text-lg leading-relaxed max-w-2xl">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className={`text-transparent bg-gradient-to-r ${card.accentColor} bg-clip-text transition-all duration-300 group-hover:scale-110`}>
                      {expandedCard === card.id ? (
                        <ChevronDown className="w-10 h-10" />
                      ) : (
                        <ChevronRight className="w-10 h-10" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-1000 ease-out relative z-10 ${
                  expandedCard === card.id ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 lg:p-12">
                    <div className="space-y-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <h4 className="text-3xl font-bold text-white">
                            {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
                          </h4>
                          <div className={`w-12 h-1 bg-gradient-to-r ${card.accentColor} rounded-full`}></div>
                        </div>
                        <div className="flex items-center space-x-3 text-transparent bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text">
                          <span className="text-sm font-semibold">Explore All</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {card.items.map((item, index) => (
                          <div key={index} className="group/item relative flex items-start space-x-4 p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 overflow-hidden">
                            {/* Hover Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`}></div>
                            <div className="relative z-10 flex items-center space-x-4">
                              <div className={`w-4 h-4 bg-gradient-to-br ${card.accentColor} rounded-full mt-2 flex-shrink-0 shadow-lg animate-pulse`}></div>
                              <span className="text-white font-bold text-lg group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                            </div>
                            {/* Corner Accent */}
                            <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${card.accentColor} opacity-20 rounded-bl-3xl`}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tam-blue/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-tam-blue/10 to-tam-accent/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-tam-blue" />
            <span className="text-tam-blue font-semibold">Ready to Transform?</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-sm leading-tight">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('services.cta.description')}
          </p>
          <a
            href={language === 'en' ? '/en/contact' : '/iletisim'}
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-tam-blue to-tam-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-tam-blue/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span>{t('services.cta.button')}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage; 