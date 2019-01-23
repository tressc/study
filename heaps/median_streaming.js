// compute the current median for an ongoing sequence of numbers
// you cannot back up and read earlier numbers

// example input: 1, 0, 3, 5, 2, 0, 1
// output: 1, 0.5, 1, 2, 2, 1.5, 1

// keep two distinct heaps
// a max heap for the lower side of the collection
// a min heap for the upper side
// keep them balanced in size
// if one is bigger, its respective max/min val is the median
// if they are equal in length, average the max & min

// seems like a good case for higher order fn

function medianStreamingHO() {
  const smallVals = new Heap; // max heap
  const bigVals = new Heap(true); //min heap

  function medianStreaming(num) {
    if (smallVals.length() && num <= smallVals.max()) {
      smallVals.insert(num);
    } else {
      bigVals.insert(num);
    }

    if (smallVals.length() - bigVals.length() > 1) {
      bigVals.insert(smallVals.remove().val);
    } else if (bigVals.length() - smallVals.length() > 1) {
      smallVals.insert(bigVals.remove().val);
    }

    // console.log(smallVals.heap.map(node => node.val));
    // console.log(bigVals.heap.map(node => node.val));
    // console.log("*************");

    if (smallVals.length() === bigVals.length()) {
      return (smallVals.max().val + bigVals.minimum().val) / 2;
    } else {
      return (
        smallVals.length() > bigVals.length() ? smallVals.max().val : bigVals.minimum().val
      );
    }
    // return median;
  }

  return medianStreaming;
}






class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority; // sort by this, not val
  }
}

class Heap {
  constructor(min = false) {
    this.heap = [];
    this.min = min;
  }

  max() {
    if (!this.min) return this.heap[0];
  }

  length() {
    return this.heap.length;
  }

  minimum() {
    if (this.min) return this.heap[0];
  }

  // push to end of array
  // continue swapping with parent while greater than parent
  // bubble up
  insert(value, priority) {
    if (!priority) priority = value;
    var node = new Node(value, priority);

    this.heap.push(node);

    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor((currentNodeIdx - 1) / 2);

    while (
      this.heap[currentNodeParentIdx] &&
      (!this.min ? priority > this.heap[currentNodeParentIdx].priority :
      priority < this.heap[currentNodeParentIdx].priority)
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
      !this.min ? this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left
      : this.heap[right] && this.heap[right].priority <= this.heap[left].priority ? right : left
    );
    // right if heap[right].priority >= heap[left].priority, else left
    // index of max(left.priority, right.priority)

    while (
      this.heap[currentChildIdx] && (!this.min ?
      (this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority)
      : this.heap[currentIdx].priority >= this.heap[currentChildIdx].priority)
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
        !this.min ? this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left
        : (this.heap[right] && this.heap[right].priority <= this.heap[left].priority ? right : left)
      );
    }

    return removed;
  }
}


// example input: 1, 0, 3, 5, 2, 0, 1
// output: 1, 0.5, 1, 2, 2, 1.5, 1
var a = medianStreamingHO();

console.log(a(1));
console.log(a(0));
console.log(a(3));
console.log(a(5));
console.log(a(2));
console.log(a(0));
console.log(a(1));
