import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { BankConfig, loadConfig } from '../utils/config';
import { Language, Translations, loadTranslations, getNestedTranslation } from '../utils/translations';

interface AppContextType {
  config: BankConfig | null;
  translations: Translations | null;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  isOnline: boolean;
  currentTime: Date;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<BankConfig | null>(null);
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Load configuration
    loadConfig().then(setConfig);

    // Load translations
    loadTranslations().then(setTranslations);

    // Set up online/offline listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(timeInterval);
    };
  }, []);

  const t = (path: string): string => {
    if (!translations || !translations[currentLanguage]) {
      return path;
    }
    return getNestedTranslation(translations[currentLanguage], path);
  };

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <AppContext.Provider
      value={{
        config,
        translations,
        currentLanguage,
        setLanguage,
        t,
        isOnline,
        currentTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
