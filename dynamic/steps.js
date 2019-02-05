// assuming you can go up stairs one or two steps at a time,
// how many different ways are there to ascend a staircase
// of n steps?

// function steps(n) {
//   if (n === 0) {
//     return 1;
//   } else if (n < 0) {
//     return 0;
//   }
//
//   return steps(n - 1) + steps(n - 2);
// }
// this solution has overlapping subtrees, not optimal
// stack size will be max n, so O(n) extra space
// time complexity...?
var count = 0;

function steps(n) {
  const seen = {};

  function stepHelper(m) {
    count++;
    if (m === 0) {
      return 1;
    } else if (m < 0) {
      return 0;
    }

    if (seen[m] === undefined) {
      seen[m] = stepHelper(m - 1) + stepHelper(m - 2);
    }

    return seen[m];
  }

  return stepHelper(n);
}
// kills overlapping subtrees
// space complexity is essentially doubled but remains at O(n)
// time complexity is now roughly 2n or O(n)



// tests
// console.log(steps(2));
// console.log(steps(3));
steps(20);
console.log(count);
