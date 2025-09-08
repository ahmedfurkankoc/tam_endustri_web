import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const ReverseEngineeringPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title="Tersine Mühendislik Tasarımları"
        subtitle="Kurtarıcı Çözüm: Tersine Mühendislik Yöntemleri"
        description="Üretimi bitmiş ya da istediğiniz kalite ve hızda olmayan parça, aparat ve makineleriniz için analiz, tasarım ve imalat çözümleri."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title="Tersine Mühendislik Tasarımları"
        description={[
          "Üretimi son bulmuş yahut hız ve kalite olarak isteklerinize yanıt veremeyen parça, aparat veya makineleriniz mi var? Büyük bir redüktörünüzün yalnızca küçük bir dişlisini değiştirmek istiyorsunuz ancak parçasını bulamıyor musunuz?",
          "Sisteminizde sert plastikten üretilmiş fakat sürekli değiştirmeniz gereken bir elemanı alüminyum ya da çelikten imal etmek istiyorsunuz? Gelin birlikte çözelim."
        ]}
        cards={[
          {
            title: "Tespit",
            description: "Söküm, ölçüm ve malzeme analizleri ile mevcut durumu netleştiriyoruz",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Tasarım",
            description: "CAD ortamında yeniden tasarım, iyileştirme ve üretime hazırlık",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "İmalat",
            description: "Malzeme seçimi, toleranslar ve proses ile anahtar teslim çözümler",
            image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="reverse-engineering"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-tam-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Tespit, Tasarım ve İmalat</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Parça, aparat veya makineler; tersine mühendislik yöntemiyle mekanik, elektronik ve yazılım alt bileşenlerine ayrılarak detaylı analiz edilir. Böylece malzeme bilgisi, tasarım ve çalışma prensiplerine ulaşılır.
                </p>
                <p>
                  Bu sayede çözümsüz olduğunu sandığınız pek çok problem için uygulanabilir çözümler geliştiririz. Talebinize göre tespit, tasarım ve imalat süreçlerini uçtan uca üstlenebiliriz.
                </p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1540409775241-8d4d2cc3d043?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Ölçüm & Analiz"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Ölçüm & Analiz</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/machine-design.webp"
                      alt="CAD Tasarım"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">CAD Tasarım</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1581093588401-8630a18f6d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Malzeme Seçimi"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Malzeme Seçimi</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/project-design.webp"
                      alt="Üretim Hazırlığı"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Üretim Hazırlığı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">Detaylı Analiz, Mükemmel Sonuç</h3>
            <p className="text-tam-blue/80 leading-relaxed">
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

export default ReverseEngineeringPage;


