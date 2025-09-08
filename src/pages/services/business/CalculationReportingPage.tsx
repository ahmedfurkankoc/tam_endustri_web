import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const CalculationReportingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        title="Hesaplama ve Raporlama Uygulamaları"
        subtitle="Doğru hesap, net rapor"
        description="Mukavemet, hız/devir, güç/kuvvet ve verimlilik hesapları ile görsel, anlamlı raporlar"
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title="Hesaplama ve Raporlama Uygulamaları"
        description={[
          "Üretim yapan firmalar olarak gün içinde çok defalar aynı hesaplamaları farklı verilerle yapıyoruz. Ancak hız çağında, bilgisayarların bizden çok daha hızlı ve güvenilir şekilde yapabileceği bu işlemlere vaktimizi harcamak, geride kalmanın açık göstergesidir.",
          "Hesaplama ve Raporlama programlarıyla tekrarlı işlerinizi bilgisayarlara devredip size anlamlı raporlar sunmayı hedefliyoruz. Böylece zamanınızı verimlilik, sürdürülebilirlik ve kaliteyi artıracak çalışmalara ayırabilirsiniz."
        ]}
        cards={[
          {
            title: "Tekrarlı İşlerden Kurtulun",
            description: "Basitten komplekse tüm hesaplar için modüler uygulamalar",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zM9 17V9a2 2 0 012-2h2a2 2 0 012 2v8m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Zaman Kayıplarını Önleyin",
            description: "Standart veri akışı ve otomatik hesapla hız ve doğruluk",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Vaktiniz Bizim İçin Değerli",
            description: "Panolar ve raporlar ile karar desteği; zamandan tasarruf",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="calculation-reporting"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Tekrarlı İşlerinizden Kurtulun!</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Hesaplama ve Raporlama programlarıyla, tekrarlı zaman ayırdığınız işleri bilgisayarlarınıza yaptırıp size raporlar vermesini hedefliyoruz. Böylece zamanınızı vakit alıcı ama basit işlere değil; verimlilik, sürdürülebilirlik ve kaliteyi artırmaya ayırabilirsiniz.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">Zaman Kayıplarını Ortadan Kaldırıyoruz</h3>
              <p className="text-tam-blue/80 leading-relaxed">
                Basit bir malzeme ağırlığı hesaplayıcısından, tüm makinenizin yaklaşık maliyetini çıkaran kapsamlı programlara kadar çözümler sunabiliriz.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-green-200">
            <h4 className="text-xl font-semibold text-green-900 mb-3">Vaktiniz Bizim İçin Çok Değerli</h4>
            <p className="text-green-700 leading-relaxed">
              Gereklilikleri en iyi sizin tespit edeceğinize inanıyoruz. Size nasıl daha fazla zaman kazandırabileceğimizi konuşmak için bizimle iletişime geçin; sizinle tanışmak için heyecanlıyız!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default CalculationReportingPage;


