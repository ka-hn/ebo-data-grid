/* eslint-disable react/prop-types */
import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchbox">
      <input
        className="searchfield"
        placeholder="Sök"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
