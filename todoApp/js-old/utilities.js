// Here we manipulate the DOM

class Utililies {
  constructor(ids, form, filterBtns) {
    this.ids = ids;
    this.elems = {};
    this.form = document.forms[form];
    this.todoItems = [];
    this.filterBtns = document.getElementsByClassName(filterBtns);

    // Run the evet listener of the form
    // this._formEvent();
  };

  setFilterEvent(filterFunction) {
    console.log(this.filterBtns);
    this.filterBtns.forEach( btn => {
      btn.addEventListener("click", filterFunction);
    })

  };

  createElementsReference(){ 
    this.ids.forEach(id => {
      this.elems[this._generateName(id)] = document.getElementById(id);
    });

  };

  _generateName(str) {
    let words = str.split('-');
    words = words.map((word, idx) => idx == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));
    return words.join('');  
  };

  renderTodo(todoELement, where) {
    where.appendChild(todoELement);
  };

  // createTodos(todoList) {
  //   todoList.forEach(todo => this.newTodoElement(todo));
  // };

  newTodoElement(todo, todoList, ls) {
    let divContainer = document.createElement('div');
    let check = document.createElement('input');
    let label = document.createElement('label');
    let delButton = document.createElement('button');

    // Setup divContainer
    divContainer.className = 'form-check d-flex justify-content-between py-1 align-items-center';

    // Setup check
    check.className = 'form-check-input check-box';
    check.type = 'checkbox';
    check.addEventListener('change',() => {

      todo.completed = check.checked;

      ls.setLS(todoList);
    })

    if(todo.completed) {
      check.checked = true;
      check.classList.add('checked');
    }

    // Setup Label
    const labelClasses = 'form-check-label d-flex align-items-center gap-2';
    label.className = labelClasses;
    label.innerHTML = `<span>${todo.content}</span>`;

    // Setup delButton
    delButton.innerHTML = '<i class="bi bi-x"></i>';
    delButton.className = 'btn btn-danger';

    delButton.addEventListener('click', () => {
      let idx = todoList.indexOf(todo);

      todoList.splice(idx, 1);
      this.todoItems.splice(idx, 1);

      divContainer.remove();

      ls.setLS(todoList);
      console.log(this.todoItems);
    })


    // Insert inside divContainer
    label.insertAdjacentElement('afterbegin', check);

    divContainer.appendChild(label);
    divContainer.appendChild(delButton);

    // We need to insert the element to track it and render it in DOM
    this.todoItems.push(divContainer);

    this.renderTodo(divContainer, this.elems.tasks);



  };
  
  setUp(ls, todo, utl) {

    this.createElementsReference();

    todo.setTodoList(ls.getLS(), utl, ls);

    // this.createTodos(todo.getTodoList());
  };


}

export default Utililies;