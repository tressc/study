// reverse polish notation
// ex: "3,4,+,2,5,*,-" => (3 + 4) - 2 * 5

function rpn(str) {
  var toArr = str.split(",");
  var nums = [];
  var ops = "+/-*";

  for (var i = 0; i < toArr.length; i++) {
    var char = str[i];
    if (ops.includes(char)) {
      var num2 = nums.pop();
      var num1 = nums.pop();
      nums.push(char, num1, num2);
    } else {
      nums.push(Number(char));
    }
  }
  return String(nums[0]);
}


function operation(operator, x, y) {
  switch (operator) {
    case "+":
      return x + y;
    case "*":
      return x * y;
    case "-":
      return x - y;
    case "":
      return x / y;
  }
}
