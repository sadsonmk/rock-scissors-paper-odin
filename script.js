const compChoice = ['rock', 'scissors', 'paper'];

function getComputerChoice(arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
}

function getHumanChoice() {
    let result = prompt("Please Enter your choice(Rock, Scissors, Paper): ");
    return result.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Its a tie! No winner');
    } else if ( humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors cuts the paper!');
        return humanScore += 1;
    } else if ( humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Paper is cut by the Scissors!');
        return computerScore += 1;
    } else if ( humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Rock is covered by the Paper')
        return computerScore += 1;
    } else if ( humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper covers the rock!");
        return humanScore += 1;
    } else if ( humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Scissors is crashed by the rock!');
        return computerScore += 1;
    } else if ( humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock crashes the scissors');
        return humanScore += 1;
    } else {
        console.log('Try again!');
    }
}

function playGame() {
    let round = 0;
    while (round < 5) {
        const comp = getComputerChoice(compChoice);
        const human = getHumanChoice();
        playRound(human, comp);
        round += 1;
    }
    console.log(`The human score is ${humanScore}`);
    console.log(`The computer score is ${computerScore}`);
}

playGame();