import React, { useState } from 'react';
import Clipboard from '../../assets/svg/clipboard.svg';
import trash from '../../assets/svg/trash.svg';
import plus from '../../assets/svg/plus-circle.svg';

function Input({
  // eslint-disable-next-line react/prop-types
  inputLink, setInputLink, links, setLinks, created,
}) {
  const [suggest, setSuggest] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setLinks([...links, { text: inputLink, id: Math.random() * 1000 }]);
    setInputLink('');
  };

  const handleChange = (e) => {
    setInputLink(e.target.value);
    setSuggest(true);
  };

  const handleDelete = (link) => {
    // eslint-disable-next-line react/prop-types
    setLinks(links.filter((li) => li.id !== link.id));
  };
  return (
    <div className="flex flex-col-reverse justify-center items-center mt-10">
      <form className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center lg:w-1/2 lg:mb-5">
        <input type="text" value={inputLink} onChange={(e) => handleChange(e)} placeholder="Add more link" className="dark:bg-gray-5 bg-gray-1 dark:placeholder-gray-2 pl-5 dark:placeholder-opacity-20 placeholder-gray-5 placeholder-opacity-70 text-base outline-none w-full dark:text-gray-2 text-gray-5" />
        <button onClick={handleClick} className="pr-5" type="submit">
          <img className="w-6 h-6" src={plus} alt="" />
        </button>
      </form>
      { suggest
          && <input type="text" value={inputLink} onChange={(e) => handleChange(e)} placeholder="Add more link" className="inline-block dark:bg-gray-5 bg-gray-1 dark:placeholder-gray-2 pl-5 dark:placeholder-opacity-20 placeholder-gray-5 placeholder-opacity-70 text-base outline-none w-full dark:text-gray-2 text-gray-5" />}
      {
        // eslint-disable-next-line react/prop-types
        links.map((link) => (
          <div key={link.id} className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center  lg:w-1/2 lg:mb-5">
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
          <div key={el.id} className="mb-4 w-3/4 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-between items-center lg:w-1/2 lg:mb-5">
            <div className="pl-5 flex flex-col py-2">
              <p className="text-lg dark:text-gray-2 text-gray-5 text-opacity-70 leading-4 font-bold">483171635</p>
              <p className="dark:text-gray-2 text-gray-5 text-opacity-70 text-xs">{el.text}</p>
            </div>
            <button onClick={() => navigator.clipboard.writeText(el.text)} type="button" className="pr-5">
              <img className="text-gray-1" src={Clipboard} alt="" />
            </button>
          </div>
        ))
      }
    </div>

  );
}

export default Input;
