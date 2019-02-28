// detect the presence of a cycle in a linked list

function detectCycle(head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return fast; // return a node w/in cycle (truthy)
  }

  return null;
}

// return the length of a cycle

function cycleLength(end) {
  var count = 1;
  var start = end.next;
  while (start !== end) {
    count++;
    start = start.next;
  }
  return count;
}

// return the node where the cycle starts

function cycleStart(head) {
  var len = cycleLength(detectCycle(head));
  var slow = head;
  var fast = head;

  for (var i = 0; i < len; i++) {
    fast = fast.next;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}


// testing below...

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
list.next.next.next = list.next;

var a = cycleStart(list); // LNode {val: 2}
var b = cycleLength(list.next.next); // 2


console.log(a);
console.log(b);
