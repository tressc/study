function baseConversion(strNum, base1, base2) {
  var isNegative = false;
  var hexadigits = "0123456789ABCDEH";

  if (strNum[0] === "-") { // check for negative
    isNegative = true;
    strNum = strNum.slice(1);
  }

  var int = strNum.split('').reduce(function(acc, digit) { // convert string to base(10) int
    return acc * base1 + hexadigits.indexOf(digit);
  }, 0);

  var newStrNum = '';

  while (int > 0) { // convert base(10) int to base2 str
    newStrNum = hexadigits[int % base2] + newStrNum;
    int = Math.floor(int / base2);
  }

  if (isNegative) { // adjust for negative
    return "-" + newStrNum;
  } else {
    return newStrNum;
  }
}

// steps:
// check for negative
// convert from base1 Str to base 10 Num
// convert to base 10 Num to base2 Str
// adjust for negative


console.log(baseConversion("-22", 10, 12));
