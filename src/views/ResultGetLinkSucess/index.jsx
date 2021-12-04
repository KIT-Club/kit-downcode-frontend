import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import Text from '../../components/Text';

function ResultGetLinkSucess() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <Logo />
      <SearchBar />
      <Text />
      <Footer />
    </div>
  );
}
export default ResultGetLinkSucess;
