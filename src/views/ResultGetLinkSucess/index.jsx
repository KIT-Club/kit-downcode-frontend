import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
// import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

function ResultGetLinkSucess() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <SearchBar />
      <Footer />
    </div>
  );
}
export default ResultGetLinkSucess;
