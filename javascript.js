// Computer generates random number and returns string choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;   // Math.floor() rounds to nearest whole, and Math.random() generates number between 0-1, so +1 to convert to integer and *3 to have three choices
        if (randomNumber === 1) {
            return "rock";
        }
        else if (randomNumber === 2) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

// Prompt, obtain and return the user's input 
function getHumanChoice() {
    let userInput = prompt(`// WELCOME TO THE ARENA //\nYou will play a total of five rounds.\nChoose your move:\nRock, Paper, or Scissors?`);  // user inputs their choice inside prompt 
    userInput = userInput.toLowerCase();  // converts any input of the choices into lowercase for case-insensitivity
        if (userInput === "rock") {
            return "rock";
        }
        else if (userInput === "paper") {
            return "paper";
        }
        else if (userInput === "scissors") {
            return "scissors";
        }
        else (alert("You did not enter a valid choice. Please refresh the page and type your choice again."))
    }

// Declare the user and computer's score variables
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

// The logic for one round, including scores
function playRound(humanSelection, computerSelection) {    // parameters are later declared as values outputted from the functions getHumanChoice() and getComputerChoice()
    const condition = (humanSelection == "rock" && computerSelection == "scissors") ||
                      (humanSelection == "paper" && computerSelection == "rock") ||
                      (humanSelection == "scissors" && computerSelection == "paper") ? 1 : (humanSelection == computerSelection) ? 2 : 0;
                        // ^ conditional (ternary) operator that assigns truthy and falsy values to a condition, allowing if..else to be concise
    if (condition == 1) {
        console.log(`You won the round!!`);
        ++humanScore;   // increments the players' scores
    }
    else if (condition == 0) {
        console.log(`You lost the round...`);
        ++computerScore;
    }
    else if (condition == 2) {
        console.log("It is a draw~");
        ++drawScore;
    }
}

// Calls playRound to play 5 rounds, keeps track of scores, and declares winner

function playGame() {
    for(let round = 1; round <= 5; round++) {   // loop calls playRound() 5 times
        const humanSelection = getHumanChoice();   // Declare getHumanChoice() and getComputerChoice() functions as variables to be used as arguments for playRound()
        const computerSelection = getComputerChoice();

        console.log(`*********** Round ${round} : FIGHT ***********`);   // appealing text for every loop 
        console.log(`You used *${humanSelection}* `);   
        console.log(`Your opponent used *${computerSelection}* `);

        playRound(humanSelection, computerSelection);  // the two arguments allow playRound() to compare and determine the winner for the round
       
        console.log(`Your score: ${humanScore} | Opponent's score: ${computerScore} | Draw score: ${drawScore}`);  // outputs the scores every loop
    } 
    // Declares the winner out of 5 rounds 
    if (round = 5 && humanScore > computerScore) {
        console.log("Congratulations!\nYou emerge victorious!!");
    }
    else if (round = 5 && computerScore > humanScore) {
        console.log("Oh no...You have been defeated.\nWill you enter The Arena once more?");
    }
    else {
        console.log("You are both an equal match.\nWill you enter The Arena once more?");
    }
}

playGame();

