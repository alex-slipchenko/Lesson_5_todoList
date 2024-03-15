import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  render() {

    const {  newtodo } = this.props;
   console.log(this.props);
    return (
      <form >
        <label>
          Title:
          <input type="text" ></input>
        </label>
        <label>
          Completed:
          <input type="checkbox" defaultChecked={newtodo.completed}></input>
        </label>
        <button>Add</button>
      </form>
    );
  }
}

export default Form;
