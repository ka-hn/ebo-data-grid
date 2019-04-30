/* eslint-disable react/prop-types */
import React from 'react';

const uuidv1 = require('uuid/v1');

const TableHeader = ({ headers }) => {
  const headerColumns = () =>
    headers.map(header => (
      <div className="tableheadercolumn" key={uuidv1()} id={header.id}>
        {header.label}
      </div>
    ));
  return <div className="tableheader">{headerColumns()}</div>;
};

export default TableHeader;
