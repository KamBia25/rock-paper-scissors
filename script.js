function getComputerChoice() {
const gameTools = ["rock","paper","scissors"];
var computerChoice = gameTools[Math.floor(Math.random()*gameTools.length)];
console.log(computerChoice);
}
function playRound(playerSelection, computerSelection) {
   let playerChoice = prompt("Write which one you want to play[rock, paper, scissors]:");
   computerSelection = computerChoice;
   if (computerSelection.toLowerCase() == playerSelection.toLowerCase() )
        console.log("Draw, your choice was the same as the AI's")
    
  }