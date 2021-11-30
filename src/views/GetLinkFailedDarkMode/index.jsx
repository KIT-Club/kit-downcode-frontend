import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import TextWarning from '../../components/TextWarning';

function GetLinkFailedDarkMode() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <Logo />
      <SearchBar />
      <TextWarning />
      <Footer />
    </div>
  );
}
export default GetLinkFailedDarkMode;
