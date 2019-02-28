function bitSwap(x, i, j) {
  if (((x >> i) & 1) !== ((x >> j) & 1)) {
    var bitMask = (1 << i) | (1 << j);
    x ^= bitMask;
  }
  return x;
}

console.log(bitSwap(73, 1, 6));
