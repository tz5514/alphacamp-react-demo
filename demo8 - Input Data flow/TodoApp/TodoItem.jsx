import React, { Component } from 'react';

class TodoItem extends React.Component {
  handleToggleTodo = (event) => {
    this.props.onToggleTodo(this.props.index, event.target.checked);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.isCompleted} onChange={this.handleToggleTodo}/>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default TodoItem;