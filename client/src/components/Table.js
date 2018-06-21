import React from "react";
import TableRow from "./TableRow";

const Table = ({ placements }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Start Date</td>
          <td>End Date</td>
          <td>CPM</td>
          <td>Total Impressions</td>
          <td>CPM * Total Impressions</td>
        </tr>
      </thead>
      <tbody>
        {placements.map(row => {
          return <TableRow key={row.id} row={row} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
