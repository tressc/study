// how many ways are there to make a given amount given certain
// coin denominations?

function makeChange(amount, coins) {
  if (coins.length === 0 || amount < 0) {
    return 0;
  } else if (amount === 0) {
    return 1;
  }

  let leftSub = makeChange(amount - coins[0], coins);
  let rightSub = makeChange(amount, coins.slice(1));

  return leftSub + rightSub;
}

// structure prohibits overlapping subtrees

// time complexity?
// space complexity?

// tests
console.log(makeChange(4, [1, 2])); // => 3
// 1,1,1,1
// 1,1,2
// 2,2
