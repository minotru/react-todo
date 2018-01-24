import React, { Component } from 'react';
import ToDoList from "./ToDoList"

export default class ToDoApp extends Component {
  render() {
    return (
      <div className="todo-app">
        <ToDoList header = {this.props.header} items = {this.props.items}/>
      </div>
    );
  }
}