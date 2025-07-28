const newNumber = parseInt(Math.random() * 10 + 1);
const submitBtn = document.querySelector("#Submit");
const resultPa = document.querySelector("#resultPa");
const guessNumber = document.querySelector("#guessNumber");
const lowHeigh = document.querySelector("#lowHeigh");
const preGuessNumber = document.querySelector(".preGuessNumber");
const lastResult = document.querySelector(".lastResult");
const p = document.createElement("p");
let preGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const userInput = parseInt(guessNumber.value);
    console.log(userInput);
    validateBtn(userInput);
  });
}
function validateBtn(userInput) {
  if (isNaN(userInput)) {
    alert("enter a valid number");
  } else if (userInput < 1) {
    alert("enter a valid number");
  } else if (userInput > 100) {
    alert("enter a  number than 100");
  } else {
    preGuess.push(userInput);
    if (userInput >= numGuess && userInput <= 10) {
      guessDisplay(userInput);
      checkGuess(userInput);
    } else userInput === 11;
    {
      guessDisplay(userInput);
      guessDisplayMessage(`Game over ${newNumber}`);
      endGame();
    }
  }
}
function checkGuess(userInput) {
  if (userInput === newNumber) {
    guessDisplayMessage(`you gest is right number: ${newNumber}`);
    endGame();
  } else if (userInput < newNumber) {
    guessDisplayMessage(`number is too low: ${newNumber}`);
  } else if (userInput > newNumber) {
    guessDisplayMessage(`number is too high: ${newNumber}`);
  }
}
function guessDisplayMessage(userInput) {
  guessNumber.value = "";
  preGuessNumber.innerHTML += `${userInput}`;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}
function guessDisplay(userInput) {}
function endGame() {
  guessNumber.value = "";
  guessNumber.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame>Start new game</h2>`;
}
function newGame() {}
