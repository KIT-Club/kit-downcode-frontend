import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/ButtonCreate/buttonCreate';
import Footer from '../../components/Footer/Footer';
import Toogle from '../../components/Toogle/Toogle';
import useDarkMode from '../../components/DarkMode/DarkMode';

function HelloWorld() {
  useDarkMode();
  const [inputLink, setInputLink] = useState('');
  const [links, setLinks] = useState([]);
  const [createdCodes, setCreatedCodes] = useState([]);
  const [show, setShow] = useState(true);
  return (
    <div>
      <Toogle />
      <Logo />
      <Input
        show={show}
        inputLink={inputLink}
        setInputLink={setInputLink}
        links={links}
        setLinks={setLinks}
        created={createdCodes}
        setCreated={setCreatedCodes}
      />
      <Button
        show={show}
        setShow={setShow}
        inputLink={inputLink}
        setInputLink={setInputLink}
        links={links}
        setLinks={setLinks}
        created={createdCodes}
        setCreatedCodes={setCreatedCodes}
      />
      <Footer />
    </div>
  );
}

export default HelloWorld;
