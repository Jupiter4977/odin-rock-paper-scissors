function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return 'paper';
  } else return 'scissors';
}

function getHumanChoice() {
  const userInput = prompt('Insert move: Rock Paper Scissors');
  const humanChoice = userInput
    ? userInput.toLowerCase().replace(/\s+/g, '')
    : null;
  switch (humanChoice) {
    case null:
      alert('Please insert a move');
      return getHumanChoice();
    case 'rock':
      return humanChoice;
    case 'paper':
      return humanChoice;
    case 'scissors':
      return humanChoice;
    default:
      alert(
        `"${humanChoice}" is not a valid move. \nValid moves: Rock Paper Scissors`
      );
      return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function handleResult(humanChoice, computerChoice, winner) {
    if (winner === 'player') {
      humanScore++;
      return `Player picked ${humanChoice}, Computer picked ${computerChoice}. Result: Player Wins! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    } else if (winner === 'computer') {
      computerScore++;
      return `Player picked ${humanChoice}, Computer picked ${computerChoice}. Result: Computer Wins! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    } else {
      return `Player picked ${humanChoice}, Computer picked ${computerChoice}. Result: Tie! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    }
  }

  function announceWinner() {
    let winner;
    const message = `Game has ended. Final scores: Player: ${humanScore} Computer: ${computerScore} `;
    if (humanScore > computerScore) {
      winner = 'Player';
    } else if (computerScore > humanScore) {
      winner = 'Computer';
    } else winner = null;
    if (!winner) {
      console.log(message + 'The result is a tie!');
    } else console.log(message + `${winner} wins!`);
  }

  function playRound(humanChoice, computerChoice = getComputerChoice()) {
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
  for (let i = 0; i < 5; i++) console.log(playRound(getHumanChoice()));
  announceWinner();
}

playGame();
