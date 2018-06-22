import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import CustomValue from './CustomValue';

class CustomDate extends Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
      customData: {},
      showData: false,
    };
    this.handleOnEndDateChange = this.handleOnEndDateChange.bind(this);
    this.handleOnStartDateChange = this.handleOnStartDateChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnStartDateChange(event) {
    this.setState({ startDate: event.target.value });
  }

  handleOnEndDateChange(event) {
    this.setState({ endDate: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const formatStartDate = moment(this.state.startDate).format('MM-D-YY');
    const formatEndDate = moment(this.state.endDate).format('MM-D-YY');
    axios.get(`getCustom/${formatStartDate}/${formatEndDate}`)
    .then(response => this.setState({ customData: response.data, showData: true }));
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          Start Date:
          <input
            type='date'
            value={this.state.startDate}
            onChange={this.handleOnStartDateChange}
          />
        </label>
        <label>
          End Date:
          <input
            type='date'
            value={this.state.endDate}
            onChange={this.handleOnEndDateChange}
          />
        </label>
        <input type='submit' value='Submit' />
        <CustomValue info={this.state} showData={this.state.showData}/>
      </form>
    );
  }
}

export default CustomDate;
