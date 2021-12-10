import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../assets/icons/SearchIcon';

function SearchCodeBar({ handleInputOnChange, handleOnClick }) {
  return (
    <>
      <div className="flex items-center flex-col bg-gray-200">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full ml-4">
            <input
              type="text"
              className=""
              placeholder="Your code here..."
              onChange={handleInputOnChange}
            />
            <button type="button" className="absolute top-2 right-3 h-5 w-5" onClick={handleOnClick}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

SearchCodeBar.propTypes = {
  handleInputOnChange: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default SearchCodeBar;
