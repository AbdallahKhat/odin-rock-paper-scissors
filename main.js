const buttons = document.querySelector('.buttons');
const choices = document.querySelector('.choices')
const result = document.querySelector('.result');

// Score for the human and computer number of wins throught the game
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    // return a random number from 1 to 3
    choice = (Math.floor(Math.random() * 10) % 3) + 1;

    switch (choice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playRound(computerChoice, humanChoice) {

    choices.textContent = `Computer: ${computerChoice} | Human: ${humanChoice}`;

    switch (computerChoice) {
        case "rock":
            if (humanChoice === "paper") {
                result.textContent = "You Win!";
                ++humanScore;
            }
            else if (humanChoice === "scissors") {
                result.textContent = "You Lose!";
                ++computerScore;
            }
            else { result.textContent = "Draw!"; }
            break;

        case "paper":
            if (humanChoice === "scissors") {
                result.textContent = "You Win!";
                ++humanScore;
            }
            else if (humanChoice === "rock") {
                result.textContent = "You Lose!";
                ++computerScore;
            }
            else { result.textContent = "Draw!"; }
            break;


        case "scissors":
            if (humanChoice === "rock") {
                result.textContent = "You Win!";
                ++humanScore;
            }
            else if (humanChoice === "paper") {
                result.textContent = "You Lose!";
                ++computerScore;
            }
            else { result.textContent = "Draw!"; }
            break;

    }
}

buttons.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('rock')) {
        playRound(getComputerChoice(), 'rock');
    }
    else if (target.classList.contains('paper')) {
        playRound(getComputerChoice(), 'paper');
    }
    else if (target.classList.contains('scissors')) {
        playRound(getComputerChoice(), 'scissors');
    }
})
