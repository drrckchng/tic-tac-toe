// Module for game board
const gameBoard = (() => {
  let player1;
  let player2;
  let playerMarks = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  // check mark of player 1
  const checkMark = () => {
    // if playerMarks contains anything other than empty string
    // this means new game, find player 1 mark
    //
    // else, game is in progress, find who last put in mark
    // and get the opposite mark
  }
  const addMark = (event) => {
    // const mark = checkMark()
    const index = event.target.getAttribute('data-index');
    playerMarks[index] = 'x'; // Change later to equal const mark
  }
  const squares = () => {
    const arr = document.querySelectorAll(".game-square");
    return arr;
  }
  return { player1, player2, playerMarks, addMark, squares };
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

