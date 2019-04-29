import React from 'react';

const TableRow = ({ i, id, title, address, type }) => {
    
  return (
    <tr className={`tablerow ${i}`}>
      <td className="tablecell">{id}</td>
      <td className="tablecell">{title}</td>
      <td className="tablecell">{address}</td>
      <td className="tablecell">{type}</td>
    </tr>
  );
};

export default TableRow;
