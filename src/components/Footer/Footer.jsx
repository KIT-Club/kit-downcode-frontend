import React from 'react';

function Footer() {
  return (
    <div className="w-full flex justify-center fixed bottom-0 -translate-y-3">
      <p className="text-base text-gray-5 text-opcaity-70 dark:text-white font-normal text-center lg:text-lg">
        A website made by members of
        <a href="https://www.facebook.com/kitclubKMA" className="text-blue text-base lg:text-lg"> KMA Infomation Technology Club</a>
      </p>
    </div>
  );
}

export default Footer;
