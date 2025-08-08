import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, Globe, Factory, Lightbulb, ArrowRight, Zap, Shield, TrendingUp, Heart, Star, Play, MapPin, Calendar, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectGallery.length);
    }, 4000); // 4 saniyede bir geçiş

    return () => clearInterval(interval);
  }, []);

  // Proje Galerisi Verileri
  const projectGallery = [
    {
      id: 1,
      title: '3D Makine Tasarımı',
      category: 'Tasarım',
      image: '/tam-endustri-logo.png', // Gerçek proje görselleri eklenecek
      description: 'Endüstriyel makine tasarımı ve 3D modelleme projesi',
      year: '2023'
    },
    {
      id: 2,
      title: 'Fabrika Otomasyonu',
      category: 'Otomasyon',
      image: '/tam-endustri-logo.png',
      description: 'Üretim hattı otomasyonu ve verimlilik artırma projesi',
      year: '2023'
    },
    {
      id: 3,
      title: 'Yalın Üretim Uygulaması',
      category: 'Danışmanlık',
      image: '/tam-endustri-logo.png',
      description: 'Yalın üretim yöntemleri ile verimlilik artırma',
      year: '2022'
    },
    {
      id: 4,
      title: 'SolidWorks API Geliştirme',
      category: 'Yazılım',
      image: '/tam-endustri-logo.png',
      description: 'Tasarım otomasyonu için özel yazılım geliştirme',
      year: '2022'
    },
    {
      id: 5,
      title: 'Tersine Mühendislik',
      category: 'Analiz',
      image: '/tam-endustri-logo.png',
      description: 'Mevcut ürün analizi ve yeniden tasarım projesi',
      year: '2021'
    },
    {
      id: 6,
      title: 'AR-GE Makine Geliştirme',
      category: 'AR-GE',
      image: '/tam-endustri-logo.png',
      description: 'İnovatif makine tasarımı ve prototip geliştirme',
      year: '2021'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectGallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectGallery.length) % projectGallery.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const exploreServices = [
    {
      title: '3D Tasarım Hizmetleri',
      description: 'Profesyonel 3D modelleme ve tasarım çözümleri',
      href: '#3d-design'
    },
    {
      title: 'Yalın Üretim Yöntemleri',
      description: 'Verimlilik artırıcı yalın üretim uygulamaları',
      href: '#lean-production'
    },
    {
      title: 'AR-GE Makine Tasarımı',
      description: 'İnovatif makine tasarım ve geliştirme projeleri',
      href: '#rnd-machine'
    },
    {
      title: 'Tersine Mühendislik',
      description: 'Mevcut ürünlerin analizi ve yeniden tasarımı',
      href: '#reverse-engineering'
    },
    {
      title: 'SolidWorks Otomasyonu',
      description: 'API tabanlı tasarım otomasyon çözümleri',
      href: '#solidworks-automation'
    },
    {
      title: 'İşe Özel Makine Tasarımı',
      description: 'Müşteri ihtiyaçlarına özel makine projeleri',
      href: '#custom-machine'
    },
    {
      title: 'Fabrika Kurulum Planı',
      description: 'Optimal fabrika yerleşim ve kurulum planları',
      href: '#factory-setup'
    },
    {
      title: 'Teknik Satış Programı',
      description: 'Satış süreçlerini optimize eden teknik çözümler',
      href: '#technical-sales'
    },
    {
      title: 'Hesaplama ve Raporlama',
      description: 'Detaylı analiz ve raporlama hizmetleri',
      href: '#calculation-reporting'
    },
    {
      title: 'Türkiye Business Danışmanlığı',
      description: 'Yabancı şirketler için pazar giriş danışmanlığı',
      href: '#business-consulting'
    }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('about.values.global.title'),
      description: t('about.values.global.description'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.description'),
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('about.values.expertise.title'),
      description: t('about.values.expertise.description'),
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-tam-blue to-tam-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-l text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero_description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50 rounded-t-3xl -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-tam-blue/10 to-tam-accent/10 rounded-2xl p-8 border border-tam-blue/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.projects')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">500+</p>
                </div>
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.countries')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">25+</p>
                </div>
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.clients')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">200+</p>
                </div>
                <div className="text-center">
                  <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('about.stats.experience')}</h3>
                  <p className="text-3xl font-bold text-tam-blue">15+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white rounded-t-3xl relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-tam-blue/10 to-tam-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-tam-accent/10 to-tam-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-tam-blue/10 to-tam-accent/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-tam-blue" />
              <span className="text-tam-blue font-semibold">Projelerimiz</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Proje Galerisi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Başarıyla tamamladığımız projelerden örnekler
            </p>
          </div>

          {/* Modern Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Slides */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-all duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {projectGallery.map((project, index) => (
                  <div key={project.id} className="w-1/3 flex-shrink-0 px-2">
                    <div className={`transition-all duration-500 ease-out ${
                      index === currentSlide 
                        ? 'scale-100 opacity-100' 
                        : 'scale-85 opacity-60'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="relative h-80">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          
                          {/* PROJE Label */}
                          <div className="absolute top-4 left-4">
                            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              PROJE
                            </div>
                          </div>
                          
                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className={`font-bold mb-2 leading-tight ${
                              index === currentSlide ? 'text-2xl' : 'text-lg'
                            }`}>
                              {project.title}
                            </h3>
                            <p className={`text-white/80 mb-4 ${
                              index === currentSlide ? 'text-sm' : 'text-xs'
                            }`}>
                              {project.year} • {project.category}
                            </p>
                            <div className="flex items-center space-x-3">
                              <div className={`bg-white rounded-full flex items-center justify-center ${
                                index === currentSlide ? 'w-8 h-8' : 'w-6 h-6'
                              }`}>
                                <ArrowRight className={`text-gray-800 ${
                                  index === currentSlide ? 'w-4 h-4' : 'w-3 h-3'
                                }`} />
                              </div>
                              <span className={`text-white font-medium ${
                                index === currentSlide ? 'text-base' : 'text-xs'
                              }`}>
                                Detayları Gör
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Slide Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex items-center space-x-2">
                {projectGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-tam-blue scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-tam-blue/5 to-tam-accent/5 rounded-2xl p-8 border border-tam-blue/10">
              <div className="bg-tam-blue rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-tam-accent/5 to-tam-blue/5 rounded-2xl p-8 border border-tam-accent/10">
              <div className="bg-tam-accent rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.vision.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group h-full gpu-accelerated">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-tam-blue/20 h-full flex flex-col transition-all duration-700 ease-out">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0`}>
                    <div className="text-white group-hover:scale-105 transition-transform duration-700 ease-out">
                      {value.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-tam-blue transition-colors duration-700">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-tam-blue to-tam-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 bg-gray-50 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Title */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                KEŞFET
              </h2>
            </div>

            {/* Services Columns */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Column 1 */}
                <div className="space-y-6">
                  <div className="w-12 h-0.5 bg-tam-blue mb-6"></div>
                  {exploreServices.slice(0, 5).map((service, index) => (
                    <div key={index} className="group">
                      <a 
                        href={service.href}
                        className="text-gray-700 hover:text-tam-blue transition-colors duration-200 font-medium block"
                      >
                        {service.title}
                      </a>
                      <p className="text-gray-500 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative">
                        {service.description}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-tam-blue group-hover:w-full transition-all duration-300"></div>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  <div className="w-12 h-0.5 bg-tam-blue mb-6"></div>
                  {exploreServices.slice(5, 10).map((service, index) => (
                    <div key={index} className="group">
                      <a 
                        href={service.href}
                        className="text-gray-700 hover:text-tam-blue transition-colors duration-200 font-medium block"
                      >
                        {service.title}
                      </a>
                      <p className="text-gray-500 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative">
                        {service.description}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-tam-blue group-hover:w-full transition-all duration-300"></div>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tam-blue to-tam-accent rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <button className="bg-white text-tam-blue px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2 mx-auto">
            <span>{t('about.cta.button')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 