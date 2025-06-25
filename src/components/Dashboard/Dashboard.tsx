import React from 'react';
import BestScenarioResults from './BestScenarioResults/BestScenarioResults';
import Graphs from './Graphs/Graphs';
import Kpi from './Kpi/Kpi';

const Dashboard: React.FC = () => {
  return (
    <main className="px-2 sm:px-6 md:px-10 py-4 sm:py-8 space-y-6 sm:space-y-8 bg-background">
      <BestScenarioResults />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2">
          <Graphs />
        </div>
        <div>
          <Kpi />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
