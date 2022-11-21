var computerChoice;
var gameStatus;
function getComputerChoice() {
const gameTools = ["rock","paper","scissors"];
computerChoice = gameTools[Math.floor(Math.random()*gameTools.length)];
console.log(computerChoice);
}
function playRound(playerSelection, computerSelection) {
   getComputerChoice();
   computerSelection = computerChoice;
   

if(playerSelection=="rock"){
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
if(playerSelection=="paper"){
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

if(playerSelection=="scissors"){
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
      gameStatus="draw"
   }
}
return gameStatus;
   }
 function game(){
   let playerStatus = 0; 
   let computerStatus = 0;

   for (let i=0; i<=5;){
      
      getComputerChoice();
      let gameOutput = playRound();
      if(gameOutput == "win"){
      playerStatus+=1;
      if (playerStatus==3){
         break;
      }
      }
      else if (gameOutput == "lose"){
      computerStatus+=1;
      if (computerStatus==3){
         break;
      }
      }
      else{
      continue;
      }   
   }
   if (playerStatus > computerStatus){
   console.log("Player wins best of 5")
   winner = "player";
   }
   else{
      console.log("Computer wins best of 5")
      winner = "computer";
   }
} 