// Computer generates random number and returns string choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;   // Math.floor() rounds to nearest whole, and Math.random() generates number between 0-1, so +1 to convert to integer and *3 to have three choices
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
    let userInput = prompt("Which do you choose: Rock, Paper, or Scissors?");  // user inputs their choice inside prompt 
    userInput = userInput.toLowerCase();  // converts any input of the choices into lowercase for case-insensitivity
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

// Declare the user and computer's score variables
let humanScore = 0;
let computerScore = 0;

// The logic for one round, including scores
function playRound(humanSelection, computerSelection) {    // parameters are later declared as values outputted from the functions getHumanChoice() and getComputerChoice()
    if (humanSelection == "Rock" && computerSelection == "Paper") {
        console.log("You have lost. Paper beats Rock.");
        console.log("Computer's Score:" + " " + ++computerScore);   // increments and outputs the players' scores
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
    for(let round = 1; round <= 5; round++) {   // loop calls playRound() 5 times
        const humanSelection = getHumanChoice();   // Declare getHumanChoice() and getComputerChoice() functions as variables to be used as arguments for playRound()
        const computerSelection = getComputerChoice();
          
        playRound(humanSelection, computerSelection);  // the two arguments allow playRound() to compare and determine the winner for the round
    } 
    // Declares the winner out of 5 rounds 
    if (round = 5 && humanScore > computerScore) {
        console.log("Congratulations! You are the winner out of five rounds!");
    }
    else if (round = 5 && computerScore > humanScore) {
        console.log("Oh no...You have lost out of five rounds. Try again by refreshing the page!");
    }
    else {
        console.log("You are both an equal match out of five rounds. Try again by refreshing the page!");
    }
}

playGame();

