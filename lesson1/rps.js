let readline = require("readline-sync");

const MOVES = {rock: 0, paper: 1, scissor: 2};
const MOVES_NAMES = ['rock', 'paper', 'scissor'];
const WIN_RULES = [MOVES.scissor, MOVES.rock, MOVES.paper];
const PLAYER_TYPES = {human: 0, computer: 1};

let findWinner = function(player1, player2) {
  if (WIN_RULES[player1.move] === player2.move) return player1;
  if (WIN_RULES[player2.move] === player1.move) return player2;
  return null; //tie
};


function createPlayerParent(name) {
  return {
    name: name,
    move: null,

    logMove() {
      console.log(`${this.name} played ${MOVES_NAMES[this.move].toUpperCase()}`);
    }
  };
}

function createPlayer(type, name) {
  let player = createPlayerParent(name);

  let computerChoose = function() {
    let randomIndex = Math.floor(Math.random() * Object.keys(MOVES).length);
    this.move = randomIndex;
  };

  let humanChoose = function() {
    while (true) {
      let choice = readline.question('Please choose rock, paper, or scissor: ');
      if (Object.keys(MOVES).includes(choice)) {
        this.move = MOVES[choice];
        break;
      }
      console.log('Sorry, invalid choice.');
    }
  };

  player.makeMove = type === PLAYER_TYPES.human ? humanChoose : computerChoose;

  return player;
}

const RPSGame = {
  human: createPlayer(PLAYER_TYPES.human, "SK"),
  computer: createPlayer(PLAYER_TYPES.computer, "javascript"),

  displayWelcomeMessage() {
    console.log(" ~~~ Let's play Rock Paper Scissor ~~~");
  },

  displayWinner() {
    this.human.logMove();
    this.computer.logMove();

    let winner = findWinner(this.human, this.computer);
    if (winner === null) {
      console.log("\n It's a tie! \n" );
    } else {
      console.log(`\n ${winner.name} wins!! \n`);
    }
  },

  displayGoodbyeMessage() {
    console.log("--- Bye bye ---");
  },

  playAgain() {
    let answer = readline.question('Would you like to play again? (y/n) ');
    console.clear();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.human.makeMove();
      this.computer.makeMove();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();