import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    text: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="text"
            className="form-control"
            value={this.state.text}
            placeholder="Add Todos..."
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <input className="btn btn-primary" type="submit" value="Add" />
          </div>
        </div>
      </form>
    );
  }
}
