import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, TrendingUp, Users, Target, BarChart } from 'lucide-react';

const SalesConsultingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Satış Danışmanlığı Hizmetleri"
        subtitle="Professional Sales Consulting"
        description="Satış süreçlerinizi optimize edin, satış performansınızı artırın ve müşteri kazanma stratejilerinizi güçlendirin."
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Satış Danışmanlığı Hizmetleri"
        description={[
          "Satış ve pazarlama süreçlerinde uzman ekibimizle birlikte, etkili satış stratejileri geliştirebilir ve satış performansınızı artırabilirsiniz."
        ]}
        cards={[
          {
            title: "Satış Stratejisi",
            description: "Etkili satış stratejileri ve müşteri kazanma planları",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Ekip Yönetimi",
            description: "Satış ekibi yönetimi ve performans optimizasyonu",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Hedef Belirleme",
            description: "Satış hedefleri belirleme ve takip sistemleri",
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
                Satış Danışmanlığında Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Satış ve pazarlama süreçlerinde karşılaştığınız zorluklara çözüm sunuyoruz. 
                Etkili satış stratejileri geliştirerek, müşteri kazanma oranınızı artırırken 
                satış performansınızı yükseltmenize yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Satış Stratejisi:</strong> Etkili satış stratejileri ve müşteri kazanma planları
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Ekip Yönetimi:</strong> Satış ekibi yönetimi ve performans optimizasyonu
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Müşteri İlişkileri:</strong> CRM sistemleri ve müşteri yönetimi
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/sales-consulting.mp4"
                alt="Satış Danışmanlığı Hizmetleri"
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
              Satış süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Satış Stratejisi
              </h3>
              <p className="text-gray-600">
                Etkili satış stratejileri ve müşteri kazanma planları geliştirme
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ekip Yönetimi
              </h3>
              <p className="text-gray-600">
                Satış ekibi yönetimi, eğitim ve performans optimizasyonu
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hedef Belirleme
              </h3>
              <p className="text-gray-600">
                Satış hedefleri belirleme, takip ve raporlama sistemleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                💼
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Müşteri İlişkileri
              </h3>
              <p className="text-gray-600">
                CRM sistemleri ve müşteri yönetimi süreçleri
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
                Satış performansı analizi ve iyileştirme önerileri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🎓
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Satış Eğitimleri
              </h3>
              <p className="text-gray-600">
                Satış teknikleri ve müşteri ilişkileri eğitim programları
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

export default SalesConsultingPage;
