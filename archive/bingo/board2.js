var combos = require('./combos');

class Board {
  constructor(board) {
    this.board = board;
    this.map = this.genMap();
    this.lines = new Array(8).fill(0);
    // lines represent winning avenues on the board
  }


  // hasWon() { // one pass "magic square" checker
  //   var lines = new Array(8).fill(0);
  //   for (var i = 0; i < this.board.length; i++) {
  //     var row = this.board[i];
  //     for (var j = 0; j < row.length; j++) {
  //       var pos = row[j];
  //
  //       if (pos === "**") {
  //         lines[j]++;
  //         lines[4 + i]++;
  //         if (i === j) lines[7]++;
  //       }
  //     }
  //   }
  //
  //   return (lines.some(line => line === 3));
  // }

  // instead of iterating, we can update the relevant lines after each
  // move and just check if any of those lines is winning, thus
  // limiting our search space and doing max 4 checks

  hasWon(row, col) {
    this.lines[col]++;
    this.lines[row + 4]++;
    if (row === col) this.lines[7]++;
    if (row + col === 2) this.lines[3]++;

    return (
      this.lines[col] === 3 ||
      this.lines[row + 4] === 3 ||
      this.lines[7] === 3 ||
      this.lines[3] === 3
    );
  }

  genMap() { // any advantage to doing this as and obj vs array???
    const spaces = {};
    for (var i = 0; i < this.board.length; i++) {
      var row = this.board[i];

      for (var j = 0; j < row.length; j++) {
        var space = row[j];

        spaces[space] = [i, j];
      }
    }
    return spaces;
  }

  mark(num) {
    const vector = this.map[num];
    if (vector) {
      var [row, col] = vector;
      this.board[row][col] = "**";
      this.hasWon(row, col);
    }
  }
}

module.exports = Board;
