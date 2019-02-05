// given a game where you can score different numbers of points in a
// variety of ways, how many different ways are there to acheive
// a certain score

// score - a number
// points - an array of numbers

function scores(score, points) {
  if (score === 0) {
    return 1;
  } else if (score < 0) {
    return 0;
  }

  var possibilities = 0;

  for (var i = 0; i < points.length; i++) {
    possibilities += scores(score - points[i], points);
  }

  return possibilities;
}

console.log(scores(12, [2, 3]));
