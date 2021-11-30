import React from 'react';
import icon from '../../assets/svg/alert-circle.svg';

function TextWarning() {
  return (
    <div className="flex">
      <img className="mt-4 mr-2" src={icon} alt="alert-icon" />
      <p className="text-red mt-4">
        Your code is not valid, please try another code, or your can create a
        <a href="facebook.com" className="text-blue-500"> code</a>
      </p>
    </div>
  );
}
export default TextWarning;
