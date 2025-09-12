import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';

const FactorySetupPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title={t('design.factory.hero.title')}
        subtitle={t('design.factory.hero.subtitle')}
        description={t('design.factory.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/factory_setup/ab485f892691b0ae4cddfd08803deec3_fit.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title={t('design.factory.header.title')}
        description={[t('design.factory.header.desc1'), t('design.factory.header.desc2')]}
        cards={[
          {
            title: t('design.factory.cards.layout.title'),
            description: t('design.factory.cards.layout.desc'),
            image: "/images/factory_setup/618ec77da800d727387afb132ecda72b_1279x720_0x0_1280x720_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('design.factory.cards.comm.title'),
            description: t('design.factory.cards.comm.desc'),
            image: "/images/factory_setup/38c262fe81e0bd0af1c75f23c26ea2c8_1710x1140_0x0_1711x1141_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('design.factory.cards.coord.title'),
            description: t('design.factory.cards.coord.desc'),
            image: "/images/factory_setup/04d57de47d08fc36e10c54b770b84ab2_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="factory-setup"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-tam-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('design.factory.section.title')}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>{t('design.factory.section.p1')}</p>
                <p>{t('design.factory.section.p2')}</p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/factory_setup/ab485f892691b0ae4cddfd08803deec3_fit.jpg"
                      alt="Layout Planı"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.factory.grid.layout')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/factory_setup/618ec77da800d727387afb132ecda72b_1279x720_0x0_1280x720_crop.jpg"
                      alt="Makine Konumlandırma"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.factory.grid.machine_place')}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/factory_setup/38c262fe81e0bd0af1c75f23c26ea2c8_1710x1140_0x0_1711x1141_crop.jpg"
                      alt="Haberleşme Ağı"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.factory.grid.network')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/factory_setup/04d57de47d08fc36e10c54b770b84ab2_fit.jpg"
                      alt="Otomasyon Kurgusu"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.factory.grid.automation')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('design.factory.panel.support.title')}</h3>
            <p className="text-tam-black/80 leading-relaxed">{t('design.factory.panel.support.desc')}</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default FactorySetupPage;


