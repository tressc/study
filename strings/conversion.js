function strToInt(strNum) {
  var digits = "0123456789";
  var sum = 0;

  // add negative number handling

  for (var i = strNum.length - 1; i > -1; i--) {
    var digit = strNum[i];
    var power = strNum.length - i - 1;

    sum += digits.indexOf(digit) * 10 ** power;
  }

  return sum;
}

console.log(strToInt("123"));
console.log(strToInt("85412"));
console.log(strToInt("0"));
