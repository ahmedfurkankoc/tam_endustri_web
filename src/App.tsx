import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Service Pages
import ThreeDDesignPage from './pages/services/design/3DDesignPage';
import ThreeDAutomationPage from './pages/services/design/3DAutomationPage';
import CustomMachinePage from './pages/services/design/CustomMachinePage';
import FactorySetupPage from './pages/services/design/FactorySetupPage';
import ReverseEngineeringPage from './pages/services/design/ReverseEngineeringPage';
import RndMachinePage from './pages/services/design/RndMachinePage';
import LeanProductionPage from './pages/services/business/LeanProductionPage';
import TechnicalSalesPage from './pages/services/business/TechnicalSalesPage';
import CalculationReportingPage from './pages/services/business/CalculationReportingPage';
import MachineryManufacturingPage from './pages/services/consulting/MachineryManufacturingPage';

import Lenis from 'lenis';

const App: React.FC = () => {
  useEffect(() => {
    // Lenis smooth scrolling initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Make lenis globally accessible
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/en" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/en/about" element={<AboutPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/en/contact" element={<ContactPage />} />
        
        {/* Service Pages - Turkish */}
        <Route path="/hizmetler/tasarim/3d-tasarim" element={<ThreeDDesignPage />} />
        <Route path="/hizmetler/tasarim/3d-otomasyon" element={<ThreeDAutomationPage />} />
        <Route path="/hizmetler/tasarim/arge-makine" element={<RndMachinePage />} />
        <Route path="/hizmetler/tasarim/ise-ozel-makine" element={<CustomMachinePage />} />
        <Route path="/hizmetler/tasarim/fabrika-kurulum" element={<FactorySetupPage />} />
        <Route path="/hizmetler/tasarim/tersine-muhendislik" element={<ReverseEngineeringPage />} />
        <Route path="/hizmetler/is-gelistirme/yalin-uretim" element={<LeanProductionPage />} />
        <Route path="/hizmetler/is-gelistirme/teknik-satis" element={<TechnicalSalesPage />} />
        <Route path="/hizmetler/is-gelistirme/hesaplama-raporlama" element={<CalculationReportingPage />} />
        <Route path="/hizmetler/danismanlik/makine-imalat" element={<MachineryManufacturingPage />} />
        
        {/* Service Pages - English */}
        <Route path="/en/services/design/3d-design" element={<ThreeDDesignPage />} />
        <Route path="/en/services/design/3d-automation" element={<ThreeDAutomationPage />} />
        <Route path="/en/services/design/rnd-machine" element={<RndMachinePage />} />
        <Route path="/en/services/design/custom-machine" element={<CustomMachinePage />} />
        <Route path="/en/services/design/factory-setup" element={<FactorySetupPage />} />
        <Route path="/en/services/design/reverse-engineering" element={<ReverseEngineeringPage />} />
        <Route path="/en/services/business/lean-production" element={<LeanProductionPage />} />
        <Route path="/en/services/business/technical-sales" element={<TechnicalSalesPage />} />
        <Route path="/en/services/business/calculation-reporting" element={<CalculationReportingPage />} />
        <Route path="/en/services/consulting/machinery-manufacturing" element={<MachineryManufacturingPage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;