import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';
import ContactSection from '../../../components/ContactSection';
import StatsSection from '../../../components/StatsSection';

const ThreeDAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="3D Tasarım Otomasyonları"
        subtitle="Tasarımda Hız, Verimlilik ve Sürdürülebilirlik"
        description="SolidWorks API ile tekrarlayan işleri otomatikleştirerek hataları azaltın, hız ve verimliliği artırın."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1581093588401-8630a18f6d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title="3D Tasarım Otomasyonları"
        description={[
          "Çağ gereksinimleri artık hız, verimlilik ve sürdürülebilirlik. Tasarımlarda da hızlı olurken, hatasız sonuç almak ve bunu aynı dinamizm ve istek ile sürekli hale getirmek zaruri bir ihtiyaç oldu.",
          "Sürekli tekrar eden tasarımlar, üretim resimleri ve listeleri, işleme dosyaları ile geçen zamanı SolidWorks API tabanlı özel arayüzlerle ciddi ölçüde azaltabilirsiniz."
        ]}
        cards={[
          {
            title: "Hataları Minimize Edin",
            description: "SolidWorks API ile özel arayüzler sayesinde kontrolleri bilgisayara bırakın",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Basit Örnek: Mil Çizimi",
            description: "7 adımlık çevrimi arayüzle 5 saniyeye indirin; yorgunluğu azaltın",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-orange-500 to-orange-600"
          },
          {
            title: "Zaman Kazancı",
            description: "50 dakikalık işi 8,5 dakikaya düşürerek 5x hız ve sürdürülebilirlik",
            image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          }
        ]}
        id="otomasyon-baslik"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tam-blue/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">3D Tasarım Otomasyonları (SolidWorks API)</h2>
              <p className="text-indigo-600 font-semibold mt-3">Tasarımda Hız, Verimlilik ve Sürdürülebilirlik</p>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Çağ gereksinimleri artık hız, verimlilik ve sürdürülebilirlik. Tasarımlarda da hızlı olurken, hatasız sonuç almak ve bunu aynı dinamizm ve istek ile sürekli hale getirmek zaruri bir ihtiyaç oldu.
                </p>
                <p>
                  Kendinizi zorlayarak ancak yetiştirebileceğiniz termin sürelerini 3 - 5 gün daha geri çekmek için can atan müşterileriniz var biliyoruz. Sürekli tekrar eden tasarımlar, üretim resimleri ve listeleri, işleme dosyaları hazırlamakla gününüzün tıka basa dolu olduğunun da farkındayız.
                </p>
                <h3 className="text-2xl font-semibold text-tam-blue">Hataları Minimize Edin.</h3>
                <p>
                  Hata yapmadan aynı verimlilikle sürekli bir şekilde tüm bu yükü sırtımızda taşıyamayız. Bu yüzden sizi SolidWorks(API) ile tanıştırmak istiyoruz. “Application Programming Interface” yani Aplikasyon Programlama Arayüzü, tasarımlarınızı size özel arayüzlerle bilgisayara yaptırılabilecek hesap ve kontrollerin yükü altında kalmadan otomatik olarak yaptırmaya yarar.
                </p>
                <h3 className="text-2xl font-semibold text-tam-blue">Vaktinizin Ne Kadar Değerli Olduğunu Biliyoruz.</h3>
                <p>
                  Yalın Üretim Sistemleri (Lean Manufacturing) ve Japon “Kaizen” yaklaşımlarının belirttiği gibi gün içinde harcadığınız değer üretilemeyen zamanı en iyi tespit edebilecek kişi, o işi yapan kişidir.
                </p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="CAD Otomasyon"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">CAD Otomasyon</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/machine-design.webp"
                      alt="Tekrarlayan İşler"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Tekrarlayan İşler</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Kontrol & Hesap"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Kontrol & Hesap</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/project-design.webp"
                      alt="Sürdürülebilirlik"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Sürdürülebilirlik</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1581093458791-9d1b1bfa3f5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Otomasyon Banner"
                      className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
                    <div className="absolute left-5 bottom-5 text-white">
                      <p className="text-sm uppercase tracking-wider opacity-90">SolidWorks API</p>
                      <h4 className="text-xl md:text-2xl font-semibold">Hızlı Çevrim • Düşük Hata • Sürdürülebilirlik</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-tam-blue/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tam-blue">%80’e kadar</div>
                  <div className="text-xs text-gray-600">Zaman Kazancı</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100">
          <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">Daha Az</div>
                  <div className="text-xs text-gray-600">Hata ve Yorgunluk</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-tam-blue/20">
              <h4 className="text-xl font-semibold text-tam-blue mb-3">Tasarımda Yazılımın Gücünü Keşfedin</h4>
              <p className="text-tam-blue/80">
                Siz de 5 dakikanızı ayırıp tasarımda değer üretmeden geçirdiğiniz vakitleri kabaca hesaplarsanız, verimsiz geçirdiğiniz sürelerle ilgili farkındalığınızı artıracaksınız. İşte bu noktada sizin için neler yapabileceğimizi tespit ettiyseniz, tereddüt etmeden bizimle iletişime geçebilirsiniz. Sizinle tanışmak için heyecanlıyız!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <h4 className="text-xl font-semibold text-green-900 mb-3">Basit Bir Örnek</h4>
              <p className="text-green-700 mb-4">Her makine tasarımcısı gibi bir mil çizerken tipik adımlar:</p>
              <ul className="list-disc pl-5 space-y-2 text-green-700">
                <li>“plane” – düzlem seç</li>
                <li>“sketch” – çizim aç</li>
                <li>“circle” – daire çiz</li>
                <li>“diameter” – çap gir</li>
                <li>“extrude” – katı oluştur</li>
                <li>“length” – uzunluk gir</li>
                <li>“apply” – onayla</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <h4 className="text-xl font-semibold text-purple-900 mb-3">Zaman Hesabı</h4>
              <p className="text-purple-700">
                Bu basit işlemin 30 saniye sürdüğünü ve günde 100 kez yaptığınızı varsayalım: 3000 saniye yani 50 dakika. Basit bir arayüz ile bu çevrimi 5 saniyeye düşürerek aynı işi yaklaşık 8,5 dakikada tamamlayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-tam-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">'TAM' Tasarım Yazılımları</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Yalın Üretim Sistemleri (Lean Manufacturing) ve Japon “Kaizen” yaklaşımlarının belirttiği gibi, değer üretmeyen sürelerin farkına varmak ilk adımdır. Doğru algoritma ve SolidWorks API ile çok daha zor tasarımları dahi otomatikleştirebilirsiniz.
            </p>
          </div>

          <StatsSection
            stats={[
              { value: "5x", label: "Daha Hızlı Çevrim" },
              { value: "%80-90", label: "Hata Azalması" },
              { value: "24/7", label: "Sürdürülebilir Üretkenlik" },
              { value: "%100", label: "Özel Arayüz Uyumu" }
            ]}
          />
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ThreeDAutomationPage;
