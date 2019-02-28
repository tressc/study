// fill a 3 * 3 board with unique semi-random nums

// the first row should contain only nums between 1-10
// the second row should contain only nums between 11-20
// the third row should contain only nums between 21-30

// for a given collection of boards each row, column, and
// diagonal must be unique

// for a first implementation, assume only the rows have to unique
// also assume different permutations of the same row are NOT unique
// ex: [1, 7, 3] === [7, 3, 1]

// each row is a 10 choose 3 sampling problem
// generate all the combos of size 3 for a given range
// the size of the resulting collection represents the max number of
// players you can support with all different rows

// do this recursively so it can scale beyond k === 3
// there are 120 combos for n, k === 10, 3

function getCombos(arr, k) {
  const combos = [];

  return comboHelper(arr, 0, combos, 0, k);
}

function comboHelper(arr, arrIdx, combo, comboIdx, k) {
  if (comboIdx === k) return [combo.slice()]; // shallow copy

  if (arrIdx >= arr.length) return [];

  combo[comboIdx] = arr[arrIdx];

  const arr1 = comboHelper(arr, arrIdx + 1, combo, comboIdx + 1, k);
  const arr2 = comboHelper(arr, arrIdx + 1, combo, comboIdx, k);

  // arr1 will always be a single nested array
  // ex: [[1, 2, 5]]
  // arr2 represents a collection of already generated combos
  // ex: [[1, 2, 4], [1, 2, 5]]

  return arr1.concat(arr2);
}

// console.log(getCombos([1,2,3,4,5], 3));

module.exports = getCombos;
