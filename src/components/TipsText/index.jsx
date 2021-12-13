import React from 'react';
import AlertCircle from '../../assets/icons/AlertCircle';

function TipsText(isValidCode) {
  if (!isValidCode) {
    return (
      <div className="flex">
        <AlertCircle />
        <p className="text-red">
          Your code is invalid, please try another, or your can create a
          {' '}
          <a href="#href" className="text-blue hover:underline">
            code
          </a>
        </p>
      </div>
    );
  }
  return (
    <p className="text-black dark:text-gray-1 mt-4 text-xs md:text-base">
      Or your can create your
      {' '}
      <a href="#href" className="text-blue hover:underline">code</a>
    </p>
  );
}

export default TipsText;
