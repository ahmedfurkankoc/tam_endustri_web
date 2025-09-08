import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { CheckCircle, Plus, Settings, Camera, Video, Users } from 'lucide-react';

const PhotographyVideographyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        title="Fotoğraf ve Video Çekim Hizmetleri"
        subtitle="Professional Photography & Videography"
        description="Profesyonel fotoğraf ve video çekim hizmetleri ile markanızı güçlendirin ve görsel içeriklerinizi zenginleştirin."
        backgroundType="image"
        backgroundSrc="/images/improvement-service.webp"
        showScrollIndicator={true}
      />
      
      <PageHeader
        title="Fotoğraf ve Video Çekim Hizmetleri"
        description={[
          "Profesyonel fotoğraf ve video çekim hizmetlerinde uzman ekibimizle birlikte, markanızı güçlendiren görsel içerikler üretebilirsiniz."
        ]}
        cards={[
          {
            title: "Ürün Fotoğrafçılığı",
            description: "Profesyonel ürün fotoğraf çekimi ve retuş hizmetleri",
            image: "/images/project-design.webp",
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Kurumsal Video",
            description: "Kurumsal tanıtım videoları ve reklam filmleri",
            image: "/images/improvement-service.webp",
            icon: <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />,
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Etkinlik Çekimi",
            description: "Konferans, seminer ve etkinlik fotoğraf/video çekimi",
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
                Fotoğraf ve Video Çekimde Uzman Rehberlik
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Profesyonel fotoğraf ve video çekim hizmetlerinde karşılaştığınız 
                görsel içerik zorluklarına çözüm sunuyoruz. Yaratıcı ve etkili 
                görsel içeriklerle markanızı güçlendirmenize yardımcı oluyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Ürün Fotoğrafçılığı:</strong> Profesyonel ürün fotoğraf çekimi ve retuş hizmetleri
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Kurumsal Video:</strong> Kurumsal tanıtım videoları ve reklam filmleri
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-tam-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Etkinlik Çekimi:</strong> Konferans, seminer ve etkinlik fotoğraf/video çekimi
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/business-consulting.webp"
                alt="Fotoğraf ve Video Çekim Hizmetleri"
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
              Fotoğraf ve video çekim süreçlerinizin her aşamasında yanınızdayız
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ürün Fotoğrafçılığı
              </h3>
              <p className="text-gray-600">
                E-ticaret ve katalog için profesyonel ürün fotoğraf çekimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kurumsal Video
              </h3>
              <p className="text-gray-600">
                Kurumsal tanıtım videoları, reklam filmleri ve sosyal medya içerikleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Etkinlik Çekimi
              </h3>
              <p className="text-gray-600">
                Konferans, seminer, düğün ve özel etkinlik fotoğraf/video çekimi
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kurumsal Fotoğrafçılık
              </h3>
              <p className="text-gray-600">
                Portre, grup fotoğrafları ve kurumsal etkinlik çekimleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Post-Production
              </h3>
              <p className="text-gray-600">
                Fotoğraf retuş, video montaj ve renk düzeltme hizmetleri
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-blue/10 p-8 rounded-xl">
              <div className="w-12 h-12 bg-tam-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Drone Çekimi
              </h3>
              <p className="text-gray-600">
                Havadan fotoğraf ve video çekimi, drone ile etkinlik kayıtları
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

export default PhotographyVideographyPage;
