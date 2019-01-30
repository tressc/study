function unique(array) {
  var newArr = [];
  var i = 0;

  while (i < array.length) {
    var el = array[i];
    if (newArr.indexOf(el) === -1) {
      newArr.push(el);
    }
    i++;
  }
  
  return newArr;
}
