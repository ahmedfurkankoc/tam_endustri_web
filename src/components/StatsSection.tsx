import React from 'react';

export interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats, className = "" }) => {
  return (
    <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-tam-blue mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
