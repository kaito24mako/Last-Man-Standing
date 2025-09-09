// Computer generates random number 
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;   // +1 converts to integer, *3 to have three choices
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

// User input
function getHumanChoice() {
    let userInput = prompt(`// WELCOME TO THE ARENA //\nYou will play a total of five rounds.\nChoose your move:\nRock, Paper, or Scissors?`);  // user inputs their choice inside prompt 
    userInput = userInput.toLowerCase();  // converts user input into lowercase for case-insensitivity
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

// PLayer score variables
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

// Logic for one round
function playRound(humanSelection, computerSelection) {   
    if (humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == "paper" && computerSelection == "rock" ||
        humanSelection == "scissors" && computerSelection == "paper") {
        console.log(`You won the round!!`);
        ++humanScore;   
    }
    else if (humanSelection == computerSelection) {
        console.log("It is a draw~");
        ++drawScore;
    }
    else {
        console.log(`You lost the round...`);
        ++computerScore;
    }
}

// Play 5 rounds

function playGame() {
    for(let round = 1; round <= 5; round++) {      // loop calls playRound() 5 times
           
        const humanSelection = getHumanChoice();   // functions become variables for playRound() to use as arguments
        const computerSelection = getComputerChoice();

        console.log(`*********** Round ${round} : FIGHT ***********`);   
        console.log(`You used *${humanSelection}* `);   
        console.log(`Your opponent used *${computerSelection}* `);

        playRound(humanSelection, computerSelection);  // arguments allow to compare and determine winner
       
        console.log(`Your score: ${humanScore} | Opponent's score: ${computerScore} | Draw score: ${drawScore}`);  
    } 
    if (humanScore > computerScore) {
        console.log("Congratulations!\nYou emerge victorious!!");
    }
    else if (computerScore > humanScore) {
        console.log("Oh no...You have been defeated.\nWill you enter The Arena once more?");
    }
    else {
        console.log("You are both an equal match.\nWill you enter The Arena once more?");
    }
}

playGame();

