const compChoice = ['rock', 'scissors', 'paper'];

function getComputerChoice(arr) {
    const value = Math.floor(Math.random() * arr.length);
    return arr[value];
}

function getHumanChoice() {
    let result = prompt("Please Enter your choice(Rock, Scissors, Paper): ");
    return result.toLowerCase();
}

const comp = getComputerChoice(compChoice);
const human = getHumanChoice();

if (comp == human) {
    console.log('Its a tie!');
} else {
    console.log('Its not a tie');
}

let computerScore = 0;
let humanScore = 0;