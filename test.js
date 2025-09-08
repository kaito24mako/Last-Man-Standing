// Computer generates random number and returns string choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
            return "Rock";
        }
        else if (randomNumber === 2) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }

// Prompt, obtain and return the user's input 
function getHumanChoice() {
    let userInput = prompt("Which do you choose: Rock, Paper, or Scissors?");
    userInput = userInput.toLowerCase();  
        if (userInput === "rock") {
            return "Rock";
        }
        else if (userInput === "paper") {
            return "Paper";
        }
        else if (userInput === "scissors") {
            return "Scissors";
        }
        else (alert("You did not enter a valid choice. Please refresh the page and type your choice again."))
    }

// Declare the computer and user's score variables
let humanScore = 0;
let computerScore = 0;

// The logic for one round, including scores
function playRound(humanSelection, computerSelection) {
    if (humanSelection == "Rock" && computerSelection == "Paper") {
        console.log("You have lost. Paper beats Rock.");
        console.log("Computer's Score:" + " " + ++computerScore);
    }
    else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You have won! Rock beats Scissors.");
        console.log("User's Score:" + " " + ++humanScore);
    }
    else if (humanSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You have lost. Scissors beats Paper.");
        console.log("Computer's Score:" + " " + ++computerScore);
    }
    else if (humanSelection == "Paper" && computerSelection == "Rock") {
        console.log("You have won! Paper beats Rock.");
        console.log("User's Score:" + " " + ++humanScore);
    }
    else if (humanSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You have lost. Scissors beats Rock.");
        console.log("Computer's Score:" + " " + ++computerScore);
    }
    else if (humanSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You have won! Scissors beats Paper.");
        console.log("User's Score:" + " " + ++humanScore);
    }
    else {
        console.log("It is a draw!");
    }
}

// Calls playRound to play 5 rounds, keeps track of scores, and declares winner

function playGame() {
    for(let round = 1; round <= 5; round++) {   // loop makes playRound() repeat for up to 5 rounds
        const humanSelection = getHumanChoice();   // humanSelection is the value of getHumanChoice()
        const computerSelection = getComputerChoice();   //computerSelection is the value of getHumanChoice()
        playRound(humanSelection, computerSelection);  // the two arguments from above allow playRound() to compare and determine the winner for the round
    }
}

playGame();