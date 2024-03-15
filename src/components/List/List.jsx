import React, { Component } from "react";
import "./style.css";

class List extends Component {


  render() {
    const { todos } = this.props;

    return todos.length ? (
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.title}
          <label></label>
          </li>
        ))}
      </ul>
    ) : null;
  }

}

export default List;
