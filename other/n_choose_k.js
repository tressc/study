// how many ways are there to make unique groups of k size from a
// collection of n size

function nChooseK(n, k) {
  // math formula goes here
}

// generate all the unique combinations of size k from arr

function arrChooseK(arr, k) {
  if (arr.length === k) {
    return [arr];
  }

  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var subArr = arr.slice(0,i).concat(arr.slice(i + 1));
    result = result.concat(arrChooseK(subArr, k));
  }
  return result;
}


var combos = arrChooseK([1,2,3,4], 2);

console.log(combos);
