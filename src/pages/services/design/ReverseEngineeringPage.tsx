import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';

const ReverseEngineeringPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title={t('design.reverse.hero.title')}
        subtitle={t('design.reverse.hero.subtitle')}
        description={t('design.reverse.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/reverse_engineering/clock-mechanism-made-technique-toning-very-shallow-depth-field-focus-central-gears.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title={t('design.reverse.header.title')}
        description={[t('design.reverse.header.desc1'), t('design.reverse.header.desc2')]}
        cards={[
          {
            title: t('design.reverse.cards.detect.title'),
            description: t('design.reverse.cards.detect.desc'),
            image: "/images/reverse_engineering/7812a5725f8765996685383c398411b8_1761x1172_0x0_1761x1174_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('design.reverse.cards.design.title'),
            description: t('design.reverse.cards.design.desc'),
            image: "/images/reverse_engineering/c7f04abe0c9494e78b406d4fb90ec02a_1758x1318_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('design.reverse.cards.manufacture.title'),
            description: t('design.reverse.cards.manufacture.desc'),
            image: "/images/factory_setup/04d57de47d08fc36e10c54b770b84ab2_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="reverse-engineering"
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
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('design.reverse.section.title')}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>{t('design.reverse.section.p1')}</p>
                <p>{t('design.reverse.section.p2')}</p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/reverse_engineering/7812a5725f8765996685383c398411b8_1761x1172_0x0_1761x1174_crop.jpg"
                      alt="Ölçüm & Analiz"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.reverse.grid.measure_analysis')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/reverse_engineering/c7f04abe0c9494e78b406d4fb90ec02a_1758x1318_fit.jpg"
                      alt="CAD Tasarım"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.reverse.grid.cad_design')}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/3d_design/0b26bb86a5ee380ef2f367e2f8caff0b_2128x1410_0x0_2132x1412_crop.jpg"
                      alt="Malzeme Seçimi"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.reverse.grid.material_select')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/rnd/3a1fe9007edd8e4b0429c7007e030644_2400x1350_fit.jpg"
                      alt="Üretim Hazırlığı"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.reverse.grid.production_prep')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('design.reverse.panel.detail.title')}</h3>
            <p className="text-tam-blue/80 leading-relaxed">{t('design.reverse.panel.detail.desc')}</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ReverseEngineeringPage;


