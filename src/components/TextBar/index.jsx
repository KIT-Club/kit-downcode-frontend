import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function TextBar({
  handleOnClick, handleOnKeyDown, icon, link,
}) {
  const inputRef = useRef();

  return (
    <>
      <div className="flex items-center flex-col bg-gray-200">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full ml-4">
            <input
              ref={inputRef}
              defaultValue={link}
              disabled={link !== ''}
              type="link"
              pattern="[0-9]*"
              className="input__home"
              placeholder="Your code here..."
              onKeyDown={(e) => handleOnKeyDown(e, inputRef)}
            />
            <button type="button" className="absolute top-2 right-3 h-5 w-5" onClick={() => handleOnClick(inputRef)}>
              {icon}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

TextBar.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  handleOnKeyDown: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string,
};

TextBar.defaultProps = {
  link: '',
};

export default TextBar;
