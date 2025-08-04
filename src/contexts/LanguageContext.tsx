import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  tr: {
    // Navigation
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetlerimiz',
    'nav.why': 'Neden Tam Endüstri',
    'nav.contact': 'İletişim',
    'nav.contact_us': 'CONTACT US',
    
    // Mega Menu
    'megamenu.design_manufacturing': 'Proje Tasarım Ve İmalat',
    'megamenu.3d_design': '3D Tasarım Hizmetleri',
    'megamenu.3d_automation': '3D Tasarım Otomasyonları (SolidWorks API)',
    'megamenu.rnd_machine': 'AR-GE Makine Tasarım Geliştirme-İyileştirme',
    'megamenu.custom_machine': 'İşe Özel Makine Tasarım – İmalat Projeleri',
    'megamenu.factory_setup': 'Fabrika Kurulum Yerleşim Planı',
    'megamenu.reverse_engineering': 'Tersine Mühendislik Tasarımları',
    
    'megamenu.business_improvement': 'İŞ GELİŞTİRME ve İYİLEŞTİRME',
    'megamenu.lean_production': 'Yalın Üretim Yöntemleri Uygulamaları',
    'megamenu.technical_sales': 'Teknik Satış Program-Uygulamaları',
    'megamenu.calculation_reporting': 'Hesaplama-Raporlama Uygulamaları',
    
    'megamenu.consulting_training': 'DANIŞMANLIK - EĞİTİMLERİMİZ',
    'megamenu.sales_consulting': 'Satış Danışmanlığı',
    'megamenu.design_training': 'Tasarım Eğitimleri',
    'megamenu.feasibility_studies': 'Fizibilite Çalışmaları ve Raporlama',
    'megamenu.lean_training': 'Yalın Üretim Yöntemleri Eğitimi',
    
    // Footer
    'footer.corporate': 'Kurumsal',
    'footer.about': 'Hakkımızda',
    'footer.why': 'Neden Tam Endüstri',
    'footer.services': 'Hizmetlerimiz',
    'footer.contact': 'İletişim',
    
    'footer.consulting_design': 'Danışmanlık Proje Tasarım ve İmalat',
    'footer.3d_design_services': '3D Tasarım Hizmetleri',
    'footer.3d_design_automation': '3D Tasarım Otomasyonları (SolidWorks)',
    'footer.rnd_machine_design': 'AR-GE Makine Tasarım Geliştirme ve İyileştirme',
    'footer.custom_machine_design': 'İşe Özel Makine Tasarım - İmalat Projeleri',
    'footer.factory_setup_plan': 'Fabrika Kurulum Yerleşim Planı',
    'footer.reverse_engineering': 'Tersine Mühendislik Tasarımları',
    
    'footer.business_improvement': 'İş Geliştirme ve İyileştirme',
    'footer.lean_production_methods': 'Yalın Üretim Yöntemleri Uygulamaları',
    'footer.3d_design_automation_2': '3D Tasarım Otomasyonları',
    'footer.rnd_machine_design_2': 'AR-GE Makine Tasarım Geliştirme ve İyileştirme',
    'footer.technical_sales_program': 'Teknik Satış Program - Uygulamaları',
    'footer.calculation_reporting_apps': 'Hesaplama ve Raporlama Uygulamaları',
    
    'footer.consulting': 'Danışmanlık',
    'footer.turkey_business_consulting': 'Türkiye Business Danışmanlığı/Türkiye\'de Ticaret Danışmanlığı',
    'footer.design_training': 'Tasarım Eğitimleri',
    'footer.feasibility_studies': 'Fizibilite Çalışmaları ve Raporlama',
    'footer.lean_production_training': 'Yalın Üretim Yöntemleri Eğitimi',
    
    'footer.description': 'TAM Endüstri olarak, endüstriyel tasarım ve imalat alanında uzmanlaşmış bir ekibiz. Yabancı şirketlerin Türkiye pazarına giriş süreçlerinde danışmanlık hizmeti veriyor, proje tasarımından imalata kadar tüm süreçlerde yanınızdayız.',
    'footer.email': 'E-posta',
    'footer.copyright': '© 2023 Tam Endüstri Danışmanlık Grubu, LLC',
    
    // Hero Section
    'hero.title': 'TÜRKİYE TİCARET',
    'hero.title2': 'DANIŞMANLIĞI',
    'hero.description': 'Türkiye pazarına giriş süreçlerinde uzman danışmanlık hizmeti veriyoruz. Yabancı şirketlerin Türkiye\'de başarılı olması için gerekli tüm ticaret süreçlerini yönetiyoruz.',
    'hero.scroll': 'Scroll',
    
    // Problem Statement
    'problem.title': 'Sizi çok iyi anlayıp doğru sonuçlara ulaştıracak proje tasarımlarına ve hatta imalatına ihtiyacınız varsa bize ulaşın.',
    'problem.subtitle': 'Bizimle tanışmaktan memnun olacağınıza inancımız TAM!',
    
    // Services Section
    'services.design.title': 'PROJE TASARIM VE İMALAT',
    'services.design.desc': '3D Tasarım Hizmetleri, Tersine Mühendislik Tasarımları, 3D Tasarım Otomasyonları (SolidWorks API), AR-GE Makine Tasarım Geliştirme-İyileştirme',
    'services.improvement.title': 'İŞ GELİŞTİRME VE İYİLEŞTİRME',
    'services.improvement.desc': 'Zamanın en değerli hali; üretebildiğiniz zamandır. Üretim yapabileceğimiz zamanı farkında olarak veya olmayarak çok defa verimsiz harcıyoruz. İşinize "Zekâ" katmak istiyoruz!',
    'services.training.title': 'DANIŞMANLIK VE EĞİTİMLERİMİZ',
    'services.training.desc': 'Yalın Üretim Yöntemleri Eğitimi, Tasarım Eğitimleri, Türkiye Business Danışmanlığı, Fizibilite Çalışmaları ve Raporlama',
    'services.details': 'Detaylar',
    
    // Regulatory Power (İş Geliştirme)
    'regulatory.title': 'İŞ GELİŞTİRME VE İYİLEŞTİRME',
    'regulatory.description': 'Gelin bizim uzmanlığımız ve sizin iş tecrübenizi birleştirip, işinizi daha verimli hale getirelim. "Yalın Üretim Yöntemleri", "Otomasyon Yazılımları", "SolidWorks API". İşinizi daha verimli hale getireceğimize inancımız TAM!',
    'regulatory.3d_design': '3D Tasarım Otomasyonları',
    'regulatory.rnd_machine': 'AR-GE Makine Tasarım Geliştirme - İyileştirme',
    'regulatory.technical_sales': 'Teknik Satış Program - Uygulamaları',
    'regulatory.cta': 'BİZİMLE ÇALIŞIN',
    
    // Global Approvals (Danışmanlık)
    'approvals.title': 'DANIŞMANLIK VE EĞİTİMLERİMİZ',
    'approvals.description': 'Bizim yapabileceklerimizin size yararlı olduğunu düşünüyor fakat bunları şirket bünyenizde mi yapmak istiyorsunuz? Bizim de izlemek isteyeceğimiz yol bu. Sizin için balık tutabiliriz ancak balık tutmayı öğreterek daha büyük katkılar vermek istiyoruz.',
    'approvals.lean_training': 'Yalın Üretim Yöntemleri Eğitimi',
    'approvals.design_training': 'Tasarım Eğitimleri',
    'approvals.business_consulting': 'Türkiye Business Danışmanlığı',
    'approvals.feasibility': 'Fizibilite Çalışmaları ve Raporlama',
    'approvals.calculation': 'Hesaplama - Raporlama Uygulamaları',
    'approvals.factory_setup': 'Fabrika Kurulum Yerleşim Planı',
    'approvals.custom_machine': 'İşe Özel Makine Tasarım ve İmalat Projeleri',
    'approvals.cta': 'İLETİŞİME GEÇİN',
    
    // Concept Validators (Business Danışmanlığı)
    'concept.title': 'TÜRKİYE BUSINESS DANIŞMANLIĞI',
    'concept.description': 'Tüm yapabildiklerimiz için size danışmanlık verebilir, ekibinize eğitimler düzenleyebiliriz. Planlarınıza katkı sunacağımıza inancımız TAM!',
    'concept.cta': 'YAKLAŞIMIMIZ',
    
    // Testimonial
    'testimonial.quote': 'Tam Endüstri ile çalışmaya başladığımızdan beri üretim süreçlerimiz %40 daha verimli hale geldi. Uzmanlıkları ve pratik yaklaşımları gerçekten fark yaratıyor.',
    'testimonial.name': 'AHMET YILMAZ',
    'testimonial.position': 'Üretim Müdürü, Endüstri A.Ş.',
    
    // Success Stories
    'success.title': 'BAŞARI HİKAYELERİ',
    'success.automotive.title': 'Otomotiv Sektöründe Üretim Otomasyonu',
    'success.manufacturing.title': 'Makine İmalatında Yalın Üretim Uygulaması',
    'success.design.title': '3D Tasarım Otomasyonu ile Verimlilik Artışı',
    'success.category': 'Vaka Çalışması',
    
    // CTA
    'cta.title': 'UZMAN ENDÜSTRİ',
    'cta.title2': 'DANIŞMANLIĞI ALIN',
    'cta.description': 'Proje tasarımından imalata, iş geliştirmeden eğitimlere kadar tüm ihtiyaçlarınız için uzman ekibimizle çalışın. İşinizi daha verimli hale getirmek için buradayız.',
    'cta.button': 'İLETİŞİME GEÇİN',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.why': 'Why Tam Industry',
    'nav.contact': 'Contact',
    'nav.contact_us': 'CONTACT US',
    
    // Mega Menu
    'megamenu.design_manufacturing': 'Project Design and Manufacturing',
    'megamenu.3d_design': '3D Design Services',
    'megamenu.3d_automation': '3D Design Automations (SolidWorks API)',
    'megamenu.rnd_machine': 'R&D Machine Design Development-Improvement',
    'megamenu.custom_machine': 'Custom Machine Design – Manufacturing Projects',
    'megamenu.factory_setup': 'Factory Setup Layout Plan',
    'megamenu.reverse_engineering': 'Reverse Engineering Designs',
    
    'megamenu.business_improvement': 'BUSINESS DEVELOPMENT and IMPROVEMENT',
    'megamenu.lean_production': 'Lean Production Methods Applications',
    'megamenu.technical_sales': 'Technical Sales Program-Applications',
    'megamenu.calculation_reporting': 'Calculation-Reporting Applications',
    
    'megamenu.consulting_training': 'CONSULTING - TRAINING',
    'megamenu.sales_consulting': 'Sales Consulting',
    'megamenu.design_training': 'Design Training',
    'megamenu.feasibility_studies': 'Feasibility Studies and Reporting',
    'megamenu.lean_training': 'Lean Production Methods Training',
    
    // Footer
    'footer.corporate': 'Corporate',
    'footer.about': 'About',
    'footer.why': 'Why Tam Industry',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    
    'footer.consulting_design': 'Consulting Project Design and Manufacturing',
    'footer.3d_design_services': '3D Design Services',
    'footer.3d_design_automation': '3D Design Automations (SolidWorks)',
    'footer.rnd_machine_design': 'R&D Machine Design Development and Improvement',
    'footer.custom_machine_design': 'Custom Machine Design - Manufacturing Projects',
    'footer.factory_setup_plan': 'Factory Setup Layout Plan',
    'footer.reverse_engineering': 'Reverse Engineering Designs',
    
    'footer.business_improvement': 'Business Development and Improvement',
    'footer.lean_production_methods': 'Lean Production Methods Applications',
    'footer.3d_design_automation_2': '3D Design Automations',
    'footer.rnd_machine_design_2': 'R&D Machine Design Development and Improvement',
    'footer.technical_sales_program': 'Technical Sales Program - Applications',
    'footer.calculation_reporting_apps': 'Calculation and Reporting Applications',
    
    'footer.consulting': 'Consulting',
    'footer.turkey_business_consulting': 'Turkey Business Consulting/Turkey Trade Consulting',
    'footer.design_training': 'Design Training',
    'footer.feasibility_studies': 'Feasibility Studies and Reporting',
    'footer.lean_production_training': 'Lean Production Methods Training',
    
    'footer.description': 'As TAM Industry, we are a team specialized in industrial design and manufacturing. We provide consulting services for foreign companies entering the Turkish market, supporting you in all processes from project design to manufacturing.',
    'footer.email': 'Email',
    'footer.copyright': '© 2023 Tam Industry Consulting Group, LLC',
    
    // Hero Section
    'hero.title': 'TURKEY TRADE',
    'hero.title2': 'CONSULTING',
    'hero.description': 'We provide expert consulting services in Turkey market entry processes. We manage all necessary trade processes for foreign companies to succeed in Turkey.',
    'hero.scroll': 'Scroll',
    
    // Problem Statement
    'problem.title': 'If you need project designs and even manufacturing that will understand you very well and reach the right results, contact us.',
    'problem.subtitle': 'We are TAM confident that you will be pleased to meet us!',
    
    // Services Section
    'services.design.title': 'PROJECT DESIGN AND MANUFACTURING',
    'services.design.desc': '3D Design Services, Reverse Engineering Designs, 3D Design Automations (SolidWorks API), R&D Machine Design Development-Improvement',
    'services.improvement.title': 'BUSINESS DEVELOPMENT AND IMPROVEMENT',
    'services.improvement.desc': 'The most valuable form of time is the time you can produce. We often waste the time we can produce inefficiently, knowingly or unknowingly. We want to add "Intelligence" to your business!',
    'services.training.title': 'OUR CONSULTING AND TRAINING',
    'services.training.desc': 'Lean Production Methods Training, Design Training, Turkey Business Consulting, Feasibility Studies and Reporting',
    'services.details': 'Details',
    
    // Regulatory Power (Business Development)
    'regulatory.title': 'BUSINESS DEVELOPMENT AND IMPROVEMENT',
    'regulatory.description': 'Let\'s combine our expertise and your business experience to make your business more efficient. "Lean Production Methods", "Automation Software", "SolidWorks API". We are TAM confident that we will make your business more efficient!',
    'regulatory.3d_design': '3D Design Automations',
    'regulatory.rnd_machine': 'R&D Machine Design Development - Improvement',
    'regulatory.technical_sales': 'Technical Sales Program - Applications',
    'regulatory.cta': 'WORK WITH US',
    
    // Global Approvals (Consulting)
    'approvals.title': 'OUR CONSULTING AND TRAINING',
    'approvals.description': 'We think what we can do would be useful to you, but do you want to do these within your company? This is the path we would also like to follow. We can fish for you, but we want to make bigger contributions by teaching you how to fish.',
    'approvals.lean_training': 'Lean Production Methods Training',
    'approvals.design_training': 'Design Training',
    'approvals.business_consulting': 'Turkey Business Consulting',
    'approvals.feasibility': 'Feasibility Studies and Reporting',
    'approvals.calculation': 'Calculation - Reporting Applications',
    'approvals.factory_setup': 'Factory Setup Layout Plan',
    'approvals.custom_machine': 'Custom Machine Design and Manufacturing Projects',
    'approvals.cta': 'CONTACT US',
    
    // Concept Validators (Business Consulting)
    'concept.title': 'TURKEY BUSINESS CONSULTING',
    'concept.description': 'We can provide consulting for everything we can do and organize training for your team. We are TAM confident that we will contribute to your plans!',
    'concept.cta': 'OUR APPROACH',
    
    // Testimonial
    'testimonial.quote': 'Since we started working with Tam Industry, our production processes have become 40% more efficient. Their expertise and practical approaches really make a difference.',
    'testimonial.name': 'AHMET YILMAZ',
    'testimonial.position': 'Production Manager, Industry Inc.',
    
    // Success Stories
    'success.title': 'SUCCESS STORIES',
    'success.automotive.title': 'Production Automation in Automotive Sector',
    'success.manufacturing.title': 'Lean Production Application in Machine Manufacturing',
    'success.design.title': 'Efficiency Increase with 3D Design Automation',
    'success.category': 'Case Study',
    
    // CTA
    'cta.title': 'GET EXPERT INDUSTRY',
    'cta.title2': 'CONSULTING',
    'cta.description': 'Work with our expert team for all your needs from project design to manufacturing, from business development to training. We are here to make your business more efficient.',
    'cta.button': 'CONTACT US',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>('tr');

  // URL'den dil bilgisini al
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/en')) {
      setLanguageState('en');
    } else {
      setLanguageState('tr');
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // URL'yi güncelle
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(tr|en)/, '') || '/';
    
    if (lang === 'en') {
      navigate(`/en${pathWithoutLang}`);
    } else {
      navigate(pathWithoutLang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 