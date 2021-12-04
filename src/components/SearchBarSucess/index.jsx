import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/clipboard.svg';

function SearchBarSucess() {
  const [link, setLink] = useState('facebook.com');
  const InputHandler = (e) => {
    setLink(e.target.value);
  };
  const copy = async () => {
    await navigator.clipboard.writeText(link);
  };
  return (
    <div className="flex items-center flex-col bg-gray-200 mt-3">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative ml-4">
          {' '}
          <input type="text" value={link} onChange={InputHandler} className="md:w-96 h-9 w-72 pr-8 pl-5 z-0 text-white focus:shadow bg-gray-5 focus:outline-none rounded-full" placeholder="https://github.com/arahiko-ayami" />
          <div className="absolute top-2 right-3 h-5 w-5 cursor-pointer search-icon">
            {' '}
            <SearchIcon onClick={copy} />
            {' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarSucess;
