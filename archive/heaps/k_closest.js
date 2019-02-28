// Given an array of vectors, return the k closest points to origin;


function kClosest(origin, points, k) {
  const maxHeap = new Heap;

  for (var i = 0; i < points.length; i++) {
    let vector = points[i];
    let distance = calcDistance(origin, vector);


    if (maxHeap.length() < k) {
      maxHeap.insert(vector, distance); // store distance as priority
    } else if (distance < maxHeap.max().priority) {
      maxHeap.remove();
      maxHeap.insert(vector, distance);
    }
  }

  return maxHeap.heap.map(node => node.val);
}

function calcDistance(pointA, pointB) { // doesn't really need to be helper
  const a = Math.abs(pointA[0] - pointB[0]);
  const b = Math.abs(pointA[1] - pointB[1]);

  return Math.sqrt(a * a + b * b); // pythagorean
}

// below is just the heap class stuff


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


const points = [
  [2,5],
  [3,2],
  [4,6],
  [5,4],
  [6,1],
  [7,3],
  [7,6],
  [7,8],
  [9,2],
  [10,5],
];

console.log(kClosest([6,5], points, 4)); //=> [[4,6], [7,3], [5,4], [7,6]]
