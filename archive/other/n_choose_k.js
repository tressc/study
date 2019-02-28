// how many ways are there to make unique groups of k size from a
// collection of n size

function nChooseK(n, k) {
  const nFact = factorial(n);
  const kFact = factorial(k);

  return nFact / (kFact * factorial(n - k));
}

function factorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
}

// generate all the unique combinations of size k from arr

// below doesn't work, but also any solution which stores the results
// would quickly run out of memory for larger inputs. Using "yield", is
// one way to solve this issue;


// function arrChooseK(arr, k) {
//   if (k === 0 || arr.length < 1) return [];
//   const combos = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     const rest = arr.slice(i + 1);
//     const chosen = arrChooseK(rest, k - 1);
//     chosen.push(el);
//     combos.push(chosen);
//   }
//   return combos;
// }

// this is someone else's code. refactor to include a MAX param
var arrChooseK = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n === 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    };
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    // all.push(a);
    return all;
};

var combos = arrChooseK([1,2,3,4], 2);

console.log(combos);
