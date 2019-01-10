function reverseSublist(head, start, end) {
  var currentNode = head;
  var count = 0;

  while (count < start - 1) { // iterate until 1 before start
    currentNode = currentNode.next;
    count++;
  }

  var prevTail = currentNode; // store reference to end of first "third" of list
  var reverseHead = currentNode.next;
  var reversePrev = currentNode.next;
  currentNode = currentNode.next.next;
  count += 2;
  var nextNode;
  while (count <= end) {
    nextNode = currentNode.next;
    currentNode.next = reversePrev;
    reversePrev = currentNode;
    currentNode = nextNode;
    count++;
  }

  prevTail.next = reversePrev;
  reverseHead.next = currentNode;
}

// steps:
// find node[idx1], store reference
// point next node to this reference, store reference to new node
// repeat.
// point node[idx1] to node[idx2].next
// point node[idx1 - 1] to node[idx2]
