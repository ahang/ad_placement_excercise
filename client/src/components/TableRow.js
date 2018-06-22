import React from "react";
import NumberFormat from "react-number-format";

const TableRow = ({ row }) => {
  return (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.start}</td>
      <td>{row.end}</td>
      <NumberFormat
        value={row.cpm}
        displayType={"text"}
        prefix={"$"}
        renderText={value => <td>{value}</td>}
      />
      <td>{row.impressions}</td>
      <NumberFormat
        value={row.totalCPM}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={value => <td>{value}</td>}
      />
    </tr>
  );
};

export default TableRow;
