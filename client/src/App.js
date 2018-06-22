import React, { Component } from 'react';
import axios from 'axios';
import Table from './components/Table';
import CustomDate from './components/CustomDate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      placemenetData: []
    };
  }

  componentDidMount() {
    axios.get('/getPlacementData').then(response => {
      const placementObj = response.data;
      placementObj.map(row => {
        axios.get(`getTotalImpressions/${row.id}/${row.cpm}`).then(response => {
          row['impressions'] = response.data.totalImpressions;
          row['totalCPM'] = response.data.totalCPM;
          this.setState({
            placemenetData: [...this.state.placemenetData, row]
          });
        });
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.placemenetData.length > 0 ? (
          <Table placements={this.state.placemenetData} />
        ) : (
          <p>Loading</p>
        )}
        <CustomDate />
      </div>
    );
  }
}

export default App;
