import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import Text from '../../components/Text';
import SearchBarSucess from '../../components/SearchBarSucess';

function ResultGetLinkSucess() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <Logo />
      <SearchBar />
      <SearchBarSucess />
      <Text />
      <Footer />
    </div>
  );
}
export default ResultGetLinkSucess;
