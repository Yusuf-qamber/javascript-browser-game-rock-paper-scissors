/*-------------------------------- Constants --------------------------------*/
const choice=["rock","paper","scissors"]


/*-------------------------------- Variables --------------------------------*/
let msg
let playerChoice
let computerChoice


/*------------------------ Cached Element References ------------------------*/
const rockButton= document.querySelector("#rock")
const PaperButton=document.querySelector("#paper");
const ScissorsButton=document.querySelector("#scissors")

const resultDisplay=document.querySelector("#result-display")
const resetButton=document.querySelector(".game-button")

// console.log(rockButton,PaperButton);




/*-------------------------------- Functions --------------------------------*/
function getComputerChoice(){
  //generate a random number 0-2
  // select the item from the array
  const randomIndex= Math.floor(Math.random()*choice.length)
  // console.log("randomIndex",randomIndex)
  return choice[randomIndex]
}

function play(event){
computerChoice=getComputerChoice()

 playerChoice = event.target.id
//  console.log(playerChoice)
 compare()
 render()
}



function compare(){
if(playerChoice==="rock"&&computerChoice==="scissors")
  msg="you wins!"

else if(playerChoice==="paper"&&computerChoice==="rock")
    msg="you wins!"
else if(playerChoice==="scissors"&&computerChoice==="paper")
    msg="you wins!"
else if(playerChoice===computerChoice)
    msg=" Tie!"
  else 
  msg="you lose!"


}

//update UI 
function render(){
  
resultDisplay.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}. ${msg}`

}

function resetGmae(){
  resultDisplay.textContent=""
  computerChoice=null
}

/*----------------------------- Event Listeners -----------------------------*/
rockButton.addEventListener("click",play)
PaperButton.addEventListener("click",play)
ScissorsButton.addEventListener("click",play)
resetButton.addEventListener("click",resetGmae)