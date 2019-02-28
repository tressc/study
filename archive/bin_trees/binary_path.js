// for a binary tree where each node holds a value of either 0 or 1,
// compute the sum of the binary value of all root-to-leaf paths

function sumRootToLeaf(root) {
  function sumHelper(tree, pathSum = 0) {
    if (!tree) return 0;

    var sum = pathSum * 2 + tree.val;

    if (!tree.left && !tree.right) return sum;

    return (sumHelper(tree.left, sum) + sumHelper(tree.right, sum));
  }

  return sumHelper(root);
}

// the binary value for the path from root-to-nodeK is equal to the
// binary value for the path from (root-to-nodeI * 2) + nodeK


// 1 -> 0 -> 1 -> 1 === ((1 * 2 + 0) * 2 + 1) * 2 + 1 === 11
