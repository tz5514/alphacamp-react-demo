import React from 'react'
import TodoList from './TodoList.jsx'

class App extends React.Component {
  state = {
    todos: [{
      title: '吃飯',
      isCompleted: true
    }, {
      title: '洗澡',
      isCompleted: false
    }, {
      title: '睡覺',
      isCompleted: false
    }]
  }

  handleAddTodo = () => {
    this.setState({
      todos: this.state.todos.concat({
        title: 'new todo',
        isCompleted: false
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList todos={this.state.todos}/>
        <button onClick={this.handleAddTodo}>add todo</button>
      </div>
    );
  }
}

export default App;