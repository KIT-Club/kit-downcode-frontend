import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts';

function ThemeProvider({ children }) {
  let preferDark;

  if (window.localStorage.getItem('darkMode') === null) {
    preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    preferDark = window.localStorage.getItem('darkMode') === 'true';
  }

  const [darkMode, setDarkMode] = useState(preferDark);
  const root = window.document.documentElement;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Set Dark mode into LocalStorage
    window.localStorage.setItem('darkMode', `${!darkMode}`);
    root.classList.toggle('dark');
  };

  const value = {
    darkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
