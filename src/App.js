import React, { Component } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

import todos from "./service/todos";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // Привязываем контекст функции к текущему компоненту
  //   this.submitItem = this.submitItem.bind(this);
  //   this.handlTitle = this.handlTitle.bind(this);


  // }
  state = {
    todos: [],

    newtodo: {
      title: "",
      completed: false,
    },
  };

  async componentDidMount() {
    try {
      let request = await todos.get();
      this.setState(
        {
          todos: request,
        },
        () => {
          // console.log(this.state.todos);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }


  // submitItem = (event){
  //  event.preventDefault();
  // }


  // handlTitle = (){
    
  // }
  render() {
    const { todos, newtodo } = this.state;
    return (
      <div>
        <Form newtodo={newtodo} />
        <List todos={todos} />
      </div>
    );
  }
}
// newtodo={newtodo} submitItem={ submitItem} handlTitle={handlTitle}
export default App;
