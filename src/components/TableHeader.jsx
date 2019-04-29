/* eslint-disable react/prop-types */
import React from 'react';

const TableHeader = ({ headers }) => {
  const headerColumns = () =>
    headers.map(header => <th id={header.id}>{header.label}</th>);
  return (
    <thead>
      <tr>{headerColumns()}</tr>
    </thead>
  );
};

export default TableHeader;
