import React from 'react'
import TodoList from './TodoList.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList/>
      </div>
    );
  }
}

export default App;