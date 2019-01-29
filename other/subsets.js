// list all the subsets of an arr

function subsets(arr) {
  if (arr.length < 1) return [[]];

  var value = arr.pop();
  var subs = subsets(arr);
  var newSubs = subs.map(el => {
    el = el.concat([value]); // do NOT push!
    return el;
  });

  return subs.concat(newSubs);
}


var arr = [1,2,3,4];
var result = subsets(arr);
console.log(result);
