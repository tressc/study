// by convention nodes are both ancestors and descendents of themselves

// depth of a node is the number of ancestors on its search path from root
// height of a tree is the max depth of all its nodes
// a level are all the nodes at a single depth


function BinaryTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// recursive algos are well suited to trees, space will be a fn of tree height

// most problems have a brute force solution that uses O(n) space and a
// more sophisticated solution that uses O(1) space. do the latter!

// consider left & right skewed trees when doing complexity analysis
// O(log of n) for balanced trees, O(n) for skewed

// if each node has a *parent* field, use it to make code simpler and
// reduce time and space complexity

// it's easy to make the mistake of treating a node with a single child
// as a leaf!
