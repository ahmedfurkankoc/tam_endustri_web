import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, ShoppingCart, BarChart, Globe, Paintbrush, Smartphone, Search } from 'lucide-react';

const WebsiteLocalizationPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Website ve Türkçe Lokalizasyon"
        subtitle="Professional Website Localization"
        description="Web sitenizi Türkçe'ye lokalize edin, yerel pazara uygun hale getirin ve kullanıcı deneyimini artırın."
        backgroundType="image"
        backgroundSrc="/images/business-consulting.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Website ve Türkçe Lokalizasyon"
        description={[
          "Web sitenizi Türkçe'ye lokalize ederek yerel pazarda güçlü bir varlık oluşturun. Uzman ekibimizle birlikte, kültürel ve dilsel uyum sağlayabilirsiniz."
        ]}
        cards={[
          {
            title: "Çoklu Dil Desteği",
            description: "Profesyonel çeviri ve lokalizasyon",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Kültürel Uyarlama",
            description: "Hedef pazar kültürüne uygun içerik",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "SEO Optimizasyonu",
            description: "Yerel arama motoru optimizasyonu",
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Website Lokalizasyonunda Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Web sitenizi Türkçe'ye lokalize ederek yerel pazarda güçlü bir varlık oluşturun. 
                Sadece çeviri değil, kültürel uyum ve yerel kullanıcı deneyimi odaklı çözümler sunuyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Profesyonel Çeviri:</strong> Teknik ve ticari içerik çevirisi
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Kültürel Adaptasyon:</strong> Yerel kültüre uygun içerik düzenleme
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>SEO Optimizasyonu:</strong> Türkçe arama motoru optimizasyonu
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Website ve Türkçe Lokalizasyon"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hizmet Alanlarımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Website lokalizasyon süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Web Sitesi Çevirisi
              </h3>
              <p className="text-gray-600">
                Tüm web sitesi içeriklerinin profesyonel Türkçe çevirisi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tasarım Adaptasyonu
              </h3>
              <p className="text-gray-600">
                Yerel kullanıcı tercihlerine uygun tasarım düzenlemeleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mobil Uyumluluk
              </h3>
              <p className="text-gray-600">
                Mobil cihazlarda optimal görüntüleme ve kullanım deneyimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO Optimizasyonu
              </h3>
              <p className="text-gray-600">
                Türkçe arama motorları için SEO optimizasyonu ve anahtar kelime stratejisi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E-ticaret Lokalizasyonu
              </h3>
              <p className="text-gray-600">
                E-ticaret sitelerinin yerel pazara uygun hale getirilmesi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Performans Analizi
              </h3>
              <p className="text-gray-600">
                Lokalize edilmiş sitenin performans analizi ve iyileştirme önerileri
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default WebsiteLocalizationPage;
