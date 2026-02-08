const buttons = document.querySelector('.buttons');

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

    console.log(`Computer: ${computerChoice} | Human: ${humanChoice}`);

    switch (computerChoice) {
        case "rock":
            if (humanChoice === "paper") {
                console.log("You Win!");
                ++humanScore;
            }
            else if (humanChoice === "scissors") {
                console.log("You Lose!");
                ++computerScore;
            }
            else { console.log("Draw!"); }
            break;

        case "paper":
            if (humanChoice === "scissors") {
                console.log("You Win!");
                ++humanScore;
            }
            else if (humanChoice === "rock") {
                console.log("You Lose!");
                ++computerScore;
            }
            else { console.log("Draw!"); }
            break;


        case "scissors":
            if (humanChoice === "rock") {
                console.log("You Win!");
                ++humanScore;
            }
            else if (humanChoice === "paper") {
                console.log("You Lose!");
                ++computerScore;
            }
            else { console.log("Draw!"); }
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
