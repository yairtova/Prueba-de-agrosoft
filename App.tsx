
import React, { useState } from 'react';
import { View as RNView, StyleSheet, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

  const renderView = () => {
    switch (currentView) {
      case 'splash':
        return <SplashView key="splash" onContinue={() => setCurrentView('login')} />;
      case 'login':
        return (
          <LoginView 
            key="login" 
            onLogin={() => setCurrentView('home')} 
            onGoToRegister={() => setCurrentView('register')}
          />
        );
      case 'register':
        return (
          <RegisterView 
            key="register" 
            onRegister={() => setCurrentView('home')} 
            onGoToLogin={() => setCurrentView('login')}
          />
        );
      case 'home':
        return (
          <HomeView 
            key="home"
            activeCropsCount={3}
            featuredCrop={MOCK_CROPS[0]}
            onViewCrop={handleSelectCrop}
            onCreateCrop={() => setCurrentView('create')}
            onViewAllCrops={() => setCurrentView('dashboard')}
            onViewHistory={() => setCurrentView('history')}
          />
        );
      case 'dashboard':
        return (
          <DashboardView 
            key="dashboard"
            onCreateNew={() => setCurrentView('create')} 
            onSelectCrop={handleSelectCrop}
          />
        );
      case 'create':
        return (
          <CreateCropView 
            key="create"
            onBack={() => setCurrentView('home')} 
            onFinish={(crop) => {
              console.log('Crop created:', crop);
              setCurrentView('dashboard');
            }}
          />
        );
      case 'detail':
        return selectedCrop ? (
          <CropDetail 
            key="detail"
            crop={selectedCrop} 
            onBack={() => setCurrentView('dashboard')} 
            onReport={() => setCurrentView('report-select')}
            onHistory={() => setCurrentView('history')}
            onAIAnalysis={() => setCurrentView('ai-analysis')}
            onAIAlerts={() => setCurrentView('ai-alerts')}
          />
        ) : null;
      case 'report-select':
        return (
          <ReportSelectView 
            key="report-select"
            onBack={() => setCurrentView('detail')}
            onSelectType={handleSelectReportType}
          />
        );
      case 'report-form':
        return selectedReportType && selectedCrop ? (
          <ReportFormView 
            key="report-form"
            type={selectedReportType}
            crop={selectedCrop}
            onBack={() => setCurrentView('report-select')}
            onSubmit={handleReportSubmit}
          />
        ) : null;
      case 'report-success':
        return (
          <ReportSuccessView 
            key="report-success"
            onAccept={() => setCurrentView('detail')}
            onViewReport={() => setCurrentView('report-detail')}
          />
        );
      case 'report-detail':
        return selectedEvent ? (
          <ReportDetailView 
            key="report-detail"
            event={selectedEvent}
            onBack={() => setCurrentView('history')}
          />
        ) : null;
      case 'history':
        return (
          <HistoryView 
            key="history"
            onBack={() => setCurrentView('detail')}
            onSelectEvent={(event) => {
              setSelectedEvent(event);
              setCurrentView('report-detail');
            }}
          />
        );
      case 'ai-analysis':
        return (
          <AIAnalysisView 
            key="ai-analysis"
            onBack={() => setCurrentView('detail')}
          />
        );
      case 'ai-alerts':
        return (
          <AIAlertsView 
            key="ai-alerts"
            onBack={() => setCurrentView('detail')}
          />
        );
      case 'profile':
        return (
          <RNView style={styles.profileContainer}>
            <Text style={styles.profileTitle}>Perfil del Usuario</Text>
            <TouchableOpacity 
              onPress={() => setCurrentView('login')} 
              style={styles.logoutBtn}
            >
              <Text style={styles.logoutBtnText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </RNView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <RNView style={styles.viewContainer}>
          {renderView()}
        </RNView>
        <BottomNav currentView={currentView} onChangeView={setCurrentView} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  viewContainer: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1A1C1B',
    marginBottom: 24,
  },
  logoutBtn: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logoutBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default App;
