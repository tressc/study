class BSTNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BSTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) { // this does NOT heigh balance the tree
    const root = this.root;
    const newNode = new BSTNode(value);

    if (!root) {
      this.root = newNode;
      return;
    }

    let currentNode = root;

    while (currentNode) {
      if (value < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

// lookup, insertion, and deletion are O(h), worst case O(n) for skewed
// trees

// red-black and height-balanced BSTs guarantee height of (log n)

// avoid putting mutable data in a BST!!!
// otherwise, remove the node, update it, and re-add it

// INORDER traversal will traverse in sorted order

function search(bstRoot, value) {
  if (!bstRoot || bstRoot.val === value) { // null if !bstRoot
    return bstRoot;
  } else if (value < bstRoot.val) {
    return search(bstRoot.left, value);
  } else if (value > bstRoot.val) {
    return search(bstRoot.right, value);
  }
}


// sometimes we need a hash table AND a bst, such as a tree that stores
// students sorted by their GPAs. If we want to update a student's GPA,
// we would need to traverse the whole tree to find their name, unless we
// store the name: score mappings in a hash


module.exports = BSTree;
