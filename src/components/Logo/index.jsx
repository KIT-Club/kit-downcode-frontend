import React from 'react';
import logo from '../../assets/svg/kit-logo.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center mt-24">
      <div>
        <img className="max-h-52 max-w-52a w-36 h-36 " src={logo} alt="LogoKit" />
      </div>
      <div>
        <p className="text-6xl font-normal ml-10 text-gray-1">KIT Downcode</p>
      </div>
    </div>
  );
}

export default Logo;
