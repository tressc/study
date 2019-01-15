// delete the kth to last node from a list of undetermined length
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}


function deleteKth(head, k) {
  var dummyHead = new ListNode(0, head); // as we may need to delete head
  var first = dummyHead.next;

  for (var i = 0; i < k; i++) {
    first = first.next; // first goes ahead
  }

  var second = dummyHead; // starts here in case we have to delete head!

  while (first) { // iterate until first hits ends of list
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next; // delete node following second
  return dummyHead.next;
}
