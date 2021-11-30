import React from 'react';

function Toogle() {
  return (
    <div className="flex self-end mb-12 mr-4 mt-3">
      <div className="ml-3 text-gray-700 font-medium textthis">
        Dark Mode?
      </div>
      <label
        htmlFor="toogleA"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input id="toogleA" type="checkbox" className="sr-only" />
          <div className="w-10 h-4 rounded-full shadow-inner bg-green notdot" />

          <div className="dot absolute w-6 h-6 rounded-full shadow -right-1 -top-1 transition bg-gray-4" />
        </div>
      </label>

    </div>

  );
}

export default Toogle;
