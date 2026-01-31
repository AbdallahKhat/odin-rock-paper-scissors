
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

function getHumanChoice() {

    while (true) {
        choice = prompt("Choose: r = rock, p = paper, s = scissors");

        //turn answer to lower case to remove case sensitivity
        choice = choice.toLowerCase();

        switch (choice) {
            case "r":
            case "rock":
                return "rock";

            case "p":
            case "paper":
                return "paper";

            case "s":
            case "scissors":
                return "scissors";

            default:
                alert(`'${choice}': No such option. Try again!`);
        }
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

// playGame function calls PlayRound() 5 times and logs winner at the end
function playGame() {

    console.log("You will play 5 rounds of Rock paper scissors!");

    const showGameScore = () => console.log(`Score: Computer: ${computerScore} | Human: ${humanScore}`);

    for (let i = 1; i <= 5; ++i) {
        console.log(`Round ${i}:`);
        playRound(getComputerChoice(), getHumanChoice());
        showGameScore();
    }

    console.log("Final score:");
    showGameScore();

    if (humanScore > computerScore) {
        console.log("Game over: Human wins!");
    }
    else if (humanScore < computerScore) {
        console.log("Game over: Computer Wins!");
    }
    else {
        console.log("Game over: Draw!");
    }
}

playGame()
