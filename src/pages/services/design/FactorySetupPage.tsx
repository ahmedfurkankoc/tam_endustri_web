import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const FactorySetupPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title="Fabrika Kurulum ve Yerleşim Planı"
        subtitle="Fabrika Kurulum ve Koordinasyonda Çözüm Ortağınız"
        description="Yeni fabrikanız için makine, sistem yerleşimi ve elektronik haberleşme koordinasyonunda öngörülebilir ve verimli çözümler sunuyoruz."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title="Fabrika Kurulum ve Yerleşim Planı"
        description={[
          "Yeni bir girişim – üretim – fabrika planınız var fakat makineleri ve sistemleri nasıl konumlandıracağınız, elektronik olarak nasıl haberleştireceğiniz ve tüm koordinasyonu nasıl yöneteceğiniz konusunda tereddütleriniz mi var?",
          "Sizin için yeni fabrikanızın yerleşim planını (Layout) 2 ya da 3 boyutlu çizebilir, kurulacak makine ve sistemleri istekleriniz doğrultusunda yerleştirebilir, otomasyon ve haberleşme kurgusunu organize edebiliriz."
        ]}
        cards={[
          {
            title: "Yerleşim (Layout) Planı",
            description: "2D/3D layout ve ekipman konumlandırma, akış ve güvenlik alanları",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Haberleşme & Otomasyon",
            description: "Cihazlar arası ağ topolojisi, IoT/SCADA entegrasyonu, etiketleme",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Koordinasyon & Uygulama",
            description: "Satınalma bilgileri, yerinde kurulum rehberliği, validasyon",
            image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="factory-setup"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tam-blue/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Öngörülebilir Yerleşim ve Doğru Planlama</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Sizin için yeni fabrikanızın Yerleşim Planını (Layout) 2 ya da 3 boyutlu çizebilir, kurulacak makine ve sistemlerin bilgilerini satın alınacak firmalardan alarak istekleriniz doğrultusunda yerleştirebilir, TAM otomasyon çözümleri için fabrika içindeki cihazların haberleşmesini organize edebiliriz.
                </p>
                <p>
                  Bu sayede sürprizleri en aza indirip, sonuçları yüksek öngörü ile hesaplanmış, hedefe uygun, verimli ve sürdürülebilir bir fabrika kurulumunda size rehberlik yapabiliriz.
                </p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Layout Planı"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Layout Planı</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/project-design.webp"
                      alt="Makine Konumlandırma"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Makine Konumlandırma</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Haberleşme Ağı"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Haberleşme Ağı</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/machine-design.webp"
                      alt="Otomasyon Kurgusu"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Otomasyon Kurgusu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">Sürdürülebilir Üretim için Tam Endüstri Yanınızda!</h3>
            <p className="text-tam-black/80 leading-relaxed">
              Sizinle çalışmaya enerjik ve dinamik bir şekilde hazırız. Tereddüt etmeden bizimle iletişime geçebilirsiniz. Sizinle tanışmak için heyecanlıyız!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default FactorySetupPage;


