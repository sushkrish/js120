let readline = require("readline-sync");

function Square(marker = Square.UNUSED_SQUARE) {
  this.marker = marker;
}

Square.UNUSED_SQUARE = " ";
Square.MARKERS = Object.freeze(["X", "O"]);
Square.isEmpty = function(square) {
  return square.marker === Square.UNUSED_SQUARE;
};

Square.prototype.toString = function() {
  return this.marker;
};

Square.prototype.setMarker = function(newMarker) {
  this.marker = newMarker;
};


function Board() {
  this.squares = {};
  for (let counter = 1; counter <= 9; ++counter) {
    this.squares[String(counter)] = new Square();
  }
}

Board.prototype.markSquareAt = function (choice, player) {
  this.squares[choice].setMarker(player.marker);
};

Board.prototype.display = function() {
  console.log("");
  console.log("     |     |");
  console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
  console.log("     |     |");
  console.log("");
};

Board.prototype.getEmptySquares = function() {
  return Object.entries(this.squares)
    .filter(pair => Square.isEmpty(pair[1]))
    .map(pair => Number(pair[0]));
};

Board.prototype.isFull = function() {
  return (this.getEmptySquares().length === 0);
};

Board.prototype.getMarkedSquares = function(player) {
  return Object.keys(this.squares)
    .filter(key => (this.squares[key].marker === player.marker));
};

function Player(marker) {
  this.marker = marker;
}

function Human(marker) {
  Player.call(this, marker);
}
Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;
Human.prototype.play = function(board) {
  let choice;

  while (true) {
    let emptySquares = board.getEmptySquares();

    choice = readline.question(`Choose a square from [${emptySquares}] :\t`);
    let integerValue = parseInt(choice, 10);
    if (emptySquares.includes(integerValue)) break;

    console.log(`${integerValue} is not a valid choice. \n`);
  }

  board.markSquareAt(choice, this);
};

function Computer(marker) {
  Player.call(this, marker);
}
Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;
Computer.prototype.play = function(board) {
  let emptySquares = board.getEmptySquares();

  let randomIndex = Math.floor((emptySquares.length * Math.random()));
  let choice = emptySquares[randomIndex];
  console.log("Computer's choice is " + choice);

  board.markSquareAt(choice, this);
};

function TTTGame() {
  this.board = new Board();
  this.human = new Human(Square.MARKERS[0]);
  this.computer = new Computer(Square.MARKERS[1]);
  this.winner = undefined;
}

TTTGame.POSSIBLE_WINNING_ROWS = [
  [ "1", "2", "3" ],            // top row of board
  [ "4", "5", "6" ],            // center row of board
  [ "7", "8", "9" ],            // bottom row of board
  [ "1", "4", "7" ],            // left column of board
  [ "2", "5", "8" ],            // middle column of board
  [ "3", "6", "9" ],            // right column of board
  [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
  [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
];

TTTGame.prototype.play = function() {
  this.displayWelcomeMessage();

  while (true) {
    this.board.display();

    this.human.play(this.board);
    if (this.gameOver()) break;

    this.computer.play(this.board);
    if (this.gameOver()) break;

  }

  this.board.display();
  this.displayResults();
  this.displayGoodbyeMessage();
};

let tttMethods = {
  displayWelcomeMessage() {
    console.log("==> Welcome to Tic Tac Toe!");
  },

  displayGoodbyeMessage() {
    console.log("==> Thanks for playing Tic Tac Toe! Goodbye!");
  },

  displayResults() {
    if (this.winner === undefined) {
      console.log("==> It's a TIE! \n");
    } else if (this.winner === this.computer) {
      console.log("==> Computer won! \n");
    } else {
      console.log("==> You won!!! \n");
    }
  },

  isWinner(player) {
    let playerSquares = this.board.getMarkedSquares(player);

    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return row.every(square => playerSquares.includes(square));
    });
  },

  setWinner() {
    if (this.isWinner(this.human)) {
      this.winner = this.human;
    }
    if (this.isWinner(this.computer)) {
      this.winner = this.computer;
    }
  },

  gameOver() {
    this.setWinner();
    return this.board.isFull() || (this.winner !== undefined);
  },
};

TTTGame.prototype = Object.assign(TTTGame.prototype, tttMethods);
let game = new TTTGame();
game.play();