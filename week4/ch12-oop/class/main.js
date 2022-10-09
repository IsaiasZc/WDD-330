class Dice {
  constructor(sides=6) {
      this.sides = sides;
  };

  roll() {
      return Math.floor(this.sides * Math.random() + 1)
  };

  static description() {
    return 'A way of choosing random numbers'
  };
}


let redDice = new Dice(20);

console.log(redDice)

// Here we are calling its constructor : Dice
let blueDice = new redDice.constructor(10);

blueDice


// let's create

class Turtle {
  constructor(name) {
      this.name = name;
      this.weapon = 'hands';
  }
  sayHi() {
      return `Hi dude, my name is ${this.name}`;
  }
  attack(){
      return `Feel the power of my ${this.weapon}!`;
  }
}

const leo = new Turtle('Leonardo');

const raph = new Turtle('Raphael');
const don = new Turtle('Donatelo');

Turtle.prototype.weapon = "Saludo";

console.log(leo.attack());
console.log(raph.attack());
console.log(don.attack());