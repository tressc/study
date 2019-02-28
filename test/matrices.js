var tryRequire = require('../utils/try_require.js');
var assert = require('assert');

var rotateMatrix = tryRequire('../problems/arrays/rotate_matrix.js');

describe('rotateMatrix()', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const clockwise = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];

  const antiClockwise = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ];

  it('should rotate the matrix in the correct direction', () => {
    assert.deepEqual(rotateMatrix(matrix, 1), clockwise);
    assert.deepEqual(rotateMatrix(matrix, -1), antiClockwise);
  });
});
