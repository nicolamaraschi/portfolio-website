// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${currentLanguage === 'it' ? 'active' : ''}`}
        onClick={() => changeLanguage('it')}
        aria-label="Cambia lingua in Italiano"
      >
        <img src="/images/flags/it.svg" alt="Bandiera italiana" className="flag-icon" />
        <span className="lang-text">IT</span>
      </button>
      
      <button 
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Change language to English"
      >
        <img src="/images/flags/en.svg" alt="English flag" className="flag-icon" />
        <span className="lang-text">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;