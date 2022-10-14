var computerChoice;
function getComputerChoice() {
const gameTools = ["rock","paper","scissors"];
computerChoice = gameTools[Math.floor(Math.random()*gameTools.length)];
console.log(computerChoice);
}
function playRound(playerSelection, computerSelection) {
   playerSelection = prompt("Write which one you want to play[rock, paper, scissors]:");
   computerSelection = computerChoice;
   var gameStatus = "";
   console.log(computerSelection);
   console.log(playerSelection);

if(playerSelection.toLowerCase()=="rock"){
   if (computerSelection=="paper"){
      gameStatus="lose";
      console.log(gameStatus);
   }
   else if(computerSelection=="scissors"){
      gameStatus="win";
      console.log(gameStatus);
   }
   else{
      console.log("draw");
   }
}
if(playerSelection.toLowerCase()=="paper"){
   if (computerSelection=="scissors"){
      gameStatus="lose";
      console.log(gameStatus);
   }
   else if(computerSelection=="rock"){
      gameStatus="win";
      console.log(gameStatus);
   }
   else{
      console.log("draw");
   }
}

if(playerSelection.toLowerCase()=="scissors"){
   if (computerSelection=="rock"){
      gameStatus="lose";
      console.log(gameStatus);
   }
   else if(computerSelection=="paper"){
      gameStatus="win";
      console.log(gameStatus);
   }
   else{
      console.log("draw");
   }
}

return gameStatus;
   }