import React from 'react';
import plus from '../../assets/svg/plus-circle.svg';

function AddLinkBar() {
  return (
    <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg  bg-gray-5 dark:bg-gray-1 flex justify-between items-center lg:w-1/2 lg:mb-5">
      <input placeholder="Add more link" className=" bg-gray-5  text-gray-1 dark:text-gray-5 dark:bg-gray-1 pl-5   placeholder-opacity-70 text-base outline-none w-full" />
      <button className="pr-5" type="button">
        <img className="w-6 h-6" src={plus} alt="" />
      </button>
    </div>
  );
}
export default AddLinkBar;
