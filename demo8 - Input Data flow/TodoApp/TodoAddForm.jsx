import React, { Component } from 'react';

class TodoAddForm extends Component {
  state = {
    inputText: ''
  }

  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }

  handleAddTodo = () => {
    this.props.onAddTodo({
      title: this.state.inputText,
      isCompleted: false
    });

    this.setState({
      inputText: ''
    });
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.handleInputChange}/>
        <button onClick={this.handleAddTodo}>新增</button>
      </div>
      
    );
  }
}

export default TodoAddForm;