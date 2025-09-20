const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! ${ROCK} choice selected by default.`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice) =>
  computerChoice === playerChoice
    ? RESULT_DRAW
    : (computerChoice === ROCK && playerChoice === PAPER) ||
      (computerChoice === PAPER && playerChoice === SCISSORS) ||
      (computerChoice === SCISSORS && playerChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (computerChoice === playerChoice) {
//   return RESULT_DRAW;
// } else if (
//   (computerChoice === ROCK && playerChoice === PAPER) ||
//   (computerChoice === PAPER && playerChoice === SCISSORS) ||
//   (computerChoice === SCISSORS && playerChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }
// };

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Starting game...", "Fetching user configuration");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner = getWinner(computerChoice, playerSelection);
  console.log("Computer choice:", computerChoice);
  console.log("Player choice:", playerSelection);
  console.log("Winner:", winner);
});


6 11