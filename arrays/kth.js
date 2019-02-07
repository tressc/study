function kthLargest(arr, k) {
  if (arr.length < 1) return null;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (var i = 1; i < arr.length; i++) {
    let num = arr[i];

    if (num <= pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  if (right.length > k - 1) {
    return kthLargest(right, k);
  } else if (right.length === k - 1) {
    return pivot;
  } else {
    return kthLargest(left, k - (right.length + 1));
  }
}

console.log(kthLargest([3, 1, 7, 2], 2));
console.log(kthLargest([3, 1, 7, 2], 5));
