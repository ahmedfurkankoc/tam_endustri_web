import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Shield, Plug, Lightbulb, Battery, ShieldCheck, Radio, Zap } from 'lucide-react';

const ElectricalManufacturingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Elektrik İmalat Danışmanlığı"
        subtitle="Elektrik Sistemleri Üretim Rehberliği"
        description="Elektrik imalat süreçlerinizi modernize edin, güvenlik standartlarını yükseltin ve verimliliği artırın."
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Elektrik İmalat Danışmanlığı"
        description={[
          "Elektrik ve elektronik ürün üretiminde uzman ekibimizle birlikte, güvenli ve verimli üretim süreçleri kurabilirsiniz."
        ]}
        cards={[
          {
            title: "Elektrik Sistemleri",
            description: "Güvenli ve verimli elektrik sistem tasarımları",
            image: "/images/improvement-service.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Elektronik Üretim",
            description: "Modern elektronik ürün üretim süreçleri",
            image: "/images/project-design.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Güvenlik Standartları",
            description: "CE, UL ve diğer standartlar için uyumluluk",
            image: "/images/training-service.webp",
            icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Elektrik İmalatında Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Elektrik ve elektronik ürün üretiminde karşılaştığınız teknik zorluklara 
                çözüm sunuyoruz. Güvenlik standartlarını en üst seviyede tutarak, 
                kaliteli ve verimli üretim süreçleri kurmanıza yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Elektrik Sistem Tasarımı:</strong> Güvenli ve verimli elektrik sistemleri
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Elektronik Üretim:</strong> Modern elektronik ürün üretim süreçleri
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Güvenlik Standartları:</strong> CE, UL ve diğer uluslararası standartlar
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/improvement-service.webp"
                alt="Elektrik İmalat Danışmanlığı"
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
              Elektrik imalat süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Plug className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Elektrik Panoları
              </h3>
              <p className="text-gray-600">
                Endüstriyel elektrik panolarının tasarımı ve üretim süreçleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                LED Sistemleri
              </h3>
              <p className="text-gray-600">
                Enerji verimli LED aydınlatma sistemleri tasarımı ve üretimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Batarya Sistemleri
              </h3>
              <p className="text-gray-600">
                Güvenli ve verimli batarya üretim süreçleri ve test sistemleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Güvenlik Sistemleri
              </h3>
              <p className="text-gray-600">
                Elektriksel güvenlik sistemleri ve koruma cihazları üretimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Elektronik Kartlar
              </h3>
              <p className="text-gray-600">
                PCB tasarımı ve elektronik kart üretim süreçleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Güç Sistemleri
              </h3>
              <p className="text-gray-600">
                Güç dağıtım sistemleri ve enerji yönetimi çözümleri
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

export default ElectricalManufacturingPage;
