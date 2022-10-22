// Local Storage Helper Functions

export default class Ls {
  constructor(key) {
    this.key = key;
  }

  getLS() {
    return localStorage.getItem(this.key) == undefined ? [] : JSON.parse(localStorage.getItem(this.key));
  };

  /**
   * 
   * @param todos The object with all the todos to save in Local Storage
   */
  setLS(todos) {
    localStorage.setItem(this.key,JSON.stringify(todos));
  };
}