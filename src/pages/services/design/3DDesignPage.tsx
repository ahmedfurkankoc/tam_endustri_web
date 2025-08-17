import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';

const ThreeDDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="3D Tasarım Hizmetleri"
        subtitle="Profesyonel Çözümler"
        description="Profesyonel 3D tasarım hizmetleri ile projelerinizi hayata geçirin"
        backgroundType="image"
        backgroundSrc="/hero-3d-design.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title="3D Tasarım Hizmetlerimiz"
        subtitle="İhtiyaçlarınıza özel tasarım çözümleri sunuyoruz"
        id="3d-design-services"
      />

      {/* Page Content */}
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

export default ThreeDDesignPage;
