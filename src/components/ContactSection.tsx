import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-12 md:pt-24 pb-12 md:pb-24 px-4 md:px-6 bg-gradient-to-br from-tam-blue to-tam-accent rounded-t-3xl md:rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight heading-primary">
          {t('cta.title')}
        </h2>
        <p className="text-blue-100 text-base md:text-lg max-w-4xl mx-auto body-text leading-relaxed mb-8 md:mb-12">
          {t('cta.description')}
        </p>
        <a 
          href={t('cta.button_link')}
          className="inline-block bg-white text-tam-blue px-8 md:px-12 py-4 md:py-5 rounded-full font-semibold hover:bg-gray-100 transition-colors font-heading transform hover:scale-105 text-lg md:text-xl"
        >
          {t('cta.button_text')}
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
