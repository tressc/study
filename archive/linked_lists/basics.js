function ListNode(val) {
  this.val = val;
  this.next = null;

  this.searchList = function(target) {
    var node = this;
    while (node) {
      if (node.val === target) {
        return node;
      } else {
        node = node.next;
      }
    }
    return node;
  };
}

// ES6 syntax below

class LNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  searchList(target) {
    var node = this;
    while (node) {
      if (node.val === target) {
        return node;
      } else {
        node = node.next;
      }
    }
    return node;
  }

  insert(parent, newChild) {
    var node = this.searchList(parent);
    newChild.next = node.next;
    node.next = newChild;
  }

  deleteAfter(parent) {
    var node = this.searchList(parent);
    node.next = node.next.next; // destroy reference to node.next
  }

  findByIndex(index) {
    var count = 0;
    var node = this;
    while (count < index) {
      count++;
      node = node.next;
    }
    return node ? node : -1;
  }

  static newList(arr) { // create new linked list from arr of values
    var head = new LNode(arr[0]);
    var tail = head;
    for (var i = 1; i < arr.length; i++) {
      tail.next = new LNode(arr[i]);
      tail = tail.next;
    }
    return head;
  }
}
