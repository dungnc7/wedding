'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeType = 'modern' | 'rustic' | 'minimalist' | 'classic';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Default theme
  const [theme, setTheme] = useState<ThemeType>('classic');
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load theme from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('wedding-theme') as ThemeType;
      if (savedTheme && ['modern', 'rustic', 'minimalist', 'classic'].includes(savedTheme)) {
        setTheme(savedTheme);
      }
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('wedding-theme', theme);
      // Apply theme class to body element
      document.body.classList.remove('theme-modern', 'theme-rustic', 'theme-minimalist', 'theme-classic');
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;