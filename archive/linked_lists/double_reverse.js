function doubleReverse(node) {
  var prev = node;
  var current = prev.next;
  prev.next = null;

  while (current) {
    var next = current.next;

    current.next = prev;
    prev.prev = current;

    prev = current;
    current = next;
  }

  return prev;
}
