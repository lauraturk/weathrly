import React, { Component } from 'react'
import Input from './Input'
import DataSet from './api.js'
import Scrubber from './Scrubber'
import keys from '../keys'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      url : `http://api.wunderground.com/api/${keys.johnKey}/forecast/q/CO/Denver.json`,
      currentLocation : 'CO/Denver',
      weather: []
    }
  }

  componentDidMount() {
    // $.
    let location = localStorage.getItem('city')
    this.setState({currentLocation: location ? location : ''}, ()=> {
      this.setState({weather: this.handleClick(location)})
      console.log(this.state)
    })
  }

  handleClick(city) {
    this.state.currentLocation = city
    localStorage.setItem('city', city.toLowerCase())
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

//we want denver, co || denver co || denver colorado to return co/denver

let inputScrub = (input) => {
  input.split(' ').reverse().join('/')
}
