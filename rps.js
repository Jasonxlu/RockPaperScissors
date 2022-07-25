function getComputerChoice() {
    let rdm = Math.floor(Math.random() * 3)
    if (rdm == 1) {
        return "ROCK";
    }
    else if(rdm == 2) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() == "ROCK") {
        if(computerSelection == "ROCK") {
            return "Tie!";
        }
        else if (computerSelection == "PAPER") {
            return "Computer Wins!";
        }
        else {
            return "Player Wins!";
        }
    }
    else if(playerSelection.toUpperCase() == "PAPER") {
        if(computerSelection == "ROCK") {
            return "Player Wins!";
        }
        else if (computerSelection == "PAPER") {
            return "Tie!";
        }
        else {
            return "Computer Wins!";
        }
    }
    else if(playerSelection.toUpperCase() == "SCISSORS") {
        if(computerSelection == "ROCK") {
            return "Computer Wins!";
        }
        else if (computerSelection == "PAPER") {
            return "Player Wins!";
        }
        else {
            return "Tie!";
        }
    }
    else {
        alert("Try Again")
    }
}

function game() {
    for(let i = 0; i<5; i++)
    {
        const playerSelection = prompt("Rock Paper of Scissors?");
        const computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()