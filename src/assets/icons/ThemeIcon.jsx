import React, { useContext } from 'react';
import ThemeContext from '../../contexts';

function ThemeIcon() {
  const context = useContext(ThemeContext);

  if (context.darkMode) {
    return (
      <svg
        width="24"
        height="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="stroke-current fill-current text-gray-1"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1L12 3" />
        <path d="M12 21L12 23" />
        <path d="M4.22 4.22L5.64 5.64" />
        <path d="M18.36 18.36L19.78 19.78" />
        <path d="M1 12L3 12" />
        <path d="M21 12L23 12" />
        <path d="M4.22 19.78L5.64 18.36" />
        <path d="M18.36 5.64L19.78 4.22" />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current fill-current text-gray-5"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default ThemeIcon;
