import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import ContactSection from '../../../components/ContactSection';
import Footer from '../../../components/Footer';

const RndMachinePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="AR-GE Makine Tasarım Geliştirme - İyileştirme"
        subtitle="Sizin için Araştırıyor ve Geliştiriyoruz!"
        description="Yoğun iş temposunda fırsat bulamadığınız AR-GE ve iyileştirme çalışmalarını biz üstlenelim."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1542206395-9feb3edaa68e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showScrollIndicator={true}
        overlayOpacity={0.6}
      />

      <PageHeader
        title="AR-GE Makine Tasarım Geliştirme"
        description={[
          "Halihazırda bir Tasarım ekibiniz var ancak yoğunluktan istediğiniz AR-GE çalışmalarını yapamıyor, makinelerinizde iyileştirmelere gidemiyor musunuz?",
          "Gün içi telaşı, acil yetişmesi gereken işlerin çokluğu ve yetersiz vakit… Gelin, bu AR-GE ve iyileştirme çalışmalarını sizin için biz gerçekleştirelim."
        ]}
        cards={[
          {
            title: "Uzmanlık, Bilgi ve Tecrübe",
            description: "Mekanik, Elektronik, Pnömatik/Hidrolik ve çeşitli üretim yöntemlerinde geniş deneyim",
            image: "/images/machine-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-tam-blue to-tam-blue"
          },
          {
            title: "Tasarımlarınıza Değer Katın",
            description: "Bilgiyi paylaşarak çoğaltıyor, ekibinizle birlikte kazanım sağlıyoruz",
            image: "/images/project-design.webp",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-green-500 to-green-600"
          },
          {
            title: "Yenilikçi ve Çözüm Odaklı",
            description: "Sizin yönlendirmelerinizle ergonomik, uygulanabilir geliştirme ve iyileştirme",
            image: "https://images.unsplash.com/photo-1603706581674-8d9a75b9f4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            icon: (
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            iconColor: "bg-gradient-to-r from-purple-500 to-purple-600"
          }
        ]}
        id="arge-tasarim"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 via-tam-blue/10 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tam-blue/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Uzmanlık, Bilgi ve Tecrübe</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mt-3">
                <p>
                  Biriktirdiğimiz tecrübelerimizle tasarımlarınıza bilgi ve zekâ katarak karşılıklı faydanın sağlanacağı çalışmaların içinde bulunmak istiyoruz. Mekanik, Elektronik, Pnömatik ve Hidrolik sistemlerin yanında Talaşlı İşleme Yöntemleri (İşleme Merkezi, Torna), Lazer Kesim-Markalama, Abkant Büküm, Pres, Tel Erezyon, Sıvama, Kaynak ve daha fazla üretim yöntemiyle çalışmış olmanın verdiği özgüven ve getirdiği tecrübe ile en doğru çözüme ulaşmayı hedefliyoruz.
                </p>
                <p>
                  Derin malzeme bilgisi, yüzey kaplamaları ve işlemleri konusundaki tecrübemize; mukavemet hesaplarının yanında hız, devir, güç, kuvvet ve verimlilik hesaplarındaki bilgi birikimimizi de ekleyerek tüm bakış açılarından tasarıma yaklaşıyoruz.
                </p>
              </div>
            </div>

            <div className="relative lg:sticky lg:top-24">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1540409775241-8d4d2cc3d043?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="AR-GE Süreçleri"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">AR-GE Süreçleri</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/machine-design.webp"
                      alt="Makine İyileştirme"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Makine İyileştirme</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Analiz & Hesap"
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Analiz & Hesap</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="/images/project-design.webp"
                      alt="Yüzey & Malzeme"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">Yüzey & Malzeme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-tam-blue/20">
            <h3 className="text-2xl font-semibold text-tam-blue mb-3">Tasarımlarınıza Değer Katın!</h3>
            <p className="text-tam-black/80 leading-relaxed">
              Bilginin paylaştıkça çoğaldığına olan inancımızla yaptıklarımızı gizlemiyor ve müşterilerimizle gönül rahatlığıyla paylaşıyoruz. Siz ve ekibinizin de bu ortak çalışmalardan fayda sağlayacağını rahatça söyleyebiliriz.
            </p>
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
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Yenilikçi ve Çözüm Odaklı Tasarım</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Gereken geliştirme ve iyileştirmeleri en iyi bilen sizlersiniz. Sizin yönlendirmeleriniz ve taleplerinizle, imalat yöntemlerine en uygun, ergonomik ve uygulanabilir geliştirme ve iyileştirme tasarımlarını isteklerinize uygun yapacağımızdan emin olabilirsiniz.
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default RndMachinePage;
