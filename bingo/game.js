// create a new game given a list of players
// continue calling new numbers until one player wins
// a player has won when a row, column, or diagonal is filled

// every row, column, and diagonal should be unique among players
// note: this does not prevent ties!

// what is the max number of players n we can support with unique boards
// of size k * k, and row-sample of size n ???
// n choose k --> n!/k!(n - k)!

var Board = require('./board2');
var Player = require('./player');
var getCombos = require('./combos');

class Game {
  constructor(names) {
    const boards = Game.genBoards(names.length);
    this.players = names.map((name, i) => new Player(name, boards[i]));
  }

  static genBoards(n) {
    const rows = Game.genRows();
    const boards = [];
    const getBoard = row => row[i];
    // only works with var i && hoisting
    // to use let i in for loop, define this function inside loop

    for (var i = 0; i < n; i++) {
      let board = [];
      boards.push(rows.map(getBoard));
    }

    return boards.map(board => new Board(board));
  }

  static genRows() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rowOptions = [];
    const addTen = num => num + 10 * i;
    // only works with var i && hoisting
    // to use let i in for loop, define this function inside loop

    for (var i = 0; i < 3; i++) {
      rowOptions.push(getCombos(nums.map(addTen), 3));
    }
    return rowOptions;
  }
}

var names = "abcd".split('');
var a = new Game(names);
console.log(a.players[0].board);
