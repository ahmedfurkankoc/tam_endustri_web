import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const ThreeDAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-tam-blue to-tam-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              3D Otomasyon Hizmetleri
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              SolidWorks API ile otomasyon çözümleri
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            3D Otomasyon Çözümlerimiz
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Bu sayfa yakında içerikle doldurulacak...
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThreeDAutomationPage;
