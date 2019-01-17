// a tree is said to be balanced if for each node, the difference in
// height between its left and right subtrees is at most 1

function isBalanced(root) { // could take in an optional height diff (k)

  function balanced(node) {
    if (node) {
      var left = balanced(node.left);

      if (!left[1]) { // don't traverse right subtree if left tree unbalanced
        return [0, false]; // 0 is just a placeholder
      }

      var right = balanced(node.right);
    } else {
      return [0, true]; // if we have reached a leaf's child
    }

    var bool = left[1] && right[1]; // false if either are false

    if (Math.abs(left[0] - right[0] > 1)) { // could change 1 to k
      bool = false; // false if height diff is more than 1
    }

    return [Math.max(left[0], right[0]) + 1, bool];
    // return [height, isBalanced] -- is arr best data structure for this?
  }

  return balanced(root)[1];
}


// space complexity: O(n) for unbalanced, O(log of n) for balanced
// time complexity: O(n) -- visits every node
// is there a way to short circuit once we find a single false?


function BinaryTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var m = new BinaryTreeNode("M");
var l = new BinaryTreeNode("L", null, m);
var n = new BinaryTreeNode("N");
var k = new BinaryTreeNode("K", l, n);
var p = new BinaryTreeNode("P");
var o = new BinaryTreeNode("O", null, p);
var j = new BinaryTreeNode("J", null, k);
var i = new BinaryTreeNode("I", j, o);
var h = new BinaryTreeNode("H");
var g = new BinaryTreeNode("G", h);
var f = new BinaryTreeNode("F", null, g);
var e = new BinaryTreeNode("E");
var d = new BinaryTreeNode("D");
var c = new BinaryTreeNode("C", d, e);
var b = new BinaryTreeNode("B", c, f);
var a = new BinaryTreeNode("A", b, i);

console.log(isBalanced(a)); // false (f, i, and j have unbalanced subtrees)
