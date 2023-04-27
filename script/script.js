let player
let computer

function game(playerSelection, computerSelection) {
    let computer = ['Rock', 'Paper', 'Scissors']
    let playerScore = 0
    let computerScore = 0
    let round = 5
    for (let i = 0; i <= round; i++) {
        let playerSelection = prompt('Please enter your choise')
        let computerSelection = computer[Math.floor(Math.random() * computer.length)];
        if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
            console.log(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
            playerScore++
        }
        else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
            console.log(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
            playerScore++
        }
        else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
            console.log(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
            playerScore++
        }
        else if (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'scissors') {
            console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
            computerScore++
        }
        else if (computerSelection.toLowerCase() == 'scissors' && playerSelection.toLowerCase() == 'paper') {
            console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
            computerScore++
        }
        else if (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'rock') {
            console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
            computerScore++
        }
        else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            console.log(`OOPS! ${playerSelection.toUpperCase()} is eqaul to ${computerSelection.toUpperCase()}`);
            i = (playerScore + computerScore)
        }
        else {
            console.log(`Something went wrong! Try again`);
            i = (playerScore + computerScore)
        }
    }
    if (playerScore > computerScore) {
        console.log('Congratulation!!! YOU WON!!!!!!!!');
    } else {
        console.log('OOPS!!! YOU LOST');
    }
    console.log(`You ${playerScore}`);
    console.log(`Computer ${computerScore}`);
    return playerSelection, computerSelection
}

game(player, computer);