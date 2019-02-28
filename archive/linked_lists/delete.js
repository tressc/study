// given a reference to the node to be deleted, there is no way to truly
// delete that object without traversing the entire list to find its
// predecessor -- O(n) time

// however we can effectively "delete" it in O(1) time

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
