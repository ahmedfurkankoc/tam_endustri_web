import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';

const LeanProductionPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title={t('business.lean.hero.title')}
        subtitle={t('business.lean.hero.subtitle')}
        description={t('business.lean.hero.description')}
        backgroundType="image"
        backgroundSrc="/hero-lean-production.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title={t('business.lean.header.title')}
        description={[t('business.lean.header.desc1'), t('business.lean.header.desc2')]}
        cards={[
          {
            title: t('business.lean.cards.kaizen.title'),
            description: t('business.lean.cards.kaizen.desc'),
            image: "/images/improvement-service.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('business.lean.cards.apps.title'),
            description: t('business.lean.cards.apps.desc'),
            image: "/images/lean.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('business.lean.cards.fixtures.title'),
            description: t('business.lean.cards.fixtures.desc'),
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="lean-production-services"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-tam-blue/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tam-blue/20 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-tam-blue/10 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('business.lean.section.value.title')}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>{t('business.lean.section.value.p1')}</p>
                <p>{t('business.lean.section.value.p2')}</p>
                <p>{t('business.lean.section.value.p3')}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('business.lean.panel.shopfloor.title')}</h3>
              <p className="text-tam-blue/80 leading-relaxed">{t('business.lean.panel.shopfloor.desc')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('business.lean.section.saving.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('business.lean.section.saving.desc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h4 className="text-xl font-semibold text-tam-blue mb-3">{t('business.lean.panel.less_effort.title')}</h4>
              <p className="text-tam-blue/80 leading-relaxed">{t('business.lean.panel.less_effort.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Yalın Üretim Eğitimi Bölümü - Modern ve diğer servis sayfalarıyla uyumlu */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Sol Metin */}
            <div>
              <div className="flex items-start mb-6">
                <div className="p-4 bg-tam-blue rounded-2xl mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('business.lean.training.title')}</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{t('business.lean.training.p1')}</p>
                <p>{t('business.lean.training.p2')}</p>
              </div>
            </div>

            {/* Sağ Görsel Mozaik */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/improvement-service.webp"
                      alt="Sürekli İyileştirme"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">{t('business.lean.grid.kaizen')}</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/lean.webp"
                      alt="Yalın Uygulamalar"
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">{t('business.lean.grid.lean_apps')}</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/machine-design.webp"
                      alt="Aparat & Makine"
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">{t('business.lean.grid.fixtures')}</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/project-design.webp"
                      alt="Akış & Yerleşim"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">{t('business.lean.grid.flow_layout')}</div>
                  </div>
                </div>
              </div>

              {/* Yüzen küçük bilgi kutuları */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-tam-blue/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tam-blue">Kaizen</div>
                  <div className="text-xs text-gray-600">{t('business.lean.float.kaizen')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('business.lean.cta.title')}</h3>
            <p className="text-tam-blue/80 leading-relaxed">{t('business.lean.cta.desc')}</p>
          </div>
        </div>
      </section>
      <ContactSection />

      <Footer />
    </div>
  );
};

export default LeanProductionPage;
