import React, { useState } from 'react';
import logo from '../../assets/svg/kit-logo.svg';
import logolight from '../../assets/svg/kit-logo-light.svg';

function Toogle() {
  const [userClick, setClick] = useState(true);
  function changeLogo() {
    if (userClick) {
      document.documentElement.classList.add('dark');
      return logo;
    }

    return logolight;
  }
  return (
    <>
      <div className="flex self-end mb-12 mr-4 mt-3">
        <div className="ml-3 mr-3 font-medium mr-6v text-gray-6 dark:text-gray-1 text-sm md:text-base">
          Dark Mode?
        </div>
        <label
          htmlFor="toogleA"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="sr-only"
              onClick={() => {
                if (userClick) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
                setClick(!userClick);
              }}
            />
            <div className="md:w-10 md:h-4 w-7 h-3 rounded-full shadow-inner bg-green notdot" />
            <div
              className="dot absolute md:w-6 md:h-6 w-5 h-5 rounded-full shadow -right-1 -top-1 transition bg-gray-4"
            />
          </div>
        </label>
      </div>
      <div className="flex justify-center items-center mt-48">
        <div>
          <img className="max-h-52 max-w-52a md:w-32 lg:w-36 w-28" src={changeLogo()} alt="LogoKit" />
        </div>
        <div>
          <p className="md:text-5xl font-normal ml-10  text-black dark:text-gray-1 lg:text-6xl text-4xl">KIT Downcode</p>
        </div>
      </div>
    </>
  );
}

export default Toogle;
