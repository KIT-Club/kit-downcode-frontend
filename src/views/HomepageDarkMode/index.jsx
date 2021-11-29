import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Logo from '../../components/Logo';

function HomepageDarkMode() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <Logo />
      <SearchBar />
      <Footer />

    </div>
  );
}

export default HomepageDarkMode;
