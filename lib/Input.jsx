import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      language: 'EN'
    }
  }
  render() {
    return (
      <nav>
        <h1>Weatherly</h1>
        <input placeholder="Select a City" value={this.state.input} onChange={ (e) => {
          this.setState( { input: e.target.value } ) 
        }}>
        </input>
        <button >
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
