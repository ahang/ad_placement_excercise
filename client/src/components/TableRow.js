import React from 'react';

const TableRow = ({ row }) => {
  console.log(row);
  return (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.start}</td>
      <td>{row.end}</td>
      <td>{row.cpm}</td>
      <td>{row.impressions}</td>
    </tr>
  )
}

export default TableRow;