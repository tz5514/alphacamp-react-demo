import React, { Component } from 'react'

class UncontrolledInputExample extends React.Component {
  handleInputChange = (event) => {
    console.log(event.target.value);
  }
  
  render() {
    return (
      <input 
        type="text" 
        defaultValue="hello" 
        onChange={this.handleInputChange}
      />
    );
  }
}

export default UncontrolledInputExample;