import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, ShoppingCart, Handshake, DollarSign, FileText, BarChart } from 'lucide-react';

const ProcurementServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Tedarik Hizmetleri"
        subtitle="Professional Procurement Services"
        description="Tedarik süreçlerinizi optimize edin, maliyetleri düşürün ve tedarikçi yönetimini güçlendirin."
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Tedarik Hizmetleri"
        description={[
          "Tedarik ve satın alma süreçlerinde uzman ekibimizle birlikte, verimli ve maliyet etkin tedarik çözümleri geliştirebilirsiniz."
        ]}
        cards={[
          {
            title: "Satın Alma",
            description: "Stratejik satın alma ve tedarikçi yönetimi",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Maliyet Optimizasyonu",
            description: "Tedarik maliyetlerini düşürme ve optimizasyon",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Tedarikçi İlişkileri",
            description: "Tedarikçi seçimi ve ilişki yönetimi",
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
                Tedarik Hizmetlerinde Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tedarik ve satın alma süreçlerinde karşılaştığınız operasyonel 
                zorluklara çözüm sunuyoruz. Maliyetleri düşürerek, kaliteyi artırırken 
                tedarik süreçlerinizi optimize etmenize yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Stratejik Satın Alma:</strong> Uzun vadeli tedarik stratejileri ve planlama
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Tedarikçi Yönetimi:</strong> Tedarikçi seçimi, değerlendirme ve ilişki yönetimi
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Maliyet Optimizasyonu:</strong> Tedarik maliyetlerini düşürme ve verimlilik artırma
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Tedarik Hizmetleri"
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
              Tedarik süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stratejik Satın Alma
              </h3>
              <p className="text-gray-600">
                Uzun vadeli tedarik stratejileri ve satın alma planlaması
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tedarikçi Yönetimi
              </h3>
              <p className="text-gray-600">
                Tedarikçi seçimi, değerlendirme ve performans yönetimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Maliyet Optimizasyonu
              </h3>
              <p className="text-gray-600">
                Tedarik maliyetlerini düşürme ve verimlilik artırma stratejileri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sözleşme Yönetimi
              </h3>
              <p className="text-gray-600">
                Tedarik sözleşmeleri hazırlama ve sözleşme yönetimi
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
                Tedarik performansı ölçümü ve KPI yönetimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Tedarik
              </h3>
              <p className="text-gray-600">
                Uluslararası tedarikçi ağı ve global tedarik stratejileri
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

export default ProcurementServicesPage;
