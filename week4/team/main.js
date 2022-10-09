const director = {
  players: [
    { name: "Player 1", symbol: "X" },
    { name: "Player 2", symbol: "O" },
  ],
  NAME: 'name',
  SYMBOL: 'symbol',

  isWinner(squares) {
    
    let moves = [...squares].map( square => square.textContent);
    return this.compareThree(moves[0], moves[1], moves[2]) ||
    this.compareThree(moves[3], moves[4], moves[5]) ||
    this.compareThree(moves[6], moves[7], moves[8]) ||
    this.compareThree(moves[0], moves[3], moves[6]) ||
    this.compareThree(moves[1], moves[4], moves[7]) ||
    this.compareThree(moves[2], moves[5], moves[8]) ||
    this.compareThree(moves[0], moves[4], moves[8]) ||
    this.compareThree(moves[2], moves[4], moves[6]) 
  },

  compareThree(a, b, c) {
    return a == b && b == c && [a, b, c].every( value => value != "");
  }
};

const view = {
  board: document.getElementById("board"),
  playerTurn: document.getElementById("player-turn"),
  reset: document.getElementById("reset"),
  squares: document.querySelectorAll('.col'),
}

const game = {
  start() {
    this.turn = 0;
    view.playerTurn.textContent = director.players[this.turn][director.NAME];
  },

  movement(event) {

    let player = director.players[this.turn];
    event.target.textContent = player[director.SYMBOL];

    if(director.isWinner(view.squares)) {
      this.endGame(player);
    }
    
    this.changeTurn();
  },
  
  changeTurn() {
    this.turn = this.turn % 2 == 0 ? 1 : 0;
    let player = director.players[this.turn];
    view.playerTurn.textContent = player[director.NAME];
  },

  resetGame() {
    view.squares.forEach(element => element.textContent = "");
    this.start();
  },

  endGame(player) {
    alert(`${player.name} is the Winner!`);
  }

};

game.start();
view.board.addEventListener("touchend", (event) => game.movement(event), false)
view.reset.addEventListener("touchend", (event) => game.resetGame(event), false)