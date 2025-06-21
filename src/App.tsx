import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import type { SidebarItem } from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import EditVariablesModal from './components/modals/EditVariablesModal/EditVariablesModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSidebar, setSelectedSidebar] = useState<SidebarItem>('charging');

  return (
    <div className="min-h-screen bg-background text-text font-sans flex flex-col sm:grid sm:grid-cols-[80px_1fr]">
      {/* Sidebar: vertical on sm+, horizontal on mobile */}
      <Sidebar 
        selected={selectedSidebar} 
        onSelect={setSelectedSidebar}
        onEditVariablesClick={() => setIsModalOpen(true)}
      />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header onEditVariablesClick={() => setIsModalOpen(true)} />
        <Dashboard />
      </div>
      <EditVariablesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedSidebar={selectedSidebar}
      />
    </div>
  );
}

export default App;
