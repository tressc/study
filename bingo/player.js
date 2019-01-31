var Board = require('./board');

// players should each have a name and unique board, which is updated
// when numbers are "called"

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Board().board;
  }

  mark(num) {
    for (var i = 0; i < this.board.length; i++) {
      var row = this.board[i];

      for (var j = 0; j < row.length; j++) {
        var space = row[j];

        if (space === num) {
          row[j] = "**";
        }
      }
    }
  }
}

var a = new Player('colin');
console.log(a);
console.log(a.board);
