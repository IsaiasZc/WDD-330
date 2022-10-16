// Helper Functions about todo tasks here

class ToDos {

  constructor(todos=[]) {
    this._todoList = todos;
  };

  newTodo(str, utl, ls) {

    let newTodo;

    if(typeof(str) === 'string') {
      newTodo = {
        id: new Date,
        content: str,
        completed: false,
      };
    } else {
      newTodo = {
        id: str.id,
        content: str.content,
        completed: str.completed,
      };
    }
    
    this._todoList.push(newTodo);
    utl.newTodoElement(newTodo, this._todoList, ls);
  };

  setTodoList(arr, utl, ls) {
    // console.log(arr);
    arr.forEach( todo => this.newTodo(todo, utl, ls))
  };

  getTodoList() {
    return this._todoList;
  };


}

export default ToDos;