import React from 'react'

class AlertButton extends React.Component {
  handleClick = (event) => {
    alert(this.props.text);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
    );
  }
}

export default AlertButton;