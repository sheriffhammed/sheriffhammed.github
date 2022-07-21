let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Creation of Random value between 0 and 9
function generateTarget(){
  return Math.floor(Math.random() * 10);
}
 //Comparing value between User , Computer and Target 
const compareGuesses = (human,computer,target) => {
  if ( (Math.abs(computer - target)) > (Math.abs(human - target)) ){
    return true;
  }
  else return false;
}
//
const updateScore = (winner) => {
  if (winner === 'human'){
    return humanScore++;
  }
  else if (winner === 'computer'){
    return computerScore++;
  }
}
const advanceRound = () =>{
  currentRoundNumber++;
}
