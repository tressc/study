// O(n) space + time

// function dutchFlag(arr, i) {
//   var left = [], middle = [], right = [];
//   var pivot = arr[i];
//
//   for (var j = 0; j < arr.length; j++) {
//     var num = arr[j];
//
//     if (num < pivot) {
//       left.push(num);
//     } else if (num === pivot) {
//       middle.push(num);
//     } else {
//       right.push(num);
//     }
//   }
//
//   arr = left.concat(middle).concat(right);
// }



// O(1) space + O(n^2) time

// function dutchFlag(arr, i) {
//   var pivot = arr[i];
//
//   for (var j = 0; j < arr.length; j++) {
//     for (var k = j + 1; k < arr.length; k++) {
//       if (arr[k] < pivot) {
//         [arr[j], arr[k]] = [arr[k], arr[j]];
//         break;
//       }
//     }
//   }
//
//
//   for (var l = arr.length - 1; l >= 0; l--) {
//     for (var m = l - 1; m >= 0; m--) {
//       if (arr[m] > pivot) {
//         [arr[l], arr[m]] = [arr[m], arr[l]];
//         break;
//       }
//     }
//   }
// }



// O(1) space + O(n) time

// function dutchFlag(arr, i) {
//   var pivot = arr[i];
//
//   var smaller = 0;
//   for (var j = 0; j < arr.length; j++) {
//     var num1 = arr[j];
//     if (num1 < pivot) {
//       [arr[smaller], arr[j]] = [arr[j], arr[smaller]];
//       smaller++;
//     }
//   }
//
//   var larger = arr.length - 1;
//   for (var k = arr.length - 1; k >= 0; k--) {
//     var num2 = arr[k];
//     if (num2 > pivot) {
//       [arr[larger], arr[k]] = [arr[k], arr[larger]];
//       larger--;
//     }
//   }
// }



// O(1) space + O(n) time (one pass)

function dutchFlag(arr, i) {
  var pivot = arr[i];
  var smaller = 0;
  var equal = 0;
  var larger = arr.length - 1;

  while (equal < larger) {
    if (arr[equal] < pivot) {
      [arr[smaller], arr[equal]] = [arr[equal], arr[smaller]];
      smaller++;
      equal++;
    } else if (arr[equal] === pivot) {
      equal++;
    } else if (arr[equal] > pivot) {
      [arr[larger], arr[equal]] = [arr[equal], arr[larger]];
      larger--;
    }

    // console.log(arr, smaller, equal, larger);
  }
  return arr;
}

var arr1 = [0,1,2,0,2,1,1];

dutchFlag(arr1, 1);

console.log(arr1);
