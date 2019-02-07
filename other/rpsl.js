// implement rock paper scissor lizard

function determineWinner(action1, action2) {
  const actionNums = {
    scissor: 0,
    paper: 1,
    rock: 2,
    lizard: 3,
    spock: 4,
  };

  const num1 = actionNums[action1];
  const num2 = actionNums[action2];

  if (num1 === undefined || num2 === undefined) return "no contest";

  if (num1 === num2) {
    return "tie";
  } else if (num2 === (num1 + 1) % 5 || num2 === (num1 + 3) % 5) {
    return "player 1 wins";
  } else {
    return "player 2 wins";
  }
}
