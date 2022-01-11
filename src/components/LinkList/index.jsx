import React from 'react';
import PropTypes from 'prop-types';
import LinkItem from '../LinkItem';

function LinkList({ list }) {
  if (list.length > 0) {
    return (
      <>
        <hr className="border-white w-72 md:w-96 2xl:w-1/4 max-w-2xl" />
        <p
          className="text-lg md:text-xl font-normal text-black dark:text-gray-1"
        >
          Added Link(s)
        </p>
        {/* eslint-disable-next-line max-len */}
        {list.map((item) => <LinkItem key={list.indexOf(item)} link={item.link} code={item.code} />)}
      </>
    );
  }
  return <></>;
}

LinkList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LinkList;
