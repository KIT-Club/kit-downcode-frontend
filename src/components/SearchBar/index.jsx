import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';

function SearchBar() {
  return (
    <div className="flex items-center flex-col bg-gray-200 mt-8">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full ml-4">
          {' '}
          <input type="text" className="pr-8 pl-5 z-0 text-white focus:shadow bg-gray-5 focus:outline-none rounded-full search-bar" placeholder="Your code here..." />
          <div className="absolute right-3 h-5 w-5 cursor-pointer search-icon">
            {' '}
            <SearchIcon />
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
