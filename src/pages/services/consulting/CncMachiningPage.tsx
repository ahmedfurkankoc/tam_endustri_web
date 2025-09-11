import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, Wrench, Cog, Hammer, Ruler, Target, RotateCcw } from 'lucide-react';

const CncMachiningPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title={t('consulting.cnc.hero.title')}
        subtitle={t('consulting.cnc.hero.subtitle')}
        description={t('consulting.cnc.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/machine-design.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title={t('consulting.cnc.header.title')}
        description={[t('consulting.cnc.header.desc1')]}
        cards={[
          {
            title: t('consulting.cnc.cards.precision.title'),
            description: t('consulting.cnc.cards.precision.desc'),
            image: "/images/machine-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('consulting.cnc.cards.programming.title'),
            description: t('consulting.cnc.cards.programming.desc'),
            image: "/images/project-design.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('consulting.cnc.cards.quality.title'),
            description: t('consulting.cnc.cards.quality.desc'),
            image: "/images/improvement-service.webp",
            icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('consulting.cnc.section.expertise.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('consulting.cnc.section.expertise.p1')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.cnc.section.expertise.bullets.precision')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.cnc.section.expertise.bullets.geometry')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.cnc.section.expertise.bullets.materials')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/machine-design.webp"
                alt="CNC İşleme Parça Üretimi"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('consulting.cnc.services.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('consulting.cnc.services.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.cnc.services.milling.title')}</h3>
              <p className="text-gray-600">{t('consulting.cnc.services.milling.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.cnc.services.turning.title')}</h3>
              <p className="text-gray-600">{t('consulting.cnc.services.turning.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.cnc.services.drilling.title')}</h3>
              <p className="text-gray-600">{t('consulting.cnc.services.drilling.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.cnc.services.qc.title')}</h3>
              <p className="text-gray-600">{t('consulting.cnc.services.qc.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.cnc.services.prototype.title')}</h3>
              <p className="text-gray-600">{t('consulting.cnc.services.prototype.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.cnc.services.mass.title')}</h3>
              <p className="text-gray-600">{t('consulting.cnc.services.mass.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default CncMachiningPage;
