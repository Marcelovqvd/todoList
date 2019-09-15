import React, { Component } from 'react';

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
          {this.state.todos.map(newTodo => <li key={newTodo}>
            {newTodo}
            <button onClick={() => this.handleDelete(newTodo)} type="Button">Remover</button>
          </li>)}
        </ul>
        <input type="text"
          onChange={this.handleChange}
          value={this.state.newTodo} />

        <button type="submit">clique</button>
      </form>

    )
  }
}
