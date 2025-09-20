// Variables
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const buttons = document.querySelector(".buttons");

// Computer generates random number 
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;   
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

// Logic for one round
function playRound(humanSelection, computerSelection) {   
    const div = document.querySelector(".message");
    const winText = document.createElement("p");
    div.appendChild(winText);

    if (humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == "paper" && computerSelection == "rock" ||
        humanSelection == "scissors" && computerSelection == "paper") {
        winText.textContent = "You won the round!";
        ++humanScore;  
    }
    else if (humanSelection == computerSelection) {
        winText.textContent = "It is a draw~";
        ++drawScore;
    }
    else {
        winText.textContent = "You lost the round..";
        ++computerScore;
    }
    console.log(humanSelection);
    console.log(computerSelection);
};

function playGame() {
    const game = document.querySelector(".game");
    const gameText = document.createElement("p");
    game.appendChild(gameText);
    gameText.textContent = "// WELCOME TO THE ARENA //\nYou will play a total of five rounds.\nChoose your move:\nRock, Paper, or Scissors?"
};

function handleClick(event) {
    let humanSelection = event.target.id;
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(`Your score: ${humanScore} | Opponent's score: ${computerScore} | Draw score: ${drawScore}`);  

    if (humanScore === 5 || computerScore === 5) {
                buttons.removeEventListener("click", handleClick);
    }
};

buttons.addEventListener("click", handleClick);
    




    if (humanScore > computerScore) {
        console.log("Congratulations!\nYou emerge victorious!!");
    }
    else if (computerScore > humanScore) {
        console.log("Oh no...You have been defeated.\nWill you enter The Arena once more?");
    }
    else {
        console.log("You are both an equal match.\nWill you enter The Arena once more?");
    }

playGame();

// logic for five rounds
/*
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
}  */


    // text for user vs opponent inputs - add later!
    /*
        console.log(`*********** Round ${round} : FIGHT ***********`);   
        console.log(`You used *${humanSelection}* `);   
        console.log(`Your opponent used *${computerSelection}* `);
    */