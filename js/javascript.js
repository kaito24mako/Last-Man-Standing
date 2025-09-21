// Variables
let round = 0;
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const buttons = document.querySelector(".buttons");
const ui = setupUI();

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
};

// UI setup
function setupUI () {
    let container = document.querySelector(".result");
    let playerPosition = document.querySelector(".playerSelectionPlacehold");
    let aiPosition = document.querySelector(".computerSelectionPlacehold"); 

    let roundText = document.createElement("p");
    let playerText = document.createElement("p");
    let computerText = document.createElement("p");
    let resultText = document.createElement("p");
    let scoreText = document.createElement("p");
    let finalText = document.createElement("h3");

    container.append(roundText, playerText, computerText, resultText, scoreText, finalText);

    return {roundText, playerText, computerText, resultText, scoreText, finalText, 
            playerPosition, aiPosition};
};

// Logic of one round
function playRound(playerSelection, computerSelection) {  
    ++round;
    
    let playerImg = event.target.closest("button").querySelector("img");
    let playerImgCopy = playerImg.cloneNode(true);
    ui.playerPosition.textContent = "";
    ui.playerPosition.appendChild(playerImgCopy);

    let aiButton = document.getElementById(computerSelection);
    let aiImg = aiButton.querySelector("img");
    let aiImgCopy = aiImg.cloneNode(true);
    ui.aiPosition.textContent = ""; 
    ui.aiPosition.appendChild(aiImgCopy);

    ui.roundText.textContent = `****** Round ${round} FIGHT ******`;
    ui.playerText.textContent = `You used *${playerSelection}* `;
    ui.computerText.textContent = `Your opponent used *${computerSelection}* `;

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        ui.resultText.textContent = "You won the round!!";
        ++humanScore;  
    }
    else if (playerSelection == computerSelection) {
        ui.resultText.textContent = "It is a draw~";
        ++drawScore;
    }
    else {
        ui.resultText.textContent = "You lost the round...";
        ++computerScore;
    }

    ui.scoreText.textContent = `Your score: ${humanScore} | Opponent's score: ${computerScore} | Draw score: ${drawScore}`;
};

// Event Handler: what a click does 
function handleClick(event) {

    // calls one round 
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    // stops event 
    if (humanScore === 5 || computerScore === 5) {
        buttons.removeEventListener("click", handleClick);
        humanScore > computerScore 
        ? ui.finalText.textContent = "Congratulations! You emerge victorious!!"
        : ui.finalText.textContent = "Oh no...You have been defeated. Will you enter The Arena once more?";
    }
};

// Event Listener: calls Event Handler per click
buttons.addEventListener("click", handleClick);