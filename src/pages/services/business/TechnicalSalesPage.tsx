import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';

const TechnicalSalesPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title={t('business.sales.hero.title')}
        subtitle={t('business.sales.hero.subtitle')}
        description={t('business.sales.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/technical_sale/e54b811cf2b3533ade7a882de4d75600_fit.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title={t('business.sales.header.title')}
        description={[t('business.sales.header.desc1'), t('business.sales.header.desc2')]}
        cards={[
          {
            title: t('business.sales.cards.presentation.title'),
            description: t('business.sales.cards.presentation.desc'),
            image: "/images/technical_sale/166f7449ba8af5931610b7158fdb511f_1870x1246_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V14.5a2 2 0 01-2.447 1.894L15 14" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('business.sales.cards.layout_docs.title'),
            description: t('business.sales.cards.layout_docs.desc'),
            image: "/images/technical_sale/b35706e025b49aad731cfa451eb2f1e9_1830x1102_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('business.sales.cards.calc_feas.title'),
            description: t('business.sales.cards.calc_feas.desc'),
            image: "/images/technical_sale/11e420e4c6540724c3ea3fcf7eecac3d_1709x1011_93x103_1920x1141_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="technical-sales"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('business.sales.section.efficient.title')}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>{t('business.sales.section.efficient.p1')}</p>
                <p>{t('business.sales.section.efficient.p2')}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('business.sales.panel.control.title')}</h3>
              <p className="text-tam-blue/80 leading-relaxed">{t('business.sales.panel.control.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default TechnicalSalesPage;


