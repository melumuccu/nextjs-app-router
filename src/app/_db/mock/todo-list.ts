/**
 * DB用意するまではこのmock objectで対応
 */
export default class TodoList {
  todoList: TodoListType[];

  constructor() {
    this.todoList = [
      { id: 1, title: '買い物をする' },
      { id: 2, title: '犬の散歩をする' },
      { id: 3, title: '洗濯をする' },
    ];
  }

  async getTodoList() {
    return this.todoList;
  }

  async addTodoItem(title: string) {
    const todoLen = this.todoList.length;
    const newId = todoLen > 0 ? this.todoList[todoLen - 1].id + 1 : 1;
    const newTodo: TodoListType = { id: newId, title: title };
    this.todoList.push(newTodo);
    return newTodo;
  }

  async deleteTodoItem(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
}

type TodoListType = { id: number; title: string };
