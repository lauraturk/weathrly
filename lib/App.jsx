import React, {Component} from 'react'
import Current from './Current'
import keys from '../keys'

export default class App extends Component {
  constructor() {
    super()
    this.url = `http://api.wunderground.com/api/${keys.johnKey}/forecast/q/CO/Denver.json`
    this.state = {
      weatherFetched: false
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: this.url,
      success: (data) => {
        const state = Object.assign(
          {},
          { weatherFetched: true },
          data.forecast.simpleforecast.forecastday[0]
        )
        this.setState(state);
      }
    });
  }

  renderCurrent() {
    const {
      date,
      high,
      low,
      conditions,
      icon_url,
    } = this.state;

    return (
      <Current
        date={date}
        high={high}
        low={low}
        conditions={conditions}
        icon_url={icon_url}
      />
    );
  }

  render() {
    const current = this.state.weatherFetched ? this.renderCurrent() : null;
    return (
      <div>
        <h1>Weatherly</h1>
        {current}
      </div>
    )
  }
}
