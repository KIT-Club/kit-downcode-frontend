/* eslint-disable react/prop-types */
import React from 'react';
import plus from '../../assets/svg/plus-circle.svg';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
function Suggestion({ inputLink, setInputLink }) {
  return (
    <form className="mt-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-center items-center lg:w-1/2 lg:mt-5">
      <input type="text" placeholder="Add more link" className="rounded-lg dark:bg-gray-5 bg-gray-1 dark:placeholder-gray-2 pl-5 dark:placeholder-opacity-20 placeholder-gray-5 placeholder-opacity-70 text-base outline-none w-full dark:text-gray-2 text-gray-5" />
      <button className="pr-5" type="submit">
        <img className="w-6 h-6" src={plus} alt="" />
      </button>
    </form>
  );
}

export default Suggestion;
