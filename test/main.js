const game = document.getElementById("game");
const turno = document.getElementById("turn");

const playGame = (game) => {

  // Dibujamos los botones en pantalla
  drawbuttons(game, 9);

  const puntaje = [];
  const buttons = document.querySelectorAll('.btn');

  // Añade el escuchador de eventos
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      clickBtn(btn, turno, puntaje);
    })
  })

};


const drawbuttons = (tablero, amount) => {

  for (let i = 0; i < amount; i++) {

    tablero.innerHTML += `<button class="btn" value="${i}">${i + 1}</button>`
    
  }

}

const cambioTurno = (current) => {
  return current == 'X' ? 'O' : 'X';
};


const clickBtn = (btn, turno, puntaje) => {

  if (btn.textContent == "X" || btn.textContent == "O") {
    return 
  }

  // Registro la jugada del usuario
  btn.textContent = turno.textContent;
  turno.textContent = cambioTurno(turno.textContent);

  // Guardo la jugada en los puntajes
  puntaje[parseInt(btn.value)] = btn.textContent;

  // console.log(puntaje)

  // Verifico si hay ganador
  if(isWinner(puntaje)) {
    alert(`player ${btn.textContent} es el ganador!`)
  }
}

const isWinner = (puntaje) => {
  // console.log(puntaje[0] == puntaje[3] == puntaje[6]);
  // let result = puntaje[0] == puntaje[3] == puntaje[6];

  // console.log(result);
  return (compareTree(puntaje[0], puntaje[1], puntaje[2]) ||
  compareTree(puntaje[3], puntaje[4], puntaje[5]) ||
  compareTree(puntaje[6], puntaje[7], puntaje[8]) ||
  compareTree(puntaje[0], puntaje[3], puntaje[6]) ||
  compareTree(puntaje[1], puntaje[4], puntaje[7]) ||
  compareTree(puntaje[2], puntaje[5], puntaje[8]) ||
  compareTree(puntaje[0], puntaje[4], puntaje[8]) ||
  compareTree(puntaje[2], puntaje[4] ,puntaje[6]))
};

const compareTree = (one, two, tree) => {
  return one == two && two == tree && [one, two, tree].every(value => value != undefined)
}

playGame(game);
