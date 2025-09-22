// Variables
let round = 0;
let humanScore = 100;
let computerScore = 100;
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
};

// UI setup
let infoContainer = document.querySelector(".info");
let roundText = document.createElement("p");
infoContainer.appendChild(roundText);
roundText.textContent = "Choose your attack from below...";

let playerHealth = document.querySelector("#playerHealth");
let aiHealth = document.querySelector("#aiHealth");
playerHealth.textContent = `Health: ${humanScore}%`;
aiHealth.textContent = `Health: ${humanScore}%`;

function setupUI () {
    let playerPosition = document.querySelector(".playerPosition");
    let aiPosition = document.querySelector(".aiPosition"); 
    let resetButton = document.querySelector("#reset");

    let resultText = document.createElement("p");
    let finalText = document.createElement("h2");

    infoContainer.append(resultText, finalText, resetButton);
    return {resultText, finalText, resetButton, playerPosition, aiPosition};
};

const ui = setupUI();

// Audio setup
function setupAudio () {
    const fightSound = new Audio("../audio/fight.mp3");
    const gruntSound = new Audio("../audio/grunt.mp3");
    const blockSound = new Audio("../audio/block.mp3");
    const punchSound = new Audio("../audio/punch.mp3");
    const slapSound = new Audio("../audio/slap.mp3");
    const cutSound = new Audio("../audio/cut.mp3");
    const victorySound = new Audio("../audio/victory.mp3");
    const lostSound = new Audio("../audio/lost.mp3");

    return {fightSound, gruntSound, blockSound, punchSound, slapSound, cutSound,
            victorySound, lostSound};
};

const audio = setupAudio();

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

    roundText.textContent = `****** Round ${round} FIGHT ******`;

    switch (playerSelection + computerSelection) {

        // win condition
        case "rockscissors":
            ui.resultText.textContent = "Your PUNCH smashed the enemy!";
            audio.punchSound.play();
            computerScore -= 20;
            break;
        case "paperrock":
            ui.resultText.textContent = "Your SLAP dazed the enemy!";
            audio.slapSound.play();
            computerScore -= 20;
            break;
        case "scissorspaper":
            ui.resultText.textContent = "You SLICED the enemy clean!";
            audio.cutSound.play();
            computerScore -= 20;
            break;

        // draw condition
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            ui.resultText.textContent = "Both attacks negated one another."
            audio.blockSound.play();
            break;

        // loss condition 
        default:
            ui.resultText.textContent = "The enemy attacked you..."
            audio.gruntSound.play();
            humanScore -= 20;
            break;
    }

    playerHealth.textContent = `Health: ${humanScore}%`;
    aiHealth.textContent = `Health: ${computerScore}%`;
};

// What the reset button does
 function resetGame() {
    window.location.reload();
}

// What a button click does
function buttonClick(event) {

    // calls one round 
    let playerSelection = event.target.closest("button").id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    // stops event and shows reset button
    if (humanScore === 0 || computerScore === 0) {
        buttons.removeEventListener("click", buttonClick);
        ui.resetButton.style.display = "inline-block";
        ui.resetButton.textContent = "Play Again";

        humanScore > computerScore 
        ?   (ui.finalText.textContent = "You emerge victorious, gladiator!",
            audio.victorySound.play())
        :   (ui.finalText.textContent = "You have been defeated. Will you enter The Arena once more?",
            audio.lostSound.play());
    }
};

// Event Listener: calls function per click
buttons.addEventListener("click", buttonClick);

ui.resetButton.addEventListener("click", resetGame);