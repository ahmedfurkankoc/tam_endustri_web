import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Settings, TrendingUp, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

// SVG Bayrak Bileşenleri
const TurkishFlag: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="800" fill="#E30A17"/>
    <circle cx="425" cy="400" r="200" fill="#ffffff"/>
    <circle cx="475" cy="400" r="160" fill="#E30A17"/>
    <polygon points="583.334,400 764.235,458.779 652.431,304.894 652.431,495.106 764.235,341.221" fill="#ffffff"/>
  </svg>
);

const EnglishFlag: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDesignOpen, setIsMobileDesignOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const [isMobileConsultingOpen, setIsMobileConsultingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dil değiştirme fonksiyonu
  const handleLanguageChange = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLanguage);
    
    // URL mapping - otomatik çeviri
    const urlMap: Record<string, string> = {
      '/': '/en',
      '/hakkimizda': '/en/about',
      '/hizmetlerimiz': '/en/services',

      '/iletisim': '/en/contact',
      '/en': '/',
      '/en/about': '/hakkimizda',
      '/en/services': '/hizmetlerimiz',

      '/en/contact': '/iletisim'
    };
    
    const newPath = urlMap[location.pathname] || (newLanguage === 'en' ? '/en' : '/');
    navigate(newPath);
  };

  const megaMenuData = [
    {
      title: t('megamenu.design_manufacturing'),
      icon: <Settings className="w-5 h-5" />,
      description: '3D tasarım ve imalat çözümleri',
      items: [
        { title: t('megamenu.3d_design'), href: '#3d-design', description: 'Profesyonel 3D tasarım hizmetleri' },
        { title: t('megamenu.3d_automation'), href: '#3d-automation', description: 'SolidWorks API ile otomasyon' },
        { title: t('megamenu.rnd_machine'), href: '#rnd-machine', description: 'AR-GE makine tasarım geliştirme' },
        { title: t('megamenu.custom_machine'), href: '#custom-machine', description: 'İşe özel makine tasarım projeleri' },
        { title: t('megamenu.factory_setup'), href: '#factory-setup', description: 'Fabrika kurulum yerleşim planı' },
        { title: t('megamenu.reverse_engineering'), href: '#reverse-engineering', description: 'Tersine mühendislik tasarımları' },
      ]
    },
    {
      title: t('megamenu.business_improvement'),
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'İş süreçlerini optimize edin',
      items: [
        { title: t('megamenu.lean_production'), href: '#lean-production', description: 'Yalın üretim yöntemleri uygulamaları' },
        { title: t('megamenu.3d_automation'), href: '#3d-automation-2', description: '3D tasarım otomasyonları' },
        { title: t('megamenu.rnd_machine'), href: '#rnd-machine-2', description: 'AR-GE makine tasarım geliştirme' },
        { title: t('megamenu.technical_sales'), href: '#technical-sales', description: 'Teknik satış program uygulamaları' },
        { title: t('megamenu.calculation_reporting'), href: '#calculation-reporting', description: 'Hesaplama ve raporlama uygulamaları' },
      ]
    },
    {
      title: t('megamenu.consulting_training'),
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Danışmanlık ve eğitim hizmetleri',
      items: [
        { title: t('megamenu.sales_consulting'), href: '#sales-consulting', description: 'Satış danışmanlığı hizmetleri' },
        { title: t('megamenu.design_training'), href: '#design-training', description: 'Tasarım eğitimleri' },
        { title: t('megamenu.feasibility_studies'), href: '#feasibility-studies', description: 'Fizibilite çalışmaları ve raporlama' },
        { title: t('megamenu.lean_training'), href: '#lean-training', description: 'Yalın üretim yöntemleri eğitimi' },
      ]
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href={language === 'en' ? '/en' : '/'} className="flex-shrink-0">
          <img 
            src={isScrolled ? "/tam-endustri-logo.png" : "/tam-endustri-logo.png"} 
            alt="Tam Endüstri Logo" 
            className="h-12 md:h-14" 
          />
        </a>
        
        <div className="hidden md:flex items-center space-x-6 text-sm font-body">
          <a href={language === 'en' ? '/en/about' : '/hakkimizda'} className={`font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
            {t('nav.about')}
          </a>
          
          {/* Proje Tasarım Ve İmalat */}
          <div className="relative group">
            <button className={`flex items-center space-x-1 font-semibold transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'
            }`}>
              <span>{t('megamenu.design_manufacturing')}</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-tam-blue rounded-lg flex items-center justify-center text-white">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-tam-blue font-semibold text-lg">{t('megamenu.design_manufacturing')}</h3>
                    <p className="text-gray-500 text-sm mt-1">3D tasarım ve imalat çözümleri</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {megaMenuData[0].items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between text-gray-700 hover:text-tam-blue hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
                      >
                        <div>
                          <span className="text-sm font-medium">{item.title}</span>
                          <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* İş Geliştirme ve İyileştirme */}
          <div className="relative group">
            <button className={`flex items-center space-x-1 font-semibold transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'
            }`}>
              <span>{t('megamenu.business_improvement')}</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-tam-blue rounded-lg flex items-center justify-center text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-tam-blue font-semibold text-lg">{t('megamenu.business_improvement')}</h3>
                    <p className="text-gray-500 text-sm mt-1">İş süreçlerini optimize edin</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {megaMenuData[1].items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between text-gray-700 hover:text-tam-blue hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
                      >
                        <div>
                          <span className="text-sm font-medium">{item.title}</span>
                          <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Danışmanlık */}
          <div className="relative group">
            <button className={`flex items-center space-x-1 font-semibold transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'
            }`}>
              <span>{t('megamenu.consulting_training')}</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-tam-blue rounded-lg flex items-center justify-center text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-tam-blue font-semibold text-lg">{t('megamenu.consulting_training')}</h3>
                    <p className="text-gray-500 text-sm mt-1">Danışmanlık ve eğitim hizmetleri</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {megaMenuData[2].items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between text-gray-700 hover:text-tam-blue hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
                      >
                        <div>
                          <span className="text-sm font-medium">{item.title}</span>
                          <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Language Toggle */}
          <button
            onClick={handleLanguageChange}
            className={`px-4 py-2 rounded-full border transition-all duration-200 flex items-center space-x-2 ${
              isScrolled 
                ? 'border-gray-300 text-gray-800 hover:bg-gray-100' 
                : 'border-white text-white hover:bg-white hover:text-tam-dark'
            }`}
          >
            {language === 'tr' ? (
              <>
                <EnglishFlag />
                <span>EN</span>
              </>
            ) : (
              <>
                <TurkishFlag />
                <span>TR</span>
              </>
            )}
          </button>
          
          {/* Contact Button */}
          <a 
            href={language === 'en' ? '/en/contact' : '/iletisim'}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
              isScrolled 
                ? 'bg-tam-blue text-white hover:bg-tam-accent' 
                : 'bg-white text-tam-dark hover:bg-gray-100'
            }`}
          >
            {t('nav.contact_us')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white z-50">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <img 
                src="/tam-endustri-logo.png" 
                alt="Tam Endüstri Logo" 
                className="h-12" 
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            
            {/* Mobile Menu Content */}
            <div className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
              <a href={language === 'en' ? '/en/about' : '/hakkimizda'} className="block font-semibold text-lg transition-colors text-gray-800 hover:text-tam-blue">
                {t('nav.about')}
              </a>
              
              {/* Proje Tasarım Ve İmalat Mobile */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsMobileDesignOpen(!isMobileDesignOpen)}
                  className="w-full text-left font-semibold text-lg transition-colors flex items-center justify-between text-tam-blue"
                >
                  <span>{t('megamenu.design_manufacturing')}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileDesignOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileDesignOpen && (
                  <div className="ml-4 space-y-3">
                    {megaMenuData[0].items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className="block text-sm transition-colors text-gray-600 hover:text-gray-800"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileDesignOpen(false);
                        }}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* İş Geliştirme ve İyileştirme Mobile */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
                  className="w-full text-left font-semibold text-lg transition-colors flex items-center justify-between text-tam-blue"
                >
                  <span>{t('megamenu.business_improvement')}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileBusinessOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileBusinessOpen && (
                  <div className="ml-4 space-y-3">
                    {megaMenuData[1].items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className="block text-sm transition-colors text-gray-600 hover:text-gray-800"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileBusinessOpen(false);
                        }}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Danışmanlık Mobile */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsMobileConsultingOpen(!isMobileConsultingOpen)}
                  className="w-full text-left font-semibold text-lg transition-colors flex items-center justify-between text-tam-blue"
                >
                  <span>{t('megamenu.consulting_training')}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileConsultingOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileConsultingOpen && (
                  <div className="ml-4 space-y-3">
                    {megaMenuData[2].items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className="block text-sm transition-colors text-gray-600 hover:text-gray-800"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileConsultingOpen(false);
                        }}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href={language === 'en' ? '/en/contact' : '/iletisim'} className="block font-semibold text-lg transition-colors text-gray-800 hover:text-tam-blue">
                {t('nav.contact')}
              </a>
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="px-6 py-6 space-y-4 border-t border-gray-200">
              {/* Language Toggle Mobile */}
              <button
                onClick={handleLanguageChange}
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {language === 'tr' ? (
                  <>
                    <EnglishFlag />
                    <span>EN</span>
                  </>
                ) : (
                  <>
                    <TurkishFlag />
                    <span>TR</span>
                  </>
                )}
              </button>
              
              {/* Contact Button Mobile */}
              <a 
                href={language === 'en' ? '/en/contact' : '/iletisim'}
                className="w-full px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-tam-blue text-white hover:bg-tam-accent text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact_us')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 