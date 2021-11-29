import React from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';
import trash from '../../assets/svg/trash.svg';
import plus from '../../assets/svg/plus-circle.svg';

function Input() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="max-h-16 min-w-100 rounded-lg bg-gray-5">
        <p>483171635</p>
        <p>https://github.com/arahiko-ayami</p>
        <button type="button">
          <img src={Clipboard} alt="" />
        </button>
      </div>
      <div className="max-h-16 min-w-100 rounded-lg bg-gray-5">
        <p>https://github.com/arahiko-ayami</p>
        <button type="button">
          <img src={trash} alt="" />
        </button>
      </div>
      <div className="max-h-16 min-w-100 rounded-lg bg-gray-5">
        <input placeholder="Add more link" />
        <button type="button">
          <img src={plus} alt="" />
        </button>
      </div>
    </div>

  );
}

export default Input;
