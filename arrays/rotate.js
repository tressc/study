function clockwise(matrix) {
  const result = [];

  for (var i = 0; i < matrix[0].length; i++) {
    result.push([]);

    for (var j = 0; j < matrix.length; j++) {
      let row = matrix[j];

      result[result.length - 1].unshift(row[i]);
    }
  }

  return result;
}


function antiClockwise(matrix) {
  const result = [];

  for (var i = 0; i < matrix[0].length; i++) {
    result.unshift([]);

    for (var j = 0; j < matrix.length; j++) {
      let row = matrix[j];

      result[0].push(row[i]);
    }
  }

  return result;
}

var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [0, 0, 0],
];


// testing
arr = clockwise(arr);
console.log(arr);
console.log("***");
arr = clockwise(arr);
console.log(arr);
console.log("***");
arr = clockwise(arr);
console.log(arr);
console.log("***");
