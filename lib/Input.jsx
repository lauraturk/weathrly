import React, { Component } from 'react';
import * as $ from 'jquery'

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      apiLocation: ''
      }
    }


  submitLocation() {
    let newLocation = this.state.location

    localStorage.setItem('city', newLocation)
    this.props.handleClick(newLocation)
    this.setState({location: newLocation})
  }

  autoComplete(input) {
    $.getJSON(`http://autocomplete.wunderground.com/aq?query=${input}`).then( (dataResponse) => {
      // console.log(dataResponse)
      let apiResponse = dataResponse.RESULTS.length === 1 && dataResponse.RESULTS[0].l
      this.state.apiLocation = apiResponse
      // return dataResponse.RESULTS.length === 1 && dataResponse.RESULTS[0].l
    return this.setState({
        location: this.state.apiLocation
      })
    })
  }

  render() {
    return (
      <nav>
        <h1>Weatherly</h1>
        <article>
          <input
            placeholder="Select Location"
            value={this.state.input}
            onChange={ (e) => {
              this.setState( {
                location: this.autoComplete(e.target.value)
              } )
              console.log(this.state.location + ' state location')
          }}>
          </input>

          <button onClick={this.submitLocation.bind(this)}>
            Save
          </button>
          <select>
            <option value="language1">language1</option>
            <option value="language2">language2</option>
            <option value="language3">language3</option>
          </select>
        </article>
      </nav>
    );
  }

}
