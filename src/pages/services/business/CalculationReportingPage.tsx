import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';

const CalculationReportingPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title={t('business.calc.hero.title')}
        subtitle={t('business.calc.hero.subtitle')}
        description={t('business.calc.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/calculation/a908f7f5f81c38546f90834856955868_fit.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title={t('business.calc.header.title')}
        description={[t('business.calc.header.desc1'), t('business.calc.header.desc2')]}
        cards={[
          {
            title: t('business.calc.cards.offload.title'),
            description: t('business.calc.cards.offload.desc'),
            image: "/images/calculation/1e35540cdf323936a827b2d706961f74_1710x1002_93x102_1920x1131_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM9 17V9a2 2 0 012-2h2a2 2 0 012 2v8m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('business.calc.cards.accuracy.title'),
            description: t('business.calc.cards.accuracy.desc'),
            image: "/images/calculation/27ed9e95c65868ee450b231f1e722afe_1836x1224_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('business.calc.cards.time_value.title'),
            description: t('business.calc.cards.time_value.desc'),
            image: "/images/calculation/019b75ba644b9f394561e9f0f5459425_1834x1222_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="calculation-reporting"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('business.calc.section.freeup.title')}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>{t('business.calc.section.freeup.p1')}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('business.calc.panel.remove_losses.title')}</h3>
              <p className="text-tam-blue/80 leading-relaxed">{t('business.calc.panel.remove_losses.desc')}</p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-green-200">
            <h4 className="text-xl font-semibold text-green-900 mb-3">{t('business.calc.panel.time_value.title')}</h4>
            <p className="text-green-700 leading-relaxed">{t('business.calc.panel.time_value.desc')}</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default CalculationReportingPage;


