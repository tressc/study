// function unique(array) {
//   var newArr = [];
//   var i = 0;
//
//   while (i < array.length) {
//     var el = array[i];
//     if (newArr.indexOf(el) === -1) {
//       newArr.push(el);
//     }
//     i++;
//   }
//
//   return newArr;
// }


function phrases(n) {
  var options = [];

  for (var i = 0; i < n; i++) {

    for (var j = 0; j < n; j++) {
      if (i === j) continue;

      for (var k = 0; k < n; k++) {
        if (j === k || i === k) continue;
        options.push([i, j, k]);
      }
    }
  }
  return options;
}

// options.length = ((n - 1) ** 3) - (n - 1)
// ex: phrases(5) = (4 ** 3) - 4

function magicCipher(sentence, cipher){
  var i = 0;
  var keys = Object.keys(cipher);
  var arr = sentence.split(" ");
  var newS = "";
  while (i < arr.length) {
    var j = 0;
    while (j < keys.length){
      var k = 0;
      var fk = 0;
      var keyCount = 0;
      if (arr[i].indexOf(keys[j]) != -1){
        var splitWord = arr[i].split("");
        while (k < splitWord.length){
          if (splitWord[k] === keys[keyCount]) {
          splitWord[k] = cipher[keys[keyCount]];
          k++;
          keyCount = 0;
          }
          if (keyCount === keys.length-1){
            keyCount = 0;
            k++;
          }
          else {
            keyCount++;
            k++;
          }
          if (k === splitWord.length){
            newS = newS + " " + splitWord.join("");
          }
          i++;
        }
        j++;
      }
    }
    i++;
  }
  return newS;
}
