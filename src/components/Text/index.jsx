import React from 'react';

function Text() {
  return (
    <p className="text-black dark:text-gray-1 mt-4 text-xs md:text-base">
      Or your can create your
      <a
        onClick={() => {
          console.log('user wanna create');
        }}
        href="##"
        className="text-blue-500"
      >
        {' '}
        code

      </a>
    </p>
  );
}

export default Text;
