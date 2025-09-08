import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, Wrench, Cog, Hammer, Ruler, Target, RotateCcw } from 'lucide-react';

const CncMachiningPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="CNC İşleme Parça Üretimi"
        subtitle="Precision CNC Machining Solutions"
        description="CNC işleme süreçlerinizi optimize edin, hassasiyeti artırın ve üretim verimliliğini maksimize edin."
        backgroundType="image"
        backgroundSrc="/images/machine-design.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="CNC İşleme Parça Üretimi"
        description={[
          "Yüksek hassasiyetli CNC işleme süreçlerinde uzman ekibimizle birlikte, kaliteli ve verimli parça üretimi sağlayabilirsiniz."
        ]}
        cards={[
          {
            title: "Hassas İşleme",
            description: "Mikron seviyesinde hassasiyetli işleme",
            image: "/images/machine-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Programlama",
            description: "CAD/CAM programlama ve optimizasyon",
            image: "/images/project-design.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Kalite Kontrol",
            description: "İleri seviye kalite kontrol sistemleri",
            image: "/images/improvement-service.webp",
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
                CNC İşlemede Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CNC işleme süreçlerinde karşılaştığınız teknik zorluklara çözüm sunuyoruz. 
                Modern CNC teknolojileri ve optimizasyon teknikleriyle, yüksek kaliteli 
                ve hassas parça üretimi sağlıyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Hassas İşleme:</strong> Mikron seviyesinde hassasiyetli işleme
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Kompleks Geometriler:</strong> Karmaşık şekilli parça üretimi
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Malzeme Çeşitliliği:</strong> Çelik, alüminyum, titanyum ve özel alaşımlar
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/machine-design.webp"
                alt="CNC İşleme Parça Üretimi"
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
              CNC işleme süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Frezeleme
              </h3>
              <p className="text-gray-600">
                3 eksenli ve 5 eksenli frezeleme işlemleri ile kompleks parça üretimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Cog className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tornalama
              </h3>
              <p className="text-gray-600">
                Yüksek hassasiyetli tornalama işlemleri ve silindirik parça üretimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Delme ve Talaşlı İşleme
              </h3>
              <p className="text-gray-600">
                Hassas delme, raybalama ve diğer talaşlı işleme operasyonları
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kalite Kontrol
              </h3>
              <p className="text-gray-600">
                CMM ölçümleri ve hassas kalite kontrol sistemleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Prototip Üretimi
              </h3>
              <p className="text-gray-600">
                Hızlı prototip üretimi ve test parçaları imalatı
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Seri Üretim
              </h3>
              <p className="text-gray-600">
                Yüksek hacimli seri üretim süreçleri ve optimizasyon
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

export default CncMachiningPage;
