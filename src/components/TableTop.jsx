/* eslint-disable react/prop-types */
import React from 'react';
import SearchBox from './SearchBox';

const TableTop = ({ title, searchChange, settings }) => {
  let style = {};
  if (settings) {
    style = {
      background: settings.themecolor,
    };
  }

  return (
    <div className="tabletop" style={style}>
      <h2 className="project-title">{title}</h2>
      <SearchBox searchChange={searchChange} />
    </div>
  );
};

export default TableTop;
