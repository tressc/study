// fill a 5 * 5 board with unique random nums between 1 - 75
// the middle "square" should be "free"

class Board {
  constructor() {
    this.board = Board.genBoard();
  }

  static genBoard() {
    const nums = new Array(75).fill(0); // to check for dups
    const board = [];

    for (let i = 0; i < 5; i++) {
      board.push([]);
      const row = board[i];
      while (row.length < 5) {
        if (i === 2 && row.length === 2) {
          row.push("**"); // middle space is "free"
        }

        let num = Math.floor(Math.random() * 75) + 1;
        // if this number has been used, generate a new one
        while (nums[num]) {
          num = Math.floor(Math.random() * 75) + 1;
        }
        nums[num] = 1; // mark this number as used
        row.push(num);
      }
    }

    // var unique = nums.filter(el => {return el === 1;}).length === 24;
    // console.log(unique);

    return board;
  }

}

var a = new Board();
console.log(a.board);


// exports
module.exports = Board;
