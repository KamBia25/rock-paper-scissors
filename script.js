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

if(playerSelection=="rock"){
   if (computerSelection=="paper"){
      console.log("lose")
   }
   else if(computerSelection=="scissors"){
      console.log("win")
   }
   else{
      console.log("draw")
   }
}
if(playerSelection=="paper"){
   if (computerSelection=="scissors"){
      console.log("lose")
   }
   else if(computerSelection=="rock"){
      console.log("win")
   }
   else{
      console.log("draw")
   }
}

if(playerSelection=="scissors"){
   if (computerSelection=="rock"){
      console.log("lose")
   }
   else if(computerSelection=="paper"){
      console.log("win")
   }
   else{
      console.log("draw")
   }
}


   }
  