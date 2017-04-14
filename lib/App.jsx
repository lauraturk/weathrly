import React, { Component } from 'react'
import Input from './Input'
import TenDay from './TenDay'
import Conditions from './Conditions'
import keys from '../keys'
import * as $ from 'jquery'
import scrubData from './scrubData'
import Hourly from './Hourly'
import conditionStyles from './conditionStyles'


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
      this.setState(scrubData(dataResponse))
      }).then(() => {
        // console.log(this.state.conditions.status)
        conditionStyles(this.state.conditions)
    })
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
