let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, generateTarget) => {
  if (userGuess === computerGuess) {
    return true;
  }
  let differenceComp = Math.abs(generateTarget - computerGuess);
  let differenceUser = Math.abs(generateTarget - userGuess);
  if (differenceComp > differenceUser) {
    return true;
  } else {
    return false;
  }
}

const updateScore = value => {
 if (value === 'human') {
   humanScore++;
 } else if (value === 'computer') {
   computerScore++;
 }
};

const advanceRound = () => currentRoundNumber++;

