function getComputerChoice() {
    let rdm = Math.floor(Math.random() * 3)
    if (rdm == 1) {
        return "Rock"
    }
    else if(rdm == 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection.toUpperCase()==playerSelection.toUpperCase()) {
        return "Tie!"
    }
    else if(computerSelection.toUpperCase()=="PAPER")
    {
        return "Computer Wins!"
    }
    else
    {
        return "Player Wins!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));