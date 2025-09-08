import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const TechnicalSalesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title="Teknik Satış Program - Uygulamaları"
        subtitle="Sizin için Özel Olarak Programlıyoruz!"
        description="Teknik satışı doğru kurgulayın; tekliften kuruluma kadar tutarlı, profesyonel ve verimli bir satış deneyimi sağlayın."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title="Teknik Satış Program - Uygulamaları"
        description={[
          "Müşterilerinize özel makine ya da sistemler üretiyor veya her müşteri için modifikasyonlar yapıyorsanız satış organizasyonunuzun zorluklarını çok iyi anlıyoruz.",
          "Ticari satışın sağlıklı sonuçlanabilmesi için Teknik satışın önce doğru kurgulanması gerekir. Biz, satışta kullandığınız bilgileri derleyerek yine sizin çerçevenizde Teknik Satış programları hazırlıyoruz."
        ]}
        cards={[
          {
            title: "Sunum İçerikleri",
            description: "Fotoğraflar, videolar ve tanıtıcı içeriklerin profesyonel sunumu",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V14.5a2 2 0 01-2.447 1.894L15 14" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Layout & Dokümanlar",
            description: "Yerleşim planları, teknik resimler ve açıklamalar bir arada",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Hesap & Fizibilite",
            description: "Fiyat hesaplayıcı arayüzler, çalışma prensipleri ve fizibilite detayları",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="technical-sales"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Verimli ve Profesyonel</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Hazır paketlerin uymadığı durumlarda, dağınık bilgi ve dosyalamayı düzenleyip satış toplantılarında güçlü el avantajınızı koruyacak bütünleşik bir sunum ortamı kuruyoruz.
                </p>
                <p>
                  Fotoğraf, video, layout, teknik resim ve açıklamalar; mümkünse fiyat hesaplayıcı arayüzler ve fizibilite detayları tek yerde, en net ifadesiyle müşteriye aktarılır.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">Kontrolü Elinizde Tutun</h3>
              <p className="text-tam-blue/80 leading-relaxed">
                Doğru bir Teknik Satış Programı için birlikte çalışmaya hazırız. Tereddüt etmeden bizimle iletişime geçebilirsiniz; sizinle tanışmak için heyecanlıyız!
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

export default TechnicalSalesPage;


