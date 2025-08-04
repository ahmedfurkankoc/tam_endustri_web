import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { tr } from '../locales/tr';
import { en } from '../locales/en';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  tr,
  en
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguageState] = useState<Language>('tr');

  // URL'den dil bilgisini al
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/en')) {
      setLanguageState('en');
    } else {
      setLanguageState('tr');
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // URL'yi güncelle
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(tr|en)/, '') || '/';
    
    if (lang === 'en') {
      navigate(`/en${pathWithoutLang}`);
    } else {
      navigate(pathWithoutLang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 