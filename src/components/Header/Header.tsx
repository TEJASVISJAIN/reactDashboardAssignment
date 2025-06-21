import React from 'react';
import { FiMenu, FiSearch, FiRefreshCw, FiUpload } from 'react-icons/fi';
import { FaBolt } from 'react-icons/fa';

interface HeaderProps {
  onEditVariablesClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEditVariablesClick }) => {
  return (
    <div className="px-3 sm:px-10 pt-4 sm:pt-8 pb-4 sm:pb-6 bg-background border-b border-border">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <FiMenu size={24} className="text-textSecondary" />
          <nav className="flex space-x-1 bg-card rounded-lg p-1">
            <button className="py-2 px-4 sm:px-6 rounded-md text-sm sm:text-base font-medium text-text bg-background shadow-card">Charging Stations</button>
            <button className="py-2 px-4 sm:px-6 rounded-md text-sm sm:text-base font-medium text-textSecondary hover:bg-background">Fleet Sizing</button>
            <button className="py-2 px-4 sm:px-6 rounded-md text-sm sm:text-base font-medium text-textSecondary hover:bg-background">Parking</button>
          </nav>
        </div>
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-textSecondary" />
          <input 
            type="text" 
            placeholder="Search"
            className="w-full bg-card border border-border rounded-lg pl-11 pr-4 py-2 text-text placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
          />
        </div>
      </div>
      <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <FaBolt className="text-yellow" size={24} />
          <h1 className="text-xl sm:text-3xl font-bold text-text">Charging Station</h1>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="p-2 text-textSecondary hover:text-accent hover:bg-card rounded-lg border border-border">
            <FiRefreshCw size={20} />
          </button>
          <button onClick={onEditVariablesClick} className="py-2 px-4 sm:px-6 bg-accent text-background font-semibold rounded-lg shadow-card border-none text-sm sm:text-base">Edit Variables</button>
          <button className="p-2 text-textSecondary hover:text-accent hover:bg-card rounded-lg border border-border">
            <FiUpload size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
