// find the lowest common ancestor of two nodes in a binary tree
// really important for rendering web pages! CSS etc.

// the recursive function returns two fields
// 1: how many of the two nodes were in a subtree
// 2: the LCA if both were present in the subtree

// if the nodes are in different subtrees of the current node, the
// current node is the LCA

// if node2 is in a subtree of node1, node1 is the LCA

function lca(root, val1, val2) { // vals instead of objIDs for targets

  function lcaHelper(tree, node1, node2) {
    if (!tree) {
      return [0, null];
    }

    var leftResult = lcaHelper(tree.left, node1, node2);
    if (leftResult[0] === 2) {
      return leftResult;
    }

    // if leftResult[0] === 1, we could pass a flag down to right result
    // allowing the second recursive call to terminate early when/if it
    // finds the second target node

    var rightResult = lcaHelper(tree.right, node1, node2);
    if (rightResult[0] === 2) {
      return rightResult;
    }

    var numTargetNodes = leftResult[0] + rightResult[0];

    if ([node1, node2].indexOf(tree) > -1) numTargetNodes++;
    // +1 if current node is one of the targets

    var ancestor = tree;
    if (numTargetNodes !== 2) {
      ancestor = null;
    }

    return [numTargetNodes, ancestor];
  }

  return lcaHelper(root, val1, val2)[1];
}
