import React, { Component } from 'react'
import Input from './Input'
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
    let location = localStorage.getItem('city') || 'please enter a location'
    // this.handleClick(location)
    this.setState({currentLocation: location ? location : ''}, () => {
      this.setState({weather: this.handleClick()})
    })
    console.log(this.state)
  }

  handleClick() {
    localStorage.setItem('city', this.state.currentLocation.toLowerCase())
    this.state.url = `http://api.wunderground.com/api/${keys.johnKey}/forecast10day/q/${this.state.currentLocation}.json`
    $.get(this.state.url).then( () => {
      this.scrubDataTenDay(happydays)
    })
      this.setState( { url: this.state.url,
                      currentLocation: this.state.currentLocation
                      } )

  }



  scrubDataTenDay(data) {
    let scrubbedData = data.forecast.simpleforecast.forecastday.map( (day, index) => {
      let dayObj = { date : day.date.pretty, high: day.high.fahrenheit, low: day.low.fahrenheit, condition: day.conditions, icon: day.icon_url}
       return dayObj
    })
    this.state.weather = scrubbedData
    this.setState({
        weather: this.state.weather
    })
    // return this.state
    // debugger;
  }



  render() {
    return (
      <div id="page-wrapper">
        {<Input handleClick={this.handleClick.bind(this)} /> }
        <div>
        </div>
        <div>
        </div>
      </div>
    )

  }
}
