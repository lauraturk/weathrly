import React, { Component } from 'react';
import * as $ from 'jquery'

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
      }
    }


  submitLocation() {
    let newLocation = this.state.location

    localStorage.setItem('city', newLocation)
    this.props.handleClick(newLocation)
    this.setState({location: newLocation})
  }

  autoComplete(input) {
    $.get(`http://autocomplete.wunderground.com/aq?query=${input}`).then( (dataResponse) => {
      console.log(dataResponse)
      return dataResponse.l
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
