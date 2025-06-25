import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import type { SidebarItem } from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import EditVariablesModal from './components/modals/EditVariablesModal/EditVariablesModal';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSidebar, setSelectedSidebar] = useState<SidebarItem>('charging');

  const MainLayout = () => (
    <div className="h-screen bg-background text-text font-sans flex flex-col sm:grid sm:grid-cols-[80px_1fr]">
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
      />
    </div>
  );

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
