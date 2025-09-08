import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Leaf, BarChart } from 'lucide-react';

const TextileManufacturingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Tekstil İmalat Danışmanlığı"
        subtitle="Tekstil Üretim Süreçleri Rehberliği"
        description="Tekstil imalat süreçlerinizi modernize edin, kaliteyi artırın ve sürdürülebilir üretim sağlayın."
        backgroundType="image"
        backgroundSrc="/images/training-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Tekstil İmalat Danışmanlığı"
        description={[
          "Tekstil ve konfeksiyon üretiminde uzman ekibimizle birlikte, verimli ve sürdürülebilir üretim süreçleri kurabilirsiniz."
        ]}
        cards={[
          {
            title: "Üretim Planlama",
            description: "Verimli tekstil üretim planları",
            image: "/images/training-service.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Kalite Yönetimi",
            description: "Tekstil kalite standartları ve kontrol",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Sürdürülebilirlik",
            description: "Çevre dostu üretim uygulamaları",
            image: "/images/project-design.webp",
            icon: <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tekstil İmalatında Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tekstil ve konfeksiyon sektöründe karşılaştığınız üretim zorluklarına 
                çözüm sunuyoruz. Modern teknolojiler ve sürdürülebilir yaklaşımlarla 
                üretim süreçlerinizi optimize ediyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Üretim Optimizasyonu:</strong> Verimli tekstil üretim süreçleri
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Kalite Yönetimi:</strong> Tekstil kalite standartları ve kontrol
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Sürdürülebilirlik:</strong> Çevre dostu üretim süreçleri
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/training-service.webp"
                alt="Tekstil İmalat Danışmanlığı"
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
              Tekstil imalat süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7c0 3.866-3.582 7-8 7S4 10.866 4 7"/><path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/><path d="M12 14v7"/><path d="M9 21h6"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                İplik Üretimi
              </h3>
              <p className="text-gray-600">
                Yüksek kaliteli iplik üretim süreçleri ve kalite kontrol sistemleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l7 5V8l7 5V8l4 3v10z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kumaş Üretimi
              </h3>
              <p className="text-gray-600">
                Dokuma ve örme kumaş üretim süreçlerinin optimizasyonu
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l5 3-3 4v11H6V10L3 6l5-3 4 3 4-3z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Konfeksiyon
              </h3>
              <p className="text-gray-600">
                Hazır giyim üretim süreçleri ve kalite yönetimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9h-3a6 6 0 1 1-6-6V3z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Boyama ve Baskı
              </h3>
              <p className="text-gray-600">
                Tekstil boyama ve baskı süreçlerinin modernizasyonu
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M7 7c3 0 5 2 5 5-3 0-5-2-5-5z"/><path d="M17 5c-3 0-5 2-5 5 3 0 5-2 5-5z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sürdürülebilir Üretim
              </h3>
              <p className="text-gray-600">
                Çevre dostu ve sürdürülebilir tekstil üretim süreçleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kalite Analizi
              </h3>
              <p className="text-gray-600">
                Tekstil kalite testleri ve performans analizi sistemleri
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

export default TextileManufacturingPage;
