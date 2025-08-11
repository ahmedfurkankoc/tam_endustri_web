import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonial: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="pl-14 py-6">
            <div className="text-6xl text-tam-blue mb-6">
              <Quote />
            </div>
            <blockquote className="text-2xl text-gray-800 mb-8 font-medium leading-relaxed heading-display">
              {t('testimonial.quote')}
            </blockquote>
            <div className="text-gray-600">
              <div className="font-semibold text-lg body-text-bold">{t('testimonial.name')}</div>
              <div className="text-sm body-text">{t('testimonial.position')}</div>
            </div>
            <div className="flex space-x-2 mt-6">
              <div className="w-2 h-2 bg-tam-blue rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <img 
              src="/images/testimonial-person.webp"
              alt="Endüstriyel danışmanlık"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 