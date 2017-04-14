import React, { Component } from 'react'
import Input from './Input'
import TenDay from './TenDay'
import Conditions from './Conditions'
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
      tenDayWeather: [],
      conditions: {},
      hourly: []
    }
  }

  componentDidMount() {
    let theCity = localStorage.getItem('city')

    theCity && this.handleClick(theCity)
  }

  handleClick(input) {
    var url = `http://api.wunderground.com/api/${keys.johnKey}/conditions/hourly/forecast10day/q/${input}.json`

    $.get(url).then( (dataResponse) => {
      this.scrubData(dataResponse)
    })
    this.setState({
      url,
      currentLocation: input
    })
  }

  scrubData (data) {
    this.setState({
      tenDayWeather: this.scrubDataTenDay(data),
      conditions: this.scrubDataConditions(data),
      hourly: this.scrubDataHourly(data)
    })
  }

  scrubDataConditions (data) {
    return {
      status: data.current_observation.weather,
      location: data.current_observation.display_location.full,
      tempF: data.current_observation.temp_f,
      tempC: data.current_observation.temp_c,
      icon: data.current_observation.icon_url
    }
  }

  scrubDataHourly (data) {
    return data.hourly_forecast.map((hour) => {
      return {
        time: hour.FCTTIME.civil,
        tempE: hour.temp.english,
        tempM: hour.temp.metric,
        condition: hour.condition,
        icon: hour.icon_url
      }
    })
  }

  scrubDataTenDay(data) {
    return data.forecast.simpleforecast.forecastday.map( ( day ) => {
      return {
        date: day.date.pretty,
        high: day.high.fahrenheit,
        low: day.low.fahrenheit,
        condition: day.conditions,
        icon: day.icon_url
      }
    })
  }

  render() {
    return (
      <div id="page-wrapper">
        <Input handleClick={this.handleClick.bind(this)} />
        <Conditions conditions={this.state.conditions} />
        <TenDay tenDayWeather={this.state.tenDayWeather} />
      </div>
    )

  }
}


// *** current
//current_observation.display_location.full - location
//weather - status(partly cloudy)
//temp_f degrees fahrenheit
//temp_c degrees celsius
//icon_url - the icon


// **** 7 hour
//hourly_forecast is an array, we will map it
//FCCTIME.civil = '5:00 pm'
//temp.english = deg f
//temp.metric = deg c
//condition = "partly cloudy"
//icon_url = the icon
