import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Settings, TrendingUp, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mega menu dışına tıklandığında kapanması için
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <img 
          src={isScrolled ? "/tam-endustri-logo.png" : "/tam-endustri-logo.png"} 
          alt="Tam Endüstri Logo" 
          className="h-20" 
        />
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-body">
          <a href="#" className={`font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
            {t('nav.about')}
          </a>
          
          {/* Mega Menu Trigger */}
          <div className="relative" ref={megaMenuRef}>
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center space-x-1 font-semibold transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'
              }`}
            >
              <span>{t('nav.services')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu */}
            {isMegaMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
                
                <div className="relative z-10 p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {megaMenuData.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-tam-blue rounded-lg flex items-center justify-center text-white">
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-tam-blue font-semibold text-lg">{category.title}</h3>
                            <p className="text-gray-500 text-sm mt-1">{category.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href={item.href}
                                className="flex items-center justify-between text-gray-700 hover:text-tam-blue hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 group"
                                onClick={() => setIsMegaMenuOpen(false)}
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
                    ))}
                  </div>
                  
                  {/* Bottom CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-2">Tüm Hizmetlerimizi Keşfedin</h4>
                        <p className="text-gray-600 text-sm">Uzman ekibimizle tanışın ve projelerinizi hayata geçirin</p>
                      </div>
                      <button 
                        className="bg-tam-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-tam-accent transition-all duration-200 hover:shadow-lg hover:scale-105"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        {t('nav.contact_us')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <a href="#" className={`font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
            {t('nav.why')}
          </a>
          <a href="#" className={`font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
            {t('nav.contact')}
          </a>
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              isScrolled 
                ? 'border-gray-300 text-gray-800 hover:bg-gray-100' 
                : 'border-white text-white hover:bg-white hover:text-tam-dark'
            }`}
          >
            {language === 'tr' ? '🇺🇸 EN' : '🇹🇷 TR'}
          </button>
          
          {/* Contact Button */}
          <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
            isScrolled 
              ? 'bg-tam-blue text-white hover:bg-tam-accent' 
              : 'bg-white text-tam-dark hover:bg-gray-100'
          }`}>
            {t('nav.contact_us')}
          </button>
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
        <div className={`md:hidden absolute top-full left-0 right-0 ${isScrolled ? 'bg-white' : 'bg-tam-dark'} shadow-lg`}>
          <div className="px-6 py-4 space-y-4">
            <a href="#" className={`block font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
              {t('nav.about')}
            </a>
            
            {/* Mobile Services Menu */}
            <div className="space-y-2">
              <div className={`font-semibold ${isScrolled ? 'text-tam-blue' : 'text-tam-blue'}`}>{t('nav.services')}</div>
              {megaMenuData.map((category, index) => (
                <div key={index} className="ml-4 space-y-2">
                  <div className={`text-sm font-medium ${isScrolled ? 'text-gray-300' : 'text-gray-300'}`}>{category.title}</div>
                  <div className="ml-4 space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.href}
                        className={`block text-xs transition-colors ${
                          isScrolled ? 'text-gray-400 hover:text-gray-800' : 'text-gray-400 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#" className={`block font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
              {t('nav.why')}
            </a>
            <a href="#" className={`block font-semibold transition-colors ${isScrolled ? 'text-gray-800 hover:text-tam-blue' : 'text-white hover:text-tam-blue'}`}>
              {t('nav.contact')}
            </a>
            
            {/* Language Toggle Mobile */}
            <button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className={`w-full px-4 py-2 rounded-full border transition-all duration-200 ${
                isScrolled 
                  ? 'border-gray-300 text-gray-800 hover:bg-gray-100' 
                  : 'border-white text-white hover:bg-white hover:text-tam-dark'
              }`}
            >
              {language === 'tr' ? '🇺🇸 EN' : '🇹🇷 TR'}
            </button>
            
            {/* Contact Button Mobile */}
            <button className={`w-full px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
              isScrolled 
                ? 'bg-tam-blue text-white hover:bg-tam-accent' 
                : 'bg-white text-tam-dark hover:bg-gray-100'
            }`}>
              {t('nav.contact_us')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 