var tryRequire = require('../utils/try_require.js');
var assert = require('assert');


var intToStr = tryRequire('../problems/strings/int_to_str.js');
var strToInt = tryRequire('../problems/strings/str_to_int.js');


describe('intToStr()', function () {
  it('should return a string version of a number', function () {
    assert.equal(intToStr(243), "243");
    assert.equal(intToStr(-78), "-78");
  });
});

describe('strToInt()', function () {
  it('should return a number version of a string', function () {
    assert.equal(strToInt("243"), 243);
    assert.equal(strToInt("-782342"), -782342);
  });
});
