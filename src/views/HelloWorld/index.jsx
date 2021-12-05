import React from 'react';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/ButtonCreate/buttonCreate';
import Footer from '../../components/Footer/Footer';
import Toogle from '../../components/Toogle/Toogle';
import useDarkMode from '../../components/DarkMode/DarkMode';

function HelloWorld() {
  useDarkMode();
  return (
    <div>
      <Toogle />
      <Logo />
      <Input />
      <Button />
      <Footer />
    </div>
  );
}

export default HelloWorld;
