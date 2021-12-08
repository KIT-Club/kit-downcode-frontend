/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
function Button({ setShow, links, setCreatedCodes }) {
  const handleCreate = () => {
    // eslint-disable-next-line react/prop-types
    setCreatedCodes(links);
    setShow(false);
  };
  return (
    <div className="mt-5 w-full flex flex-col items-center">
      <button onClick={handleCreate} type="button" className="mb-5 rounded-3xl w-20 h-10 text-base font-normal bg-gray-1 dark:bg-gray-5 text-gray-5 text-opacity-70 dark:text-gray-2 hover:border-green bd-solid border-2 lg:w-24 lg:h-11 lg:text-lg">Create!</button>
      <div>
        <p className="text-gray-5 text-opacity-70 dark:text-gray-2 text-base lg:text-lg">
          Or you can
          <a className="text-blue text-base lg:text-lg" href="https://www.facebook.com/kitclubKMA"> get a link</a>
        </p>
      </div>
    </div>
  );
}

export default Button;
