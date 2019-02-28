// reverse a linked list;

function reverseList(head) {
  var prevNode = null;
  var nextNode;

  while (head) {
    nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
}

function recursiveReverse(node, previous = null) {
  var newHead;

  if (node.next) {
    newHead = recursiveReverse(node.next, node);
  } else {
    newHead = node;
  }

  node.next = previous;
  return newHead;
}

// reverse a subsection of a list
// start and end represent node "indices"

function subReverse(head, start, end) {
  var current = head;
  var count = 0;

  while (count < start - 1) { // advance to start node's parent
    current = current.next;
    count++;
  }

  // this is the tail of the first part of the list
  var beginningTail = current;

  // this is the head of the subsection to be reversed
  var reversedHead = current.next;
  // this will be the previous node in the subsection to be reversed
  var reversedPrev = current.next;
  // this will be the next node inthe subsection to be reversed
  var reversedNext;

  current = current.next.next; // step
  count += 2;

  while (count <= end) { // do all the stuff
    reversedNext = current.next;
    current.next = reversedPrev;
    reversedPrev = current;
    current = reversedNext;
    count++;
  }

  // connect ends of the reversed sublist to the rest of the list
  beginningTail.next = reversedPrev;
  reversedHead.next = current;
}


//Testing below...

class LNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var list = new LNode(1);
list.next = new LNode(2);
list.next.next = new LNode(3);
list.next.next.next = new LNode(4);

subReverse(list, 1, 2);

console.log(list);
