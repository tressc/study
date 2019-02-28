var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var addArrs = tryRequire('../problems/arrays/add_arrs.js');
var canWin = tryRequire('../problems/arrays/can_win.js');
var digitPlusOne = tryRequire('../problems/arrays/digit_plus_one.js');
var dutchFlag = tryRequire('../problems/arrays/dutch_flag.js');
var evenOdd = tryRequire('../problems/arrays/even_odd.js');
var kthLargest = tryRequire('../problems/arrays/kth_largest.js');
var multiplyArrs = tryRequire('../problems/arrays/multiply_arrs.js');
var threeValues = tryRequire('../problems/arrays/three_values.js');
var trueFalse = tryRequire('../problems/arrays/true_false.js');

describe('addArrs()', () => {
  it('should return an array of digits representing the sum of two arrays', function () {
    assert.deepEqual(addArrs([2, 4], [5, 3, 1]), [5, 5, 5]);
    assert.deepEqual(addArrs([6], [9, 9]), [1, 0, 5]);
  });
});

describe('canWin()', () => {
  it('should return a boolean respresenting if we can travel from the beginning to the end', function () {
    assert.equal(canWin([2, 0, 0, 1, 3]), false);
    assert.equal(canWin([3, 0, 0, 2, 0, 3]), true);
  });
});

describe('digitPlusOne()', () => {
  it('should ###', () => {
    assert.deepEqual(digitPlusOne([9, 9, 9]), [1, 0, 0, 0]);
    assert.deepEqual(digitPlusOne([6]), [7]);
  });
});

describe('evenOdd()', () => {
  it('should ###', () => {
    assert.deepEqual(evenOdd([1, 2, 3, 4, 5, 6], 1), [1, 3, 5, 2, 4, 6]);
    assert.deepEqual(evenOdd([2, 4, 6, 7, 8, 9], 0), [7, 9, 2, 4, 6, 8]);
  });
});

describe('kthLargest()', () => {
  it('should ###', () => {
    assert.equal(kthLargest([3, 1, 7, 4, 2, 1, 0], 3), 3);
    assert.equal(kthLargest([6] , 4), null);
    assert.equal(kthLargest([-7, 20, 20, 3] , 2), 20);
  });
});

describe('multiplyArrs()', () => {
  it('should ###', () => {
    assert.deepEqual(multiplyArrs([1, 2, 3], [4]), [4, 9, 2]);
    assert.deepEqual(multiplyArrs([5, 5], [2, 6], 0), [1, 4, 3, 0]);
  });
});

describe('threeValues()', () => {
  it('should ###', () => {
    assert.equal(threeValues([1, 2, 0, 0, 2, 1, 0]), [0, 0, 0, 1, 1, 2, 2]);
    assert.equal(threeValues([2, 0]), [0, 2]);
    assert.equal(threeValues([]), []);
  });
});

describe('trueFalse()', () => {
  it('should ###', () => {
    assert.deepEqual(trueFalse([true, false, true, false]), [false, false, true, true]);
    assert.deepEqual(trueFalse([]), []);
  });
});
