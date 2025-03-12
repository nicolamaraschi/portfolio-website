// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Controlla se c'è un tema salvato nelle preferenze utente
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    // Controlla se l'utente ha una preferenza nel sistema
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    return savedTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Aggiorna il tema e applica le classi CSS all'elemento HTML
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
    
    // Salva il tema nelle preferenze utente
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Funzione per cambiare tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};