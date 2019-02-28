// determine if a binary tree is symmetric

function isSymmetric(root) {
  function checkSymmetry(sub1, sub2) {
    if (!sub1 && !sub2) { // if neither
      return true;
    } else if (sub1 && sub2) { // if both
      return (sub1.val === sub2.val) &&
        checkSymmetry(sub1.left, sub2.right) &&
        checkSymmetry(sub1.right, sub2.left);
    }
    return false; // if one
  }

  return !root || checkSymmetry(root.left, root.right);
  // return true if root is empty, else ...
}

// space: O(h) -- each recursive call will at most go the height of the subtree
// time: O(n) -- may have to visit all nodes
