// get the height of a given binary tree

function height(root) {
  if (root) {
    var height1 = height(root.left);
    var height2 = height(root.right);
  } else {
    return 0;
  }

  return Math.max(height1, height2) + 1;
}

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

console.log(balanced(a));
