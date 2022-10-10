function getComputerChoice() {
const gameTools = ["Rock","Paper","Scissors"]
var computerChoice = gameTools[Math.floor(Math.random()*gameTools.length)];
console.log(computerChoice)
}