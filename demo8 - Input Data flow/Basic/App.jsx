import React, { Component } from 'react';
import UncontrolledInputExample from './UncontrolledInputExample.jsx'
import ControlledInputExample from './ControlledInputExample.jsx'

class App extends Component {
  render() {
    return (
      <div>
        UncontrolledInputExample:
        <UncontrolledInputExample/>
        <br/>
        ControlledInputExample:
        <ControlledInputExample/>
      </div>
    );
  }
}

export default App;