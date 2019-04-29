import React from 'react';
import TableRow from './TableRow'

const Table = ({ data }) => {
  return (
    <table className="table">
      {
        data.map((object, i) => {
          console.log(object)
          return (            
            <TableRow
              key={i}
              id={object.markerid}
              title={object.title}
              address={`${object.adress}, ${object.postalnumber}, ${object.postaltown} `}
              type={object.type}
            />
          );
        })
      }
    </table>
  );
};

export default Table;
