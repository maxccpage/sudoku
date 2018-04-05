import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
  handleInput = () => {
    //Function that only allows integer inputs 0-9
  };

  render() {
    const staticNumber = 0;
    return (
      <div className="Cell">
        {this.props.cell.value === '' ? (
          <input onChange={this.handleInput} />
        ) : (
          <p className="Element"> {this.props.cell.value} </p>
        )}
      </div>
    );
  }
}
