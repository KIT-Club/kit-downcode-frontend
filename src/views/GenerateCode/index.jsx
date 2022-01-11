import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Toggle from '../../components/Toggle';
import Footer from '../../components/Footer';
import GenerateCodeButton from '../../components/GenerateCodeButton';
import PlusCircle from '../../assets/icons/PlusCircle';
import LinkList from '../../components/LinkList';
import { LinkListContext } from '../../contexts';

function GenerateCode() {
  const inputRef = useRef();
  const context = useContext(LinkListContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const currentValue = inputRef.current.value;
    context.add({ link: currentValue });
    inputRef.current.value = '';
  };

  return (
    <div className="flex flex-col items-center space-y-5">
      <Toggle />
      <Logo />
      <div className="w-full flex flex-col items-center">
        <form
          onSubmit={handleOnSubmit}
          className="w-72 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-center items-center md:w-96 2xl:w-1/4 max-w-2xl"
        >
          <input
            ref={inputRef}
            type="url"
            placeholder="Your link here..."
            className="rounded-lg dark:bg-gray-5 bg-gray-1 dark:placeholder-gray-2 px-5 dark:placeholder-opacity-20 placeholder-gray-3 placeholder-opacity-70 text-base outline-none w-full dark:text-gray-2 text-gray-5"
            required
          />
          <button className="pr-5" type="submit">
            <PlusCircle />
          </button>
        </form>
      </div>
      <p className="text-black dark:text-gray-1 text-xs md:text-base">
        Or your can
        {' '}
        <Link to="/" className="text-blue hover:underline">
          get a link
        </Link>
      </p>
      <LinkList list={context.linkItems} />
      <GenerateCodeButton />
      <Footer />
    </div>
  );
}

export default GenerateCode;
