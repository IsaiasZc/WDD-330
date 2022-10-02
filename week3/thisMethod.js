
// Calculator Exercise
const calculator = {

  read() {
    this.a = parseInt(prompt('Value 1'));
    this.b = parseInt(prompt('Value 2'));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(`Hola ${calculator.a}`);
alert( calculator.sum() );
alert( calculator.mul() );


// Chaning

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // muestra el peldaño actual
    alert( this.step );
    return this
  }
};


// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0