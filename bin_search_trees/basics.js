class BSTNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


// lookup, insertion, and deletion are O(h), worst case O(n) for skewed
// trees

// red-black and height-balanced BSTs guarantee height of (log n)

// avoid putting mutable data in a BST!!!
// otherwise, remove the node, update it, and re-add it
