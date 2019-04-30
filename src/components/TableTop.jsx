/* eslint-disable react/prop-types */
import React from 'react';
import SearchBox from './SearchBox';

const TableTop = ({ title, searchChange }) => {
  return (
    <div className="tabletop">
      <h2 className="project-title">{title}</h2>
      <SearchBox searchChange={searchChange} />
    </div>
  );
};

export default TableTop;
