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
    // let location = localStorage.getItem('city') || 'please enter a location'
    // this.handleClick(location)
    let location = this.state.currentLocation
    this.setState({
      currentLocation: location ? location : ''
    }, () => {
      if (location !== 'please enter a location') {
        this.setState({weather: this.handleClick(location)})
      }
    })
    // console.log(this.state)
  }

  handleClick(input) {
    this.setState({
      currentLocation: input
    })
    var url = `http://api.wunderground.com/api/${keys.johnKey}/forecast10day/q/${input}.json`
    // console.log(url);
    $.get(url).then( (happyDays) => {
      this.scrubDataTenDay(happyDays)
      // localStorage.setItem('city', this.state.currentLocation.toLowerCase())
    })
    this.setState( {
      url,
      // currentLocation: this.state.currentLocation
    } )
  }



  scrubDataTenDay(data) {
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
    console.log(scrubbedData);
    // this.state.weather = scrubbedData
    if(scrubbedData.length) {
      this.setState({
        weather: scrubbedData
      })
    } else {
      alert('enter a real place')
    }
    console.log(this.state, ' state')
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
