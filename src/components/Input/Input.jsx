import React from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';
import trash from '../../assets/svg/trash.svg';
import plus from '../../assets/svg/plus-circle.svg';

function Input() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <div className="mb-6 w-1/2 h-16 rounded-lg bg-gray-5 flex justify-between items-center">
        <div className="pl-5">
          <p className="text-2xl text-gray-2">483171635</p>
          <p className="text-gray-2 text-base ">https://github.com/arahiko-ayami</p>
        </div>
        <button type="button" className="pr-5">
          <img className="text-gray-1" src={Clipboard} alt="" />
        </button>
      </div>
      <div className="mb-6 w-1/2 h-16 min-w-100 rounded-lg bg-gray-5 flex justify-between items-center">
        <p className="text-gray-2 text-2xl pl-5">https://github.com/arahiko-ayami</p>
        <button className="pr-5" type="button">
          <img src={trash} alt="" />
        </button>
      </div>
      <div className="mb-6 h-16 w-1/2 rounded-lg bg-gray-5 flex justify-between items-center">
        <input placeholder="Add more link" className="bg-gray-5 pl-5 placeholder-gray-2 placeholder-opacity-20 text-2xl outline-none w-full" />
        <button className="pr-5" type="button">
          <img className="w-6 h-6" src={plus} alt="" />
        </button>
      </div>
    </div>

  );
}

export default Input;
