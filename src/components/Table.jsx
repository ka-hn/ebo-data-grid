import React from 'react';
import TableRow from './TableRow';

const uuidv1 = require('uuid/v1');

const Table = ({ data }) => {
  return (
    <div className="tbody">
      {data.map(rowData => {
        return <TableRow key={uuidv1()} rowData={rowData} />;
      })}
    </div>
  );
};

export default Table;
