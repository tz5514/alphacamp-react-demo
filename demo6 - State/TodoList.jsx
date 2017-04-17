import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx'

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, key) => (
          <TodoItem title={todo.title} isCompleted={todo.isCompleted} key={key}/>
        ))}
      </div>
    );
  }
}

export default TodoList;