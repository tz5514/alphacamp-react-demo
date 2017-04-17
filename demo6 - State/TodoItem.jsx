import React, { Component } from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.isCompleted}/>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default TodoItem;