/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';
import trash from '../../assets/svg/trash.svg';
import plus from '../../assets/svg/plus-circle.svg';
import Suggest from '../SuggestionBoard/suggest';
// eslint-disable-next-line object-curly-newline
function Input({ inputLink, setInputLink, links, setLinks, created }) {
  const [suggest, setSuggest] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (inputLink === '') {
      setInputLink('');
    } else {
      setLinks([...links, { text: inputLink, id: Math.random() * 1000 }]);
      setInputLink('');
      setSuggest(false);
    }
  };

  const handleChange = (e) => {
    setInputLink(e.target.value);
    if (e.target.value.length === 0) {
      setSuggest(false);
    } else {
      setSuggest(true);
    }
  };

  const handleDelete = (link) => {
    // eslint-disable-next-line react/prop-types
    setLinks(links.filter((li) => li.id !== link.id));
  };

  const handleCopy = (el) => {
    navigator.clipboard.writeText(el.text);
  };
  return (
    <div className="flex flex-col-reverse justify-center items-center mt-10">
      <div className="w-full flex flex-col items-center">
        <form className="mt-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-center items-center lg:w-1/2 lg:mt-5">
          <input type="text" value={inputLink} onChange={(e) => handleChange(e)} placeholder="Add more link" className="rounded-lg dark:bg-gray-5 bg-gray-1 dark:placeholder-gray-2 pl-5 dark:placeholder-opacity-20 placeholder-gray-5 placeholder-opacity-70 text-base outline-none w-full dark:text-gray-2 text-gray-5" />
          <button onClick={handleClick} className="pr-5" type="submit">
            <img className="w-6 h-6" src={plus} alt="" />
          </button>
        </form>
        {suggest && (
          <Suggest
            inputLink={inputLink}
            setInputLink={setInputLink}
          />
        )}
      </div>
      {
        // eslint-disable-next-line react/prop-types
        links.map((link) => (
          <div key={link.id} className="mt-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center  lg:w-1/2 lg:mt-5">
            <p className="dark:text-gray-2 text-gray-5 text-opacity-70 text-base pl-5 lg:text-lg">{link.text}</p>
            <button onClick={() => handleDelete(link)} className="pr-5" type="button">
              <img src={trash} alt="" />
            </button>
          </div>
        ))
      }
      {
        // eslint-disable-next-line react/prop-types
        created.map((el) => (
          <div key={el.id} className="mt-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center lg:w-1/2 lg:mt-5">
            <div className="pl-5 flex flex-col py-2">
              <p className="text-lg dark:text-gray-2 text-gray-5 text-opacity-70 leading-4 font-bold">483171635</p>
              <p className="dark:text-gray-2 text-gray-5 text-opacity-70 text-sm">{el.text}</p>
            </div>
            <button onClick={() => handleCopy(el)} type="button" className="pr-5">
              <img className="text-gray-1" src={Clipboard} alt="" />
            </button>
          </div>
        ))
      }
    </div>

  );
}

export default Input;
