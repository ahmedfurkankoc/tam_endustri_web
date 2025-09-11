import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE_URL, DEFAULT_IMAGE, SITE_NAME, resolveSeo } from './seoConfig';

const SeoUpdater: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const { pathname } = window.location;
    const seo = resolveSeo(pathname, language as 'tr' | 'en');

    document.title = seo.title;

    const upsertMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const upsertProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertMeta('description', seo.description);
    upsertMeta('robots', 'index,follow');
    upsertMeta('theme-color', '#0ea5e9');

    const canonicalHref = `${SITE_URL}${pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalHref);

    document.querySelectorAll('link[rel="alternate"]').forEach(n => n.parentElement?.removeChild(n));
    const alternates = [
      { href: `${SITE_URL}${pathname.replace(/^\/en/, '') || '/'}`, lang: 'tr' },
      { href: `${SITE_URL}/en${pathname.startsWith('/en') ? pathname.slice(3) : pathname}`, lang: 'en' },
      { href: `${SITE_URL}${pathname.replace(/^\/en/, '') || '/'}`, lang: 'x-default' },
    ];
    alternates.forEach(({ href, lang }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hrefLang', lang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    upsertProperty('og:type', 'website');
    upsertProperty('og:site_name', SITE_NAME);
    upsertProperty('og:title', seo.title);
    upsertProperty('og:description', seo.description);
    upsertProperty('og:url', canonicalHref);
    // og:image intentionally omitted (assets will be updated later)
    upsertProperty('og:locale', language === 'en' ? 'en_US' : 'tr_TR');
    upsertProperty('og:locale:alternate', language === 'en' ? 'tr_TR' : 'en_US');

    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', seo.title);
    upsertMeta('twitter:description', seo.description);
    // twitter:image intentionally omitted (assets will be updated later)

    // Remove previous JSON-LD
    document.querySelectorAll('script[type="application/ld+json"]').forEach(n => n.parentElement?.removeChild(n));

    // JSON-LD: Organization & WebSite
    const orgJson = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE
    };
    const siteJson = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    const jsonld: any[] = [orgJson, siteJson];

    // BreadcrumbList (Home > Current)
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: language === 'en' ? 'Home' : 'Ana Sayfa', item: language === 'en' ? `${SITE_URL}/en` : `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: seo.title.replace(` | ${SITE_NAME}`, ''), item: canonicalHref }
      ]
    };
    jsonld.push(breadcrumb);

    // Service schema
    const isService = /^(\/en)?\/(design|business|consulting)\//.test(pathname) || /^(\/tasarim|\/is-gelistirme|\/danismanlik)\//.test(pathname);
    if (isService) {
      jsonld.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.title.replace(` | ${SITE_NAME}`, ''),
        provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        areaServed: language === 'en' ? 'Global' : 'Türkiye',
        description: seo.description
      });
    }

    jsonld.forEach(obj => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(obj);
      document.head.appendChild(script);
    });
  }, [language]);

  return null;
};

export default SeoUpdater;


