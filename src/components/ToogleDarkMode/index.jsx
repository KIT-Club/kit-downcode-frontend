import React from 'react';

function Toogle() {
  return (
    <div className="flex self-end mb-12 md:mr-4 mr-2 mt-3">
      <div className="ml-3 text-gray-700 font-medium md:mr-6 mr-3 text-white text-sm md:text-base">
        Dark Mode?
      </div>
      <label
        htmlFor="toogleA"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input id="toogleA" type="checkbox" className="sr-only" />
          <div className="md:w-10 md:h-4 w-8 h-3 rounded-full shadow-inner bg-green notdot" />

          <div className="dot absolute md:w-6 md:h-6 w-5 h-5 rounded-full shadow -right-1 -top-1 transition bg-gray-4" />
        </div>
      </label>

    </div>

  );
}

export default Toogle;
