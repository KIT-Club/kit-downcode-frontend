import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Toggle from '../../components/Toggle';
import SearchCodeBar from '../../components/SearchCodeBar';
import Footer from '../../components/Footer';

function Home() {
  const [code, setCode] = useState('');

  const handleInputOnChange = (e) => {
    setCode(e.currentTarget.value);
  };

  const handleOnClick = () => {
    // Send code to the API
    console.log(code);
  };

  return (
    <div className="flex flex-col items-center">
      <Toggle />
      <Logo />
      <SearchCodeBar handleInputOnChange={handleInputOnChange} handleOnClick={handleOnClick} />
      <Footer />
    </div>
  );
}

export default Home;
