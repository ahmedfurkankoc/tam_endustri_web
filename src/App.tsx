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
import ElectricalManufacturingPage from './pages/services/consulting/ElectricalManufacturingPage';
import TextileManufacturingPage from './pages/services/consulting/TextileManufacturingPage';
import CncMachiningPage from './pages/services/consulting/CncMachiningPage';
import LaserCuttingBendingPage from './pages/services/consulting/LaserCuttingBendingPage';
import WebsiteLocalizationPage from './pages/services/consulting/WebsiteLocalizationPage';
import SoftwareDesignCodingPage from './pages/services/consulting/SoftwareDesignCodingPage';
import TourismConsultingPage from './pages/services/consulting/TourismConsultingPage';
import BankingConsultingPage from './pages/services/consulting/BankingConsultingPage';
import IslamicBankingConsultingPage from './pages/services/consulting/IslamicBankingConsultingPage';
import LogisticsConsultingPage from './pages/services/consulting/LogisticsConsultingPage';
import ProcurementServicesPage from './pages/services/consulting/ProcurementServicesPage';
import SalesConsultingPage from './pages/services/consulting/SalesConsultingPage';
import FeasibilityStudiesPage from './pages/services/consulting/FeasibilityStudiesPage';
import PhotographyVideographyPage from './pages/services/consulting/PhotographyVideographyPage';

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
        
        {/* Service Pages - Turkish (no 'hizmetler' segment) */}
        <Route path="/tasarim/3d-tasarim" element={<ThreeDDesignPage />} />
        <Route path="/tasarim/3d-otomasyon" element={<ThreeDAutomationPage />} />
        <Route path="/tasarim/arge-makine" element={<RndMachinePage />} />
        <Route path="/tasarim/ise-ozel-makine" element={<CustomMachinePage />} />
        <Route path="/tasarim/fabrika-kurulum" element={<FactorySetupPage />} />
        <Route path="/tasarim/tersine-muhendislik" element={<ReverseEngineeringPage />} />
        <Route path="/is-gelistirme/yalin-uretim" element={<LeanProductionPage />} />
        <Route path="/is-gelistirme/teknik-satis" element={<TechnicalSalesPage />} />
        <Route path="/is-gelistirme/hesaplama-raporlama" element={<CalculationReportingPage />} />
        <Route path="/danismanlik/makine-imalat" element={<MachineryManufacturingPage />} />
        <Route path="/danismanlik/elektrik-imalat" element={<ElectricalManufacturingPage />} />
        <Route path="/danismanlik/tekstil-imalat" element={<TextileManufacturingPage />} />
        <Route path="/danismanlik/cnc-isleme" element={<CncMachiningPage />} />
        <Route path="/danismanlik/lazer-kesim-bukme" element={<LaserCuttingBendingPage />} />
        <Route path="/danismanlik/website-lokalizasyon" element={<WebsiteLocalizationPage />} />
        <Route path="/danismanlik/yazilim-tasarim" element={<SoftwareDesignCodingPage />} />
        <Route path="/danismanlik/turizm-danismanlik" element={<TourismConsultingPage />} />
        <Route path="/danismanlik/bankacilik-danismanlik" element={<BankingConsultingPage />} />
        <Route path="/danismanlik/faizsiz-bankacilik" element={<IslamicBankingConsultingPage />} />
        <Route path="/danismanlik/lojistik-danismanlik" element={<LogisticsConsultingPage />} />
        <Route path="/danismanlik/tedarik-hizmetleri" element={<ProcurementServicesPage />} />
        <Route path="/danismanlik/satis-danismanlik" element={<SalesConsultingPage />} />
        
        <Route path="/danismanlik/fizibilite-calismalari" element={<FeasibilityStudiesPage />} />
        
        <Route path="/danismanlik/fotograf-video" element={<PhotographyVideographyPage />} />
        
        {/* Service Pages - English (no '/services' segment) */}
        <Route path="/en/design/3d-design" element={<ThreeDDesignPage />} />
        <Route path="/en/design/3d-automation" element={<ThreeDAutomationPage />} />
        <Route path="/en/design/rnd-machine" element={<RndMachinePage />} />
        <Route path="/en/design/custom-machine" element={<CustomMachinePage />} />
        <Route path="/en/design/factory-setup" element={<FactorySetupPage />} />
        <Route path="/en/design/reverse-engineering" element={<ReverseEngineeringPage />} />
        <Route path="/en/business/lean-production" element={<LeanProductionPage />} />
        <Route path="/en/business/technical-sales" element={<TechnicalSalesPage />} />
        <Route path="/en/business/calculation-reporting" element={<CalculationReportingPage />} />
        <Route path="/en/consulting/machinery-manufacturing" element={<MachineryManufacturingPage />} />
        <Route path="/en/consulting/electrical-manufacturing" element={<ElectricalManufacturingPage />} />
        <Route path="/en/consulting/textile-manufacturing" element={<TextileManufacturingPage />} />
        <Route path="/en/consulting/cnc-machining" element={<CncMachiningPage />} />
        <Route path="/en/consulting/laser-cutting-bending" element={<LaserCuttingBendingPage />} />
        <Route path="/en/consulting/website-localization" element={<WebsiteLocalizationPage />} />
        <Route path="/en/consulting/software-design-coding" element={<SoftwareDesignCodingPage />} />
        <Route path="/en/consulting/tourism-consulting" element={<TourismConsultingPage />} />
        <Route path="/en/consulting/banking-consulting" element={<BankingConsultingPage />} />
        <Route path="/en/consulting/islamic-banking" element={<IslamicBankingConsultingPage />} />
        <Route path="/en/consulting/logistics-consulting" element={<LogisticsConsultingPage />} />
        <Route path="/en/consulting/procurement-services" element={<ProcurementServicesPage />} />
        <Route path="/en/consulting/sales-consulting" element={<SalesConsultingPage />} />
        
        <Route path="/en/consulting/feasibility-studies" element={<FeasibilityStudiesPage />} />
        
        <Route path="/en/consulting/photography-videography" element={<PhotographyVideographyPage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;