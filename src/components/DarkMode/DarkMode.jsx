import { useState, useEffect } from 'react';

export default function useDarkMode() {
  // eslint-disable-next-line no-undef
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);
  return [colorTheme, setTheme];
}
