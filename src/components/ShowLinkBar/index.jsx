import React from 'react';
import trash from '../../assets/svg/trash.svg';

function ShowLinkBar() {
  return (
    <div className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-1 bg-gray-5  flex justify-between items-center  lg:w-1/2 lg:mb-5">
      <p className="dark:text-gray-5 text-gray-1 text-opacity-70 text-base pl-5 lg:text-lg">https://github.com/arahiko-ayami</p>
      <button className="pr-5" type="button">
        <img src={trash} alt="" />
      </button>
    </div>
  );
}
export default ShowLinkBar;
