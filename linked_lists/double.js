class DoubleLinked {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }

  static deleteAfter(node) {
    var grandChild = node.next.next;
    grandChild.prev = node;
    node.next = grandChild;
  }

  static insertAfter(node, newChild) {
    var oldChild = node.next;
    oldChild.prev = newChild;
    newChild.next = oldChild;
    node.next = newChild;
    newChild.prev = node;
  }

  static newList(arr) { // create new linked list from arr of values
    var head = new DoubleLinked(arr[0]);
    var tail = head;
    for (var i = 1; i < arr.length; i++) {
      tail.next = new DoubleLinked(arr[i]);
      tail.next.prev = tail;
      tail = tail.next;
    }
    return head;
  }
}
