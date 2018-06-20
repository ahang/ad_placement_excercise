import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      placemenetData: [],
    }
  }
  
  componentDidMount() {
    axios.get('/getPlacementData')
    .then(response => {
      this.setState({ placemenetData: response.data });
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.placemenetData.length > 0 ?
          <Table placement={this.state.placemenetData} /> : 
          <p>Loading...</p> 
        }
      </div>
    );
  }
}

export default App;
