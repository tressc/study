// return all the permutations of an arr

// function permutations(arr) {
//   if (arr.length < 2) {
//     return [arr];
//   }
//
//   var result = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     var el = arr[i];
//     var otherEls = arr.slice(0, i).concat(arr.slice(i + 1));
//
//     var mapped = permutations(otherEls).map(function(permutation) {
//       permutation.push(el);
//       return permutation;
//     });
//
//     result = result.concat(mapped);
//   }
//
//   return result;
// }

function permutations(arr) {
  if (arr.length < 2) return [arr];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const otherEls = arr.slice(0, i).concat(arr.slice(i + 1));

    const mapped = permutations(otherEls).map(perm => {
      perm.push(el);
      return perm;
    });

    result = result.concat(mapped);
  }

  return result;
}

var arr = [1,2,3];
var result = permutations(arr);
console.log(result);
