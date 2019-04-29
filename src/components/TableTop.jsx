/* eslint-disable react/prop-types */
import React from 'react';
import SearchBox from './SearchBox'

const TableTop = ({ title, searchChange}) => {
  return (
    <div>
      <h1>{title}</h1>
      <SearchBox searchChange={searchChange} />
    </div>
  );
};

export default TableTop;
