import React, { useLayoutEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts';
import ThemeIcon from '../../assets/icons/ThemeIcon';

export default function Toggle() {
  const context = useContext(ThemeContext);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    if (context.darkMode === true) root.classList.add('dark');
    window.localStorage.setItem('darkMode', `${context.darkMode}`);
  }, []);

  return (
    <>
      <div className="flex self-end mb-12 mr-4 mt-3">
        <div className="mr-3 font-medium text-sm md:text-base">
          <ThemeIcon />
        </div>
        <label
          htmlFor="toggleA"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              id="toggleA"
              type="checkbox"
              defaultChecked={!context.darkMode}
              className="sr-only"
              onClick={context.toggleTheme}
            />
            <div className="md:w-10 md:h-4 w-7 h-3 rounded-full shadow-inner bg-green notdot" />
            <div
              className="dot absolute md:w-6 md:h-6 w-5 h-5 rounded-full shadow -right-1 -top-1 transition bg-gray-4"
            />
          </div>
        </label>
      </div>
    </>
  );
}
