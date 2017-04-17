import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

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

  handleAddTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat(todo)
    });
  }

  handleToggleTodo = (toggleTodoIndex, isChecked) => {
    let newTodos = this.state.todos.map((todo, index) => {
      if (index == toggleTodoIndex) {
        return { ...todo, isCompleted: isChecked }
      }
      return todo;
    });

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList todos={this.state.todos} onToggleTodo={this.handleToggleTodo}/>
        <TodoAddForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default App;