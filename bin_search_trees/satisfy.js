// check if a given binary tree satisfies the definition of a BST

// is max of the left subtree <= min of the right subtree
// min(min(left), root, min(right)) === min(left)
// max(max(left), root, max(right)) === max(right)

function satisfy(root) {
  var low = -Infinity;
  var high = Infinity;

  if (!root) {
    return true;
  } else if (!(low <= root.data) && (root.data <= high)) {
    return false;
  }


  return satisfy(root.left, low, root.data) &&
    satisfy(root.right, root.data, high);
}

// time complexity is O(n)
// extra space is O(height)


// take advantage of the fact that inorder traversal will visit the nodes
// in a BST in sorted order

function satisfy2(root) {
  var els = [];
  function inOrder(node) {
    if (node) {
      inOrder(node.left);
      els.push(node.val); // inorder push to array
      inOrder(node.right);
    }
  }

  inOrder(root);

  for (var i = 0; i < els.length - 1; i++) { // traverse array
    if (els[i] > els[i + 1]) {
      return false;
    }
  }

  return true;
}


// we can search using BFS and thus terminate the search early if a
// contradiction is found at a low depth (thus avoiding avg O(n) time)

// use a queue








// testing

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
    return newNode;
  }
}

function traverse(node) {
  if (node) {
    traverse(node.right);
    console.log(node.val);
    traverse(node.left);
  }
}

var a = new BSTree();
a.insert(19);
a.insert(7);
a.insert(3);
a.insert(2);
a.insert(5);
a.insert(11);
a.insert(17);
a.insert(13);
a.insert(43);
a.insert(47);
a.insert(23);

traverse(a.root);
// console.log(satisfy2(a.root));
