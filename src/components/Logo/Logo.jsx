import React from 'react';
import logo from '../../assets/svg/kit-logo.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img className="h-36 w-36 lg:h-44 lg:w-44" src={logo} alt="LogoKit" />
      </div>
      <div>
        <p className="text-5xl font-normal ml-8 dark:text-gray-1 text-gray-5 lg:ml-12 lg:text-6xl">KIT Downcode</p>
      </div>
    </div>
  );
}

export default Logo;
