import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex" }}
          action=""
        >
          <input
            type="text"
            style={{ flex: "10", padding: "5px" }}
            name="title"
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" style={btn} />
        </form>
      </div>
    );
  }
}

const btn = {
  display: "inline-block",
  border: "none",
  background: "#555",
  color: "#fff",
  padding: "7px 20px",
  cursor: "pointer",
  flex: "1",
};

export default AddTodo;
