
// players should each have a name and unique board, which is updated
// when numbers are "called"

class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
  }

  mark(num) {
    this.board.mark(num);
  }
}

module.exports = Player;
