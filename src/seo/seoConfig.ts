export type LanguageCode = 'tr' | 'en';
import { tr as trLocaleStatic } from '../locales/tr';
import { en as enLocaleStatic } from '../locales/en';

export interface SeoEntry {
  title: string;
  description: string;
}

export interface RouteSeo {
  tr: SeoEntry;
  en: SeoEntry;
}

// Base site configuration
export const SITE_URL = 'https://tamendustri.com';
export const DEFAULT_IMAGE = `${SITE_URL}/tam-endustri-logo.png`;
export const SITE_NAME = 'Tam Endüstri';

// Centralized SEO map for key routes (new structure)
export const seoMap: Record<string, RouteSeo> = {
  '/': {
    tr: { title: 'Tam Endüstri - Ticaret ve Endüstriyel Danışmanlık', description: 'Endüstriyel tasarım, danışmanlık ve iş geliştirme çözümleriyle verimliliğinizi artırın.' },
    en: { title: 'Tam Endüstri - Industrial & Trade Consulting', description: 'Industrial design, consulting, and business improvement solutions to elevate performance.' },
  },
  '/en': {
    tr: { title: 'Tam Endüstri - Ticaret ve Endüstriyel Danışmanlık', description: 'Endüstriyel tasarım, danışmanlık ve iş geliştirme çözümleriyle verimliliğinizi artırın.' },
    en: { title: 'Tam Endüstri - Industrial & Trade Consulting', description: 'Industrial design, consulting, and business improvement solutions to elevate performance.' },
  },
  '/hakkimizda': {
    tr: { title: 'Hakkımızda | Tam Endüstri', description: 'Tam Endüstri’nin vizyonu, uzmanlık alanları ve değerleri hakkında bilgi edinin.' },
    en: { title: 'About Us | Tam Endüstri', description: 'Learn about Tam Endüstri’s vision, expertise, and values.' },
  },
  '/en/about': {
    tr: { title: 'Hakkımızda | Tam Endüstri', description: 'Tam Endüstri’nin vizyonu, uzmanlık alanları ve değerleri hakkında bilgi edinin.' },
    en: { title: 'About Us | Tam Endüstri', description: 'Learn about Tam Endüstri’s vision, expertise, and values.' },
  },
  '/iletisim': {
    tr: { title: 'İletişim | Tam Endüstri', description: 'Uzman ekibimizle iletişime geçin ve ihtiyaçlarınıza uygun çözümler geliştirelim.' },
    en: { title: 'Contact | Tam Endüstri', description: 'Get in touch with our experts to craft the right solutions for your needs.' },
  },
  '/en/contact': {
    tr: { title: 'İletişim | Tam Endüstri', description: 'Uzman ekibimizle iletişime geçin ve ihtiyaçlarınıza uygun çözümler geliştirelim.' },
    en: { title: 'Contact | Tam Endüstri', description: 'Get in touch with our experts to craft the right solutions for your needs.' },
  },

  // Design
  '/tasarim/3d-tasarim': {
    tr: { title: '3D Tasarım | Tam Endüstri', description: 'Endüstriyel 3D tasarım hizmetleri ile hızlı ve hatasız ürün geliştirme.' },
    en: { title: '3D Design | Tam Endüstri', description: 'Industrial 3D design services for faster, error‑free product development.' },
  },
  '/en/design/3d-design': {
    tr: { title: '3D Tasarım | Tam Endüstri', description: 'Endüstriyel 3D tasarım hizmetleri ile hızlı ve hatasız ürün geliştirme.' },
    en: { title: '3D Design | Tam Endüstri', description: 'Industrial 3D design services for faster, error‑free product development.' },
  },
  '/tasarim/3d-otomasyon': {
    tr: { title: '3D Otomasyon | Tam Endüstri', description: 'SolidWorks API ve otomasyon çözümleri ile tasarım süreçlerinizi hızlandırın.' },
    en: { title: '3D Automation | Tam Endüstri', description: 'Accelerate design workflows with SolidWorks API and automation solutions.' },
  },
  '/en/design/3d-automation': {
    tr: { title: '3D Otomasyon | Tam Endüstri', description: 'SolidWorks API ve otomasyon çözümleri ile tasarım süreçlerinizi hızlandırın.' },
    en: { title: '3D Automation | Tam Endüstri', description: 'Accelerate design workflows with SolidWorks API and automation solutions.' },
  },

  // Business
  '/is-gelistirme/yalin-uretim': {
    tr: { title: 'Yalın Üretim | Tam Endüstri', description: 'Yalın üretim ve Kaizen uygulamalarıyla israfları azaltın, verimliliği artırın.' },
    en: { title: 'Lean Production | Tam Endüstri', description: 'Reduce waste and improve efficiency with Lean and Kaizen practices.' },
  },
  '/en/business/lean-production': {
    tr: { title: 'Yalın Üretim | Tam Endüstri', description: 'Yalın üretim ve Kaizen uygulamalarıyla israfları azaltın, verimliliği artırın.' },
    en: { title: 'Lean Production | Tam Endüstri', description: 'Reduce waste and improve efficiency with Lean and Kaizen practices.' },
  },
  '/is-gelistirme/teknik-satis': {
    tr: { title: 'Teknik Satış | Tam Endüstri', description: 'Teknik satış danışmanlığı ile satış süreçlerinizi optimize edin.' },
    en: { title: 'Technical Sales | Tam Endüstri', description: 'Optimize your sales process with technical sales consulting.' },
  },
  '/en/business/technical-sales': {
    tr: { title: 'Teknik Satış | Tam Endüstri', description: 'Teknik satış danışmanlığı ile satış süreçlerinizi optimize edin.' },
    en: { title: 'Technical Sales | Tam Endüstri', description: 'Optimize your sales process with technical sales consulting.' },
  },

  // Consulting (a subset; remaining pages follow same pattern)
  '/danismanlik/turizm-danismanlik': {
    tr: { title: 'Turizm Danışmanlığı | Tam Endüstri', description: 'Kurumsal seyahat, vize danışmanlığı, grup/etkinlik ve konser organizasyonları.' },
    en: { title: 'Tourism Consulting | Tam Endüstri', description: 'Corporate travel, visa advisory, groups/events, and concert organization.' },
  },
  '/en/consulting/tourism-consulting': {
    tr: { title: 'Turizm Danışmanlığı | Tam Endüstri', description: 'Kurumsal seyahat, vize danışmanlığı, grup/etkinlik ve konser organizasyonları.' },
    en: { title: 'Tourism Consulting | Tam Endüstri', description: 'Corporate travel, visa advisory, groups/events, and concert organization.' },
  },
};

