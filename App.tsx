
import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import SplashView from './components/SplashView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import HomeView from './components/HomeView';
import DashboardView from './components/DashboardView';
import CreateCropView from './components/CreateCropView';
import CropDetail from './components/CropDetail';
import ReportSelectView from './components/ReportSelectView';
import ReportFormView from './components/ReportFormView';
import ReportSuccessView from './components/ReportSuccessView';
import ReportDetailView from './components/ReportDetailView';
import HistoryView from './components/HistoryView';
import AIAnalysisView from './components/AIAnalysisView';
import AIAlertsView from './components/AIAlertsView';
import BottomNav from './components/BottomNav';
import { View, CropItem, EventType, CareEvent } from './types';

const MOCK_CROPS: CropItem[] = [
  { 
    id: '1', 
    name: 'Maiz rojo', 
    variety: 'Rojo', 
    type: 'Maiz', 
    startDate: '2025-01-10',
    day: 45, 
    totalDays: 90,
    progress: 35,
    status: 'Activo',
    phase: 'Floracion',
    health: 'Buena',
    risk: 'Bajo'
  },
  { 
    id: '2', 
    name: 'Frijol bayo', 
    variety: 'Bayo', 
    type: 'Frijol', 
    startDate: '2024-06-10',
    day: 255, 
    totalDays: 300,
    progress: 85,
    status: 'Hecho',
    phase: 'Cosecha',
    health: 'Buena',
    risk: 'Bajo'
  },
  { 
    id: '3', 
    name: 'Lechuga', 
    variety: 'Serrana', 
    type: 'Lechuga', 
    startDate: '2025-01-25',
    day: 30, 
    totalDays: 60,
    progress: 50,
    status: 'Activo',
    phase: 'Crecimiento',
    health: 'Regular',
    risk: 'Medio'
  },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('splash');
  const [selectedCrop, setSelectedCrop] = useState<CropItem | null>(MOCK_CROPS[0]);
  const [selectedReportType, setSelectedReportType] = useState<EventType | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CareEvent | null>(null);

  const handleSelectCrop = (crop: CropItem) => {
    setSelectedCrop(crop);
    setCurrentView('detail');
  };

  const handleSelectReportType = (type: EventType) => {
    setSelectedReportType(type);
    setCurrentView('report-form');
  };

  const handleReportSubmit = (data: any) => {
    console.log('Report submitted:', data);
    setCurrentView('report-success');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7F6] font-sans text-[#1A1C1B] max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-gray-200">
      <AnimatePresence mode="wait">
        {currentView === 'splash' && (
          <SplashView key="splash" onContinue={() => setCurrentView('login')} />
        )}

        {currentView === 'login' && (
          <LoginView 
            key="login" 
            onLogin={() => setCurrentView('home')} 
            onGoToRegister={() => setCurrentView('register')}
          />
        )}

        {currentView === 'register' && (
          <RegisterView 
            key="register" 
            onRegister={() => setCurrentView('home')} 
            onGoToLogin={() => setCurrentView('login')}
          />
        )}

        {currentView === 'home' && (
          <HomeView 
            key="home"
            activeCropsCount={3}
            featuredCrop={MOCK_CROPS[0]}
            onViewCrop={handleSelectCrop}
            onCreateCrop={() => setCurrentView('create')}
            onViewAllCrops={() => setCurrentView('dashboard')}
            onViewHistory={() => setCurrentView('history')}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView 
            key="dashboard"
            onCreateNew={() => setCurrentView('create')} 
            onSelectCrop={handleSelectCrop}
          />
        )}
        
        {currentView === 'create' && (
          <CreateCropView 
            key="create"
            onBack={() => setCurrentView('home')} 
            onFinish={(crop) => {
              console.log('Crop created:', crop);
              setCurrentView('dashboard');
            }}
          />
        )}

        {currentView === 'detail' && selectedCrop && (
          <CropDetail 
            key="detail"
            crop={selectedCrop} 
            onBack={() => setCurrentView('dashboard')} 
            onReport={() => setCurrentView('report-select')}
            onHistory={() => setCurrentView('history')}
            onAIAnalysis={() => setCurrentView('ai-analysis')}
            onAIAlerts={() => setCurrentView('ai-alerts')}
          />
        )}

        {currentView === 'report-select' && (
          <ReportSelectView 
            key="report-select"
            onBack={() => setCurrentView('detail')}
            onSelectType={handleSelectReportType}
          />
        )}

        {currentView === 'report-form' && selectedReportType && selectedCrop && (
          <ReportFormView 
            key="report-form"
            type={selectedReportType}
            crop={selectedCrop}
            onBack={() => setCurrentView('report-select')}
            onSubmit={handleReportSubmit}
          />
        )}

        {currentView === 'report-success' && (
          <ReportSuccessView 
            key="report-success"
            onAccept={() => setCurrentView('detail')}
            onViewReport={() => setCurrentView('report-detail')}
          />
        )}

        {currentView === 'report-detail' && selectedEvent && (
          <ReportDetailView 
            key="report-detail"
            event={selectedEvent}
            onBack={() => setCurrentView('history')}
          />
        )}

        {currentView === 'history' && (
          <HistoryView 
            key="history"
            onBack={() => setCurrentView('detail')}
            onSelectEvent={(event) => {
              setSelectedEvent(event);
              setCurrentView('report-detail');
            }}
          />
        )}

        {currentView === 'ai-analysis' && (
          <AIAnalysisView 
            key="ai-analysis"
            onBack={() => setCurrentView('detail')}
          />
        )}

        {currentView === 'ai-alerts' && (
          <AIAlertsView 
            key="ai-alerts"
            onBack={() => setCurrentView('detail')}
          />
        )}

        {currentView === 'profile' && (
          <div key="profile" className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-black">Perfil del Usuario</h1>
            <button onClick={() => setCurrentView('login')} className="mt-4 bg-red-500 text-white px-6 py-2 rounded-xl font-bold">Cerrar sesión</button>
          </div>
        )}
      </AnimatePresence>
      
      <BottomNav currentView={currentView} onChangeView={setCurrentView} />
    </div>
  );
};

export default App;
