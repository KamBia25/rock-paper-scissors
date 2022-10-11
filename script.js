function getComputerChoice() {
const gameTools = ["rock","paper","scissors"]
var computerChoice = gameTools[Math.floor(Math.random()*gameTools.length)];
console.log(computerChoice)
}
function playRound(playerSelection, computerSelection) {
   
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));