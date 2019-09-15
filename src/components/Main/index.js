import React, { Component } from 'react';

export default class Main extends Component {

  state = {
    variavel: '',
    variaveis: []
  }

  handleChange = e => {
    this.setState({ variavel: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ variaveis: [...this.state.variaveis, this.state.variavel], variavel: '' })

  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.variaveis.map(variavel => <li key={variavel}>{variavel}</li>)}
        </ul>
        <input type="text"
          onChange={this.handleChange}
          value={this.state.variavel} />

        <button type="submit">clique</button>
      </form>

    )
  }
}
