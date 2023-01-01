// Module for game board
const gameBoard = (() => {
  let player1;
  let player2;
  let marks = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  let _playerMarks = []; // Tracker for player moves
  // Check next valid mark 
  const _checkMark = () => {
    if(_playerMarks.length === 0) {
      return player1.marker;
    } else if(_playerMarks[-1] === 'x') { 
    } else if(_playerMarks[-1] === 'o') {
    }
  }
  const addMark = (event) => {
    const mark = _checkMark()
    const index = event.target.getAttribute('data-index');
    marks[index] = mark; // Change later to equal const mark
    _playerMarks.push(mark);
  }
  const resetGame = () => {
    // reset game
  }
  const squares = () => {
    const arr = document.querySelectorAll(".game-square");
    return arr;
  }
  return { player1, player2, marks, addMark, squares };
})();

// Module for display controller
const display = (() => {
})();

// Player factory function
const Player = (name, marker) => {
  return { name, marker };
}

// Grab submit button and add click event listener
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", formInput);

// Prevent default action of submit form
// And runs form validity checker
function formInput(event) {
  const name1 = document.getElementById("player-one-name").value;
  const name2 = document.getElementById("player-two-name").value;
  const xMarker = document.getElementById("x-marker").checked;
  const oMarker = document.getElementById("o-marker").checked;
  if(checkForm(name1, name2, xMarker, oMarker)) {
    // Check if player 1 mark is x or o
    if(xMarker) {
      gameBoard.player1 = Player(name1, "x");
      gameBoard.player2 = Player(name2, "o");
    } else {
      gameBoard.player1 = Player(name1, "o");
      gameBoard.player2 = Player(name2, "x");
    }
  }
  event.preventDefault(); // prevent default action
}

// Check if form is valid
function checkForm(name1, name2, xMarker, oMarker) {
  if(name1 !== ""
    && name2 !== ""
    && ((xMarker === true && oMarker === false) || (xMarker === false && oMarker === true))
  ) {
    return true;
  } else {
    return false;
  }
}

// Grab game tile divs and add click event listener
gameBoard.squares().forEach(div => {
  div.addEventListener('click', gameBoard.addMark);
});

