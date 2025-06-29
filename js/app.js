/*-------------------------------- Constants --------------------------------*/
const choice=["rock","paper","scissors"]


/*-------------------------------- Variables --------------------------------*/
let msg
let playerChoice
let computerChoice


/*------------------------ Cached Element References ------------------------*/
const rockButton= document.querySelector("#Rock")
const PaperButton=document.querySelector("#Paper");
const ScissorsButton=document.querySelector("#Scissors")

// console.log(rockButton,PaperButton);




/*-------------------------------- Functions --------------------------------*/
function getComputerChoice(){
  //generate a random number 0-2
  // select the item from the array
  const randomIndex= Math.floor(Math.random()*choice.length)
  console.log("randomIndex",randomIndex)
  return choice[randomIndex]
}

function play(){
computerChoice=getComputerChoice()
 console.log("computerChoice",computerChoice)
  render()
}

function render(){

}


/*----------------------------- Event Listeners -----------------------------*/