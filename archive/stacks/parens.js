// determine if a string is well formed
// ex: "([]){}" is good, "(()[(]))" is not

function wellFormed(str) {
  var matches = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  var stack = [];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!matches[char]) {
      stack.push(char);
    } else if (matches[char] !== stack.pop()) { // || stack.length === 0
      return false;
    }
  }

  return stack.length === 0;
}

var str1 = "([)]";
var str2 = "([()])";
var str3 = "((((())))";

console.log(wellFormed(str1)); // false
console.log(wellFormed(str2)); // true
console.log(wellFormed(str3)); // false
