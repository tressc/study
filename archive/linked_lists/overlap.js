// two lists can be said to overlap if they share one or more nodes

// strategies:
// store all nodes from one list in hash table, then iterate through
// the other list checking for matches (On space On time)

// nested loop (On^2 time and O1 space) bad!

// last node will always be the same, so just check that (On time and O1 space)

// to find the first overlapping node, calculate the length of each, then
// jump to the node in the longer list that corresponds to the difference
// between the two lengths (eg l1: 5, l2: 3 -> jump to l1[second idx])
// then iterate through both in tandem and return first match

function calcLength(head) {
  var count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}

function firstOverlap(head1, head2) {
  var length1 = calcLength(head1);
  var length2 = calcLength(head2);

  if (length1 > length2) {
    [head1, head2] = [head2, head1]; // ensure h2 is longer list
  }

  for (var i = 0; i < Math.abs(length2 - length1); i++) {
    head2 = head2.next;
  }

  while (head1 && head2 && (head1 !== head2)) {
    head1 = head1.next;
    head2 = head2.next;
  }

  return head1;
}
