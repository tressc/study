// reconstruct the unique binary tree described by the given inorder and
// preorder traversals

// ex:
// inoder: [F, B, A, E, H, C, D, I, G]
// preorder: [H, B, F, E, A, C, D, G, I]

// we know that the root node of the entire tree is H, because it is the
// first node in the preorder traversal. Anything to the left of H in the
// inorder traversal is in the left subtree of H. Similarly, anything to
// the left of B (inorder) is in the left subtree of B.

// everything to the right of B && to the left of H is in B's right subtree

// using this insight, we could recursively generate all the relationships

// finding the root of any subtree in the inorder array takes O(n)
// we can improve on this by building a hash table with values mapped to
// their indices


function reconstruct(inorder, preorder) {
  var positions = {}; // construct hash table
  for (var i = 0; i < inorder.length; i++) {
    var node = inorder[i];
    positions[node] = i;
  }

  function reconstructHelper(preStart, preEnd, inStart, inEnd) { // indices
    if (preEnd <= preStart || inEnd <= inStart) return null;

    var rootInorderIdx = positions[preorder[preStart]];
    var leftSubtreeSize = rootInorderIdx - inStart;

    
  }

  return reconstructHelper(0, preorder.length, 0, inorder.length);
}
