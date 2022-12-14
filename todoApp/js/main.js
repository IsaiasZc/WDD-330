import ToDos from "./ToDos.js";
import Utililies from "./utilities.js";
import Ls from "./ls.js";

(function () {
  /**
   * Control all the program.
   * 
   * Controller of a MVC model.
   */
  class Control {
    /*  
      TODO
      1.- Complete the filter (All, active, completed); - DONE
      2.- task left - DONE
      3.- Refactor the control - DONE
      4.- Document all as possible - ALMOST DONE 😬
    */
    constructor() {

      this.todos = new ToDos();
      this.ls = new Ls("todos");
      this.ids = ["tasks", "all", "active", "completed", "task-amount"];
      this.filterBtnClass = "filter";
      this.form = "addTodo";
      this.utl = new Utililies(this.ids, this.form, this.filterBtnClass);
      this.filtered = "all";
    };

    /**
     * Run the program.
     */
    setup() {
      this.todos.setTodoList(this.ls.getLS());

      this.todos
        .getTodoList()
        .forEach((todo) =>
          this.newTodoTask(todo)
        );

      this.formActivate();
      this.filtersActivate();
      this.refreskTaskLeft();
      

    };

    /**
     * Run this method when the user add a new Todo from the form.
     */
    formActivate() {
      this.utl.form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        if (this.utl.form.newTask.value.length > 0) {
          let todo = this.utl.form.newTask.value;
          let todoObj = this.todos.newTodo(todo);
          this.newTodoTask(todoObj);
          this.ls.setLS(this.todos.getTodoList());
        } else {
          alert("The todo can't be empty");
        };
    
        this.ls.setLS(this.todos.getTodoList());
        this.utl.form.newTask.value = "";
      });

    }

    /**
     * Create the todo element and adding its events (check and delete buttons).
     * @param {node} todoObj todo Node.
     */
    newTodoTask(todoObj) {

      const [check, delButton, divContainer] = this.utl.newTodoElement(todoObj);

      check.addEventListener("change", () => {
        this.checkFunction(todoObj, check);
      });

      delButton.addEventListener("click", () => {
        this.deleteBtnFunction(todoObj, divContainer);
      });

      this.refreskTaskLeft();
    };

    
    filterBtnActive(btnActive, btns) {

      btns.forEach( btn => btn.classList.remove("active"));
      btnActive.classList.add("active");

      this.filtered = btnActive.id;

      this.filterTodos(btnActive.id);

    };

    /**
     * For the Click event on the delete button.
     * @param {node} todo - todo object to be deleted.
     * @param {node} elementToRemove - element to be removed in the DOM.
     */
    deleteBtnFunction(todo, elementToRemove) {
      let idx = this.todos.deleteTodo(todo);
      this.utl.removeTodo(idx, elementToRemove);
      refreshLS();
      this.refreskTaskLeft();
    };

    /**
     * For the check event.
     * @param {node} todo - todo object to be checked
     * @param {node} check - check button
     */
    checkFunction(todo, check) {
      todo.completed = check.checked;
      let divContainer = check.parentNode.parentNode;

      if (this.filtered != "all") {
        this.filterTodo(divContainer);
      };

      refreshLS();
      this.refreskTaskLeft();
    };

    refreskTaskLeft() {
      this.utl.elems.taskAmount.textContent = this.todos.remainingTask();
    }

    /**
     * Created to filter the todo nodes in the view.
     * @param {Array} list - array of Todo nodes.
     * @param {boolean} completed - all: every todo, true: completed todos, false: uncompleted todos.
     */
    filterTodos(completed) {

      let status = completed === "completed" ? true : false;
      
      let newList = this.utl.getTodoItems().filter((element) => {
        element.classList.remove("hidden");
        return (
          element.children[0].children[0].checked !=
          (completed === "all"
            ? element.children[0].children[0].checked
            : status)
        );
      });

      newList.forEach((element) => element.classList.add("hidden"));
    };

    filterTodo(todo) {
      todo.classList.toggle("hidden");
    };

    filtersActivate() {
      this.utl.getFilterBtns().forEach( (btn, idx, list) => {
        btn.addEventListener("click", () => this.filterBtnActive(btn, list))
      })
    }
  };
  // END OF THE CLASS


  /*--------- RUN THE PROGRAM --------------*/

  let ctrl = new Control();
  ctrl.setup();

  // Functions

  /**
   * Refreshing local storage;
   */
  const refreshLS = () => {
    ctrl.ls.setLS(ctrl.todos.getTodoList());
  };

})();
