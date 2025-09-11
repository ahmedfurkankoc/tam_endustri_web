export type SupportedLang = 'tr' | 'en';

// Central TR ↔ EN route mapping
const routeMap: Record<string, string> = {
  // General
  '/': '/en',
  '/hakkimizda': '/en/about',
  '/iletisim': '/en/contact',
  '/en': '/',
  '/en/about': '/hakkimizda',
  '/en/contact': '/iletisim',

  // Design (updated paths without hizmetler/services)
  '/tasarim/3d-tasarim': '/en/design/3d-design',
  '/tasarim/3d-otomasyon': '/en/design/3d-automation',
  '/tasarim/arge-makine': '/en/design/rnd-machine',
  '/tasarim/ise-ozel-makine': '/en/design/custom-machine',
  '/tasarim/fabrika-kurulum': '/en/design/factory-setup',
  '/tasarim/tersine-muhendislik': '/en/design/reverse-engineering',

  '/en/design/3d-design': '/tasarim/3d-tasarim',
  '/en/design/3d-automation': '/tasarim/3d-otomasyon',
  '/en/design/rnd-machine': '/tasarim/arge-makine',
  '/en/design/custom-machine': '/tasarim/ise-ozel-makine',
  '/en/design/factory-setup': '/tasarim/fabrika-kurulum',
  '/en/design/reverse-engineering': '/tasarim/tersine-muhendislik',

  // Business
  '/is-gelistirme/yalin-uretim': '/en/business/lean-production',
  '/is-gelistirme/teknik-satis': '/en/business/technical-sales',
  '/is-gelistirme/hesaplama-raporlama': '/en/business/calculation-reporting',

  '/en/business/lean-production': '/is-gelistirme/yalin-uretim',
  '/en/business/technical-sales': '/is-gelistirme/teknik-satis',
  '/en/business/calculation-reporting': '/is-gelistirme/hesaplama-raporlama',

  // Consulting
  '/danismanlik/makine-imalat': '/en/consulting/machinery-manufacturing',
  '/danismanlik/elektrik-imalat': '/en/consulting/electrical-manufacturing',
  '/danismanlik/tekstil-imalat': '/en/consulting/textile-manufacturing',
  '/danismanlik/cnc-isleme': '/en/consulting/cnc-machining',
  '/danismanlik/lazer-kesim-bukme': '/en/consulting/laser-cutting-bending',
  '/danismanlik/website-lokalizasyon': '/en/consulting/website-localization',
  '/danismanlik/yazilim-tasarim': '/en/consulting/software-design-coding',
  '/danismanlik/turizm-danismanlik': '/en/consulting/tourism-consulting',
  '/danismanlik/bankacilik-danismanlik': '/en/consulting/banking-consulting',
  '/danismanlik/faizsiz-bankacilik': '/en/consulting/islamic-banking',
  '/danismanlik/lojistik-danismanlik': '/en/consulting/logistics-consulting',
  '/danismanlik/tedarik-hizmetleri': '/en/consulting/procurement-services',
  '/danismanlik/satis-danismanlik': '/en/consulting/sales-consulting',
  '/danismanlik/fizibilite-calismalari': '/en/consulting/feasibility-studies',
  '/danismanlik/fotograf-video': '/en/consulting/photography-videography',

  '/en/consulting/machinery-manufacturing': '/danismanlik/makine-imalat',
  '/en/consulting/electrical-manufacturing': '/danismanlik/elektrik-imalat',
  '/en/consulting/textile-manufacturing': '/danismanlik/tekstil-imalat',
  '/en/consulting/cnc-machining': '/danismanlik/cnc-isleme',
  '/en/consulting/laser-cutting-bending': '/danismanlik/lazer-kesim-bukme',
  '/en/consulting/website-localization': '/danismanlik/website-lokalizasyon',
  '/en/consulting/software-design-coding': '/danismanlik/yazilim-tasarim',
  '/en/consulting/tourism-consulting': '/danismanlik/turizm-danismanlik',
  '/en/consulting/banking-consulting': '/danismanlik/bankacilik-danismanlik',
  '/en/consulting/islamic-banking': '/danismanlik/faizsiz-bankacilik',
  '/en/consulting/logistics-consulting': '/danismanlik/lojistik-danismanlik',
  '/en/consulting/procurement-services': '/danismanlik/tedarik-hizmetleri',
  '/en/consulting/sales-consulting': '/danismanlik/satis-danismanlik',
  '/en/consulting/feasibility-studies': '/danismanlik/fizibilite-calismalari',
  '/en/consulting/photography-videography': '/danismanlik/fotograf-video',
};

export function mapLocalePath(currentPathname: string, targetLanguage: SupportedLang): string {
  // If mapping exists, use it. Otherwise fallback to top-level by language
  const mapped = routeMap[currentPathname];
  if (mapped) return mapped;
  return targetLanguage === 'en' ? '/en' : '/';
}

export function localHref(trHref: string, enHref: string, currentLanguage: SupportedLang): string {
  return currentLanguage === 'en' ? enHref : trHref;
}

export default mapLocalePath;


