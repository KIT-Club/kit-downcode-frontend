import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Logo from '../../components/Logo';
import Text from '../../components/Text';
import SearchBarSuccess from '../../components/SearchBarSuccess';

function HomepageDarkMode() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <Logo />
      <SearchBar />
      <SearchBarSuccess />
      <Text />
      <Footer />
    </div>
  );
}

export default HomepageDarkMode;
