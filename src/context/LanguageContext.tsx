'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ID' | 'EN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('ID');

  useEffect(() => {
    // Check local storage on mount
    const storedLang = localStorage.getItem('upitra_lang') as Language;
    if (storedLang === 'ID' || storedLang === 'EN') {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('upitra_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ID' ? 'EN' : 'ID');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
