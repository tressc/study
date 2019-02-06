// detect presence of cycle in a directed graph

function detectCycle(start) {
  const visited = {};

  function detectCycleHelper(node) {
    if (visited[node.val]) return true;

    visited[node.val] = true;

    if (node.neighbors.some(detectCycleHelper)) {
      return true;
    }

    return false;
  }

  return detectCycleHelper(start);
}

class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c", [a, b]);
var d = new Node("d", [c]);
// b.neighbors.push(d);

console.log(detectCycle(d));
