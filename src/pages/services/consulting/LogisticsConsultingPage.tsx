import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, Truck, Package, BarChart } from 'lucide-react';

const LogisticsConsultingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title={t('consulting.logistics.hero.title')}
        subtitle={t('consulting.logistics.hero.subtitle')}
        description={t('consulting.logistics.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title={t('consulting.logistics.header.title')}
        description={[t('consulting.logistics.header.desc1')]}
        cards={[
          {
            title: t('consulting.logistics.cards.supply.title'),
            description: t('consulting.logistics.cards.supply.desc'),
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('consulting.logistics.cards.warehouse.title'),
            description: t('consulting.logistics.cards.warehouse.desc'),
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('consulting.logistics.cards.transport.title'),
            description: t('consulting.logistics.cards.transport.desc'),
            image: "/images/training-service.webp",
            icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('consulting.logistics.section.expertise.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('consulting.logistics.section.expertise.p1')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.logistics.section.expertise.bullets.supply')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.logistics.section.expertise.bullets.wms')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.logistics.section.expertise.bullets.transport')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Lojistik Danışmanlığı"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('consulting.logistics.services.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('consulting.logistics.services.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.logistics.services.supply.title')}</h3>
              <p className="text-gray-600">{t('consulting.logistics.services.supply.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.logistics.services.warehouse.title')}</h3>
              <p className="text-gray-600">{t('consulting.logistics.services.warehouse.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.logistics.services.transport.title')}</h3>
              <p className="text-gray-600">{t('consulting.logistics.services.transport.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.logistics.services.performance.title')}</h3>
              <p className="text-gray-600">{t('consulting.logistics.services.performance.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.logistics.services.international.title')}</h3>
              <p className="text-gray-600">{t('consulting.logistics.services.international.desc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('consulting.logistics.services.tech.title')}</h3>
              <p className="text-gray-600">{t('consulting.logistics.services.tech.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default LogisticsConsultingPage;
