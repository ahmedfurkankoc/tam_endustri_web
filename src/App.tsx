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
        <Route path="/hizmetler/danismanlik/elektrik-imalat" element={<ElectricalManufacturingPage />} />
        <Route path="/hizmetler/danismanlik/tekstil-imalat" element={<TextileManufacturingPage />} />
        <Route path="/hizmetler/danismanlik/cnc-isleme" element={<CncMachiningPage />} />
        <Route path="/hizmetler/danismanlik/lazer-kesim-bukme" element={<LaserCuttingBendingPage />} />
        <Route path="/hizmetler/danismanlik/website-lokalizasyon" element={<WebsiteLocalizationPage />} />
        <Route path="/hizmetler/danismanlik/yazilim-tasarim" element={<SoftwareDesignCodingPage />} />
        <Route path="/hizmetler/danismanlik/turizm-danismanlik" element={<TourismConsultingPage />} />
        <Route path="/hizmetler/danismanlik/bankacilik-danismanlik" element={<BankingConsultingPage />} />
        <Route path="/hizmetler/danismanlik/faizsiz-bankacilik" element={<IslamicBankingConsultingPage />} />
        <Route path="/hizmetler/danismanlik/lojistik-danismanlik" element={<LogisticsConsultingPage />} />
        <Route path="/hizmetler/danismanlik/tedarik-hizmetleri" element={<ProcurementServicesPage />} />
        <Route path="/hizmetler/danismanlik/satis-danismanlik" element={<SalesConsultingPage />} />
        
        <Route path="/hizmetler/danismanlik/fizibilite-calismalari" element={<FeasibilityStudiesPage />} />
        
        <Route path="/hizmetler/danismanlik/fotograf-video" element={<PhotographyVideographyPage />} />
        
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
        <Route path="/en/services/consulting/electrical-manufacturing" element={<ElectricalManufacturingPage />} />
        <Route path="/en/services/consulting/textile-manufacturing" element={<TextileManufacturingPage />} />
        <Route path="/en/services/consulting/cnc-machining" element={<CncMachiningPage />} />
        <Route path="/en/services/consulting/laser-cutting-bending" element={<LaserCuttingBendingPage />} />
        <Route path="/en/services/consulting/website-localization" element={<WebsiteLocalizationPage />} />
        <Route path="/en/services/consulting/software-design-coding" element={<SoftwareDesignCodingPage />} />
        <Route path="/en/services/consulting/tourism-consulting" element={<TourismConsultingPage />} />
        <Route path="/en/services/consulting/banking-consulting" element={<BankingConsultingPage />} />
        <Route path="/en/services/consulting/islamic-banking" element={<IslamicBankingConsultingPage />} />
        <Route path="/en/services/consulting/logistics-consulting" element={<LogisticsConsultingPage />} />
        <Route path="/en/services/consulting/procurement-services" element={<ProcurementServicesPage />} />
        <Route path="/en/services/consulting/sales-consulting" element={<SalesConsultingPage />} />
        
        <Route path="/en/services/consulting/feasibility-studies" element={<FeasibilityStudiesPage />} />
        
        <Route path="/en/services/consulting/photography-videography" element={<PhotographyVideographyPage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;