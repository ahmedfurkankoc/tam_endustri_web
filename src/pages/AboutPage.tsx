import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, Globe, Factory, Lightbulb, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();






  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-tam-blue to-tam-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-l text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero_description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50 rounded-t-3xl -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-tam-blue/10 to-tam-accent/10 rounded-2xl p-8 border border-tam-blue/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.projects')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">500+</p>
                </div>
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.countries')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">25+</p>
                </div>
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.clients')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">200+</p>
                </div>
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.experience')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">15+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-accent/5 rounded-2xl p-8 border border-tam-blue/10">
              <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-tam-accent/5 to-tam-blue/5 rounded-2xl p-8 border border-tam-accent/10">
              <div className="bg-tam-accent rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>







      <Footer />
    </div>
  );
};

export default AboutPage; 