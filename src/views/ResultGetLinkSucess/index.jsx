import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

function ResultGetLinkSucess() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <Logo />
      <SearchBar />
      <Footer />
    </div>
  );
}
export default ResultGetLinkSucess;
