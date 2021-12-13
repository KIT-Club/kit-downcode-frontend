import React, { memo } from 'react';

import KitLogo from '../../assets/icons/KitLogo';

function Logo() {
  return (
    <div className="flex justify-center items-center mt-12 md:mt-24 p-5 md:p-10">
      <div>
        <KitLogo />
      </div>
      <p className="text-3xl md:text-5xl lg:text-6xl font-normal pl-5 text-black dark:text-gray-1">KIT Downcode</p>
    </div>
  );
}

export default memo(Logo);
