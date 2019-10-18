import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "../data/todosData";
import AddTodo from "./AddTodo";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  addTodo = text => {
    const temp = {
      id: this.state.todos.length + 1,
      text: text,
      completed: false
    };
    this.state.todos.push(temp);
    this.setState({ temp });
  };

  render() {
    const todoItemComponent = this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} item={todo} handleChange={this.handleChange} />
      );
    });

    return (
      <div className="todo-list">
        <AddTodo addTodo={this.addTodo} />
        {todoItemComponent}
      </div>
    );
  }
}
