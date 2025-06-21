import React from 'react';
import { FiHome, FiBell, FiClipboard, FiCloud, FiSettings, FiLogOut } from 'react-icons/fi';

export type SidebarItem =
  | 'charging'
  | 'fleet'
  | 'parking'
  | 'notifications'
  | 'settings'
  | 'category1'
  | 'category2'
  | 'category3';

interface SidebarProps {
  selected: SidebarItem;
  onSelect: (item: SidebarItem) => void;
  onEditVariablesClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  return (
    <nav className="bg-sidebar flex sm:flex-col flex-row justify-between sm:items-center items-stretch sm:py-6 py-0 sm:w-[80px] w-full sm:h-full h-16 border-b sm:border-b-0 sm:border-r border-border z-30">
      {/* Main icons */}
      <div className="flex sm:flex-col flex-row sm:items-center items-stretch sm:space-y-8 space-y-0 space-x-8 sm:space-x-0 px-2 sm:px-0 flex-1">
        <button
          className={`p-3 rounded-lg shadow-card flex items-center justify-center ${selected === 'charging' ? 'bg-accent text-background' : 'text-accent bg-background'}`}
          onClick={() => onSelect('charging')}
        >
          <FiHome size={24} className="sm:w-7 sm:h-7 w-6 h-6" />
        </button>
        <button
          className={`p-2 flex items-center justify-center ${selected === 'notifications' ? 'bg-accent text-background' : 'text-textSecondary hover:text-accent'}`}
          onClick={() => onSelect('notifications')}
        >
          <FiBell size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
        </button>
        <button
          className={`p-2 flex items-center justify-center ${selected === 'fleet' ? 'bg-accent text-background' : 'text-textSecondary hover:text-accent'}`}
          onClick={() => onSelect('fleet')}
        >
          <FiClipboard size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
        </button>
        <button
          className={`p-2 flex items-center justify-center ${selected === 'parking' ? 'bg-accent text-background' : 'text-textSecondary hover:text-accent'}`}
          onClick={() => onSelect('parking')}
        >
          <FiCloud size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
        </button>
        <button
          className={`p-2 flex items-center justify-center ${selected === 'settings' ? 'bg-accent text-background' : 'text-textSecondary hover:text-accent'}`}
          onClick={() => onSelect('settings')}
        >
          <FiSettings size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
        </button>
      </div>
      {/* Logout icon */}
      <div className="flex sm:flex-col flex-row sm:items-center items-stretch sm:mb-2 mb-0 px-2 sm:px-0">
        <button className="text-textSecondary hover:text-accent p-2 flex items-center justify-center">
          <FiLogOut size={24} className="sm:w-6 sm:h-6 w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
