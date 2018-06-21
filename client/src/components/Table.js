import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

class Table extends Component {
  handleRenderTableRow() {
    const { placements } = this.props;
    placements.map(row => {
      this.getTotalImpressions(row)
      return (
        <TableRow row={row} />
      )
    })
  }

  getTotalImpressions(row) {
      axios.get(`getTotalImpressions/${row.id}`)
      .then(response => {
        row['impressions'] = response.data;
        return row;
      })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>start</td>
            <td>end</td>
            <td>cpm</td>
          </tr>
        </thead>
        <tbody>
          {this.handleRenderTableRow()}
        </tbody>
      </table>
    )
  }
}

export default Table;