export function resolveSeo(pathname: string, language: LanguageCode): SeoEntry {
  const entry = seoMap[pathname];
  if (entry) return entry[language];

  // Dynamic fallback from locale dictionaries
  try {
    const trLocale = trLocaleStatic as unknown as Record<string, string>;
    const enLocale = enLocaleStatic as unknown as Record<string, string>;

    const routeToKey: Record<string, string> = {
      // Design (TR)
      '/tasarim/3d-tasarim': 'design.3d_design',
      '/tasarim/3d-otomasyon': 'design.3d_automation',
      '/tasarim/arge-makine': 'design.rnd',
      '/tasarim/ise-ozel-makine': 'design.custom_machine',
      '/tasarim/fabrika-kurulum': 'design.factory_setup',
      '/tasarim/tersine-muhendislik': 'design.reverse',
      // Design (EN)
      '/en/design/3d-design': 'design.3d_design',
      '/en/design/3d-automation': 'design.3d_automation',
      '/en/design/rnd-machine': 'design.rnd',
      '/en/design/custom-machine': 'design.custom_machine',
      '/en/design/factory-setup': 'design.factory_setup',
      '/en/design/reverse-engineering': 'design.reverse',

      // Business (TR)
      '/is-gelistirme/yalin-uretim': 'business.lean',
      '/is-gelistirme/teknik-satis': 'business.techsales',
      '/is-gelistirme/hesaplama-raporlama': 'business.calc',
      // Business (EN)
      '/en/business/lean-production': 'business.lean',
      '/en/business/technical-sales': 'business.techsales',
      '/en/business/calculation-reporting': 'business.calc',

      // Consulting (TR)
      '/danismanlik/makine-imalat': 'consulting.machinery',
      '/danismanlik/elektrik-imalat': 'consulting.electrical',
      '/danismanlik/tekstil-imalat': 'consulting.textile',
      '/danismanlik/cnc-isleme': 'consulting.cnc',
      '/danismanlik/lazer-kesim-bukme': 'consulting.laser',
      '/danismanlik/website-lokalizasyon': 'consulting.webLoc',
      '/danismanlik/yazilim-tasarim': 'consulting.software',
      '/danismanlik/turizm-danismanlik': 'consulting.tourism',
      '/danismanlik/bankacilik-danismanlik': 'consulting.banking',
      '/danismanlik/faizsiz-bankacilik': 'consulting.islamic',
      '/danismanlik/lojistik-danismanlik': 'consulting.logistics',
      '/danismanlik/tedarik-hizmetleri': 'consulting.procurement',
      '/danismanlik/satis-danismanlik': 'consulting.sales',
      '/danismanlik/fizibilite-calismalari': 'consulting.feas',
      '/danismanlik/fotograf-video': 'consulting.photo',
      // Consulting (EN)
      '/en/consulting/machinery-manufacturing': 'consulting.machinery',
      '/en/consulting/electrical-manufacturing': 'consulting.electrical',
      '/en/consulting/textile-manufacturing': 'consulting.textile',
      '/en/consulting/cnc-machining': 'consulting.cnc',
      '/en/consulting/laser-cutting-bending': 'consulting.laser',
      '/en/consulting/website-localization': 'consulting.webLoc',
      '/en/consulting/software-design-coding': 'consulting.software',
      '/en/consulting/tourism-consulting': 'consulting.tourism',
      '/en/consulting/banking-consulting': 'consulting.banking',
      '/en/consulting/islamic-banking': 'consulting.islamic',
      '/en/consulting/logistics-consulting': 'consulting.logistics',
      '/en/consulting/procurement-services': 'consulting.procurement',
      '/en/consulting/sales-consulting': 'consulting.sales',
      '/en/consulting/feasibility-studies': 'consulting.feas',
      '/en/consulting/photography-videography': 'consulting.photo',
    };

    const base = routeToKey[pathname];
    if (base) {
      const dict = language === 'en' ? enLocale : trLocale;
      const titleKey = `${base}.hero.title`;
      const descKey = `${base}.hero.description`;
      const title = (dict[titleKey] as string | undefined) || SITE_NAME;
      const description = (dict[descKey] as string | undefined) || (language === 'en'
        ? 'Industrial design, consulting, and business improvement solutions.'
        : 'Endüstriyel tasarım, danışmanlık ve iş geliştirme çözümleri.');
      return { title: `${title} | ${SITE_NAME}`, description };
    }
  } catch {}

  // Final fallback
  return language === 'en'
    ? { title: 'Tam Endüstri - Industrial & Trade Consulting', description: 'Industrial design, consulting, and business improvement solutions.' }
    : { title: 'Tam Endüstri - Ticaret ve Endüstriyel Danışmanlık', description: 'Endüstriyel tasarım, danışmanlık ve iş geliştirme çözümleri.' };
}


