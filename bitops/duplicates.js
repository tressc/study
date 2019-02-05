// search for a duplicated number in an array and return it
// should be done in O(n) time and O(1) extra space

const findDup64 = arr => { // max num in array must be <= 63
  let nums = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (nums & 1 << num) { // mask
      return num;
    } else {
      nums = nums | 1 << num;
    }
  }

  return null;
};


const findDup128 = arr => {
  let nums = {
    0: 0,
    1: 0,
    2: 0,
    3: 0
  };

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let key = Math.floor(num / 32);

    if (nums[key] & 1 << num) { // mask
      return num;
    } else {
      nums[key] = nums[key] | 1 << (num % 32);
    }
  }
  return null;
};

var a1 = [0, 2, 4, 3, 21, 28, 6, 75, 75];
var a2 = [1, 0];

console.log(findDup128(a1));
