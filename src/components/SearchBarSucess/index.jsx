import React from 'react';
import { ReactComponent as Clipboard } from '../../assets/svg/clipboard.svg';

function SearchBarSuccess() {
  return (
    <div className="flex items-center flex-col bg-gray-200 mt-3">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative ml-4">
          {' '}
          <input type="text" className="h-9 w-72 md:w-96 pr-8 pl-5 z-0 text-white focus:shadow bg-gray-5 focus:outline-none rounded-full" placeholder="https://github.com/arahiko-ayami" />
          <div className="absolute top-2 right-3 h-5 w-5 cursor-pointer">
            {' '}
            <Clipboard />
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarSuccess;
