import React, { Component } from 'react'
import Input from './Input'
import DataSet from './api.js'


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
    console.log(data)
  }

  // <Input {displayData(DataSet)} />

  render() {
    return (
      <div id="page-wrapper">
        {<Input handleClick={this.handleClick.bind(this)} /> }
        <div>
          {this.displayData(DataSet)}
        </div>
      </div>
    )

  }
}
