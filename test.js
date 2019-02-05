// function unique(array) {
//   var newArr = [];
//   var i = 0;
//
//   while (i < array.length) {
//     var el = array[i];
//     if (newArr.indexOf(el) === -1) {
//       newArr.push(el);
//     }
//     i++;
//   }
//
//   return newArr;
// }

//
// function phrases(n) {
//   var options = [];
//
//   for (var i = 0; i < n; i++) {
//
//     for (var j = 0; j < n; j++) {
//       if (i === j) continue;
//
//       for (var k = 0; k < n; k++) {
//         if (j === k || i === k) continue;
//         options.push([i, j, k]);
//       }
//     }
//   }
//   return options;
// }
//
// // options.length = ((n - 1) ** 3) - (n - 1)
// // ex: phrases(5) = (4 ** 3) - 4
//

function isEven(n) {
  return n % 2 === 0;
}

console.log([1,3].some(isEven));
