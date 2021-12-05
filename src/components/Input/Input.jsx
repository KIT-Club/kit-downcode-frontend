import React from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';
import trash from '../../assets/svg/trash.svg';
import plus from '../../assets/svg/plus-circle.svg';

function Input() {
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
      <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center  lg:w-1/2 lg:mb-5">
        <p className="dark:text-gray-2 text-gray-5 text-opacity-70 text-base pl-5 lg:text-lg">https://github.com/arahiko-ayami</p>
        <button className="pr-5" type="button">
          <img src={trash} alt="" />
        </button>
      </div>
      <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center lg:w-1/2 lg:mb-5">
        <input placeholder="Add more link" className="dark:bg-gray-5 bg-gray-1 dark:placeholder-gray-2 pl-5 dark:placeholder-opacity-20 placeholder-gray-5 placeholder-opacity-70 text-base outline-none w-full dark:text-gray-2 text-gray-5" />
        <button className="pr-5" type="button">
          <img className="w-6 h-6" src={plus} alt="" />
        </button>
      </div>
    </div>

  );
}

export default Input;
