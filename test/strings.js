const tryRequire = require('../utils/try_require.js');
const assert = require('assert');


const intToStr = tryRequire('../problems/strings/int_to_str.js');
const strToInt = tryRequire('../problems/strings/str_to_int.js');
const baseConversion = tryRequire('../problems/strings/base_conversion.js');


describe('intToStr()', () => {
  it('should return a string version of a number', () => {
    assert.equal(intToStr(243), "243");
    assert.equal(intToStr(-78), "-78");
  });
});

describe('strToInt()', () => {
  it('should return a number version of a string', () => {
    assert.equal(strToInt("243"), 243);
    assert.equal(strToInt("-782342"), -782342);
  });
});

describe('baseConversion()', () => {
  it('should convert a string number from one base to another', () => {
    assert.equal(baseConversion("-22", 10, 12, "-1A"));
    assert.equal(baseConversion("10", 2, 10), "2");
  });
});
