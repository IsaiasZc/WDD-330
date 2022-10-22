// Here we manipulate the DOM

export default class Utililies {
  constructor(ids, form, filterBtns) {
    this.elems = createElementsReference(ids);
    this.form = document.forms[form];
    this.todoItems = [];
    this.filterBtns = Array.from(document.getElementsByClassName(filterBtns));

  };


  getTodoItems() {
    return this.todoItems;
  }
  getFilterBtns() {
    return this.filterBtns;
  }

  renderTodo(todoELement, where) {
    where.appendChild(todoELement);
  }

  /**
   * Create a new Todo Element (node) that exist in the program.
   * @param {node} todoObj - todo Object.
   * @param {function} btnFunction -Function.
   * @param {function} checkFuntion -Function.
   */
  newTodoElement(todoObj, btnFunction, checkFuntion) {
    let divContainer = document.createElement("div");

    // Setup divContainer
    divContainer.className = "form-check d-flex justify-content-between py-1 align-items-center";

    divContainer.innerHTML = `
      <label class="form-check-label d-flex align-items-center gap-2">
        <input class="form-check-input check-box" type="checkbox">
        <span>${todoObj.content}</span>
      </label>
      <button class="btn btn-danger"><i class="bi bi-x"></i></button>
    `;

    // Setup check

    let check = divContainer.children[0].children[0];
    check.checked = todoObj.completed;


    // Setup delButton
    let delButton = divContainer.children[1];

    // We need to insert the element to track it and render it in DOM
    this.todoItems.push(divContainer);

    this.renderTodo(divContainer, this.elems.tasks);

    return [check, delButton, divContainer]
  }

  removeTodo(idx, element) {
    this.todoItems.splice(idx, 1);
    element.remove();
  }
}

const generateName = (str) => {
  let words = str.split("-");
  words = words.map((word, idx) =>
    idx === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  );
  return words.join("");
};

const createElementsReference = (ids) => {
  const elements = {};
  ids.forEach((id) => {
    elements[generateName(id)] = document.getElementById(id);
  });

  return elements;
};
