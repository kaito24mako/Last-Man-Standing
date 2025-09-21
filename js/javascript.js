// Variables
let round = 0;
let humanScore = 100;
let computerScore = 100;
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
    let playerPosition = document.querySelector(".playerPosition");
    let aiPosition = document.querySelector(".aiPosition"); 
    let playerHealth = document.querySelector("#playerHealth");
    let aiHealth = document.querySelector("#aiHealth");

    let roundText = document.createElement("p");
    let playerText = document.createElement("p");
    let computerText = document.createElement("p");
    let resultText = document.createElement("p");
    let scoreText = document.createElement("p");
    let finalText = document.createElement("h3");
    let playerHealthText = document.createElement("p");
    let aiHealthText = document.createElement("p");

    container.append(roundText, playerText, computerText, resultText, scoreText, finalText);

    playerHealth.append(playerHealthText);

    aiHealth.append(aiHealthText);

    return {roundText, playerText, computerText, resultText, scoreText, finalText, 
            playerPosition, aiPosition, 
            playerHealthText, aiHealthText};
};

// Logic of one round
function playRound(playerSelection, computerSelection) {  
    ++round;
    
    // selects the <button> with the same id as playerSelection, 
    // then copies only the <img> inside that button
    let playerImage = document.getElementById(playerSelection).querySelector("img");
    let playerImageCopy = playerImage.cloneNode(true);
    ui.playerPosition.textContent = "";
    ui.playerPosition.appendChild(playerImageCopy);

    let aiImage = document.getElementById(computerSelection).querySelector("img");
    let aiImageCopy = aiImage.cloneNode(true);
    ui.aiPosition.textContent = ""; 
    ui.aiPosition.appendChild(aiImageCopy);

    ui.roundText.textContent = `****** Round ${round} FIGHT ******`;
    ui.playerText.textContent = `You used *${playerSelection}* `;
    ui.computerText.textContent = `Your opponent used *${computerSelection}* `;

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        ui.resultText.textContent = "You won the round!!";
        computerScore -= 20;
    }
    else if (playerSelection == computerSelection) {
        ui.resultText.textContent = "It is a draw.";
        ++drawScore;
    }
    else {
        ui.resultText.textContent = "You lost the round...";
        humanScore -= 20;
    }

    ui.scoreText.textContent = `Your score: ${humanScore} | Opponent's score: ${computerScore} | Draw score: ${drawScore}`;

    ui.playerHealthText.textContent = `Health: ${humanScore}%`;

    ui.aiHealthText.textContent = `Health: ${computerScore}%`;

};

// Event Handler: what a click does 
function handleClick(event) {

    // calls one round 
    let playerSelection = event.target.closest("button").id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    // stops event 
    if (humanScore === 0 || computerScore === 0) {
        buttons.removeEventListener("click", handleClick);
        humanScore > computerScore 
        ? ui.finalText.textContent = "Congratulations! You emerge victorious!!"
        : ui.finalText.textContent = "Oh no...You have been defeated. Will you enter The Arena once more?";
    }
};

// Event Listener: calls Event Handler per click
buttons.addEventListener("click", handleClick);