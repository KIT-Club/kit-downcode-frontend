import React from 'react';
import Img from '../Logo';

function LogoAndName() {
  return (

    <div className="flex items-center mt-40 md:w-32 lg:w-48">
      <Img className="h-36 w-36" />
      <p className="text-5xl text-white ml-8 mr-4 font-medium">KIT Downcode</p>
    </div>
  );
}
export default LogoAndName;
