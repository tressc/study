function evenOdd(arr) {
  var i = 0;
  var j = arr.length - 1;

  while (i < j) {
    if (arr[i] % 2 === 0) {
      i += 1;
    } else {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j -= 1;
    }
  }

  return arr;
}


// var arr1 = [1,2,3,4,5,6,7];

// console.log(evenOdd(arr1));
