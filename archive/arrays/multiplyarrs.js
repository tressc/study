// function multiplyArrs(arr1, arr2) {
//   var sum = 0;
//   var counter1 = 0;
//   for (var i = arr1.length - 1; i >= 0; i--) {
//     var counter2 = 0;
//     var digit1 = arr1[i] * (10 ** counter1);
//     for (var j = arr2.length - 1; j >= 0; j--) {
//       var digit2 = arr2[j] * (10 ** counter2);
//
//       sum += (digit1 * digit2);
//       counter2++;
//     }
//     counter1++;
//   }
//
//   return numToArray(sum); // convert number to array of digits
// }
//
// function numToArray(num) {
//   var digits = [];
//
//   while (num > 0) {
//     digits.unshift(num % 10);
//     num = Math.floor(num / 10);
//   }
//
//   return digits;
// }


function multiplyArrs(arr1, arr2) {
  var sum = 0;
  var counter1 = 0;
  for (var i = arr1.length - 1; i >= 0; i--) {
    var counter2 = 0;
    var digit1 = arr1[i] * (10 ** counter1);
    for (var j = arr2.length - 1; j >= 0; j--) {
      var digit2 = arr2[j] * (10 ** counter2);

      sum += (digit1 * digit2);
      counter2++;
    }
    counter1++;
  }

  return numToArray(sum); // convert number to array of digits
}


var arr1 = [7, 2];
var arr2 = [2, 3];

console.log(multiplyArrs(arr1, arr2));
