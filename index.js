// create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// create variables to store references to the necessary dom nodes
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

function changeButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}
// hook up a click event listener to the rollBtn and log out a random number between 1 and 6
rollBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = `Player 2 Turn`;
  } else {
    player2Dice.textContent = randomNumber;
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = `Player 1 Turn`;
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
    player1Dice.classList.add("wiggle");
    changeButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    player2Dice.classList.add("active");
    player1Dice.classList.remove("active");
    player2Dice.classList.add("wiggle");
    changeButton();
  }

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", reset);

function reset() {
  player1Dice.classList.add("active");
  player2Dice.classList.remove("active");
  player1Dice.classList.remove("wiggle");
  player2Dice.classList.remove("wiggle");
  player1Turn = true;
  player1Score = 0;
  player2Score = 0;
  message.textContent = "Player 1 Turn";
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "inline-block";
}
