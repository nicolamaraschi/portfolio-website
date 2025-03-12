// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa le traduzioni
import translationIT from './locales/it/translation.json';
import translationEN from './locales/en/translation.json';

// Le risorse contengono le traduzioni
const resources = {
  it: {
    translation: translationIT
  },
  en: {
    translation: translationEN
  }
};

i18n
  // Rileva automaticamente la lingua del browser
  .use(LanguageDetector)
  // Passa i18n istanza alla react-i18next
  .use(initReactI18next)
  // Inizializza i18next
  .init({
    resources,
    fallbackLng: 'it', // Lingua di default in caso di mancata traduzione
    debug: process.env.NODE_ENV === 'development', // Debug solo in development
    interpolation: {
      escapeValue: false // React già lo fa
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    }
  });

export default i18n;