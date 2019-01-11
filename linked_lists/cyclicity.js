// O(n^2) -- not good!

// function isCyclical(node) {
//   for (var i = 0; node !== null; i++) {
//     var node2 = node.next;
//     for (var j = 0; node2 !== null && j <= i; j++) {
//       // only traverse as many nodes as the outer loop has seen so far
//       if (node === node2) {
//         return node;
//       }
//       node2 = node2.next;
//     }
//     node = node.next;
//   }
//   return null;
// }

// O(n) -- better (won't necessarily overlap on the head)
// to do that, first find the length of the cycle C (easy)
// then use two pointers, one starting at head and the other C steps ahead

// implemented below (returnCycleStart(head))

function isCyclical(head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function returnCycleStart(head) {
  function cycleLength(end) {
    var count = 1;
    var start = end.next;
    while (start !== end) {
      count++;
      start = start.next;
    }
  }

  var slow = head;
  var fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      var length = cycleLength(slow);
      var start = head;
      var tail = head;
      for (var i = 0; i < length; i++) {
        tail = tail.next;
      }
      while (start !== head) {
        for (var j = 0; j < length; j++) {
          tail = tail.next;
        }
        start = start.next;
      }
      return start;
    }
  }

  return null;
}
