function strToInt(strNum) {
  var digits = "0123456789";
  var sum = 0;
  var isNegative = -1;

  if (strNum[0] === "-") {
    isNegative = 0;
    sum *= -1;
  }

  for (var i = strNum.length - 1; i > isNegative; i--) {
    var digit = strNum[i];
    var power = strNum.length - i - 1;

    sum += digits.indexOf(digit) * Math.pow(10, power);
  }

  if (isNegative === 0) {
    sum *= -1;
  }

  return sum;
}

// console.log(strToInt("123"));
// console.log(strToInt("-85412"));
// console.log(strToInt("0"));

function intToStr(num) {
  var digits = "0123456789";
  var strNum = "";
  var isNegative = "";

  if (num < 0) {
    num *= -1;
    isNegative = "-";
  } else if (num === 0) {
    return "0";
  }

  while (num > 0) {
    strNum = digits[num % 10] + strNum;
    num = Math.floor(num / 10);
  }

  return isNegative + strNum;
}

console.log(intToStr(123));
console.log(intToStr(-85412));
console.log(intToStr(0));
