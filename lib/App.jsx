import React, { Component } from 'react'
import Input from './Input'
import DataSet from './api.js'
import Scrubber from './Scrubber'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentLocation : {},
      weather: []
    }
  }

  handleClick(city) {
    this.state.currentLocation = city
    this.scrubDataTenDay(DataSet)
    this.setState( { currentLocation: this.state.currentLocation,
                     weather : this.state.weather  })

                      console.log(this.state)

  }

  displayData(data) {
    // console.log(data)
  }

  scrubDataTenDay(data) {
    let scrubbedData = data.forecast.simpleforecast.forecastday.map( (day, index) => {
      let dayObj = { date : day.date.pretty, high: day.high.fahrenheit, low: day.low.fahrenheit, condition: day.conditions, icon: day.icon_url}
       return dayObj
    })
    this.state.weather = scrubbedData
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
        </div>
      </div>
    )

  }
}
