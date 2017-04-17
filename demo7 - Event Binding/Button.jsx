import React, { Component } from 'react';

class Button extends Component {
  handleClick(event) {
    console.log(event);
    console.log(event.target);
    // console.log(this.props.text);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
    );
  }
}

export default Button;