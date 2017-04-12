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
    let scrubbedDataKeys = Object.keys(data.forecast.simpleforecast.forecastday)

    let scrubbedData = scrubbedDataKeys.map( (day) => {
      var dayObj = {}
       dayObj[data.forecast.simpleforecast.forecastday.keys.title] = data.forecast.simpleforecast.forecastday.keys.title
       debugger;
       return dayObj
    })
    console.log(scrubbedDataKeys)


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
