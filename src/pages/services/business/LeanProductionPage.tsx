import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const LeanProductionPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="Yalın Üretim Yöntemleri Uygulamaları"
        subtitle="Daha Az Efor ile Daha Çok Verim"
        description="Hata, maliyet, stok, fire ve memnuniyetsizliği azaltan; verimliliği ve sürdürülebilirliği artıran yalın çözümler."
        backgroundType="image"
        backgroundSrc="/hero-lean-production.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title="Yalın Üretim Yöntemleri Uygulamaları"
        description={[
          "Yalın Üretim; gereksiz unsurlardan arındırılmış, hata, maliyet, işçilik, stok, geliştirme süresi, fire, üretim alanı ve memnuniyetsizliği en aza indiren üretim sistemidir.",
          "Bu yaklaşımı yalnızca üretim sahasına değil; ofis iş yüklerine de uygulayarak, size özel yazılım ve uygulamalarla verimlilik ve sürdürülebilirliği artırıyoruz."
        ]}
        cards={[
          {
            title: "Sürekli İyileştirme (Kaizen)",
            description: "İdealin olmadığı varsayımı ile her gün daha iyiye giden süreçler",
            image: "/images/improvement-service.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Size Özel Uygulamalar",
            description: "Tekrarlı ofis işleri için sadeleştirilmiş yazılım ve otomasyon",
            image: "/images/lean.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Aparat & Makine Tasarımları",
            description: "Sahada verimi artıran aparat, fikstür ve makine geliştirmeleri",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8M7 16h6" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          }
        ]}
        id="lean-production-services"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-tam-blue/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tam-blue/20 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-tam-blue/10 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">İşinize Değer Katıyoruz</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Market, kafe, lojistik gibi standart uygulamaların aksine; sanayide işler genellikle size özgü yöntemlerle yürür. Bu nedenle size özel uygulamalar ve yazılımlar, verimlilik ve sürdürülebilirlik için kaçınılmazdır.
                </p>
                <p>
                  Sizin katkılarınız olmadan ideal çözümün gelişmeyeceğine inanıyor; tekrarlı ofis ve saha işleri için bilgisayarları sizin adınıza çalıştıracak yalın uygulamalar tasarlıyoruz.
                </p>
                <p>
                  En doğru ve basite indirgenmiş program ve uygulamayı, sizinle fikir alışverişi yaparak birlikte ortaya çıkarıyoruz.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h3 className="text-2xl font-semibold text-tam-blue mb-3">Yalın Üretim Aparat - Makine Tasarım ve Üretimleri</h3>
              <p className="text-tam-blue/80 leading-relaxed">
                Üretiminizi hangi yöntemler ve makinelerle daha verimli ve sürdürülebilir hale getireceğimizi konuşmak için bizi tesisinize davet edin. Beraber keşfedelim.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zaman Kazancı Örneği</h3>
              <p className="text-gray-700 leading-relaxed">
                Raftan alınan iki parçanın bir vida ile birleştirildiği, çevrimi 10 saniye olan bir operasyonda günlük ideal adet 8 saatte 2880’dir. Basit bir aparat ve otomatik vidalama ile çevrimi 8 saniyeye indirirseniz, kümülatif olarak bir günde 96 dakika kazanır ve yaklaşık 720 adet ek üretim yapabilirsiniz.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
              <h4 className="text-xl font-semibold text-tam-blue mb-3">Daha Az Efor ile Daha Çok Verim</h4>
              <p className="text-tam-blue/80 leading-relaxed">
                Süreçlerinize dışarıdan bakarak verimlilik ve sürdürülebilirliği artıracak mekanik, elektronik ve yazılımsal çözümleri tasarlar ve uygularız.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Yalın Üretim Eğitimi Bölümü - Modern ve diğer servis sayfalarıyla uyumlu */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Sol Metin */}
            <div>
              <div className="flex items-start mb-6">
                <div className="p-4 bg-tam-blue rounded-2xl mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">Yalın Üretim Yöntemleri Eğitimi</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Yalın Üretim (Lean Manufacturing), gereksiz unsur taşımayan; hata, maliyet, işçilik, stok, geliştirme süreci, fire, üretim alanı ve müşteri memnuniyetsizliği unsurlarını en aza indirmeyi hedefleyen bir üretim sistemidir.
                </p>
                <p>
                  Üretim alanındaki makineleriniz, üretim akışınız, stoklarınız ve yerleşimleriniz ideal mi? Kaizen yaklaşımı, idealin olmadığını; bu yüzden sürekli değişim ve iyileştirmenin zorunlu olduğunu savunur.
                </p>
              </div>
            </div>

            {/* Sağ Görsel Mozaik */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/improvement-service.webp"
                      alt="Sürekli İyileştirme"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Sürekli İyileştirme</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/lean.webp"
                      alt="Yalın Uygulamalar"
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Yalın Uygulamalar</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/machine-design.webp"
                      alt="Aparat & Makine"
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Aparat & Makine</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="/images/project-design.webp"
                      alt="Akış & Yerleşim"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Akış & Yerleşim</div>
                  </div>
                </div>
              </div>

              {/* Yüzen küçük bilgi kutuları */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-tam-blue/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tam-blue">Kaizen</div>
                  <div className="text-xs text-gray-600">Sürekli İyileştirme</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">Yalın Üretim ile Tanışın!</h3>
            <p className="text-tam-blue/80 leading-relaxed">
              Sizin için Yalın Üretim uygulamaları, aparat ve makineleri geliştirebiliriz. Ancak daha değerlisi, Yalın Üretim sistemlerini ekibinizle tanıştırarak geliştirilecek alanları kendinizin tespit edip hayata geçirmenizi sağlamak.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />

      <Footer />
    </div>
  );
};

export default LeanProductionPage;
