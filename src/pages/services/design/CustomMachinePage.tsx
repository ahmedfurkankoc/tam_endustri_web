import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';

const CustomMachinePage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title={t('design.custom.hero.title')}
        subtitle={t('design.custom.hero.subtitle')}
        description={t('design.custom.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/custom_machine/423c6a674c45f0805d998324e46f2c7d_2400x1600_fit.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title={t('design.custom.header.title')}
        description={[t('design.custom.header.desc1'), t('design.custom.header.desc2')]}
        cards={[
          {
            title: t('design.custom.cards.consult.title'),
            description: t('design.custom.cards.consult.desc'),
            image: "/images/custom_machine/42dcb3e255f64a37516a7e6f02f7ad6f_1912x1080_0x0_1920x1080_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('design.custom.cards.prep.title'),
            description: t('design.custom.cards.prep.desc'),
            image: "/images/custom_machine/31cc039b695147ba8769943c7fd59c0a_1918x1029_0x0_1920x1029_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('design.custom.cards.turnkey.title'),
            description: t('design.custom.cards.turnkey.desc'),
            image: "/images/custom_machine/fa1ac79a040a05b42eb97bee5371ed0f_1920x640_0x0_1920x1280_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="custom-machine"
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
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('design.custom.section.title')}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>{t('design.custom.section.p1')}</p>
                <p>{t('design.custom.section.p2')}</p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/custom_machine/423c6a674c45f0805d998324e46f2c7d_2400x1600_fit.jpg"
                      alt="Özel Tasarım"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.custom.grid.custom_design')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/custom_machine/42dcb3e255f64a37516a7e6f02f7ad6f_1912x1080_0x0_1920x1080_crop.jpg"
                      alt="Mekanik & Elektronik Seçimler"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.custom.grid.mechanical_electrical')}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/custom_machine/31cc039b695147ba8769943c7fd59c0a_1918x1029_0x0_1920x1029_crop.jpg"
                      alt="Fizibilite & Maliyet"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.custom.grid.feasibility_cost')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/custom_machine/fa1ac79a040a05b42eb97bee5371ed0f_1920x640_0x0_1920x1280_crop.jpg"
                      alt="Üretim Hazırlığı"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.custom.grid.production_prep')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('design.custom.panel.solutions.title')}</h3>
              <p className="text-tam-blue/80 leading-relaxed">{t('design.custom.panel.solutions.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-200">
              <h3 className="text-2xl font-semibold text-green-900 mb-3">{t('design.custom.panel.turnkey.title')}</h3>
              <p className="text-green-700 leading-relaxed">{t('design.custom.panel.turnkey.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default CustomMachinePage;


