function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Display the computer's choice
    document.getElementById('computer-choice').innerText = computerChoice;

    let result = '';
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('result').innerText = result;
}
