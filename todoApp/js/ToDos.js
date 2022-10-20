// Helper Functions about todo tasks here

export default class ToDos {

  constructor() {
    this._todoList = [];
  };

  newTodo(strOrObj) {

    let newTodo;

    if(typeof(strOrObj) === 'string') {
      newTodo = {
        id: new Date,
        content: strOrObj,
        completed: false,
      };
    } else {
      newTodo = {
        id: strOrObj.id,
        content: strOrObj.content,
        completed: strOrObj.completed,
      };
    }
    
    this._todoList.push(newTodo);
    
    return newTodo;
  };

  /**
   * This method is for starting the todoList when there's information in local storage
   * 
   * arr: The array with the existing Todo's;
   */
  setTodoList(arr) {
    arr.forEach( todo => this.newTodo(todo))

  };


  /**
   * 
   * @returns The todo List
   */
  getTodoList() {
    return this._todoList;
  };


  deleteTodo(todo) {
    let idx = this._todoList.indexOf(todo);
    this._todoList.splice(idx, 1);

    return idx;
  };


}
