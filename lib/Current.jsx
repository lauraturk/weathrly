import React, { Component } from 'react';
import moment from 'moment'

export default class Current extends Component {

  render() {
    const { date, temp } = this.props;
    const formattedDate = moment(date).format('dddd MMM Do');
    return (
      <div>
        <h4>The current tempature is: {temp} degrees.</h4>
        <h4>The current time is: {formattedDate}</h4>
      </div>
    );
  }
}
