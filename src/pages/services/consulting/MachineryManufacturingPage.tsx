import React from 'react';
import Header from '../../../components/Header';
import Hero from '../../../components/Hero';
import PageHeader from '../../../components/PageHeader';
import Footer from '../../../components/Footer';

const MachineryManufacturingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="Makine İmalat Danışmanlığı"
        subtitle="Uzman Rehberlik"
        description="Makine imalat süreçleriniz için profesyonel danışmanlık hizmetleri"
        backgroundType="image"
        backgroundSrc="/hero-machinery.jpg"
        showScrollIndicator={true}
        overlayOpacity={0.5}
      />

      <PageHeader
        title="Makine İmalat Danışmanlığı"
        subtitle="İmalat süreçlerinizi optimize etmek için uzman desteği"
        id="machinery-consulting-services"
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

export default MachineryManufacturingPage;
