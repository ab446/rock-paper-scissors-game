const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    document.getElementById('user-choice').innerText = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${computerChoice}`;
    
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `Result: ${result}`;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a draw!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
