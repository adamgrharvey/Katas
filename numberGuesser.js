let guessed = false; // use to lopp until the solution is found
let randomNum = Math.floor(Math.random() * 100) + 1; // random from 1 - 100
let guesses = []; // track unique numbers guessed

while (!guessed) {
  let prompt = require("prompt-sync")();
  let answer = prompt("Guess a number: ");
  if (!guesses.includes(answer)) { //if the input hasnt been guessed yet, add it to the list
    guesses.push(answer);
  }

  if (answer < 1 || answer > 100) {
    console.log("Guess a Number between 1 and 100!");
  } else if (isNaN(answer)) {
    console.log("Guess a NUMBER between 1 and 100!");
  } else if (answer < randomNum) {
    console.log("Too Low!");
  } else if (answer > randomNum) {
    console.log("Too High!");
  } else if (Number(answer) === randomNum) {
    guessed = true;
    console.log("You got it! You took " + guesses.length + " attempts!");
  }
}