import React, { Component } from 'react'

class ControlledInputExample extends Component {
  state = {
    inputText: 'hello'
  }

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      inputText: event.target.value
    });
  }

  handleClear = () => {
    this.setState({
      inputText: ''
    });
  }
  
  render() {
    return (
      <span>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange}/>
        <button onClick={this.handleClear}>清空</button>
      </span>
    );
  }
}

export default ControlledInputExample;