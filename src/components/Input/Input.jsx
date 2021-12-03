import React from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';
import trash from '../../assets/svg/trash.svg';
import plus from '../../assets/svg/plus-circle.svg';

function Input() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg bg-gray-5 flex justify-between items-center lg:w-1/2 lg:mb-5  2xl:w-1/3">
        <div className="pl-5 flex flex-col py-2">
          <p className="text-base text-gray-2 leading-4">483171635</p>
          <p className="text-gray-2 text-sm ">https://github.com/arahiko-ayami</p>
        </div>
        <button type="button" className="pr-5">
          <img className="text-gray-1" src={Clipboard} alt="" />
        </button>
      </div>
      <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg bg-gray-5 flex justify-between items-center  lg:w-1/2 lg:mb-5 2xl:w-1/3 ">
        <p className="text-gray-2 text-base pl-5">https://github.com/arahiko-ayami</p>
        <button className="pr-5" type="button">
          <img src={trash} alt="" />
        </button>
      </div>
      <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg bg-gray-5 flex justify-between items-center lg:w-1/2 lg:mb-5 2xl:w-1/3">
        <input placeholder="Add more link" className="bg-gray-5 pl-5 placeholder-gray-2 placeholder-opacity-20 text-base outline-none w-full text-gray-2" />
        <button className="pr-5" type="button">
          <img className="w-6 h-6" src={plus} alt="" />
        </button>
      </div>
    </div>

  );
}

export default Input;
