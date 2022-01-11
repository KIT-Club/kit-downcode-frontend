import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LinkListContext } from '../contexts';

function LinkListProvider({ children }) {
  const [linkItems, setLinkItems] = useState([]);

  const add = (addItem) => {
    if (linkItems.some((item) => item.link === addItem.link)) return;
    setLinkItems((prev) => [...prev, addItem]);
  };

  const remove = (removeItem) => {
    // eslint-disable-next-line max-len
    setLinkItems(linkItems.filter((item) => item.link !== removeItem.link && item.code !== removeItem.code));
  };

  const removeAll = () => {
    setLinkItems([]);
  };

  const value = {
    linkItems,
    add,
    set: setLinkItems,
    remove,
    removeAll,
  };

  return (
    <LinkListContext.Provider value={value}>
      {children}
    </LinkListContext.Provider>
  );
}

LinkListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LinkListProvider;
