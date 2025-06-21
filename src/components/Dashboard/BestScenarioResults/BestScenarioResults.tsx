import React from 'react';
import { FiChevronUp, FiMoreHorizontal } from 'react-icons/fi';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const BestScenarioResults: React.FC = () => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-card">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <FaWandMagicSparkles className="text-accent text-2xl" />
          <h2 className="text-xl font-bold text-text">Best Scenario Results</h2>
        </div>
        <button className="p-2 rounded-full hover:bg-background text-textSecondary">
          <FiChevronUp size={20} />
        </button>
      </div>
      <div className="space-y-4">
        <div className="bg-background border border-accent rounded-lg p-5 flex justify-between items-center">
          <p className="text-base text-text">The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
          <button className="text-textSecondary hover:text-accent">
            <FiMoreHorizontal size={20} />
          </button>
        </div>
        <div className="bg-background border border-accent rounded-lg p-5 flex justify-between items-center">
          <p className="text-base text-text">The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
          <button className="text-textSecondary hover:text-accent">
            <FiMoreHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestScenarioResults;
