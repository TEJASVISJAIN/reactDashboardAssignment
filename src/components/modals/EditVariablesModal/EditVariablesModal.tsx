// @ts-ignore
import React, { useState, useRef } from 'react';
import { FiX, FiSearch, FiRefreshCw, FiInfo, FiChevronDown, FiCheck } from 'react-icons/fi';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import type { SidebarItem } from '../../Sidebar/Sidebar';
import { CATEGORIES } from '../../../data/categories';
import { VARIABLES, type Variable } from '../../../data/variables';

interface VariableTagProps {
    name: string;
    isRemovable?: boolean;
    onClick?: () => void;
    onHover?: () => void;
    onHoverEnd?: () => void;
    selected?: boolean;
}

const VariableTag: React.FC<VariableTagProps> = ({ name, isRemovable, onClick, onHover, onHoverEnd, selected }) => {
    const baseClasses = "flex items-center space-x-2 py-1 px-3 rounded-lg text-sm font-medium cursor-pointer transition-colors";
    const activeClasses = "bg-accent text-background border border-accent";
    const inactiveClasses = "bg-card text-textSecondary border border-border";

    return (
        <button
            className={`${baseClasses} ${selected ? activeClasses : inactiveClasses}`}
            onClick={onClick}
            onMouseEnter={onHover}
            onMouseLeave={onHoverEnd}
        >
            <span>{name}</span>
            {selected ? (
                <FiCheck size={16} />
            ) : isRemovable ? (
                <FaWandMagicSparkles size={14} />
            ) : null}
        </button>
    );
};

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-border rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-4">
                <h4 className="font-semibold text-text">{title}</h4>
                <FiChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="p-4 border-t border-border">{children}</div>}
        </div>
    );
}

interface EditVariablesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSidebar: SidebarItem;
}

const EditVariablesModal: React.FC<EditVariablesModalProps> = ({ isOpen, onClose, selectedSidebar }) => {
  const categories = [
    { label: 'Variable category 1', value: 1 },
    { label: 'Variable Category 2', value: 2 },
    { label: 'Variable Category 3', value: 3 },
  ];

  const getInitialSelectedIds = () => {
    const initialSelected: string[] = [];
    const activeVarNames = ['Co2 Distribution', 'Fleet sizing', 'Border Rate', 'Request rate'];

    categories.forEach(cat => {
        const categoryVariables = VARIABLES.filter(v => v.category === cat.value);
        categoryVariables.forEach((v, i) => {
            if (activeVarNames.includes(v.name)) {
                initialSelected.push(`${v.name}-${cat.value}-${i}`);
            }
        });
    });

    return initialSelected;
  };

  // State for selected variables (max 2, FIFO), initialized with default active tags
  const [selected, setSelected] = useState<string[]>(getInitialSelectedIds);
  // State for Co2 Distribution context window
  const [showContext, setShowContext] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  // State for search
  const [search, setSearch] = useState('');

  // Handle variable selection (max 2, FIFO)
  const handleVariableClick = (uniqueId: string) => {
    setSelected(prev => {
      if (prev.includes(uniqueId)) {
        return prev.filter(v => v !== uniqueId);
      }
      if (prev.length < 2) {
        return [...prev, uniqueId];
      }
      // FIFO: remove first, add new
      return [prev[1], uniqueId];
    });
  };

  // Handle Co2 Distribution hover
  const handleCo2Hover = () => {
    hoverTimeout.current = setTimeout(() => setShowContext(true), 1500);
  };
  const handleCo2HoverEnd = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setShowContext(false);
  };

  // Helper to check if variable is selected
  const isSelected = (uniqueId: string) => selected.includes(uniqueId);

  // Group variables by category and filter by search
  const groupedVariables = categories.map(cat => ({
    ...cat,
    variables: VARIABLES.filter((v: Variable) => v.category === cat.value && v.name.toLowerCase().includes(search.toLowerCase())),
  }));

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      ></div>
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out rounded-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 md:p-6 border-b border-border flex justify-between items-center rounded-t-2xl">
            <h2 className="text-lg md:text-xl font-bold text-text">Edit Variables</h2>
            <button onClick={onClose} className="p-2 text-textSecondary hover:text-accent rounded-full hover:bg-card focus:outline-none focus:ring-2 focus:ring-accent">
              <FiX size={24} />
            </button>
          </div>
          {/* Main content: single column, all categories */}
          <div className="flex-1 flex flex-col p-6 overflow-y-auto">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
              <div className="relative flex-grow">
                <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-textSecondary pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search variables"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full bg-card border border-border rounded-lg pl-11 pr-4 py-2 text-text placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent text-sm md:text-base shadow-sm"
                />
              </div>
              <button className="flex items-center space-x-2 py-2 px-4 bg-card border border-border rounded-lg text-textSecondary hover:text-accent text-sm md:text-base transition-colors shadow-sm">
                <FaWandMagicSparkles />
                <span>Autofill</span>
              </button>
              <button className="flex items-center space-x-2 py-2 px-4 bg-accent text-background font-semibold rounded-lg text-sm md:text-base shadow-sm hover:bg-accent/90 transition-colors">
                <FiRefreshCw />
                <span>Rerun</span>
              </button>
            </div>
            {/* All variable categories and tags */}
            <div className="space-y-6 relative">
              {groupedVariables.map(cat => (
                <div key={cat.label}>
                  <div className="mb-2 font-semibold text-text text-base">{cat.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {cat.variables.map((v: Variable, i: number) => {
                      const uniqueId = `${v.name}-${cat.value}-${i}`;
                      return (
                        <VariableTag
                          key={uniqueId}
                          name={v.name}
                          isRemovable={v.name === 'Carbon 1' || v.name === 'Parking Rate' || v.name === 'Variable 1'}
                          selected={isSelected(uniqueId)}
                          onClick={() => handleVariableClick(uniqueId)}
                          onHover={v.name === 'Co2 Distribution' ? handleCo2Hover : undefined}
                          onHoverEnd={v.name === 'Co2 Distribution' ? handleCo2HoverEnd : undefined}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
              {/* Context window for Co2 Distribution */}
              {showContext && (
                <div className="absolute left-0 top-12 z-50 w-80 bg-card border border-border rounded-lg shadow-lg p-4 animate-fade-in">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-text text-sm md:text-base">Co2 Distribution</h4>
                    <FiInfo className="text-textSecondary" />
                  </div>
                  <p className="text-xs md:text-sm text-textSecondary">But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.</p>
                </div>
              )}
            </div>
            {/* Example: show static context cards and accordions for now */}
            <div className="bg-card p-3 md:p-4 rounded-lg border border-border mt-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <h4 className="font-semibold text-text text-sm md:text-base">Co2 Distribution</h4>
                <FiInfo className="text-textSecondary" />
              </div>
              <p className="text-xs md:text-sm text-textSecondary">But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.</p>
            </div>
            <Accordion title="Primary Variables">
              <p className="text-xs md:text-sm text-textSecondary">Content for Primary Variables</p>
            </Accordion>
            <Accordion title="Secondary Variables">
              <p className="text-xs md:text-sm text-textSecondary">Content for Secondary Variables</p>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditVariablesModal;
