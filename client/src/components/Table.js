import React, { Component } from 'react';

class Table extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  
  render() {
    return (
      <div>
        <p>This Amazing Table</p>
      </div>
    );
  }
}

export default Table;