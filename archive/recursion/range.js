// return the range between two numbers (inclusive start, exclusive end)

function range(start, end) {
  if (start >= end) return []; // base case

  const rangeSoFar = range(start, end - 1);
  rangeSoFar.push(end - 1);

  return rangeSoFar;
}


// tests
console.log(range(1,5));
console.log(range(6,13));
console.log(range(10,4));
console.log(range(100,107));
