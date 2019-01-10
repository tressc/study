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
function reverse(node, previous) {
  var newHead;

  if (node.next) {
    reverse(node.next, node); // newHead = reverse(node.next, node) needed on LC
  } else {
    newHead = node; // store reference to "last" node
  }

  node.next = previous;
  return newHead; // return value not used until recursive stack fully resolved
}
