import React from 'react';

function Button() {
  return (
    <div className="w-full flex flex-col items-center">
      <button type="button" className="mb-7 rounded-3xl w-24 h-11 text-lg font-normal text-gray-2 border-green bd-solid border-2">Create!</button>
      <div>
        <p className="text-gray-2">
          Or you can
          <a className="text-blue" href="https://www.facebook.com/kitclubKMA"> get a link</a>
        </p>
      </div>
    </div>
  );
}

export default Button;
