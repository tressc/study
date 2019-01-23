// heaps are complete binary trees
// every level, except possibly the last is completely filled, with
// all nodes as far left as possible

// in a max-heap, all node values are at least as great as any of their
// children

// can be implemented as an array.
// the children of the node at index i are at 2i + 1 && 2i + 2

// supports 0(log n) insertions and O(1) lookup for the max element
// O(log n) deletion for the max element

// searching for arbitrary elements is O(n)

// sometimes called a "priority queue", as it behaves like a queue,
// except that elements have "priority" instead of "order"

// min heap is essentially the same

// use a heap when ALL you care about is the largest or smallest elements
// when you do NOT need to support fast lookup or delete for arbitrary elements

// heaps are great for computing the k-largest or k-smallest elements
// for k-largest, use a min heap -- for k-smallest use a max heap


// get the height of a heap

// var height = Math.log(heap.length) / Math.log(2);
// return Math.floor(height);


class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority; // sort by this, not val
  }
}

class Heap {
  constructor() {
    this.heap = [];
  }

  max() {
    return this.heap[0];
  }

  length() {
    return this.heap.length;
  }

  // push to end of array
  // continue swapping with parent while greater than parent
  // bubble up
  insert(value, priority) {
    var node = new Node(value, priority);

    this.heap.push(node);

    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor((currentNodeIdx - 1) / 2);

    while (
      this.heap[currentNodeParentIdx] &&
      priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx]; // swap
      this.heap[currentNodeParentIdx] = node;
      this.heap[currentNodeIdx] = parent;

      currentNodeIdx = currentNodeParentIdx; // update pointers
      currentNodeParentIdx = Math.floor((currentNodeIdx - 1) / 2);
    }
  }


  // replace first el with last
  // swap parent with max child if max child > parent
  // sink down
  remove() {
    if (this.heap.length < 2) {
      return this.heap.pop(); //easy
    }

    const removed = this.heap[0]; // save to return later
    this.heap[0] = this.heap.pop(); // replace with last el

    let currentIdx = 0;
    let [left, right] = [currentIdx * 2 + 1, currentIdx * 2 + 2];
    let currentChildIdx = (
      this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left
    );
    // right if heap[right].priority >= heap[left].priority, else left
    // index of max(left.priority, right.priority)

    while (
      this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority
    ) {
      let currentNode = this.heap[currentIdx];
      let currentChildNode = this.heap[currentChildIdx];

      // swap parent & max child

      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;


      // update pointers
      currentIdx = currentChildIdx;
      [left, right] = [currentIdx * 2 + 1, currentIdx * 2 + 2];
      currentChildIdx = (
        this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left
      );
    }

    return removed;
  }
}
