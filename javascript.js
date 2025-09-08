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
            return 1;
        }
        else if (userInput === "Paper") {
            return 2;
        }
        else if (userInput === "Scissors") {
            return 3;
        }
        else (alert("You did not enter a valid choice. Please refresh the page and type your choice again."))
    }
getHumanChoice();
