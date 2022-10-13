var computerChoice
function getComputerChoice() {
const gameTools = ["rock","paper","scissors"];
computerChoice = gameTools[Math.floor(Math.random()*gameTools.length)];
console.log(computerChoice);
}
function playRound(playerSelection, computerSelection) {
   playerSelection = prompt("Write which one you want to play[rock, paper, scissors]:");
   computerSelection = computerChoice;
   console.log(computerSelection)
   console.log(playerSelection)
   if (playerSelection == computerSelection){
      console.log("draw")
   }
   if (playerSelection =! computerSelection)
   {
      if(playerSelection.toLowerCase() == "rock"|| computerSelection == "paper"){
         console.log("defeat")
      }
      if(playerSelection.toLowerCase() == "rock"|| computerSelection == "scissors"){
         console.log("victory")
      }
      if(playerSelection.toLowerCase() == "paper"|| computerSelection == "scissors"){
         console.log("defeat")
      }
      if(playerSelection.toLowerCase() == "paper"|| computerSelection == "rock"){
         console.log("victory")
      }
      if(playerSelection.toLowerCase() == "scissors"|| computerSelection == "rock"){
         console.log("defeat")
      }
      if(playerSelection.toLowerCase() == "scissors"|| computerSelection == "paper"){
         console.log("victory")
      }
   }
  }