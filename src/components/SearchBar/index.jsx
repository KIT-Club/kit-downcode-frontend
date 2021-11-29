import React from 'react';
import { ReactComponent as SearchIcon } from './search.svg';

function SearchBar() {
  return (
    <div className="flex items-center flex-col bg-gray-200 mt-8">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {' '}
          <input type="text" className="h-10 w-96 pr-8 pl-5 z-0 text-white focus:shadow bg-gray-5 focus:outline-none rounded-full" placeholder="Your code here..." />
          <div className="absolute top-3 right-3 h-5 w-5 cursor-pointer search-icon">
            {' '}
            <SearchIcon />
            {' '}
          </div>
        </div>
      </div>
      <p className="text-white mt-3">
        Or your can create your
        <a href="facebook.com" className="text-green"> code</a>
      </p>
    </div>
  );
}

export default SearchBar;
