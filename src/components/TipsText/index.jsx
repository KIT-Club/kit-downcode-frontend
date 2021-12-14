import React from 'react';
import AlertCircle from '../../assets/icons/AlertCircle';

function TipsText(isValidCode) {
  if (!isValidCode) {
    return (
      <div className="flex justify-center items-center px-4">
        <AlertCircle />
        <p className="text-red text-xs md:text-base">
          Your code is invalid, please try another, or you can generate a
          {' '}
          <a href="#href" className="text-blue hover:underline">
            code
          </a>
        </p>
      </div>
    );
  }
  return (
    <p className="text-black dark:text-gray-1 text-xs md:text-base">
      Or your can generate
      {' '}
      <a href="#href" className="text-blue hover:underline">code</a>
    </p>
  );
}

export default TipsText;
