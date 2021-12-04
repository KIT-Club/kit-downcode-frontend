import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import SearchBarSucess from '../SearchBarSucess';

function SearchBar() {
  const [code, setCode] = useState('');
  const [data, addCode] = useState({ code: '123', link: 'facebook.com' });
  const [show, setShow] = useState(false);
  const addData = () => {
    if (code === data.code) {
      setShow(true);
    } else {
      console.log('err');
      addCode({ code, link: 'hello' });
    }
  };
  return (
    <>
      <div className="flex items-center flex-col bg-gray-200 mt-8">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full ml-4">
            {' '}
            <input value={code} onChange={(e) => setCode(e.target.value)} type="text" className="pr-8 pl-5 z-0 text-white focus:shadow bg-gray-5 focus:outline-none rounded-full md:w-96 h-9 w-72 border-red border-2 border-solid focus:border-gray-5" placeholder="Your code here..." />
            <div className="absolute top-2 right-3 h-5 w-5 cursor-pointer">
              {' '}
              <SearchIcon onClick={() => {
                console.log('Click');
                addData();
                setCode('');
              }}
              />
              {' '}
            </div>
          </div>
        </div>
      </div>
      {show && <SearchBarSucess />}
    </>
  );
}

export default SearchBar;
