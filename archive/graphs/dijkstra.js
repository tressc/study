const dijkstra = (graph, start, end) => {
  const costs = {[start]: 0};
  const parents = {[start]: null};
  const processed = [];
  let node = lowestCost(costs, processed);

  while (node) {
    let cost = costs[node];
    let children = graph[node];

    if (Object.keys(children).length) {

      for (let child in children) {
        let newCost = cost + children[child];

        if (!costs[child] || costs[child] > newCost) {
          costs[child] = newCost;
          parents[child] = node;
        }
      }
    }
    processed.push(node);
    node = lowestCost(costs, processed);
  }

  const optimalPath = [end];
  let parent = parents[end];

  while (parent) {
    optimalPath.unshift(parent);
    parent = parents[parent];
  }
  return optimalPath;
};

const lowestCost = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

const graph = {
  a: {b: 5, c: 2},
  b: {d: 4, e: 2, z:1},
  c: {b: 8, e: 7},
  d: {e: 6, f: 3},
  e: {f: 1},
  f: {},
  z: {}
};

// const costs = {
//   a: 4,
//   b: 7,
//   c: 1
// };
//
// const processed = ["c"];

// console.log(lowestCost(costs, processed));

console.log(dijkstra(graph, "a", "f"));
