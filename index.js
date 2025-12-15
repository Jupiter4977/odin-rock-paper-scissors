function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'paper';
  } else return 'scissors';
}

function playGame() {
  const displayElement = document.querySelector('.game-result');
  let humanScore = 0;
  let computerScore = 0;

  function handleResult(humanChoice, computerChoice, winner) {
    if (winner === 'player') {
      humanScore++;
      displayResult(humanChoice, computerChoice, 'Player Wins!');
    } else if (winner === 'computer') {
      computerScore++;
      displayResult(humanChoice, computerChoice, 'Computer Wins!');
    } else {
      displayResult(humanChoice, computerChoice);
    }
  }

  function displayResult(humanChoice, computerChoice, result = 'Tie!') {
    const gameOverMessage = `Game Over! Final score: Player: ${humanScore} Computer: ${computerScore} `;
    if (humanScore === 5) {
      displayElement.textContent = gameOverMessage + 'Player Wins!';
      return;
    } else if (computerScore === 5) {
      displayElement.textContent = gameOverMessage + 'Player Wins!';
      return;
    } else {
      displayElement.textContent = `Player picked ${humanChoice}, Computer picked ${computerChoice}. Result: ${result} Player Score: ${humanScore} Computer Score: ${computerScore}`;
    }
  }

  function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (computerScore >= 5 || humanScore >= 5) return;
    if (humanChoice === computerChoice)
      return handleResult(humanChoice, computerChoice);
    if (humanChoice === 'rock') {
      if (computerChoice === 'paper') {
        return handleResult(humanChoice, computerChoice, 'computer');
      } else {
        return handleResult(humanChoice, computerChoice, 'player');
      }
    } else if (humanChoice === 'paper') {
      if (computerChoice === 'rock') {
        return handleResult(humanChoice, computerChoice, 'player');
      } else {
        return handleResult(humanChoice, computerChoice, 'computer');
      }
    } else if (humanChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return handleResult(humanChoice, computerChoice, 'computer');
      } else {
        return handleResult(humanChoice, computerChoice, 'player');
      }
    }
  }

  function buttonEvents() {
    const buttons = document.querySelectorAll('.rps-button');
    buttons.forEach((button) => {
      const humanChoice = button.textContent.toLowerCase();
      button.addEventListener('click', () => playRound(humanChoice));
    });
  }
  buttonEvents();
}

playGame();
