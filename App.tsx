
import React, { useState, useEffect, createContext, useContext } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Payment from './pages/Payment';
import { Language, translations } from './lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

type View = 'home' | 'login' | 'payment';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; months: number } | null>(null);
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '');
      if (path === 'login') setCurrentView('login');
      else if (path === 'payment') setCurrentView('payment');
      else setCurrentView('home');
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: View, params?: any) => {
    setCurrentView(view);
    window.location.hash = view;
    if (params && view === 'payment') {
      setSelectedPlan(params);
    }
    window.scrollTo(0, 0);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  const renderView = () => {
    if (currentView === 'login') {
      return <Login onBack={() => navigateTo('home')} onLoginSuccess={() => navigateTo('home')} />;
    }

    if (currentView === 'payment') {
      return <Payment 
        planId={selectedPlan?.id || 'pro'} 
        months={selectedPlan?.months || 1} 
        onBack={() => navigateTo('home')} 
      />;
    }

    return (
      <Home 
        onLoginClick={() => navigateTo('login')} 
        onSelectPlan={(id, months) => navigateTo('payment', { id, months })} 
      />
    );
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        {renderView()}
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
