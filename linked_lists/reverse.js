// iterative

function reverseList(head) {
  var prev = head;
  var current = prev.next;
  prev.next = null;

  while (current) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// recursive
function reverse(node, previous = null) {
  var newHead;

  if (node.next) {
    newHead = reverse(node.next, node); // needed for Last Call
  } else {
    newHead = node; // store reference to "last" node
  }

  node.next = previous;
  return newHead; // return value not used until recursive stack fully resolved
}
