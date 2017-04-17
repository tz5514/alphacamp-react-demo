import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx'

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem title="吃飯" isCompleted={true}/>
        <TodoItem title="洗澡" isCompleted={false}/>
        <TodoItem title="睡覺" isCompleted={false}/>
      </div>
    );
  }
}

export default TodoList;