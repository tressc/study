// return a 2d arr where each subarr contains all nodes at one level
// in a binary tree (this is essentiall BFS?)

function binaryTreeDepthOrder(root) {
  var depths = [];
  var currentDepth = [root];

  while (currentDepth.length) {
    depths.push(currentDepth.map(function(node) {
      return node.val; // return arr of values instead of nodes
    }));

    currentDepth = generateNextDepth(currentDepth);
  }

  return depths;
}

function generateNextDepth(currentDepth) { // list comprehension would be nice!
  var nextDepth = [];

  for (var i = 0; i < currentDepth.length; i++) {
    var node = currentDepth[i];
    if (node.left) {
      nextDepth.push(node.left);
    }
    if (node.right) {
      nextDepth.push(node.right);
    }
  }

  return nextDepth;
}

function BinaryTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var a = new BinaryTreeNode(9);
var b = new BinaryTreeNode(8);
var c = new BinaryTreeNode(7, null, a);
var d = new BinaryTreeNode(6, b, null);
var e = new BinaryTreeNode(5, c, null);
var f = new BinaryTreeNode(4, null, null);
var g = new BinaryTreeNode(3, null, d);
var h = new BinaryTreeNode(2, f, e);
var i = new BinaryTreeNode(1, h, g);

console.log(binaryTreeDepthOrder(i));
// [ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ], [ 9 ] ]
