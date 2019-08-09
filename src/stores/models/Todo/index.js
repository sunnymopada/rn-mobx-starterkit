import { action, observable, computed } from 'mobx';

class Todo {
  @observable description;
  constructor(description) {
    this.description = description;
  }
}

export default Todo;
