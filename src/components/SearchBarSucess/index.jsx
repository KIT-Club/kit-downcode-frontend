import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/clipboard.svg';

function Copied() {
  document.getElementById('pp').style.color = 'rgba(59, 130, 246, var(--tw-text-opacity))';
}
function SearchBarSucess() {
  const [link, setLink] = useState('facebook.com');
  const copy = async () => {
    await navigator.clipboard.writeText(link);
    setLink('Copied');
    Copied();
  };
  return (
    <div className="flex items-center flex-col bg-gray-200 mt-3">
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="relative ml-4">
          {' '}
          <input type="text" value={link} id="pp" onChange={link} className="md:w-96 h-9 w-72 pr-8 pl-5 z-0 text-white dark:text-black dark:bg-gray-1 focus:shadow bg-gray-5 focus:outline-none rounded-full" placeholder="https://github.com/arahiko-ayami" />
          <div className="absolute top-2 right-3 h-5 w-5 cursor-pointer">
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