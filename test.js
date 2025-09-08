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
getComputerChoice();

// Prompt, obtain and return the user's input 
function getHumanChoice() {
    let userInput = prompt("Which do you choose: Rock, Paper, or Scissors?");
        if (userInput === "Rock") {
            return "Rock";
        }
        else if (userInput === "Paper") {
            return "Paper";
        }
        else if (userInput === "Scissors") {
            return "Scissors";
        }
        else (alert("You did not enter a valid choice. Please refresh the page and type your choice again."))
    }
getHumanChoice();

// Declare the computer and user's score variables
let humanScore = 0;
let computerScore = 0;

// Create the logic for a round
function playRound() {
    if (humanSelection == "Rock" && computerSelection == "Paper") {
        console.log("You have lost. Paper beats Rock.");
    }
    else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You have won! Rock beats Scissors.");
    }
    else if (humanSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You have lost. Scissors beats Paper.");
    }
    else if (humanSelection == "Paper" && computerSelection == "Rock") {
        console.log("You have won! Paper beats Rock.");
    }
    else if (humanSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You have lost. Scissors beats Rock.");
    }
    else if (humanSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You have won! Scissors beats Paper.");
    }
    else {
        console.log("It is a draw!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/* parameters??    humanChoice, computerChoice   */