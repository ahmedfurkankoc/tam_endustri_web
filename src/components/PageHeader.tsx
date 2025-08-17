import React from 'react';

interface PageHeaderCard {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  iconColor: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string[];
  cards?: PageHeaderCard[];
  className?: string;
  id?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  cards,
  className = "",
  id = "page-header",
  showIcon = false,
  icon
}) => {
  return (
    <section id={id} className={`${cards && cards.length > 0 ? 'pt-6 pb-20 bg-gradient-to-br from-gray-50 to-blue-50' : 'pt-12 md:pt-24'} px-4 md:px-6 problem-statement ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`${cards && cards.length > 0 ? 'mb-16' : 'max-w-2xl'}`}>
          {showIcon && icon && (
            <div className="flex justify-start mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                {icon}
              </div>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 mt-8 leading-tight heading-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-tam-blue font-semibold body-text-bold">
              {subtitle}
            </p>
          )}
          {description && (
            <div className="max-w-4xl space-y-6 text-lg text-tam-blue leading-relaxed font-bold">
              {description.map((text, index) => (
                <p key={index}>
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Cards Grid */}
        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
            {cards.map((card, index) => (
              <div key={index} className="group bg-white rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                {/* Service Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${card.iconColor} flex items-center justify-center shadow-lg`}>
                      {card.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-blue-600 font-bold text-lg md:text-xl mb-3 md:mb-4 group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
