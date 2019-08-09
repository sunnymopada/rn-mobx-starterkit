import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from "react-native";

@observer
class TodoList extends Component {
  addTodo = () => {
    this.props.todoStore.addTodo('Todo');
  };
  render() {
    alert(`Number of todos ${this.props.todoStore.todos.length}`);
    console.log(this.props.todoStore.todos);
    return <Button title="AddTodo" onPress={this.addTodo} />;
  }
}

export default TodoList;
