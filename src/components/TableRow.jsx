import React from 'react';

const TableRow = ({ id, title, address, district, type }) => {
  return (
    <div className="tablerow">
      <div className="tablecell">{id}</div>
      <div className="tablecell">{title}</div>
      <div className="tablecell">{address}</div>
      <div className="tablecell">{district}</div>
      <div className="tablecell">{type}</div>
    </div>
  );
};

export default TableRow;
