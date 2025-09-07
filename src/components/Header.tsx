import React, { useState, useEffect } from 'react';
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
  
  // State'ler
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  // Scroll event
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

  // Dropdown hover handlers
  const handleDropdownEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
    setActiveCategoryIndex(0); // Reset to first category when dropdown opens
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setActiveCategoryIndex(0); // Reset category index
  };

  // Menü verileri
  const menuItems = [
    {
      id: 'design',
      title: t('megamenu.design_manufacturing'),
      icon: <Settings className="w-5 h-5" />,
      description: '3D tasarım ve imalat çözümleri',
      items: [
        { title: t('megamenu.3d_design'), href: '/hizmetler/tasarim/3d-tasarim', description: 'Profesyonel 3D tasarım hizmetleri' },
        { title: t('megamenu.3d_automation'), href: '/hizmetler/tasarim/3d-otomasyon', description: 'SolidWorks API ile otomasyon' },
        { title: t('megamenu.rnd_machine'), href: '/hizmetler/tasarim/arge-makine', description: 'AR-GE makine tasarım geliştirme' },
        { title: t('megamenu.custom_machine'), href: '/hizmetler/tasarim/ise-ozel-makine', description: 'İşe özel makine tasarım projeleri' },
        { title: t('megamenu.factory_setup'), href: '/hizmetler/tasarim/fabrika-kurulum', description: 'Fabrika kurulum yerleşim planı' },
        { title: t('megamenu.reverse_engineering'), href: '/hizmetler/tasarim/tersine-muhendislik', description: 'Tersine mühendislik tasarımları' },
      ]
    },
    {
      id: 'business',
      title: t('megamenu.business_improvement'),
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'İş süreçlerini optimize edin',
      items: [
        { title: t('megamenu.lean_production'), href: '/hizmetler/is-gelistirme/yalin-uretim', description: 'Yalın üretim yöntemleri uygulamaları' },
        { title: t('megamenu.3d_automation'), href: '#3d-automation-2', description: '3D tasarım otomasyonları' },
        { title: t('megamenu.rnd_machine'), href: '#rnd-machine-2', description: 'AR-GE makine tasarım geliştirme' },
        { title: t('megamenu.technical_sales'), href: '#technical-sales', description: 'Teknik satış program uygulamaları' },
        { title: t('megamenu.calculation_reporting'), href: '#calculation-reporting', description: 'Hesaplama ve raporlama uygulamaları' },
      ]
    },
    {
      id: 'consulting',
      title: t('megamenu.consulting_training'),
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Danışmanlık ve eğitim hizmetleri',
      categories: [
        {
          title: t('megamenu.production_consulting'),
          items: [
            { title: t('megamenu.machinery_manufacturing'), href: '/hizmetler/danismanlik/makine-imalat', description: 'Makine imalat danışmanlığı' },
            { title: t('megamenu.electrical_manufacturing'), href: '#electrical-manufacturing', description: 'Elektrik imalat danışmanlığı' },
            { title: t('megamenu.textile_manufacturing'), href: '#textile-manufacturing', description: 'Tekstil imalat danışmanlığı' },
            { title: t('megamenu.cnc_machining'), href: '#cnc-machining', description: 'CNC işleme parça üretimi' },
            { title: t('megamenu.laser_cutting_bending'), href: '#laser-cutting-bending', description: 'Lazer kesim ve büküm operasyonları' },
          ]
        },
        {
          title: t('megamenu.technology_consulting'),
          items: [
            { title: t('megamenu.website_localization'), href: '#website-localization', description: 'Website ve Türkçe lokalizasyon' },
            { title: t('megamenu.software_design_coding'), href: '#software-design-coding', description: 'Yazılım tasarım ve geliştirme' },
          ]
        },
        {
          title: t('megamenu.sectoral_consulting'),
          items: [
            { title: t('megamenu.tourism_consulting'), href: '#tourism-consulting', description: 'Turizm danışmanlığı ve hizmetleri' },
            { title: t('megamenu.banking_consulting'), href: '#banking-consulting', description: 'Faizsiz bankacılık danışmanlığı' },
            { title: t('megamenu.logistics_consulting'), href: '#logistics-consulting', description: 'Lojistik danışmanlığı' },
            { title: t('megamenu.procurement_services'), href: '#procurement-services', description: 'Tedarik hizmetleri' },
          ]
        },
        {
          title: t('megamenu.support_services'),
          items: [
            { title: t('megamenu.sales_consulting'), href: '#sales-consulting', description: 'Satış danışmanlığı hizmetleri' },
            { title: t('megamenu.design_training'), href: '#design-training', description: 'Tasarım eğitimleri' },
            { title: t('megamenu.feasibility_studies'), href: '#feasibility-studies', description: 'Fizibilite çalışmaları ve raporlama' },
            { title: t('megamenu.lean_training'), href: '#lean-training', description: 'Yalın üretim yöntemleri eğitimi' },
            { title: t('megamenu.photography_videography'), href: '#photography-videography', description: 'Fotoğraf ve video çekim hizmetleri' },
          ]
        }
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
        {/* Logo */}
        <a href={language === 'en' ? '/en' : '/'} className="flex-shrink-0">
          <div className={`${isScrolled ? 'h-12 w-36' : 'h-14 w-40'} flex items-center justify-center`}>
            <img 
              src={isScrolled ? '/tam-endustri-logo.png' : '/tam-endustri-logo-white.png'} 
              alt="Tam Endüstri Logo" 
              className="h-full w-full object-contain block" 
            />
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-body">
          {/* About Link */}
          <a 
            href={language === 'en' ? '/en/about' : '/hakkimizda'} 
            className={`font-semibold transition-colors ${
              isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'
            }`}
          >
            {t('nav.about')}
          </a>
          
          {/* Dropdown Menüler */}
          {menuItems.map((menu) => (
            <div 
              key={menu.id}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(menu.id)}
              onMouseLeave={handleDropdownLeave}
            >
              <button className={`flex items-center space-x-1 font-semibold transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'
              }`}>
                <span>{menu.title}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === menu.id ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === menu.id && (
                <div className={`absolute top-full left-0 pt-2 z-50`}>
                  {/* Invisible bridge for smooth mouse transition */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-transparent"></div>
                  <div className={`bg-white rounded-xl shadow-xl border border-gray-200 ${
                    menu.id === 'consulting' ? 'w-[480px]' : 'w-80'
                  }`}>
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-tam-blue rounded-lg flex items-center justify-center text-white">
                        {menu.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg ${
                          menu.id === 'consulting' ? 'text-tam-blue' : 'text-tam-blue'
                        }`}>
                          {menu.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {menu.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    {menu.id === 'consulting' ? (
                      // Consulting özel layout - Ana Kategoriler ve Alt Menüler Yan Yana
                      <div className="flex space-x-4">
                        {/* Sol Taraf - Ana Kategoriler */}
                        <div className="w-40 space-y-2 pr-4 border-r border-gray-200">
                          {menu.categories?.map((category, categoryIndex) => (
                            <div 
                              key={categoryIndex} 
                              className="group/cat relative"
                              onMouseEnter={() => setActiveCategoryIndex(categoryIndex)}
                            >
                              <div className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                                activeCategoryIndex === categoryIndex 
                                  ? 'text-tam-blue bg-blue-50' 
                                  : 'text-gray-700 hover:text-tam-blue hover:bg-gray-50'
                              }`}>
                                <span className="text-sm font-medium">{category.title}</span>
                                <ChevronRight className="w-4 h-4 transition-transform group-hover/cat:translate-x-1" />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Sağ Taraf - Alt Menüler */}
                        <div className="w-72">
                          {menu.categories?.[activeCategoryIndex] && (
                            <div>
                              <h4 className="text-tam-blue font-semibold text-sm mb-3 border-b border-gray-200 pb-2">
                                {menu.categories[activeCategoryIndex].title}
                              </h4>
                              <ul className="space-y-2">
                                {menu.categories[activeCategoryIndex].items?.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <a
                                      href={item.href}
                                      className="flex items-center justify-between text-gray-700 hover:text-tam-blue hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group/item"
                                    >
                                      <div>
                                        <span className="text-sm font-medium">{item.title}</span>
                                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                                      </div>
                                      <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Normal dropdown layout
                      <ul className="space-y-2">
                        {menu.items?.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href={item.href}
                              className="flex items-center justify-between text-gray-700 hover:text-tam-blue hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
                            >
                              <div>
                                <span className="text-sm font-medium">{item.title}</span>
                                <p className="text-xs text-gray-500 mt-1">
                                  {item.description}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
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
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <img 
                src={isScrolled ? '/tam-endustri-logo.png' : '/tam-endustri-logo-white.png'} 
                alt="Tam Endüstri Logo" 
                className="h-10 w-32 object-contain" 
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
              <a 
                href={language === 'en' ? '/en/about' : '/hakkimizda'} 
                className="block font-semibold text-lg text-gray-800 hover:text-tam-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              
              {/* Mobile Menu Items */}
              {menuItems.map((menu) => (
                <div key={menu.id} className="space-y-3">
                  <div className="font-semibold text-lg text-tam-blue">
                    {menu.title}
                  </div>
                  {menu.id === 'consulting' ? (
                    <div className="ml-4 space-y-4">
                      {menu.categories?.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <div className="font-medium text-gray-700 mb-2">
                            {category.title}
                          </div>
                          <div className="ml-4 space-y-2">
                            {category.items?.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={item.href}
                                className="block text-sm text-gray-600 hover:text-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="ml-4 space-y-2">
                      {menu.items?.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-gray-800"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a 
                href={language === 'en' ? '/en/contact' : '/iletisim'} 
                className="block font-semibold text-lg text-gray-800 hover:text-tam-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </div>
            
            {/* Mobile Footer */}
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
