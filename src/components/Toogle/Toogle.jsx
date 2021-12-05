import React from 'react';
import useDarkMode from '../DarkMode/DarkMode';

function Toogle() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="flex self-end mb-12 mr-10 mt-8 absolute right-0 top-0">
      <div className="text-gray-5 text-opacity-70 dark:text-white font-light mr-2 text-base lg:text-lg">
        Dark Mode?
      </div>
      <button onClick={() => setTheme(colorTheme)} type="button" className="flex items-center relative right-0 top-0">
        {
          colorTheme === 'light'
            ? (
              <>
                <div className="h-6 w-6 rounded-full bg-gray-4 absolute right-0 top-1" />
                <div className="h-4 w-10  rounded-full bg-green" />
              </>
            )
            : (
              <>
                <div className="h-6 w-6 rounded-full bg-gray-4 absolute left-0 top-0" />
                <div className="h-4 w-10 rounded-full bg-red" />
              </>
            )
        }
      </button>
    </div>

  );
}

export default Toogle;
