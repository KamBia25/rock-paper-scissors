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
function game(){
   var gameStatus  = "";
   let playerStatus = 0; 
   let computerStatus = 0;
   for (let computerStatus=0; playerStatus<=3 || computerStatus<=3;){
      getComputerChoice();
      playRound();
      if(gameStatus =="win"){
      playerStatus+=1;
      }
      else if (gameStatus =="lose"){
      computerStatus+=1;
      }
      else
      continue;   
   }
   if (playerStatus > computerStatus){
   console.log("Player wins best of 5")
   }
   else{
      console.log("Computer wins best of 5")
   }
}