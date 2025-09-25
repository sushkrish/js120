let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static MARKERS = Object.freeze(["X", "O"]);

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(newMarker) {
    this.marker = newMarker;
  }

  static isEmpty(square) {
    return square.marker === Square.UNUSED_SQUARE;
  }
}

class Board {
  constructor() {
    this.squares = {};

    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  markSquareAt(choice, player) {
    this.squares[choice].setMarker(player.marker);
  }

  display() {
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
  }

  getEmptySquares() {
    return Object.entries(this.squares)
      .filter(pair => Square.isEmpty(pair[1]))
      .map(pair => Number(pair[0]));
  }

  isFull() {
    return (this.getEmptySquares().length === 0);
  }

  getMarkedSquares(player) {
    return Object.keys(this.squares)
      .filter(key => (this.squares[key].marker === player.marker));
  }

}

class Player {
  constructor(marker) {
    this.marker = marker;
  }
}

class Human extends Player {
  constructor(marker) {
    super(marker);
  }

  play(board) {
    let choice;

    while (true) {
      let emptySquares = board.getEmptySquares();

      choice = readline.question(`Choose a square from [${emptySquares}] :\t`);
      let integerValue = parseInt(choice, 10);
      if (emptySquares.includes(integerValue)) break;

      console.log(`${integerValue} is not a valid choice. \n`);
    }

    board.markSquareAt(choice, this);
  }
}

class Computer extends Player {
  constructor(marker) {
    super(marker);
  }

  play(board) {
    let emptySquares = board.getEmptySquares();

    let randomIndex = Math.floor((emptySquares.length * Math.random()));
    let choice = emptySquares[randomIndex];
    console.log("Computer's choice is " + choice);

    board.markSquareAt(choice, this);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  constructor() {
    //STUB
    // Need a board and two players
    this.board = new Board();
    this.human = new Human(Square.MARKERS[0]);
    this.computer = new Computer(Square.MARKERS[1]);
    this.winner = undefined;
  }

  play() {
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
  }

  displayWelcomeMessage() {
    console.log("==> Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("==> Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.winner === undefined) {
      console.log("==> It's a TIE! \n");
    } else if (this.winner === this.computer) {
      console.log("==> Computer won! \n");
    } else {
      console.log("==> You won!!! \n");
    }
  }

  isWinner(player) {
    let playerSquares = this.board.getMarkedSquares(player);

    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return row.every(square => playerSquares.includes(square));
    });
  }

  setWinner() {
    if (this.isWinner(this.human)) {
      this.winner = this.human;
    }
    if (this.isWinner(this.computer)) {
      this.winner = this.computer;
    }
  }

  gameOver() {
    this.setWinner();
    return this.board.isFull() || (this.winner !== undefined);
  }
}

let game = new TTTGame();
game.play();