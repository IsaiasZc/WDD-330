import ToDos from "./ToDos.js";
import Utililies from "./utilities.js";
import Ls from "./ls.js";

(function () {
  
  const todo = new ToDos;
  const ls = new Ls;
  const ids = ["tasks","all","active","completed","task-amount"];
  const form = "addTodo";
  const utl = new Utililies(ids,form);
  
  // Generate the reference to all elements;
  utl.setUp(ls, todo, utl);


  utl.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(utl.form.newTask.value.length > 0) {
      todo.newTodo(utl.form.newTask.value, utl, ls);
    } else {
      alert("The todo can't be empty");
    }

    ls.setLS(todo.getTodoList());


  });


}())