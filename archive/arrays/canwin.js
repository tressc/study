 // O(1) memory and 0(n * k) time where k = arr.max

function canWin(array) {
  // var boolArr = [];
  // for (var i = 0; i < array.length; i++) {
  //   boolArr.push(false);
  // }
  // const boolArr = new Array(array.length).fill(false);

  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = array[i]; j > 0; j--) {
      if ((i + j) === array.length - 1 || array[i + j] === true) {
        array[i] = true;
        break;
      }
    }
  }

  return array[0] === true;
}
// console.log(canWin([2, 0, 0, 1, 3]));




// O(1) memory and O(n) time

function canWin2(array) {
  var farthest = 0;
  var last = array.length - 1;
  var i = 0;

  while (i <= farthest && farthest < last) {
    farthest = Math.max(farthest, array[i] + i);
    i++;

    if (farthest >= last) return true;
  }

  return false;
}

console.log(canWin([3, 0, 0, 1, 3]));
