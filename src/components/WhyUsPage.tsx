import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import { Sparkles, Zap, Target, ArrowRight, TrendingUp, Award, Users, Globe, Settings, CheckCircle, Star, Lightbulb, Shield, Clock, BarChart3 } from 'lucide-react';

interface StatCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

interface SuccessStory {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
}

interface DifferenceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const WhyUsPage: React.FC = () => {
  const { t, language } = useLanguage();

  const statCards: StatCard[] = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: '15+',
      label: t('why.experience.years'),
      gradient: 'from-blue-600/20 via-purple-600/20 to-cyan-600/20'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: '200+',
      label: t('why.experience.projects'),
      gradient: 'from-emerald-600/20 via-teal-600/20 to-green-600/20'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '150+',
      label: t('why.experience.clients'),
      gradient: 'from-orange-600/20 via-red-600/20 to-pink-600/20'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: '25+',
      label: t('why.experience.countries'),
      gradient: 'from-indigo-600/20 via-blue-600/20 to-cyan-600/20'
    }
  ];

  const valueCards: ValueCard[] = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t('why.values.excellence.title'),
      description: t('why.values.excellence.description'),
      gradient: 'from-blue-600/20 via-purple-600/20 to-cyan-600/20',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('why.values.trust.title'),
      description: t('why.values.trust.description'),
      gradient: 'from-emerald-600/20 via-teal-600/20 to-green-600/20',
      accentColor: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('why.values.innovation.title'),
      description: t('why.values.innovation.description'),
      gradient: 'from-orange-600/20 via-red-600/20 to-pink-600/20',
      accentColor: 'from-orange-500 to-red-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('why.values.efficiency.title'),
      description: t('why.values.efficiency.description'),
      gradient: 'from-indigo-600/20 via-blue-600/20 to-cyan-600/20',
      accentColor: 'from-indigo-500 to-cyan-500'
    }
  ];

  const successStories: SuccessStory[] = [
    {
      title: t('why.success.story1.title'),
      description: t('why.success.story1.description'),
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-emerald-600/20 via-teal-600/20 to-green-600/20',
      accentColor: 'from-emerald-500 to-green-500'
    },
    {
      title: t('why.success.story2.title'),
      description: t('why.success.story2.description'),
      icon: <Settings className="w-8 h-8" />,
      gradient: 'from-blue-600/20 via-purple-600/20 to-cyan-600/20',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('why.success.story3.title'),
      description: t('why.success.story3.description'),
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-orange-600/20 via-red-600/20 to-pink-600/20',
      accentColor: 'from-orange-500 to-red-500'
    }
  ];

  const differenceCards: DifferenceCard[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('why.difference.global_expertise'),
      description: t('why.difference.global_expertise_desc'),
      gradient: 'from-blue-600/20 via-purple-600/20 to-cyan-600/20',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('why.difference.technical_excellence'),
      description: t('why.difference.technical_excellence_desc'),
      gradient: 'from-emerald-600/20 via-teal-600/20 to-green-600/20',
      accentColor: 'from-emerald-500 to-green-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('why.difference.lean_methodology'),
      description: t('why.difference.lean_methodology_desc'),
      gradient: 'from-orange-600/20 via-red-600/20 to-pink-600/20',
      accentColor: 'from-orange-500 to-red-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('why.difference.custom_solutions'),
      description: t('why.difference.custom_solutions_desc'),
      gradient: 'from-indigo-600/20 via-blue-600/20 to-cyan-600/20',
      accentColor: 'from-indigo-500 to-cyan-500'
    }
  ];

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
              <span className="text-white/90 font-medium">Experience & Excellence</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
              {t('why.hero.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-8">
              {t('why.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Discover Why Choose Us</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('why.experience.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('why.experience.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statCards.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-tam-blue to-tam-accent rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tam-blue/5 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('why.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('why.values.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueCards.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.accentColor} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('why.success.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('why.success.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${story.accentColor} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {story.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tam-blue/5 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('why.difference.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('why.difference.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differenceCards.map((card, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${card.accentColor} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-tam-blue via-blue-600 to-tam-accent relative overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white/90 font-semibold">Ready to Work Together?</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-sm leading-tight">
            {t('why.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('why.cta.description')}
          </p>
          <a
            href={language === 'en' ? '/en/contact' : '/iletisim'}
            className="group inline-flex items-center space-x-4 bg-white text-tam-blue px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <span>{t('why.cta.button')}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUsPage;
