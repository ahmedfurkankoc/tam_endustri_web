import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Settings, TrendingUp, GraduationCap, ChevronRight, ChevronDown, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  image: string;
  gradient: string;
  accentColor: string;
}

const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();

  const serviceCards: ServiceCard[] = [
    {
      id: 'design-manufacturing',
      title: t('services.design_manufacturing.title'),
      description: t('services.design_manufacturing.description'),
      icon: <Settings className="w-6 h-6" />,
      items: [
        t('services.design_manufacturing.items.3d_design'),
        t('services.design_manufacturing.items.3d_automation'),
        t('services.design_manufacturing.items.rnd_machine'),
        t('services.design_manufacturing.items.custom_machine'),
        t('services.design_manufacturing.items.factory_setup'),
        t('services.design_manufacturing.items.reverse_engineering'),
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-blue-600/20 via-purple-600/20 to-cyan-600/20',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'business-improvement',
      title: t('services.business_improvement.title'),
      description: t('services.business_improvement.description'),
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        t('services.business_improvement.items.lean_production'),
        t('services.business_improvement.items.3d_automation'),
        t('services.business_improvement.items.rnd_machine'),
        t('services.business_improvement.items.technical_sales'),
        t('services.business_improvement.items.calculation_reporting'),
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-emerald-600/20 via-teal-600/20 to-green-600/20',
      accentColor: 'from-emerald-500 to-green-500'
    },
    {
      id: 'consulting-training',
      title: t('services.consulting_training.title'),
      description: t('services.consulting_training.description'),
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        t('services.consulting_training.items.sales_consulting'),
        t('services.consulting_training.items.design_training'),
        t('services.consulting_training.items.feasibility_studies'),
        t('services.consulting_training.items.lean_training'),
      ],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-orange-600/20 via-red-600/20 to-pink-600/20',
      accentColor: 'from-orange-500 to-red-500'
    },
    {
      id: '3d-design',
      title: '3D Tasarım Hizmetleri',
      description: 'Profesyonel 3D tasarım ve modelleme hizmetleri ile projelerinizi hayata geçirin.',
      icon: <Settings className="w-6 h-6" />,
      items: [
        'SolidWorks 3D Tasarım',
        'AutoCAD 2D/3D Çizim',
        'Inventor Tasarım',
        '3D Baskı Hazırlığı',
        'Prototip Tasarımı',
        'Teknik Çizimler'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-indigo-600/20 via-blue-600/20 to-cyan-600/20',
      accentColor: 'from-indigo-500 to-cyan-500'
    },
    {
      id: '3d-automation',
      title: '3D Tasarım Otomasyonları',
      description: 'SolidWorks API ile özel otomasyon çözümleri geliştiriyoruz.',
      icon: <Settings className="w-6 h-6" />,
      items: [
        'SolidWorks API Geliştirme',
        'Özel Makro Yazılımları',
        'Otomatik Çizim Üretimi',
        'Parametrik Tasarım',
        'BOM Otomasyonu',
        'Kütüphane Yönetimi'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-purple-600/20 via-pink-600/20 to-red-600/20',
      accentColor: 'from-purple-500 to-red-500'
    },
    {
      id: 'rnd-machine',
      title: 'Ar-Ge Makine Tasarımı',
      description: 'Yenilikçi makine tasarımları ile üretim süreçlerinizi optimize edin.',
      icon: <Settings className="w-6 h-6" />,
      items: [
        'Özel Makine Tasarımı',
        'Üretim Hattı Tasarımı',
        'Robot Entegrasyonu',
        'Sensör Sistemleri',
        'Hidrolik/Pnömatik Sistemler',
        'Elektrik Kontrol Sistemleri'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-green-600/20 via-emerald-600/20 to-teal-600/20',
      accentColor: 'from-green-500 to-teal-500'
    },
    {
      id: 'custom-machine',
      title: 'Özel Makine İmalatı',
      description: 'İhtiyaçlarınıza özel makine imalatı ile üretim kapasitenizi artırın.',
      icon: <Settings className="w-6 h-6" />,
      items: [
        'Özel Makine Üretimi',
        'Montaj ve Test',
        'Kalite Kontrol',
        'Teknik Dokümantasyon',
        'Eğitim ve Destek',
        'Bakım Hizmetleri'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-yellow-600/20 via-orange-600/20 to-red-600/20',
      accentColor: 'from-yellow-500 to-red-500'
    },
    {
      id: 'factory-setup',
      title: 'Fabrika Kurulumu',
      description: 'Sıfırdan fabrika kurulumu ile üretim süreçlerinizi optimize edin.',
      icon: <Settings className="w-6 h-6" />,
      items: [
        'Fabrika Planlaması',
        'Üretim Hattı Kurulumu',
        'Ekipman Seçimi',
        'Güvenlik Sistemleri',
        'Kalite Kontrol Sistemleri',
        'Enerji Optimizasyonu'
      ],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-blue-600/20 via-indigo-600/20 to-purple-600/20',
      accentColor: 'from-blue-500 to-purple-500'
    },
    {
      id: 'reverse-engineering',
      title: 'Tersine Mühendislik',
      description: 'Mevcut ürünlerin analizi ve yeniden tasarımı ile inovasyon sağlayın.',
      icon: <Settings className="w-6 h-6" />,
      items: [
        '3D Tarama ve Ölçüm',
        'CAD Modelleme',
        'Malzeme Analizi',
        'Fonksiyon Analizi',
        'İyileştirme Önerileri',
        'Prototip Üretimi'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-teal-600/20 via-cyan-600/20 to-blue-600/20',
      accentColor: 'from-teal-500 to-blue-500'
    },
    {
      id: 'lean-production',
      title: 'Yalın Üretim',
      description: 'Yalın üretim prensipleri ile verimliliğinizi artırın.',
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        'Süreç Analizi',
        'İsraf Tespiti',
        '5S Uygulaması',
        'Kanban Sistemleri',
        'Sürekli İyileştirme',
        'Performans Ölçümü'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-emerald-600/20 via-green-600/20 to-lime-600/20',
      accentColor: 'from-emerald-500 to-lime-500'
    },
    {
      id: 'technical-sales',
      title: 'Teknik Satış',
      description: 'Teknik satış stratejileri ile müşteri memnuniyetini artırın.',
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        'Teknik Satış Eğitimi',
        'Müşteri İhtiyaç Analizi',
        'Teknik Sunum Hazırlama',
        'Satış Süreçleri',
        'Müşteri İlişkileri',
        'Satış Performansı'
      ],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-pink-600/20 via-rose-600/20 to-red-600/20',
      accentColor: 'from-pink-500 to-red-500'
    },
    {
      id: 'calculation-reporting',
      title: 'Hesaplama ve Raporlama',
      description: 'Detaylı hesaplamalar ve raporlama ile kararlarınızı destekleyin.',
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        'Maliyet Hesaplamaları',
        'ROI Analizleri',
        'Performans Raporları',
        'Veri Analizi',
        'Trend Analizleri',
        'Karar Destek Sistemleri'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-violet-600/20 via-purple-600/20 to-indigo-600/20',
      accentColor: 'from-violet-500 to-indigo-500'
    },
    {
      id: 'sales-consulting',
      title: 'Satış Danışmanlığı',
      description: 'Satış stratejilerinizi geliştirin ve satış performansınızı artırın.',
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        'Satış Stratejisi Geliştirme',
        'Pazar Analizi',
        'Rekabet Analizi',
        'Satış Ekip Eğitimi',
        'Müşteri Segmentasyonu',
        'Satış Süreçleri Optimizasyonu'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-amber-600/20 via-orange-600/20 to-red-600/20',
      accentColor: 'from-amber-500 to-red-500'
    },
    {
      id: 'design-training',
      title: 'Tasarım Eğitimleri',
      description: '3D tasarım yazılımları konusunda uzmanlaşın.',
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        'SolidWorks Eğitimi',
        'AutoCAD Eğitimi',
        'Inventor Eğitimi',
        '3D Baskı Eğitimi',
        'Teknik Çizim Eğitimi',
        'Parametrik Tasarım'
      ],
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-sky-600/20 via-blue-600/20 to-indigo-600/20',
      accentColor: 'from-sky-500 to-indigo-500'
    },
    {
      id: 'feasibility-studies',
      title: 'Fizibilite Çalışmaları',
      description: 'Projelerinizin uygulanabilirliğini analiz edin.',
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        'Teknik Fizibilite',
        'Ekonomik Fizibilite',
        'Pazar Araştırması',
        'Risk Analizi',
        'Maliyet Analizi',
        'Yatırım Değerlendirmesi'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-lime-600/20 via-green-600/20 to-emerald-600/20',
      accentColor: 'from-lime-500 to-emerald-500'
    },
    {
      id: 'lean-training',
      title: 'Yalın Üretim Eğitimleri',
      description: 'Yalın üretim prensiplerini öğrenin ve uygulayın.',
      icon: <GraduationCap className="w-6 h-6" />,
      items: [
        'Yalın Üretim Prensipleri',
        '5S Metodolojisi',
        'Kanban Sistemleri',
        'Kaizen Uygulamaları',
        'Süreç İyileştirme',
        'Verimlilik Artırma'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-rose-600/20 via-pink-600/20 to-purple-600/20',
      accentColor: 'from-rose-500 to-purple-500'
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-tam-blue to-tam-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 text-white/20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 text-white/20">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-white/20">
          <Target className="w-7 h-7" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white/90 font-medium">Innovation & Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              {t('services.hero.title')}
            </h1>
            <p className="text-l text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 relative py-20 bg-gray-50 rounded-t-3xl -mt-8 relative z-10">
        <div className="w-full px-6">
          <div className="space-y-0">
            {serviceCards.map((card, index) => (
              <div
                key={card.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-1000 ease-out hover:shadow-xl hover:shadow-black/20"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  marginTop: index === 0 ? '0' : '-1rem',
                  zIndex: serviceCards.length - index
                }}
              >
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover blur-sm"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}></div>
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Card Header */}
                <div className="relative z-10 p-8 lg:p-12 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${card.accentColor} rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-black/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          {card.icon}
                        </div>
                        <div className={`absolute -inset-2 bg-gradient-to-br ${card.accentColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        {/* Floating Particles */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
                        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-40 delay-300"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-1 h-8 bg-gradient-to-b ${card.accentColor} rounded-full`}></div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-sm">
                            {card.title}
                          </h3>
                        </div>
                        <p className="text-white text-lg leading-relaxed max-w-2xl">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className={`text-transparent bg-gradient-to-r ${card.accentColor} bg-clip-text transition-all duration-300 group-hover:scale-110`}>
                      <ChevronRight className="w-10 h-10" />
                    </div>
                  </div>
                </div>



                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-700"></div>
              </div>
            ))}
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

export default ServicesPage; 