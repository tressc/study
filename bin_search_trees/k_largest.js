var bst = require('./basics');

// find the k largest elements in a BST

// we can do a reverse inorder traversal

function kLargest(root, k) {
  const largest = [];

  function traverse(node) {
    if (node && largest.length < k) {
      traverse(node.right);

      if (largest.length < k) {
        largest.push(node.val);
      }

      traverse(node.left);
    }
  }

  traverse(root);
  return largest;
}


// testing below

var a = new bst();
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

console.log(kLargest(a.root, 3));
