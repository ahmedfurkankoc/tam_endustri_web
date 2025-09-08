import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const CustomMachinePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title="İşe Özel Makine Tasarım – İmalat Projeleri"
        subtitle="Standartlara Takılı Kalmayın!"
        description="Planladığınız makine veya sistemi, sizi sınırlamadan birlikte tasarlayıp hayata geçirelim."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title="İşe Özel Makine Tasarım – İmalat Projeleri"
        description={[
          "Planlarınızda bir makine veya sistem var ancak bu talebinize sizi tatmin edecek çözümler sunan bir üretici bulamıyor musunuz?",
          "Hiçbir sınırlayıcı çerçevenin içinde kalmadan planladığınız makine veya sistemi konuşalım; fikirlerinizi dinleyip fikirlerimizi paylaşalım ve sizin için ne yapabileceğimize birlikte karar verelim."
        ]}
        cards={[
          {
            title: "Danışın ve Tasarlayalım",
            description: "Sizin için tasarım, mekanik ve elektronik seçimler, fizibilite ve maliyet",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Üretime Hazırlık",
            description: "Teknik dokümantasyon, üretim teknik resimleri ve süreç planlama",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Anahtar Teslim Projeler",
            description: "Konseptten kuruluma kadar tüm aşamalarda çözüm ortaklığı",
            image: "https://images.unsplash.com/photo-1581093588401-8630a18f6d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="custom-machine"
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
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Standartlara Takılı Kalmayın!</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Planlarınızda bir makine veya sistem var ancak bu talebinize sizi tatmin edecek çözümler sunan bir üretici bulamıyor musunuz? O halde bizimle tanışmak isteyebilirsiniz.
                </p>
                <p>
                  Hiçbir sınırlayıcı çerçevenin içinde kalmadan planladığınız, yapmayı-yaptırmayı düşündüğünüz makine veya sistemi konuşmak için bir araya gelelim. Yaptıklarımızı, yapabileceklerimizi sizinle paylaşalım. Fikirlerinizi dinleyip fikirlerimizi aktaralım ve sizin için ne yapabileceğimize karar verelim.
                </p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Özel Tasarım"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Özel Tasarım</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/machine-design.webp"
                      alt="Mekanik & Elektronik Seçimler"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Mekanik & Elektronik Seçimler</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Fizibilite & Maliyet"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Fizibilite & Maliyet</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">Size Özel, Makul ve Uygulanabilir Çözümler Sunuyoruz.</h3>
              <p className="text-tam-blue/80 leading-relaxed">
                İşinize özel dizayn edilmesi gereken makinenizi sizin için tasarlamamızı isterseniz; tasarımlar, mekanik ve elektronik seçimler, fizibilite ve maliyet çalışmaları, üretime hazırlık, teknik dokümantasyon ve üretim teknik resimlerini hazırlayalım.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-200">
              <h3 className="text-2xl font-semibold text-green-900 mb-3">Anahtar Teslim Projeler</h3>
              <p className="text-green-700 leading-relaxed">
                Üretimini de bizim yapmamızı isterseniz doğru bir karar vermiş olursunuz. Konseptten projeye, projeden imalata ve imalattan kuruluma kadar tüm aşamalarda anahtar teslim çözüm ortağınız olmayı teklif ediyoruz.
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

export default CustomMachinePage;


