import React from "react";
import TableRow from "./TableRow";

const Table = ({ placements }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>start</td>
          <td>end</td>
          <td>cpm</td>
          <td>impressions</td>

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
