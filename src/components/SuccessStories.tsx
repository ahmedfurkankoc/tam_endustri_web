import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SuccessStories: React.FC = () => {
  const { t } = useLanguage();

  const stories = [
    {
      title: t('success.automotive.title'),
      category: t('success.category')
    },
    {
      title: t('success.manufacturing.title'),
      category: t('success.category')
    },
    {
      title: t('success.design.title'),
      category: t('success.category')
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-tam-dark mb-16 heading-primary">
          {t('success.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-sm text-gray-500 mb-3 font-medium body-text">{story.category}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed heading-secondary">
                {story.title}
              </h3>
              <div className="flex items-center space-x-2 text-tam-blue">
                <div className="w-8 h-8 bg-tam-blue rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 