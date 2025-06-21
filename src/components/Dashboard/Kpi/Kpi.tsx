import React from 'react';
import { FiInfo, FiPlus } from 'react-icons/fi';

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
  isCurrency?: boolean;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-kpiCard p-6 rounded-lg border border-kpiBorder flex flex-col justify-between h-full shadow-card">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-kpiTitle text-base">{title}</h4>
          <FiInfo className="text-kpiTitle" />
        </div>
        <p className="text-xs text-kpiTitle mb-4">{description}</p>
      </div>
      <p className="text-3xl font-bold text-kpiValue">{value}</p>
    </div>
  );
};

const Kpi: React.FC = () => {
  const kpiData = [
    { title: 'Infrastructure Units', value: '€421.07', description: 'This describes variable two and what the shown data means.' },
    { title: 'Charging Growth', value: '33.07', description: 'This describes variable two and what the shown data means.' },
    { title: 'Localization change', value: '21.9%', description: 'This describes variable two and what the shown data means.' },
    { title: 'Fleet growth', value: '7.03%', description: 'This describes variable two and what the shown data means.' },
  ];

  return (
    <div className="bg-background rounded-lg p-0">
       <div className="flex justify-between items-center mb-6 px-2 pt-2">
        <h3 className="text-lg font-bold text-text">Key Performance Indicators</h3>
        <button className="flex items-center space-x-2 text-sm py-2 px-4 bg-background border border-border rounded-lg hover:bg-card text-textSecondary">
          <span>Variables</span>
          <FiPlus />
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-2 pb-4">
        {kpiData.map((kpi, index) => (
          <KpiCard key={index} title={kpi.title} value={kpi.value} description={kpi.description} />
        ))}
      </div>
    </div>
  );
};

export default Kpi;
