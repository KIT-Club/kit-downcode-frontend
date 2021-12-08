import React from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';

function LinkBar() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center lg:w-1/2 lg:mb-5">
        <div className="pl-5 flex flex-col py-2">
          <p className="text-lg dark:text-gray-2 text-gray-5 text-opacity-70 leading-4 font-bold">483171635</p>
          <p className="dark:text-gray-2 text-gray-5 text-opacity-70 text-xs">https://github.com/arahiko-ayami</p>
        </div>
        <button type="button" className="pr-5">
          <img className="text-gray-1" src={Clipboard} alt="" />
        </button>
      </div>
    </div>
  );
}
export default LinkBar;
