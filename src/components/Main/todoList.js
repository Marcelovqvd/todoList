import React, { Component } from 'react';
import TodoItem from './todoItem';

export default class Main extends Component {

  state = {
    newTodo: '',
    todos: []
  }

  handleChange = e => {
    this.setState({ newTodo: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' })
  }

  handleDelete = (newTodo) => {
    this.setState({ todos: this.state.todos.filter(v => v !== newTodo) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.todos.map(newTodo => (
            <TodoItem
              key={newTodo}
              newTodo={newTodo}
              onDelete={() => this.handleDelete(newTodo)}
            />
          ))}
        </ul>
        <input type="text"
          onChange={this.handleChange}
          value={this.state.newTodo} />

        <button type="submit">clique</button>
      </form>

    )
  }
}
