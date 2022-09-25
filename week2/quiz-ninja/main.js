// ALL OF THIS IS COMMENTED BECAUSE CHAPTER 4 CHALLENGE
// // Chapter 2 Programming Basics

// const question = "What is Superman's real name?";
// const answer = prompt(question);
// alert(`You answered ${answer}`);


// // Chapter 3 Arrays, Logic, and Loops

// const quiz = [
//   ["What is Superman's real name?","Clark Kent"],
//   ["What is Wonder Woman's real name?","Diana Prince"],
//   ["What is Batman's real name?","Bruce Wayne"]
// ];

// let score = 0;

// for (const [question,answer] of quiz) {
//   const response = prompt(question);

//   if (response == answer) {
//     alert("Correct!");
//     score++;
//   } else {
//     alert(`Wrong! The Correct answer was ${answer}`);
//   }

// }
// // report the points
// alert(`Game over, you scored ${score} point${score != 1 ? 's' : ''}`);


// Chapter 4 Functions
const quiz = [
  ["What is Superman's real name?","Clark Kent"],
  ["What is Wonder Woman's real name?","Diana Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
  let score = 0;

  // main game loop
  for(const [question,answer] of quiz){
      const response = ask(question);
      check(response,answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question){
      return prompt(question);
  }

  function check(response,answer){
      if(response === answer){
      alert('Correct!');
      score++;
      } else {
      alert(`Wrong! The correct answer was ${answer}`);
      }
  }

  function gameOver(){
      alert(`${score > 1 ? 'You Win!' : 'Game Over'}, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}
start(quiz);