import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';
import ContactSection from '../../../components/ContactSection';
// Removed unused StatsSection import
import { useLanguage } from '../../../contexts/LanguageContext';

const ThreeDDesignPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title={t('design.3d_design.hero.title')}
        subtitle={t('design.3d_design.hero.subtitle')}
        description={t('design.3d_design.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/3d_design/30985ce996f980166020cfc66539eef1_2600x1600_0x0_2600x1734_crop.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title={t('design.3d_design.header.title')}
        description={[t('design.3d_design.header.desc1'), t('design.3d_design.header.desc2')]}
        cards={[
          {
            title: t('design.3d_design.cards.concept.title'),
            description: t('design.3d_design.cards.concept.desc'),
            image: "/images/3d_design/d2187313f59e5e5023fd7417be64b91e_2128x1417_0x0_2131x1421_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('design.3d_design.cards.modeling.title'),
            description: t('design.3d_design.cards.modeling.desc'),
            image: "/images/3d_design/0b26bb86a5ee380ef2f367e2f8caff0b_2128x1410_0x0_2132x1412_crop.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('design.3d_design.cards.production_prep.title'),
            description: t('design.3d_design.cards.production_prep.desc'),
            image: "/images/3d_design/e4af8039ce4b9ba95bae29bf12199db7_2400x3000_fit.jpg",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-purple-500 to-purple-600"
          }
        ]}
        id="cozum-odakli-tasarim"
      />



      {/* TAM Endüstri Yardım Bölümü */}
      <section className="py-20 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Ana Başlık ve Görsel Bölümü */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-start mb-6">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  {t('design.3d_design.help.title')}
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t('design.3d_design.help.p1')}
                </p>
                <p>
                  {t('design.3d_design.help.p2')}
                </p>
              </div>
            </div>
            
            {/* Görsel Bölümü */}
            <div className="relative flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4 mx-auto self-center">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/3d_design/30985ce996f980166020cfc66539eef1_2600x1600_0x0_2600x1734_crop.jpg"
                      alt="CAD Tasarım Süreci"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_design.grid.cad')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/3d_design/d2187313f59e5e5023fd7417be64b91e_2128x1417_0x0_2131x1421_crop.jpg"
                      alt="Makine Tasarımı"
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_design.grid.machine')}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/3d_design/0b26bb86a5ee380ef2f367e2f8caff0b_2128x1410_0x0_2132x1412_crop.jpg"
                      alt="3D Analiz"
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_design.grid.analysis')}</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/3d_design/e4af8039ce4b9ba95bae29bf12199db7_2400x3000_fit.jpg"
                      alt="Proje Geliştirme"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{t('design.3d_design.grid.project_dev')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-tam-blue/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tam-blue">15+</div>
                  <div className="text-xs text-gray-600">{t('design.3d_design.floats.experience')}</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">10K+</div>
                  <div className="text-xs text-gray-600">{t('design.3d_design.floats.projects')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Uzmanlık Alanları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-tam-blue/10 to-tam-blue/20 p-6 rounded-xl border border-tam-blue/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-tam-blue/20 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-tam-blue rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-tam-blue">Mekanik Sistemler</h3>
              </div>
              <p className="text-tam-blue/80 text-sm">Hassas mekanik parça ve sistem tasarımları</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-500 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-900">Elektronik Sistemler</h3>
              </div>
              <p className="text-green-700 text-sm">Entegre elektronik tasarım çözümleri</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-500 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-purple-900">Pnömatik/Hidrolik</h3>
              </div>
              <p className="text-purple-700 text-sm">Akışkan güç sistemleri tasarımı</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/30 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-500 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-orange-900">Otomasyon</h3>
              </div>
              <p className="text-orange-700 text-sm">Tam otomasyonlu sistem tasarımları</p>
            </div>
          </div>


        </div>
      </section>

      {/* Yenilikçi Tasarım Bölümü */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-tam-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-4 bg-tam-blue rounded-full">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('design.3d_design.innovative.title')}
            </h2>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-8">
              {t('design.3d_design.innovative.subtitle')}
            </h3>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t('design.3d_design.innovative.p1')}
              </p>
              <p>
                {t('design.3d_design.innovative.p2')}
              </p>
            </div>
          </div>

          {/* Analiz ve Hesaplama Yetenekleri */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-tam-blue/20">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-tam-blue to-tam-blue rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-tam-blue mb-3 text-center">{t('design.3d_design.skills.strength.title')}</h4>
              <p className="text-tam-blue/80 text-center">{t('design.3d_design.skills.strength.desc')}</p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-tam-blue to-tam-blue rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-green-900 mb-3 text-center">{t('design.3d_design.skills.speed.title')}</h4>
              <p className="text-green-700 text-center">{t('design.3d_design.skills.speed.desc')}</p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-purple-900 mb-3 text-center">{t('design.3d_design.skills.power.title')}</h4>
              <p className="text-purple-700 text-center">{t('design.3d_design.skills.power.desc')}</p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* TASARIM EĞİTİMLERİ ve DANIŞMANLIK */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="flex items-start mb-6">
                <div className="p-4 bg-tam-blue rounded-2xl mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 leading-tight">{t('design.3d_design.training.title')}</h2>
                  <p className="text-tam-blue font-semibold mt-1">{t('design.3d_design.training.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{t('design.3d_design.training.p1')}</p>
                <p>{t('design.3d_design.training.p2')}</p>
                <p>{t('design.3d_design.training.p3')}</p>
                <p>{t('design.3d_design.training.p4')}</p>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl w-full max-w-2x">
                <img src="/images/machine-design.webp" alt="Tasarım Eğitimi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium">{t('design.3d_design.training.image_label')}</div>
              </div>
            </div>
          </div>

          {/* SolidWorks API Eğitimleri ve Danışmanlığı */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">{t('design.3d_design.training.api.title')}</h3>
              <div className="space-y-6 text-tam-blue/80 leading-relaxed">
                <p>{t('design.3d_design.training.api.p1')}</p>
                <p>{t('design.3d_design.training.api.p2')}</p>
                <p>{t('design.3d_design.training.api.p3')}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h4 className="text-xl font-semibold text-tam-blue mb-3 text-center">{t('design.3d_design.training.dev.title')}</h4>
              <p className="text-tam-blue/80 leading-relaxed text-center">{t('design.3d_design.training.dev.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default ThreeDDesignPage;

