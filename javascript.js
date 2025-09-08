// Computer generates random number and returns string choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
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

