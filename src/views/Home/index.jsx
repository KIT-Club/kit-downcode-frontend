import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Toggle from '../../components/Toggle';
import TextBar from '../../components/TextBar';
import Footer from '../../components/Footer';
import SearchIcon from '../../assets/icons/SearchIcon';
import Clipboard from '../../assets/icons/Clipboard';
import TipsText from '../../components/TipsText';

function Home() {
  const [code, setCode] = useState(''); // Code from input
  const [response, setResponse] = useState(); // Response from API
  const [resultBar, setResultBar] = useState(''); // Result bar JSX state
  const [tipsText, setTipsText] = useState(TipsText(true)); // Tips text JSX state

  // Click Search button
  const handleOnClickSearch = (inputRef) => {
    setCode(inputRef.current.value);
  };

  // Key Down Enter on Search bar
  const handleOnKeyDown = (event, inputRef) => {
    if (event.key === 'Enter') handleOnClickSearch(inputRef);
  };

  const handleOnClickClipboard = async (inputRef) => {
    // Using clipboard API
    if (navigator.clipboard) await navigator.clipboard.writeText(inputRef.current.value);
    // Fallback function using old method
    else {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };

  useEffect(() => {
    // TODO: Send code to the API
    // Mock data
    if (code === '123') {
      setResponse({ link: 'https://fb.com/Yoshino.Akii' });
    } else if (code !== '') {
      setResponse({ error: 'Your code is invalid!' });
    }
  }, [code]);

  useEffect(() => {
    const jsx = (
      <TextBar
        handleOnClick={handleOnClickClipboard}
        handleOnKeyDown={() => {}}
        icon={<Clipboard />}
        link={response ? response.link : ''}
      />
    );

    if (response) {
      if (response.error) {
        setResultBar();
        setTipsText(TipsText(false));
      } else {
        setResultBar(jsx);
        setTipsText(TipsText(true));
      }
    }
  }, [response]);

  return (
    <div className="flex flex-col items-center space-y-3">
      <Toggle />
      <Logo />
      <TextBar
        handleOnClick={handleOnClickSearch}
        handleOnKeyDown={handleOnKeyDown}
        icon={<SearchIcon />}
      />
      {resultBar}
      {tipsText}
      {/* {response && response.error ?  : <TipsText isValidCode /> } */}
      <Footer />
    </div>
  );
}

export default Home;
