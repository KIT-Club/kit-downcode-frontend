import React from 'react';
import logo from '../../assets/svg/kit-logo.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img className="h-36 w-36 md:h-40 md:w-40 xl:h-44 xl:w-44 " src={logo} alt="LogoKit" />
      </div>
      <div>
        <p className="text-5xl font-normal ml-8 text-gray-1 md:ml-12 md:text-6xl">KIT Downcode</p>
      </div>
    </div>
  );
}

export default Logo;
