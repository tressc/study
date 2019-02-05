// count the longest subsequence of nums increasing by k in a list


// ex; arrSeq([3, 1, 2, 5, 6, 7], 1 ) => 3
// ex; arrSeq([3, 1, 2, 5, 6, 7], 2 ) => 0

const arrSeq = (arr, k) => {
  let longest = 0;
  let current = 1; // min sequence size is 2

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === k) {
      current++;
      if (current > longest) longest = current;
    } else {
      current = 1;
    }
  }
  console.log(longest);
  return longest;
};

// arrSeq([3, 1, 2, 5, 6, 7], 1 );
// arrSeq([3, 1, 2, 5, 6, 7], 2 );


// identify the longest subsequence of nums increasing by k in a bin tree

const treeSeq = (root, k) => {

  const treeSeqHelper = (node) => {
    if (!node) return [null, 1];

    const left = treeSeqHelper(node.left);
    const right = treeSeqHelper(node.right);

    if (left[0] && left[0] - node.val === k) {
      left[1]++;
    }

    if (right[0] && right[0] - node.val === k) {
      right[1]++;
    }

    return [node.val, Math.max(left[1], right[1])];
  };

  return treeSeqHelper(root)[1] > 1 ? treeSeqHelper(root)[1] : 0;
};




// testing

function BinaryTreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const a = new BinaryTreeNode(1);
const b = new BinaryTreeNode(2);
const c = new BinaryTreeNode(8);
const d = new BinaryTreeNode(9);
const e = new BinaryTreeNode(10);
const f = new BinaryTreeNode(5);
const g = new BinaryTreeNode(7);
const h = new BinaryTreeNode(1);

a.left = b;
a.right = c;
c.left = d;
c.right = f;
f.right = new BinaryTreeNode(7);
d.right = e;
b.left = g;
b.right = h;

console.log(treeSeq(a, 1)); // 3
console.log(treeSeq(a, 2)); // 2












//
