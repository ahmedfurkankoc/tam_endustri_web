import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, BarChart, DollarSign, FileText } from 'lucide-react';

const FeasibilityStudiesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Fizibilite Çalışmaları ve Raporlama"
        subtitle="Professional Feasibility Studies"
        description="Proje fizibilite çalışmalarınızı yapın, risk analizlerinizi gerçekleştirin ve yatırım kararlarınızı güçlendirin."
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Fizibilite Çalışmaları ve Raporlama"
        description={[
          "Proje fizibilite çalışmalarında uzman ekibimizle birlikte, detaylı analizler yapabilir ve yatırım kararlarınızı güçlendirebilirsiniz."
        ]}
        cards={[
          {
            title: "Proje Analizi",
            description: "Kapsamlı proje fizibilite analizleri ve değerlendirmeleri",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Finansal Analiz",
            description: "Maliyet-fayda analizi ve finansal projeksiyonlar",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Raporlama",
            description: "Detaylı fizibilite raporları ve öneriler",
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
                Fizibilite Çalışmalarında Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Proje fizibilite çalışmalarında karşılaştığınız analiz zorluklarına 
                çözüm sunuyoruz. Detaylı analizler yaparak, risk değerlendirmeleri 
                gerçekleştirirken yatırım kararlarınızı güçlendirmenize yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Proje Analizi:</strong> Kapsamlı proje fizibilite analizleri ve değerlendirmeleri
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Finansal Analiz:</strong> Maliyet-fayda analizi ve finansal projeksiyonlar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Risk Değerlendirmesi:</strong> Proje riskleri analizi ve yönetim stratejileri
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Fizibilite Çalışmaları ve Raporlama"
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
              Fizibilite çalışmalarınızın her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proje Analizi
              </h3>
              <p className="text-gray-600">
                Kapsamlı proje fizibilite analizleri ve teknik değerlendirmeler
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Finansal Analiz
              </h3>
              <p className="text-gray-600">
                Maliyet-fayda analizi, ROI hesaplamaları ve finansal projeksiyonlar
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Risk Analizi
              </h3>
              <p className="text-gray-600">
                Proje riskleri analizi, risk yönetimi ve azaltma stratejileri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Raporlama
              </h3>
              <p className="text-gray-600">
                Detaylı fizibilite raporları, öneriler ve uygulama planları
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pazar Analizi
              </h3>
              <p className="text-gray-600">
                Pazar araştırması, rekabet analizi ve pazar potansiyeli değerlendirmesi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                ⚖️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Yasal Uyumluluk
              </h3>
              <p className="text-gray-600">
                Yasal gereklilikler, izin süreçleri ve uyumluluk değerlendirmesi
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

export default FeasibilityStudiesPage;
