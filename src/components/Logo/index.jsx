import React from 'react';
import logo from '../../assets/svg/kit-logo.svg';

function Logo() {
  return (
    <div className="flex justify-center items-center mt-24">
      <div>
        <img className="max-h-52 max-w-52a md:w-32 lg:w-36 w-28" src={logo} alt="LogoKit" />
      </div>
      <div>
        <p className="md:text-5xl font-normal ml-10  dark:text-black text-gray-1 lg:text-6xl text-4xl">KIT Downcode</p>
      </div>
    </div>
  );
}

export default Logo;
