import React from 'react';
import logo from '../../assets/svg/kit-logo.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center mt-24">
      <div>
        <img className="max-h-52 max-w-52a md:w-32 lg:w-36 w-28" src={logo} alt="LogoKit" />
      </div>
      <div>
        <p className="md:text-6xl font-normal ml-10 text-gray-1 text-3xl">KIT Downcode</p>
      </div>
    </div>
  );
}

export default Logo;
