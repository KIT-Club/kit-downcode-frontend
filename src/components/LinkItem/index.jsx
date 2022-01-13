import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TrashIcon from '../../assets/icons/TrashIcon';
import { LinkListContext } from '../../contexts';
import Clipboard from '../../assets/icons/Clipboard';

function LinkItem({ code, link }) {
  const context = useContext(LinkListContext);

  const handleOnClickDelete = () => {
    context.remove({ code, link });
  };

  const handleOnClickClipboard = async () => {
    // Using clipboard API
    if (navigator.clipboard) await navigator.clipboard.writeText(code);
    // Fallback function using old method
    else {
      const codeElement = document.getElementById('code');
      const input = document.createElement('textarea');
      input.value = codeElement.textContent;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-72 mx-2 h-12 rounded-lg dark:bg-gray-5 bg-gray-1 flex justify-center items-center md:w-96 2xl:w-1/4 max-w-2xl pl-5">
        <div
          className="justify-center rounded-lg dark:bg-gray-5 bg-gray-1 text-sm outline-none w-full dark:text-gray-2 text-gray-5 whitespace-nowrap overflow-x-auto"
        >
          {code === '' ? '' : <p id="code" className="text-lg dark:text-gray-2 text-gray-5 text-opacity-70 leading-4 font-bold">{code}</p>}
          {link}
        </div>
        <button className="px-5" type="button" onClick={code === '' ? handleOnClickDelete : handleOnClickClipboard}>
          <div style={{ width: '24px', height: '24px' }}>
            {code === '' ? <TrashIcon /> : <Clipboard />}
          </div>
        </button>
      </div>
    </div>
  );
}

LinkItem.propTypes = {
  code: PropTypes.string,
  link: PropTypes.string.isRequired,
};

LinkItem.defaultProps = {
  code: '',
};

export default LinkItem;
