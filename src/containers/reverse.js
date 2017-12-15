import React, { Component } from 'react';
import '../App.css';

export default class Reverse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      string: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const reversedString = e.target.value.split('').reverse().join('');
    this.setState({ string: reversedString });
  }

  render() {
    const { string } = this.state;
    return(
      <div className="inputWrapper">
        <h1>{string}</h1>
        <input
          className="inputElement"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
