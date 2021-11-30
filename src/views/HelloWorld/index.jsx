import React from 'react';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/ButtonCreate/buttonCreate';
import Footer from '../../components/Footer/Footer';
import Toogle from '../../components/Toogle/Toogle';

function HelloWorld() {
  return (
    <div className="mt-48 relative">
      <Toogle />
      <Logo />
      <Input />
      <Button />
      <Footer />
    </div>
  );
}

export default HelloWorld;
