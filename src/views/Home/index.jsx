import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo';
import Toggle from '../../components/Toggle';
import TextBar from '../../components/TextBar';
import Footer from '../../components/Footer';
import SearchIcon from '../../assets/icons/SearchIcon';
import Clipboard from '../../assets/icons/Clipboard';
import AlertCircle from '../../assets/icons/AlertCircle';

function Home() {
  const [code, setCode] = useState(''); // Code from input
  const [response, setResponse] = useState(); // Response from API
  const [resultBar, setResultBar] = useState(''); // Result bar JSX state
  const [isValidCode, setIsValidCode] = useState(true); // Tips link JSX state

  // Click Search button
  const handleOnClickSearch = (inputRef) => {
    setCode(inputRef.current.value);
  };

  // Key Down Enter on Search bar
  const handleOnKeyDown = (event, inputRef) => {
    if (event.key === 'Enter') handleOnClickSearch(inputRef);
  };

  const handleOnClickClipboard = async (inputRef) => {
    let success = true;
    try {
    // Using clipboard API
      if (navigator.clipboard) await navigator.clipboard.writeText(inputRef.current.value);
      // Fallback function using old method
      else {
        inputRef.current.select();
        success = document.execCommand('copy');
        if (!success) throw new Error('Unable to copy to clipboard');
      }
      toast.success('Copied to clipboard');
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => { // Validate code
    // TODO: Send code to the API
    // Mock data
    if (code === '123') {
      setResponse({ link: 'https://fb.com/Yoshino.Akii' });
    } else if (code !== '') {
      setResponse({ error: 'Your code is invalid!' });
    }
  }, [code]);

  useEffect(() => { // Return query result
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
        setIsValidCode(false);
      } else {
        setResultBar(jsx);
        setIsValidCode(true);
      }
    }
  }, [response]);

  return (
    <div className="flex flex-col items-center space-y-5">
      <Toggle />
      <Logo />
      <TextBar
        handleOnClick={handleOnClickSearch}
        handleOnKeyDown={handleOnKeyDown}
        icon={<SearchIcon />}
      />
      {resultBar}
      {
        isValidCode
          ? (
            <p className="text-black dark:text-gray-1 text-xs md:text-base">
              Or your can generate
              {' '}
              <Link to="/generate" className="text-blue hover:underline">code</Link>
            </p>
          )
          : (
            <div className="flex justify-center items-center px-5 text-justify">
              <AlertCircle />
              <p className="text-red text-sm md:text-base">
                Your code is invalid, please try another, or you can generate a
                {' '}
                <Link to="/generate" className="text-blue hover:underline">
                  code
                </Link>
              </p>
            </div>
          )
      }
      <Footer />
    </div>
  );
}

export default Home;
