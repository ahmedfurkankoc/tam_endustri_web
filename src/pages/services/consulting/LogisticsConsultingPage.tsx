import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, Truck, Package, BarChart } from 'lucide-react';

const LogisticsConsultingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Lojistik Danışmanlığı"
        subtitle="Professional Logistics Consulting"
        description="Lojistik süreçlerinizi optimize edin, maliyetleri düşürün ve müşteri memnuniyetini artırın."
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Lojistik Danışmanlığı"
        description={[
          "Lojistik ve tedarik zinciri yönetiminde uzman ekibimizle birlikte, verimli ve maliyet etkin çözümler geliştirebilirsiniz."
        ]}
        cards={[
          {
            title: "Tedarik Zinciri",
            description: "Tedarik zinciri optimizasyonu ve yönetim sistemleri",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Depo Yönetimi",
            description: "Depo operasyonları ve envanter yönetimi",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Nakliye",
            description: "Nakliye optimizasyonu ve rota planlama",
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
                Lojistik Sektöründe Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lojistik ve tedarik zinciri yönetiminde karşılaştığınız operasyonel 
                zorluklara çözüm sunuyoruz. Verimliliği artırarak, maliyetleri düşürürken 
                müşteri memnuniyetini yükseltmenize yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Tedarik Zinciri Optimizasyonu:</strong> End-to-end tedarik zinciri yönetimi
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Depo Yönetimi:</strong> Modern depo operasyonları ve envanter kontrolü
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Nakliye Optimizasyonu:</strong> Rota planlama ve taşıma maliyeti optimizasyonu
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Lojistik Danışmanlığı"
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
              Lojistik süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tedarik Zinciri
              </h3>
              <p className="text-gray-600">
                End-to-end tedarik zinciri tasarımı ve optimizasyonu
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Depo Yönetimi
              </h3>
              <p className="text-gray-600">
                Depo operasyonları, envanter yönetimi ve WMS sistemleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Nakliye
              </h3>
              <p className="text-gray-600">
                Rota optimizasyonu, taşıma maliyeti düşürme ve 3PL yönetimi
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
                Lojistik performans ölçümü ve KPI yönetimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Uluslararası Lojistik
              </h3>
              <p className="text-gray-600">
                Gümrük işlemleri, uluslararası taşıma ve compliance
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Teknoloji Entegrasyonu
              </h3>
              <p className="text-gray-600">
                Lojistik yazılımları ve otomasyon sistemleri
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

export default LogisticsConsultingPage;
