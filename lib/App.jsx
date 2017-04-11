import React, {Component} from 'react'
import Current from './Current'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      temp: '-23',
      date: new Date(),
      location: 'Denver'
    };
  }

  render() {
    const { temp, date } = this.state;
    return (
      <div>
        <h1>Weatherly</h1>
        <Current temp={temp} date={date} />
      </div>
    )
  }
}
