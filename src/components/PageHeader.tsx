import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className = "",
  id = "page-header"
}) => {
  return (
    <section id={id} className={`pt-12 md:pt-24 px-4 md:px-6 problem-statement ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight heading-primary">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-tam-blue font-semibold body-text-bold">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
