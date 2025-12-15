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
