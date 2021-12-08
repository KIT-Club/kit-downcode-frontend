import React from 'react';
import Toogle from '../../components/ToogleDarkMode';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import AddLinkBar from '../../components/AddLinkBar';
import ShowLinkBar from '../../components/ShowLinkBar';
import LinkBar from '../../components/LinkBar';

function ResultGetLinkSucess() {
  return (
    <div className="flex flex-col items-center">
      <Toogle />
      <SearchBar />
      { false && <AddLinkBar />}
      { false && <ShowLinkBar />}
      { false && <LinkBar />}
      <Footer />
    </div>
  );
}
export default ResultGetLinkSucess;
