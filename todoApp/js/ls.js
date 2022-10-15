// Local Storage Helper Functions

class Ls {
  constructor() {
    this.key = "todos";
  }

  getLS() {
    return localStorage.getItem(this.key) == undefined ? [] : JSON.parse(localStorage.getItem(this.key));
  };

  setLS(obj) {
    localStorage.setItem(this.key,JSON.stringify(obj));
  };
}


export default Ls;