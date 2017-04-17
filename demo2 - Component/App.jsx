import React from 'react'
import AlertButton from './AlertButton.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AlertButton text="AlphaCamp"/>
        <AlertButton text="React"/>
        <AlertButton text="Basic"/>
      </div>
    );

    // return (
    //   React.createElement('div', null,
    //     React.createElement(AlertButton, { text: 'AlphaCamp' }),
    //     React.createElement(AlertButton, { text: 'React' }),
    //     React.createElement(AlertButton, { text: 'Basic' })
    //   )
    // );
  }
}

export default App;