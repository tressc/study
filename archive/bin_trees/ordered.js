// IN ORDER:
// 1: traverse the left subtree
// 2: visit the root
// 3: traverse the right subtree


// PRE ORDER:
// 1: visit the root
// 2: traverse the left subtree
// 3: traverse the right subtree


// POST ORDER:
// 1: traverse the left subtree
// 2: traverse the right subtree
// 3: visit the root

function BinaryTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function traverse(root) {
  if (root) {
    // console.log("preorder:", root.val);
    traverse(root.left);

    // console.log("inorder:", root.val);
    traverse(root.right);

    console.log("postorder:", root.val);
  }
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

traverse(a);
