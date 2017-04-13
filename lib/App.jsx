import React, { Component } from 'react'
import Input from './Input'
import TenDay from './TenDay'
// import DataSet from './api.js'
import Scrubber from './Scrubber'
import keys from '../keys'
import * as $ from 'jquery'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      url : ``,
      currentLocation : '',
      weather: []
    }
  }

  componentDidMount() {
    let theCity = localStorage.getItem('city')

    this.handleClick(theCity)
  }

  handleClick(input) {
    var url = `http://api.wunderground.com/api/${keys.johnKey}/forecast10day/q/${input}.json`

    $.get(url).then( (happyDays) => {
      this.scrubDataTenDay(happyDays, url, input)
    })
  }



  scrubDataTenDay(data, url, input) {
    let scrubbedData = data.forecast.simpleforecast.forecastday.map( (day, index) => {
      let dayObj = {
        date: day.date.pretty,
        high: day.high.fahrenheit,
        low: day.low.fahrenheit,
        condition: day.conditions,
        icon: day.icon_url
      }

      return dayObj
    })
    if(scrubbedData.length) {
      this.setState({
        url,
        currentLocation: input,
        weather: scrubbedData
      })
    } else {
      alert('enter a real place')
    }
  }

  render() {
    return (
      <div id="page-wrapper">
        {<Input handleClick={this.handleClick.bind(this)} /> }
        {<TenDay weather={this.state.weather} />}
      </div>
    )

  }
}
