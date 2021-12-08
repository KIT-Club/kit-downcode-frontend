/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line no-unused-vars
function Suggestion({ inputLink, setInputLink }) {
  return (
    <div className="pl-2 mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-1 bg-gray-5 lg:w-1/2 lg:mb-5 flex items-center ">
      <p className="pl-2 text-blue">{inputLink}</p>
    </div>
  );
}

export default Suggestion;
