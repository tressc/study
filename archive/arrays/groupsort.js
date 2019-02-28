// this can be generalized for any array containing only 2 kinds of values (0, 1 etc...)

function trueFalse(array) {
  var beginning = 0;

  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      [array[i], array[beginning]] = [array[beginning], array[i]];
      beginning++;
    }
  }
}

var arr1 = [true, false, true, false, true, false];

trueFalse(arr1);

console.log(arr1);


// this can be generalized for any array containing only three known types of values

function threeValues(array) {
  var beginning = 0;
  var middle = 0;
  var end = array.length - 1;

  while (middle < end) {
    var value = array[middle];

    if (value === 0) {
      [array[beginning], array[middle]] = [array[middle], array[beginning]];
      beginning++;
      middle++;
    } else if (value === 1) {
      middle++;
    } else {
      [array[end], array[middle]] = [array[middle], array[end]];
      end--;
    }
  }
}

var arr2 = [1, 2, 0, 0, 2, 1, 0];

threeValues(arr2);

console.log(arr2);
