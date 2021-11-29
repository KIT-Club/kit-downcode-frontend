import React from 'react';
import logo from '../../assets/svg/kit-logo.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img className="max-h-52 max-w-52 " src={logo} alt="LogoKit" />
      </div>
      <div>
        <p className="text-7xl font-normal ml-14 text-gray-1">KIT Downcode</p>
      </div>
    </div>
  );
}

export default Logo;
