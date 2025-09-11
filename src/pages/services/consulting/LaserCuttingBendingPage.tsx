import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, Ruler, Target, Wrench, Zap, Flame, Factory } from 'lucide-react';

const LaserCuttingBendingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title={t('consulting.laser.hero.title')}
        subtitle={t('consulting.laser.hero.subtitle')}
        description={t('consulting.laser.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title={t('consulting.laser.header.title')}
        description={[t('consulting.laser.header.desc1')]}
        cards={[
          {
            title: t('consulting.laser.cards.cut.title'),
            description: t('consulting.laser.cards.cut.desc'),
            image: "/images/machine-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('consulting.laser.cards.bend.title'),
            description: t('consulting.laser.cards.bend.desc'),
            image: "/images/project-design.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('consulting.laser.cards.qc.title'),
            description: t('consulting.laser.cards.qc.desc'),
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('consulting.laser.section.expertise.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('consulting.laser.section.expertise.p1')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.laser.section.expertise.bullets.precision')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.laser.section.expertise.bullets.geometry')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.laser.section.expertise.bullets.materials')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/improvement-service.webp"
                alt="Lazer Kesim ve Büküm Operasyonları"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('consulting.laser.services.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('consulting.laser.services.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.laser.services.co2.title')}</h3>
              <p className="text-gray-600">{t('consulting.laser.services.co2.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.laser.services.fiber.title')}</h3>
              <p className="text-gray-600">{t('consulting.laser.services.fiber.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.laser.services.bending.title')}</h3>
              <p className="text-gray-600">{t('consulting.laser.services.bending.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.laser.services.precision.title')}</h3>
              <p className="text-gray-600">{t('consulting.laser.services.precision.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.laser.services.qc.title')}</h3>
              <p className="text-gray-600">{t('consulting.laser.services.qc.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.laser.services.mass.title')}</h3>
              <p className="text-gray-600">{t('consulting.laser.services.mass.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LaserCuttingBendingPage;
