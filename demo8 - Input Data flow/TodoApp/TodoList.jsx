import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx'

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <TodoItem 
            title={todo.title} 
            isCompleted={todo.isCompleted} 
            index={index} 
            onToggleTodo={this.props.onToggleTodo}
            key={index}
          />
        ))}
      </div>
      
    );
  }
}

export default TodoList;