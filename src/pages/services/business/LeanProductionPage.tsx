import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';

const LeanProductionPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="Yalın Üretim"
        subtitle="Verimlilik Artışı"
        description="Yalın üretim yöntemleri uygulamaları ile süreçlerinizi optimize edin"
        backgroundType="image"
        backgroundSrc="/hero-lean-production.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title="Yalın Üretim Çözümlerimiz"
        subtitle="Süreçlerinizi optimize ederek verimliliği artırın"
        id="lean-production-services"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Bu sayfa yakında içerikle doldurulacak...
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LeanProductionPage;
