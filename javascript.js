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

console.log(`Your score: ${humanScore} | Opponent's score: ${computerScore} | Draw score: ${drawScore}`);  

// Logic for one round
function playRound(playerSelection, computerSelection) {  

    // texts of player and computer selections + result
    let container = document.querySelector(".result");

    let playerText = document.createElement("p");
    container.appendChild(playerText);

    let computerText = document.createElement("p");
    container.appendChild(computerText);

    let resultText = document.createElement("p");
    container.appendChild(resultText);

    playerText.textContent = `You used *${playerSelection}* `;
    computerText.textContent = `Your opponent used *${computerSelection}* `;

    // win / lose / draw conditions
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        resultText.textContent = "You won the round!";
        ++humanScore;  
    }
    else if (playerSelection == computerSelection) {
        resultText.textContent = "It is a draw~";
        ++drawScore;
    }
    else {
        resultText.textContent = "You lost the round..";
        ++computerScore;
    }
};


function handleClick(event) {
    // calls one round 
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    // stops event 
    if (humanScore === 5 || computerScore === 5) {
        buttons.removeEventListener("click", handleClick);
    }
};

// calls one round per button click
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