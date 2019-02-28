// graphs can be represented as an adjacency list or matrix

// DFS works well for cycle detection and searching

// BFS, Dijkstra, a*, work better for optimization problems

// BFS can provide information such as distance from the initial source


// return a path from the entrance to the exit of a maze, if such a path
// exists. don't worry about if it's the shortest path or not.
// DFS is best for this

// steps:
// 1. check if current node is within maze boundaries and not a wall
// 2. if it checks out, append it to the path, and change it to a wall
// 3. return true if current node is "end"
// 4. return true if any of the four reachable nodes are "end" (DFS)
// 5. else delete node from path and return false

// ex coordinate:
// {
//   x: 2,
//   y: 0,
// }

// example grid:
// [
//   ["WHITE", "BLACK", "WHITE"],
//   ["WHITE", "BLACK", "WHITE"],
//   ["WHITE", "WHITE", "WHITE"],
// ]

function maze(start, end, grid) {
  const path = [];

  function mazeHelper(current) {
    const inBoundsY = current.y >= 0 && current.y < grid.length;
    let inBoundsX;
    if (inBoundsY) {
      inBoundsX = current.x >= 0 && current.x < grid[current.y].length;
    }
    let isWall;
    if (inBoundsX) {
      isWall = grid[current.y][current.x] === "BLACK";
    }

    if (!inBoundsY || !inBoundsX || isWall) return false;

    path.push(current); // add current node to path
    grid[current.y][current.x] = "BLACK";
    // change current node to a wall to prevent repeats

    if (current.x === end.x && current.y === end.y) return true;

    // return true if current node is the same as end;

    const west = {x: current.x - 1, y: current.y};
    const north = {x: current.x, y: current.y - 1};
    const east = {x: current.x + 1, y: current.y};
    const south = {x: current.x, y: current.y + 1};

    if ([west, north, east, south].some(mazeHelper)) {
      return true;
    }

    path.pop();
    return false;
  }

  mazeHelper(start);
  return path;
}

const grid = [
  ["WHITE", "BLACK", "WHITE"],
  ["WHITE", "BLACK", "WHITE"],
  ["WHITE", "WHITE", "WHITE"],
];
const start = {y: 2, x: 0};
const end = {y: 0, x: 2};

console.log(maze(start, end, grid)); //=> returns the path
// [
//   {x:0, y: 2},
//   {x:1, y: 2},
//   {x:2, y: 2},
//   {x:2, y: 1},
//   {x:2, y: 0},
// ]
