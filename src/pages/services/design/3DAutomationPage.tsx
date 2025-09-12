import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';
import ContactSection from '../../../components/ContactSection';
import StatsSection from '../../../components/StatsSection';
import { useLanguage } from '../../../contexts/LanguageContext';

const ThreeDAutomationPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title={t('design.3d_automation.hero.title')}
        subtitle={t('design.3d_automation.hero.subtitle')}
        description={t('design.3d_automation.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/3d_automation/562743208d1a781ef5ef004c28cf7831_2400x1600_fit.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title={t('design.3d_automation.header.title')}
        description={[
          t('design.3d_automation.header.desc1'),
          t('design.3d_automation.header.desc2')
        ]}
        cards={[
          {
            title: t('design.3d_automation.cards.minimize_errors.title'),
            description: t('design.3d_automation.cards.minimize_errors.desc'),
            image: "/images/3d_automation/48e1635831387e371881fad05f2a67a8_1632x1078_0x0_1632x1088_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('design.3d_automation.cards.simple_example.title'),
            description: t('design.3d_automation.cards.simple_example.desc'),
            image: "/images/3d_automation/87c498637b5a7b52227819353a732154_1639x1088_0x0_1639x1093_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          },
          {
            title: t('design.3d_automation.cards.time_saving.title'),
            description: t('design.3d_automation.cards.time_saving.desc'),
            image: "/images/3d_automation/1a695afdc0534d90685048b4bf0342ce_2822x1590_0x0_2822x1869_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          }
        ]}
        id="otomasyon-baslik"
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
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('design.3d_automation.section.title')}</h2>
              <p className="text-indigo-600 font-semibold mt-3">{t('design.3d_automation.section.subtitle')}</p>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{t('design.3d_automation.section.p1')}</p>
                <p>{t('design.3d_automation.section.p2')}</p>
                <h3 className="text-2xl font-semibold text-tam-blue">{t('design.3d_automation.section.h1')}</h3>
                <p>{t('design.3d_automation.section.p3')}</p>
                <h3 className="text-2xl font-semibold text-tam-blue">{t('design.3d_automation.section.h2')}</h3>
                <p>{t('design.3d_automation.section.p4')}</p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/3d_automation/48e1635831387e371881fad05f2a67a8_1632x1078_0x0_1632x1088_crop.jpg"
                      alt="CAD Otomasyon"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_automation.grid.cad_automation')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/3d_automation/87c498637b5a7b52227819353a732154_1639x1088_0x0_1639x1093_crop.jpg"
                      alt="Tekrarlayan İşler"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_automation.grid.repetitive_tasks')}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/3d_automation/1a695afdc0534d90685048b4bf0342ce_2822x1590_0x0_2822x1869_crop.jpg"
                      alt="Kontrol & Hesap"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_automation.grid.control_calc')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/3d_automation/562743208d1a781ef5ef004c28cf7831_2400x1600_fit.jpg"
                      alt="Sürdürülebilirlik"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_automation.grid.sustainability')}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="/images/3d_automation/562743208d1a781ef5ef004c28cf7831_2400x1600_fit.jpg"
                      alt="Otomasyon Banner"
                      className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
                    <div className="absolute left-5 bottom-5 text-white">
                      <p className="text-sm uppercase tracking-wider opacity-90">SolidWorks API</p>
                      <h4 className="text-xl md:text-2xl font-semibold">{t('design.3d_automation.grid.banner_line')}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-tam-blue/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tam-blue">{t('design.3d_automation.badge.time_gain')}</div>
                  <div className="text-xs text-gray-600">{t('design.3d_automation.badge.time_gain_label')}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100">
          <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{t('design.3d_automation.badge.less')}</div>
                  <div className="text-xs text-gray-600">{t('design.3d_automation.badge.less_label')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-tam-blue/20">
              <h4 className="text-xl font-semibold text-tam-blue mb-3">{t('design.3d_automation.box.software_power.title')}</h4>
              <p className="text-tam-blue/80">{t('design.3d_automation.box.software_power.desc')}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <h4 className="text-xl font-semibold text-green-900 mb-3">{t('design.3d_automation.box.simple_example.title')}</h4>
              <p className="text-green-700 mb-4">{t('design.3d_automation.box.simple_example.desc')}</p>
              <ul className="list-disc pl-5 space-y-2 text-green-700">
                <li>{t('design.3d_automation.box.simple_example.list1')}</li>
                <li>{t('design.3d_automation.box.simple_example.list2')}</li>
                <li>{t('design.3d_automation.box.simple_example.list3')}</li>
                <li>{t('design.3d_automation.box.simple_example.list4')}</li>
                <li>{t('design.3d_automation.box.simple_example.list5')}</li>
                <li>{t('design.3d_automation.box.simple_example.list6')}</li>
                <li>{t('design.3d_automation.box.simple_example.list7')}</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <h4 className="text-xl font-semibold text-purple-900 mb-3">{t('design.3d_automation.box.time_calc.title')}</h4>
              <p className="text-purple-700">{t('design.3d_automation.box.time_calc.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">'TAM' Tasarım Yazılımları</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Yalın Üretim Sistemleri (Lean Manufacturing) ve Japon “Kaizen” yaklaşımlarının belirttiği gibi, değer üretmeyen sürelerin farkına varmak ilk adımdır. Doğru algoritma ve SolidWorks API ile çok daha zor tasarımları dahi otomatikleştirebilirsiniz.
            </p>
          </div>

          <StatsSection
            stats={[
              { value: "5x", label: "Daha Hızlı Çevrim" },
              { value: "%80-90", label: "Hata Azalması" },
              { value: "24/7", label: "Sürdürülebilir Üretkenlik" },
              { value: "%100", label: "Özel Arayüz Uyumu" }
            ]}
          />
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ThreeDAutomationPage;
