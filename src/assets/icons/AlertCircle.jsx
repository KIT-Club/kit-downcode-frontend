import React from 'react';

function AlertCircle() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="mt-4 mr-2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8L12 12" />
      <path d="M12 16L12.01 16" />
    </svg>
  );
}

export default AlertCircle;
