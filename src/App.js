import React, { useState } from 'react';
import ListElement from './ListElement'
import Footer from './Footer'
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [],
      smth: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.ToggleTodo = this.ToggleTodo.bind(this)
  }

  handleChange(event){
    this.setState({smth: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.addTodo()
  }

  addTodo(){
    var item = this.state.todos

    item.push([
      Date.now(),
      this.state.smth,
      false,
    ])

    this.setState({
      todos: item,
      smth: '',
    })

  }

  ToggleTodo(id){
    var item = this.state.todos

    item.map( todo => {
      if (todo[0] === id){
        (todo[2] === false ? todo[2] = true : todo[2] = false)
      }
    })

    console.log(item)

    this.setState({ todos: item})
  }

  render(){
  return (
    <div className="App">
      <header className="Header">
        <h1 className="Header-text">ToDo</h1>
      </header>
      <form className="Input" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Что же нужно сделать..." className="Input-area" onChange={this.handleChange} onKeyPress={this._sumbit} value={this.state.smth}/>
        <input type="button" className="Button" onClick={this.addTodo} value="ADD"/>
      </form>
      <ul>
        {this.state.todos.map( todo => {
          return <ListElement text={todo[1]} key={todo[0]} id={todo[0]} onChange={this.ToggleTodo} check={todo[2]} />
        })}
      </ul>
      <Footer data={this.state.todos} size={this.state.todos.length} />
    </div>
  );
  }
}

export default App;
