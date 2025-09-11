import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, FileText, Users, BarChart, Shield } from 'lucide-react';

const IslamicBankingConsultingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title={t('consulting.islamic.hero.title')}
        subtitle={t('consulting.islamic.hero.subtitle')}
        description={t('consulting.islamic.hero.description')}
        backgroundType="image"
        backgroundSrc="/images/business-consulting.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title={t('consulting.islamic.header.title')}
        description={[t('consulting.islamic.header.desc1'), t('consulting.islamic.header.desc2')]}
        cards={[
          {
            title: t('consulting.islamic.cards.compliance.title'),
            description: t('consulting.islamic.cards.compliance.desc'),
            image: "/images/project-design.webp",
            icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: t('consulting.islamic.cards.product.title'),
            description: t('consulting.islamic.cards.product.desc'),
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: t('consulting.islamic.cards.risk.title'),
            description: t('consulting.islamic.cards.risk.desc'),
            image: "/images/training-service.webp",
            icon: <BarChart className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('consulting.islamic.section.expertise.title')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('consulting.islamic.section.expertise.p1')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.islamic.section.expertise.bullets.sharia')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.islamic.section.expertise.bullets.lifecycle')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{t('consulting.islamic.section.expertise.bullets.risk')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Faizsiz Bankacılık Danışmanlığı"
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
              Faizsiz bankacılık dönüşümünüzün her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Politikalar ve Prosedürler
              </h3>
              <p className="text-gray-600">
                Şeriat uyumlu politika ve prosedürlerin oluşturulması
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Eğitim ve İç Paydaş Yönetimi
              </h3>
              <p className="text-gray-600">
                Ekiplerinize yönelik eğitim programları ve değişim yönetimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Performans ve Uyumluluk
              </h3>
              <p className="text-gray-600">
                KPI takibi, denetim bulguları ve sürekli iyileştirme
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

export default IslamicBankingConsultingPage;


