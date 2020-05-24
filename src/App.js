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
      mode: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.ToggleTodo = this.ToggleTodo.bind(this)
    this.DeleteTodo = this.DeleteTodo.bind(this)
    this.ChangeMode = this.ChangeMode.bind(this)
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
    if (this.state.smth !== ''){
      item.push([
        Date.now(),
        this.state.smth,
        false,
      ])

      this.setState({
        todos: item,
        smth: '',
        mode: 0,
      })
    }
  }

  ToggleTodo(id){
    var item = this.state.todos

    item.map( todo => {
      if (todo[0] === id){
        (todo[2] === false ? todo[2] = true : todo[2] = false)
      }
    })

    this.setState({ todos: item})
  }

  DeleteTodo(id){
    var item = this.state.todos

    item = item.filter( todo => todo[0] !== id)

    this.setState({ todos: item})
  }

  ChangeMode(mode){
    this.setState({ mode: mode})
    if (mode === 3){
      this.setState({todos: [], mode: 0 })
    }
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
          if (this.state.mode === 0){
            return <ListElement text={todo[1]} key={todo[0]} id={todo[0]} onChange={this.ToggleTodo} onClick={this.DeleteTodo} check={todo[2]} />
          }
          else if (this.state.mode === 1){
            if (todo[2] === false){
              return <ListElement text={todo[1]} key={todo[0]} id={todo[0]} onChange={this.ToggleTodo} onClick={this.DeleteTodo} check={todo[2]} />
            }
          }
          else if (this.state.mode === 2){
            if (todo[2] === true){
              return <ListElement text={todo[1]} key={todo[0]} id={todo[0]} onChange={this.ToggleTodo} onClick={this.DeleteTodo} check={todo[2]} />
            }
          }
        })}
      </ul>
      <Footer data={this.state.todos} size={this.state.todos.length} onClick={this.ChangeMode}/>
    </div>
  );
  }
}

export default App;
