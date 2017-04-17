import React, { Component } from 'react'
import Input from './Input'
import TenDay from './TenDay'
import Conditions from './Conditions'
import keys from '../keys'
import * as $ from 'jquery'
import scrubData from './scrubData'
import Hourly from './Hourly'
import CurrentForecast from './CurrentForecast'
import conditionStyles from './conditionStyles'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      url : ``,
      currentLocation : '',
      tenDayWeather: [],
      conditions: {},
      hourly: [],
      currentForecast: {}
    }
  }

  componentDidMount() {
    let theCity = JSON.parse(localStorage.getItem('city'))

    theCity && this.loadInfo(theCity.url, this.state.language)
  }

  handleClick(input, language) {
    var url = `http://api.wunderground.com/api/${keys.johnKey}/conditions/hourly/forecast10day/lang:${language}/${input}.json`

    this.getInfo(input, language).catch(() => {
      alert('please select a valid location')
    })
    this.setState({
      url,
      currentLocation: input
    })
  }

  getInfo(input, language) {
    var url = `http://api.wunderground.com/api/${keys.johnKey}/conditions/hourly/forecast10day/lang:${language}/${input}.json`
    var weather = $.get(url).then( (dataResponse) => {
      console.log(dataResponse, ' dataResponse')
      this.setState(scrubData(dataResponse))
      }).then(() => {
        conditionStyles(this.state.conditions)
    })

    return weather
  }

  loadInfo(input, language) {
    var url = `http://api.wunderground.com/api/${keys.johnKey}/conditions/hourly/forecast10day/lang:${language}/${input}.json`

    this.getInfo(input, language)
    this.setState({
      url,
      currentLocation: input
    })
  }

  render() {
    return (
      <div id="page-wrapper">
        <Input handleClick={this.handleClick.bind(this)} />
        <Conditions conditions={this.state.conditions} />
        <CurrentForecast currentForecast={this.state.currentForecast} />
        <Hourly hourly={this.state.hourly} />
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
