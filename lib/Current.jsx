import React, { Component } from 'react';
import moment from 'moment'

export default class Current extends Component {

  render() {
    const {
      date,
      high,
      low,
      conditions,
      icon_url,
    } = this.props;

    return (
      <div>
        <h3>{date.weekday}</h3>
        <img src={icon_url} />
        <h4>{conditions}</h4>
        <ul>
          <li><strong>High: </strong> {high.fahrenheit}</li>
          <li><strong>Low: </strong> {low.fahrenheit}</li>
        </ul>
      </div>
    );
  }
}
