import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import SeoUpdater from './seo/SeoUpdater';
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
        <Route path="/" element={<><SeoUpdater /><HomePage /></>} />
        <Route path="/en" element={<><SeoUpdater /><HomePage /></>} />
        <Route path="/hakkimizda" element={<><SeoUpdater /><AboutPage /></>} />
        <Route path="/en/about" element={<><SeoUpdater /><AboutPage /></>} />
        <Route path="/iletisim" element={<><SeoUpdater /><ContactPage /></>} />
        <Route path="/en/contact" element={<><SeoUpdater /><ContactPage /></>} />
        
        {/* Service Pages - Turkish (no 'hizmetler' segment) */}
        <Route path="/tasarim/3d-tasarim" element={<><SeoUpdater /><ThreeDDesignPage /></>} />
        <Route path="/tasarim/3d-otomasyon" element={<><SeoUpdater /><ThreeDAutomationPage /></>} />
        <Route path="/tasarim/arge-makine" element={<><SeoUpdater /><RndMachinePage /></>} />
        <Route path="/tasarim/ise-ozel-makine" element={<><SeoUpdater /><CustomMachinePage /></>} />
        <Route path="/tasarim/fabrika-kurulum" element={<><SeoUpdater /><FactorySetupPage /></>} />
        <Route path="/tasarim/tersine-muhendislik" element={<><SeoUpdater /><ReverseEngineeringPage /></>} />
        <Route path="/is-gelistirme/yalin-uretim" element={<><SeoUpdater /><LeanProductionPage /></>} />
        <Route path="/is-gelistirme/teknik-satis" element={<><SeoUpdater /><TechnicalSalesPage /></>} />
        <Route path="/is-gelistirme/hesaplama-raporlama" element={<><SeoUpdater /><CalculationReportingPage /></>} />
        <Route path="/danismanlik/makine-imalat" element={<><SeoUpdater /><MachineryManufacturingPage /></>} />
        <Route path="/danismanlik/elektrik-imalat" element={<><SeoUpdater /><ElectricalManufacturingPage /></>} />
        <Route path="/danismanlik/tekstil-imalat" element={<><SeoUpdater /><TextileManufacturingPage /></>} />
        <Route path="/danismanlik/cnc-isleme" element={<><SeoUpdater /><CncMachiningPage /></>} />
        <Route path="/danismanlik/lazer-kesim-bukme" element={<><SeoUpdater /><LaserCuttingBendingPage /></>} />
        <Route path="/danismanlik/website-lokalizasyon" element={<><SeoUpdater /><WebsiteLocalizationPage /></>} />
        <Route path="/danismanlik/yazilim-tasarim" element={<><SeoUpdater /><SoftwareDesignCodingPage /></>} />
        <Route path="/danismanlik/turizm-danismanlik" element={<><SeoUpdater /><TourismConsultingPage /></>} />
        <Route path="/danismanlik/bankacilik-danismanlik" element={<><SeoUpdater /><BankingConsultingPage /></>} />
        <Route path="/danismanlik/faizsiz-bankacilik" element={<><SeoUpdater /><IslamicBankingConsultingPage /></>} />
        <Route path="/danismanlik/lojistik-danismanlik" element={<><SeoUpdater /><LogisticsConsultingPage /></>} />
        <Route path="/danismanlik/tedarik-hizmetleri" element={<><SeoUpdater /><ProcurementServicesPage /></>} />
        <Route path="/danismanlik/satis-danismanlik" element={<><SeoUpdater /><SalesConsultingPage /></>} />
        
        <Route path="/danismanlik/fizibilite-calismalari" element={<><SeoUpdater /><FeasibilityStudiesPage /></>} />
        
        <Route path="/danismanlik/fotograf-video" element={<><SeoUpdater /><PhotographyVideographyPage /></>} />
        
        {/* Service Pages - English (no '/services' segment) */}
        <Route path="/en/design/3d-design" element={<><SeoUpdater /><ThreeDDesignPage /></>} />
        <Route path="/en/design/3d-automation" element={<><SeoUpdater /><ThreeDAutomationPage /></>} />
        <Route path="/en/design/rnd-machine" element={<><SeoUpdater /><RndMachinePage /></>} />
        <Route path="/en/design/custom-machine" element={<><SeoUpdater /><CustomMachinePage /></>} />
        <Route path="/en/design/factory-setup" element={<><SeoUpdater /><FactorySetupPage /></>} />
        <Route path="/en/design/reverse-engineering" element={<><SeoUpdater /><ReverseEngineeringPage /></>} />
        <Route path="/en/business/lean-production" element={<><SeoUpdater /><LeanProductionPage /></>} />
        <Route path="/en/business/technical-sales" element={<><SeoUpdater /><TechnicalSalesPage /></>} />
        <Route path="/en/business/calculation-reporting" element={<><SeoUpdater /><CalculationReportingPage /></>} />
        <Route path="/en/consulting/machinery-manufacturing" element={<><SeoUpdater /><MachineryManufacturingPage /></>} />
        <Route path="/en/consulting/electrical-manufacturing" element={<><SeoUpdater /><ElectricalManufacturingPage /></>} />
        <Route path="/en/consulting/textile-manufacturing" element={<><SeoUpdater /><TextileManufacturingPage /></>} />
        <Route path="/en/consulting/cnc-machining" element={<><SeoUpdater /><CncMachiningPage /></>} />
        <Route path="/en/consulting/laser-cutting-bending" element={<><SeoUpdater /><LaserCuttingBendingPage /></>} />
        <Route path="/en/consulting/website-localization" element={<><SeoUpdater /><WebsiteLocalizationPage /></>} />
        <Route path="/en/consulting/software-design-coding" element={<><SeoUpdater /><SoftwareDesignCodingPage /></>} />
        <Route path="/en/consulting/tourism-consulting" element={<><SeoUpdater /><TourismConsultingPage /></>} />
        <Route path="/en/consulting/banking-consulting" element={<><SeoUpdater /><BankingConsultingPage /></>} />
        <Route path="/en/consulting/islamic-banking" element={<><SeoUpdater /><IslamicBankingConsultingPage /></>} />
        <Route path="/en/consulting/logistics-consulting" element={<><SeoUpdater /><LogisticsConsultingPage /></>} />
        <Route path="/en/consulting/procurement-services" element={<><SeoUpdater /><ProcurementServicesPage /></>} />
        <Route path="/en/consulting/sales-consulting" element={<><SeoUpdater /><SalesConsultingPage /></>} />
        
        <Route path="/en/consulting/feasibility-studies" element={<><SeoUpdater /><FeasibilityStudiesPage /></>} />
        
        <Route path="/en/consulting/photography-videography" element={<><SeoUpdater /><PhotographyVideographyPage /></>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;