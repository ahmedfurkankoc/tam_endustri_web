import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, FileText, Users, BarChart, Landmark, Briefcase, ShieldCheck } from 'lucide-react';

const BankingConsultingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Bankacılık Danışmanlığı"
        subtitle="Banking Transformation & Compliance"
        description="Bankacılık süreçlerinizi modernleştirin: risk, uyumluluk ve dijital dönüşüm ile verimliliği artırın."
        backgroundType="image"
        backgroundSrc="/images/business-consulting.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Bankacılık Danışmanlığı"
        description={[
          "Bankacılık ve finans sektöründe risk yönetimi, dijital dönüşüm ve uyumluluk alanlarında uçtan uca danışmanlık sunuyoruz.",
          "Operasyonel verimlilik, müşteri deneyimi ve regülasyon uyumluluğu odaklı, sürdürülebilir çözümler geliştiriyoruz."
        ]}
        cards={[
          {
            title: "Risk Yönetimi",
            description: "Kapsamlı risk analizi ve yönetimi",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Dijital Dönüşüm",
            description: "Modern bankacılık teknolojileri",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Uyumluluk",
            description: "Regülasyon ve uyumluluk danışmanlığı",
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
                Bankacılıkta Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bankacılık operasyonlarınızda karşılaştığınız zorluklara çözüm sunuyoruz. 
                Regülasyon uyumluluğu, risk yönetimi ve dijital dönüşüm ile performansı ve müşteri memnuniyetini artırmanıza yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Ürün ve Kanallar:</strong> Kredi, mevduat, ödeme, mobil ve internet bankacılığı
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Uyumluluk Yönetimi:</strong> BDDK, MASAK, KVKK ve uluslararası standartlar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Risk Yönetimi:</strong> Kredi, operasyonel ve piyasa riski yönetimi
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Bankacılık Danışmanlığı"
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
              Bankacılık dönüşümünüzün her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bankacılık Operasyonları
              </h3>
              <p className="text-gray-600">
                Şube, çağrı merkezi ve operasyon süreçlerinin verimlileştirilmesi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Uyumluluk Danışmanlığı
              </h3>
              <p className="text-gray-600">
                Regülasyonlara uyumluluk, KYC/AML ve dokümantasyon
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ürün Geliştirme
              </h3>
              <p className="text-gray-600">
                Bankacılık ürünleri tasarımı ve geliştirme süreçleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Risk Yönetimi
              </h3>
              <p className="text-gray-600">
                Kredi, operasyonel ve piyasa riski yönetimi ve kontrol sistemleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Personel Eğitimi
              </h3>
              <p className="text-gray-600">
                Bankacılık süreçleri, uyumluluk ve teknoloji eğitim programları
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
                Performans analizi ve sürekli iyileştirme önerileri
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

export default BankingConsultingPage;
