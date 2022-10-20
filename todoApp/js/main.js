import ToDos from "./ToDos.js";
import Utililies from "./utilities.js";
import Ls from "./ls.js";

(function () {
  // Controller object
  const control = {

    /*  
        TODO
        1.- Complete the filter (All, active, completed);
        2.- task left
        *3.- Refactor the control 
        !4.- Document all as possible
    */

    /**
     * For the Click event on the delete button.
     * @param {node} todo - todo object to be deleted.
     * @param {node} elementToRemove - element to be removed in the DOM.
     */
    btnFunction(todo, elementToRemove) {
      let idx = todos.deleteTodo(todo);
      utl.removeTodo(idx, elementToRemove);
      refreshLS();
    },

    /**
     * For the check event.
     * @param {node} todo - todo object to be checked
     * @param {node} check - check button
     */
    checkFunction(todo, check) {
      todo.completed = check.checked;
      refreshLS();
    },

    /**
     * Created to filter the todo nodes in the view.
     * @param {Array} list - array of Todo nodes.
     * @param {boolean} completed - all: every todo, true: completed todos, false: uncompleted todos.
     */
    filter(list, completed = "all") {
      let newList = list.filter((element) => {
        element.classList.remove("hidden");
        return (
          element.children[0].children[0].checked !=
          (completed === "all"
            ? element.children[0].children[0].checked
            : completed)
        );
      });

      newList.forEach((element) => element.classList.add("hidden"));
    },
  };

  const todos = new ToDos();
  const ls = new Ls("todos");
  const ids = ["tasks", "all", "active", "completed", "task-amount"];
  const form = "addTodo";
  const utl = new Utililies(ids, form);

  // Set up the aplication

  todos.setTodoList(ls.getLS());

  todos
    .getTodoList()
    .forEach((todo) =>
      utl.newTodoElement(todo, control.btnFunction, control.checkFunction)
    );

  utl.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (utl.form.newTask.value.length > 0) {
      let todo = utl.form.newTask.value;
      let todoObj = todos.newTodo(todo);
      utl.newTodoElement(todoObj, control.btnFunction, control.checkFunction);
      ls.setLS(todos.getTodoList());
    } else {
      alert("The todo can't be empty");
    }

    ls.setLS(todos.getTodoList());
  });

  control.filter(utl.todoItems);

  // FUnctions

  const refreshLS = () => {
    ls.setLS(todos.getTodoList());
  };
})();
