function plusOne(array) {
  var hold = 1;
  for (var i = array.length - 1; i >= 0; i--) {
    var digit = array[i] + hold;
    array[i] = digit % 10;
    hold = Math.floor(digit / 10);
  }

  if (hold) {
    array.unshift(hold);
  }
}

var arr3 = [9, 9, 9];
//
// plusOne(arr3); // => [1, 3, 0]

// console.log(arr3);

// this only works for arrays of the same size. one fix would be to add
// leading zeros to the smaller array

function arrAdd(arr1, arr2) {
  var sum = [];
  var hold = 0;

  // var longest = Math.max(arr1.length, arr2.length);

  for (var i = arr1.length - 1; i >= 0; i--) {
    var digit = arr1[i] + arr2[i] + hold;
    sum.unshift(digit % 10);
    hold = Math.floor(digit / 10);
  }

  if (hold) {
    sum.unshift(hold);
  }

  return sum;
}

var arr2 = [0, 2, 9];

console.log(arrAdd(arr3, arr2));
