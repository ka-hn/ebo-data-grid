import React from 'react';
import TableRow from './TableRow';

const uuidv1 = require('uuid/v1');

const Table = ({ data }) => {
  return (
    <div className="tablebody">
      {data.map(object => {
        return (
          <TableRow
            key={uuidv1()}
            id={object.id}
            title={object.title}
            address={object.address}
            district={object.district}
            type={object.type}
          />
        );
      })}
    </div>
  );
};

export default Table;
