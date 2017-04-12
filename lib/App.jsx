import React, { Component } from 'react'
import Input from './Input'
import DataSet from './api.js'
import Scrubber from './Scrubber'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentLocation : {}
    }
  }

  handleClick(city) {
    this.state.currentLocation = city
    this.setState({currentLocation: this.state.currentLocation})
    console.log(this.state)
  }

  displayData(data) {
    // console.log(data)
  }

  scrubData(data) {
    let scrubbedData = data.forecast.simpleforecast.forecastday.map( (day, index) => {
      let dayObj = { date : day.date.pretty, High: day.high.fahrenheit, Low: day.low.fahrenheit}
      console.log(dayObj)
       return dayObj
    })


  }

  // <Input {displayData(DataSet)} />

  render() {
    return (
      <div id="page-wrapper">
        {<Input handleClick={this.handleClick.bind(this)} /> }
        <div>
          {this.displayData(DataSet)}
        </div>
        <div>
          {this.scrubData(DataSet)}
        </div>
      </div>
    )

  }
}
