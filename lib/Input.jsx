import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
      }
    }


  submitLocation() {
    let newLocation = this.state.location
    this.props.handleClick(newLocation)
    this.setState({location: newLocation})
  }

  cleanInput(input) {
    return input.split(' ').reverse().join(' ').replace(/,/gi, '').replace(/\s/g, '/')
  }

  render() {
    return (
      <nav>
        <h1>Weatherly</h1>
        <input placeholder="Denver, CO" value={this.state.input} onChange={ (e) => {
          this.setState( { location: this.cleanInput(e.target.value) } )
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
      </nav>
    );
  }

}
