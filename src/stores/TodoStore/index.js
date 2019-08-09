import { action, observable, computed } from 'mobx';
import Todo from '../models/Todo';

class TodoStore {
  @observable todos = [];

  @action.bound
  addTodo(description) {
    this.todos.push(new Todo(description));
    console.log('Todos', this.todos);
  }
}

export default TodoStore;;
