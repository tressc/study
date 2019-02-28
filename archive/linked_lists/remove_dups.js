// remove duplicate entries from a sorted list

function removeDuplicates(head) {
  var current = head;

  while (current) {
    var following = current.next;
    while (following && (following.val === current.val)) {
      following = following.next;
    }
    current.next = following;
    current = current.next;
  }

  return head;
}
